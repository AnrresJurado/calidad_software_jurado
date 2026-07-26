// src/components/TodoItem.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TodoItem } from './TodoItem';
import type { Todo } from '../types';

describe('TodoItem', () => {
    it('debería mostrar el texto de la tarea', () => {
    const todo = crearTodo({ text: 'Estudiar Vitest' });
    render(<TodoItem todo={todo} onToggle={() => {}} onDelete={() => {}} />);
    expect(screen.getByText('Estudiar Vitest')).toBeInTheDocument();
    expect(screen.getByText('Tarea comprar pan')).toBeInTheDocument();
  });

  it('debería renderizar un checkbox', () => {
    const todo = crearTodo();
    render(<TodoItem todo={todo} onToggle={() => {}} onDelete={() => {}} />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('debería mostrar un botón de eliminar', () => {
    const todo = crearTodo();
    console.log(todo)
    render(<TodoItem todo={todo} onToggle={() => {}} onDelete={() => {}} />);
    expect(
      screen.getByRole('button', { name: 'Eliminar' }),
    ).toBeInTheDocument();
  });

  it('debería mostrar un botón de eliminar', () => {
    const todo = crearTodo();
    render(<TodoItem todo={todo} onToggle={() => {}} onDelete={() => {}} />);
    expect(
      screen.getByRole('button', { name: 'Eliminar' }),
    ).toBeInTheDocument();
  });   

  
  describe('TodoItem · matchers', () => {
  it('debería marcar el checkbox cuando la tarea está completada', () => {
    // Arrange: tarea completada
    const todo = crearTodo({ completed: true });
    // Act
    render(<TodoItem todo={todo} onToggle={() => {}} onDelete={() => {}} />);
    // Assert: el checkbox debe estar marcado
    expect(screen.getByRole('checkbox')).toBeChecked();
  });
});

    it('NO debería marcar el checkbox cuando la tarea está activa', () => {
    // Arrange: tarea pendiente
    const todo = crearTodo({ completed: false });
    // Act
    render(<TodoItem todo={todo} onToggle={() => {}} onDelete={() => {}} />);
    // Assert: matcher negado con .not
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('debería mostrar el texto exacto de la tarea', () => {
    const todo = crearTodo({ text: 'Estudiar matchers' });
    render(<TodoItem todo={todo} onToggle={() => {}} onDelete={() => {}} />);
    // toHaveTextContent comprueba el texto contenido en el <li>
    expect(screen.getByRole('listitem')).toHaveTextContent('Estudiar matchers');
  });
  
  });

// Helper local: crea una tarea con valores por defecto sobreescribibles.
function crearTodo(overrides: Partial<Todo> = {}): Todo {
  return { id: '1',
    text: 'Comprar pan',
    titulo: 'Tarea comprar pan',
    completed: false, ...overrides };
}