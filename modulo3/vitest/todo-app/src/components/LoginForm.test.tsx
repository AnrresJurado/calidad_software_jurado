// src/components/LoginForm.test.tsx
import { describe, it, expect } from 'vitest';
import { logRoles, render, screen } from '@testing-library/react';
import { LoginForm } from './LoginForm';

describe('LoginForm · queries', () => {
  it('debería encontrar campos por su label (getByLabelText)', () => {
    // Arrange
    render(<LoginForm onLogin={() => {}} />);
    // Assert: la forma preferida para campos de formulario
    expect(screen.getByLabelText('Usuario')).toBeInTheDocument();
    expect(screen.getByLabelText('Contraseña')).toBeInTheDocument();
    // Encuentra un input por su atributo placeholder
    expect(screen.getByPlaceholderText('Tu usuario'));
  });

    it('debería encontrar el botón por rol y nombre (getByRole)', () => {
    render(<LoginForm onLogin={() => {}} />);
    // El nombre accesible de un button es su texto.
    expect(
      screen.getByRole('button', { name: 'Entrar' }),
    ).toBeInTheDocument();
  });

  it('debería encontrar el formulario por su rol con name', () => {
    render(<LoginForm onLogin={() => {}} />);
    // aria-label define el nombre accesible del <form>.
    expect(
      screen.getByRole('form', { name: 'Formulario de acceso' }),
    ).toBeInTheDocument();
  });

  it('inspecciona el DOM y los roles', () => {
  const { container } = render(<LoginForm onLogin={() => {}} />);

  // Imprime TODO el HTML renderizado en consola
  screen.debug();

  // Imprime solo un nodo (más enfocado)
  screen.debug(screen.getByRole('button', { name: 'Entrar' }));

  // Lista todos los roles y sus nombres accesibles
  logRoles(container);

  //TO-DO Buscar por que no imprime el input 
});
});