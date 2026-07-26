// vite.config.ts
/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',
    css: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: [
        'src/lib/**',
        'src/store/**',
        'src/api/http.ts',
        'src/api/auth.api.ts',
        'src/api/posts.api.ts',
        'src/api/categories.api.ts',
        'src/components/public/PublicFooter.tsx',
        'src/components/public/PublicHeader.tsx',
        'src/components/private/CategoryFormDialog.tsx',
        'src/pages/public/LoginPage.tsx',
        'src/pages/private/CategoriesPage.tsx',
        'src/router/ProtectedRoute.tsx',
      ],
      exclude: ['src/**/*.test.{ts,tsx}'],
      thresholds: {
        lines: 70,
        functions: 70,
        branches: 60,
        statements: 70,
      },
    },
  },
})