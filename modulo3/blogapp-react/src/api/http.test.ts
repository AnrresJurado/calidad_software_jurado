// src/api/http.test.ts
import { http as mswHttp, HttpResponse } from 'msw'
import { server } from '@/test/mocks/server'
import { http } from './http'
import { useAuthStore } from '@/store/auth.store'

describe('http.ts — interceptores', () => {
  
  describe('interceptor de request', () => {
    it('should attach the Authorization header when there is a token', async () => {
      let receivedAuth: string | null = null

      // Cambiado `${BASE_URL}/ping` por '*/ping'
      server.use(
        mswHttp.get('*/ping', ({ request }) => {
          receivedAuth = request.headers.get('Authorization')
          return new HttpResponse(null, { status: 200 })
        })
      )

      useAuthStore.setState({ token: 'fake-jwt-token', isAuthenticated: true })

      await http.get('/ping')
      expect(receivedAuth).toBe('Bearer fake-jwt-token')
    })

    it('should not attach an Authorization header when there is no token', async () => {
      let receivedAuth: string | null = null

      // Cambiado `${BASE_URL}/ping` por '*/ping'
      server.use(
        mswHttp.get('*/ping', ({ request }) => {
          receivedAuth = request.headers.get('Authorization')
          return new HttpResponse(null, { status: 200 })
        })
      )

      useAuthStore.setState({ token: null, isAuthenticated: false })

      await http.get('/ping')
      expect(receivedAuth).toBeNull()
    })
  })

  describe('interceptor de response', () => {
    it('should log the user out when the API responds with 401', async () => {
      useAuthStore.setState({ token: 'fake-jwt-token', isAuthenticated: true })

      // Cambiado `${BASE_URL}/ping` por '*/ping'
      server.use(
        mswHttp.get('*/ping', () => new HttpResponse(null, { status: 401 }))
      )

      await expect(http.get('/ping')).rejects.toMatchObject({ response: { status: 401 } })
      expect(useAuthStore.getState().isAuthenticated).toBe(false)
      expect(useAuthStore.getState().token).toBeNull()
    })

    it('should not log the user out on other error statuses', async () => {
      useAuthStore.setState({ token: 'fake-jwt-token', isAuthenticated: true })

      // Cambiado `${BASE_URL}/ping` por '*/ping'
      server.use(
        mswHttp.get('*/ping', () => new HttpResponse(null, { status: 500 }))
      )

      await expect(http.get('/ping')).rejects.toMatchObject({ response: { status: 500 } })
      expect(useAuthStore.getState().isAuthenticated).toBe(true)
    })
  })
})