// src/api/users.api.ts
import { http } from './http'
import type { ApiResponse } from '@/types/common.types'
import type { User } from '@/types/user.types'

export async function getUser(id: string) {
  const { data } = await http.get<ApiResponse<User>>(`/users/${id}`)
  return data.data
}

export async function updateUser(id: string, payload: { username?: string; email?: string }) {
  const { data } = await http.put<ApiResponse<User>>(`/users/${id}`, payload)
  return data.data
}

export async function uploadProfileImage(id: string, file: File) {
  const formData = new FormData()
  formData.append('profile', file)
  const { data } = await http.put<ApiResponse<User>>(`/users/${id}/profile`, formData)
  return data.data
}