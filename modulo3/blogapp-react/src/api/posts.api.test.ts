// src/api/posts.api.test.ts
import { http, HttpResponse } from 'msw'
import { server } from '@/test/mocks/server'
import { getPosts } from './posts.api'

describe('getPosts()', () => {
  // Configurar el mock base para este set de pruebas
  beforeEach(() => {
    server.use(
      http.get('*/posts', () => {
        return HttpResponse.json({
          success: true,
          message: 'OK',
          data: {
            items: [{ title: 'Primer post', category: { name: 'Tech' } }],
            meta: { totalItems: 1, totalPages: 1, currentPage: 1 },
          },
        })
      })
    )
  })

  it('should return the paginated items from the API', async () => {
    const result = await getPosts()
    expect(result.items).toHaveLength(1)
    expect(result.items[0]).toMatchObject(
        { title: 'Primer post', 
            category: { name: 'Tech' } })
  })

  it('should expose pagination meta', async () => {
    const result = await getPosts()
    expect(result.meta).toMatchObject({ totalItems: 1, totalPages: 1, currentPage: 1 })
  })
})