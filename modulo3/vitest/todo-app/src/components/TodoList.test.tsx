// src/components/TodoList.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TodoList } from './TodoList';
import type { Todo } from '../types';

const tareas: Todo[] = [
  { id: '1', text: 'Comprar pan', completed: false, titulo:'panaderia'},
  { id: '2', text: 'Lavar el coche', completed: true, titulo:'car wash' },
  { id: '3', text: 'Estudiar Vitest', completed: false, titulo:'universidad' },
  { id: '4', text: 'Estudiar Nest', completed: false, titulo:'universidad' },
];

describe('TodoList · queries', () => {
  it('debería renderizar un listitem por cada tarea (getAllByRole)', () => {
    // Arrange
    render(<TodoList todos={tareas} onToggle={() => {}} onDelete={() => {}} />);
    // Act + Assert: tres tareas → tres elementos de lista
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(4);
  });

  it('debería encontrar la lista por su aria-label', () => {
    render(<TodoList todos={tareas} onToggle={() => {}} onDelete={() => {}} />);
    expect(
      screen.getByRole('list', { name: 'Lista de tareas' }),
    ).toBeInTheDocument();
  });
  // src/components/TodoList.test.tsx  (añade dentro del describe)
  it('debería mostrar el estado vacío cuando no hay tareas', () => {
    // Arrange: lista vacía
    render(<TodoList todos={[]} onToggle={() => {}} onDelete={() => {}} />);
    // Assert: aparece el mensaje y NO hay listitems
    expect(screen.getByText('No hay tareas pendientes')).toBeInTheDocument();
    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  });

    it('debería mostrar el texto de una tarea concreta', () => {
    render(<TodoList todos={tareas} onToggle={() => {}} onDelete={() => {}} />);
    expect(screen.getByText('Lavar el coche')).toBeInTheDocument();
  });

  
});