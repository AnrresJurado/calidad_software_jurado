// src/api/categories.api.test.ts
import { http, HttpResponse } from 'msw'
import { server } from '@/test/mocks/server'
import { createCategory } from './categories.api'

describe('createCategory()', () => {
  it('should return the created category', async () => {
    server.use(
      http.post('*/categories', () => {
        return HttpResponse.json({
          success: true,
          message: 'OK',
          data: { id: 'cat-new', name: 'Frontend' },
        })
      })
    )

    const category = await createCategory({ name: 'Frontend' })
    expect(category).toMatchObject({ id: 'cat-new', name: 'Frontend' })
  })

  it('should send the payload as the request body', async () => {
    let receivedBody: unknown
    server.use(
      http.post('*/categories', async ({ request }) => {
        receivedBody = await request.json()
        return HttpResponse.json({ 
          success: true, 
          message: 'OK', 
          data: { id: 'cat-new', name: 'Frontend' } 
        })
      }),
    )

    await createCategory({ name: 'Frontend' })
    expect(receivedBody).toEqual({ name: 'Frontend' })
  })
})