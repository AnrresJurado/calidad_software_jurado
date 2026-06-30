// src/components/AddTodoForm.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AddTodoForm } from './AddTodoForm';

describe('AddTodoForm · matchers', () => {
  it('debería deshabilitar el botón cuando el input está vacío', () => {
    // Arrange + Act
    render(<AddTodoForm onAdd={() => {}} />);
    // Assert: con input vacío, el botón está deshabilitado
    expect(screen.getByRole('button', { name: 'Añadir' })).toBeDisabled();
  });

  // src/components/AddTodoForm.test.tsx  (añade dentro del describe)
  it('debería empezar con el input vacío', () => {
    render(<AddTodoForm onAdd={() => {}} />);
    // toHaveValue('') confirma que el campo arranca vacío
    expect(screen.getByLabelText('Nueva tarea')).toHaveValue('');
  });

  it('debería exponer el placeholder esperado (toHaveAttribute)', () => {
    render(<AddTodoForm onAdd={() => {}} />);
    // Comprobamos un atributo concreto con su valor
    expect(screen.getByLabelText('Nueva tarea')).toHaveAttribute(
      'placeholder',
      '¿Qué hay que hacer?',
    );
  });

  it('el input debería ser visible', () => {
    render(<AddTodoForm onAdd={() => {}} />);
    expect(screen.getByLabelText('Nueva tarea')).toBeVisible();
  });
});