// src/api/auth.api.test.ts
import { http, HttpResponse } from 'msw'
import { server } from '@/test/mocks/server'
import { login } from './auth.api'

describe('login()', () => {
  it('should return the access token on valid credentials', async () => {
    // Interceptamos cualquier petición que termine en /auth/login con credenciales válidas
    server.use(
      http.post('*/auth/login', async ({ request }) => {
        const body = (await request.json()) as any
        if (body.username === 'higuera' && body.password === 'secret') {
          return HttpResponse.json({
            success: true,
            message: 'OK',
            data: { access_token: 'fake-jwt-token' },
          })
        }
        return new HttpResponse(null, { status: 400 })
      })
    )

    const token = await login({ username: 'higuera', password: 'secret' })
    expect(token).toBe('fake-jwt-token')
  })

  it('should reject when the credentials are invalid', async () => {
    // Interceptamos y devolvemos 401 si la contraseña es incorrecta
    server.use(
      http.post('*/auth/login', () => {
        return HttpResponse.json(
          { success: false, message: 'Unauthorized' },
          { status: 401 }
        )
      })
    )

    await expect(login({ username: 'higuera', password: 'wrong' })).rejects.toMatchObject({
      response: { status: 401 },
    })
  })
})