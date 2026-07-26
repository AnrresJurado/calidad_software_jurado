// src/test/mocks/handlers.ts
import { http, HttpResponse } from 'msw';
import type { Todo } from '../../types';

// Datos por defecto que devolverá el endpoint en los tests "felices".
export const todosDeEjemplo: Todo[] = [
  { id: '1', text: 'Aprender Vitest', completed: false, titulo:'' },
  { id: '2', text: 'Configurar MSW', completed: true, titulo:''  },
];

export const handlers = [
  // Intercepta GET /api/todos y responde con JSON.
  http.get('/api/todos', () => {
    return HttpResponse.json(todosDeEjemplo);
  }),
];