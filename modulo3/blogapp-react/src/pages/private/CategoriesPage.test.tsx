// src/pages/private/CategoriesPage.test.tsx
import { http, HttpResponse } from 'msw'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { server } from '@/test/mocks/server'
import CategoriesPage from './CategoriesPage'

it('should list, create, edit and delete a category end to end', async () => {
  let categories = [{ id: 'cat-1', name: 'Tech' }]

  // 1. Reemplazamos ${BASE_URL} por comodines universales '*/categories'
  server.use(
    http.get('*/categories', () =>
      HttpResponse.json({
        success: true,
        message: 'OK',
        data: {
          items: categories,
          meta: { itemCount: categories.length, totalItems: categories.length, itemsPerPage: 50, totalPages: 1, currentPage: 1 },
        },
      }),
    ),
    http.post('*/categories', async ({ request }) => {
      const body = (await request.json()) as { name: string }
      const created = { id: 'cat-2', name: body.name }
      categories = [...categories, created]
      return HttpResponse.json({ success: true, message: 'OK', data: created }, { status: 201 })
    }),
    http.put('*/categories/:id', async ({ params, request }) => {
      const body = (await request.json()) as { name: string }
      categories = categories.map((c) => (c.id === params.id ? { ...c, name: body.name } : c))
      return HttpResponse.json({ success: true, message: 'OK', data: { id: params.id, name: body.name } })
    }),
    http.delete('*/categories/:id', ({ params }) => {
      categories = categories.filter((c) => c.id !== params.id)
      return new HttpResponse(null, { status: 204 })
    }),
  )

  const user = userEvent.setup()
  render(<CategoriesPage />)

  // 1. Listado inicial
  expect(await screen.findByText('Tech')).toBeInTheDocument()

  // 2. Crear
  await user.click(screen.getByRole('button', { name: /nueva categoría/i }))
  await user.type(screen.getByLabelText('Nombre'), 'Frontend')
  await user.click(screen.getByRole('button', { name: /guardar/i }))
  expect(await screen.findByText('Frontend')).toBeInTheDocument()

  // 3. Editar
  const techRow = screen.getByText('Tech').closest('tr')!
  await user.click(within(techRow).getByRole('button', { name: /editar/i }))
  const input = screen.getByLabelText('Nombre')
  await user.clear(input)
  await user.type(input, 'Tecnología')
  await user.click(screen.getByRole('button', { name: /guardar/i }))
  expect(await screen.findByText('Tecnología')).toBeInTheDocument()
  expect(screen.queryByText('Tech')).not.toBeInTheDocument()

  // 4. Borrar
  const frontendRow = screen.getByText('Frontend').closest('tr')!
  await user.click(within(frontendRow).getByRole('button', { name: /borrar/i }))
  await waitFor(() => expect(screen.queryByText('Frontend')).not.toBeInTheDocument())
})