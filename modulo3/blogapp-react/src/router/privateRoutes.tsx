// src/router/privateRoutes.tsx
import { Route } from 'react-router-dom'
import DashboardHomePage from '@/pages/private/DashboardHomePage'
import CategoriesPage from '@/pages/private/CategoriesPage'
import PostFormPage from '@/pages/private/PostFormPage'
import ProfilePage from '@/pages/private/ProfilePage'

export const privateRoutes = [
  <Route key="dashboard" path="/dashboard" element={<DashboardHomePage />} />,
  <Route key="categorias" path="/categorias" element={<CategoriesPage />} />,
  <Route key="post-nuevo" path="/posts/nuevo" element={<PostFormPage />} />,
  <Route key="post-editar" path="/posts/:id/editar" element={<PostFormPage />} />,
  <Route key="perfil" path="/perfil" element={<ProfilePage />} />,
]