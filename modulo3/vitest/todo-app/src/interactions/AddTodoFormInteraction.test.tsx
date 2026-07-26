// src/components/AddTodoForm.test.tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { AddTodoFormInteraction } from './AddTodoFormInteraction'

describe('AddTodoFormInteraction', () => {
  it('llama a onAdd con el texto al enviar el formulario', async () => {
    // Arrange: setup() ANTES de interactuar + spy que registra llamadas
    const user = userEvent.setup()
    const onAdd = vi.fn()
    render(<AddTodoFormInteraction onAdd={onAdd} />)

    // Act: escribimos y hacemos click en el botón
    const input = screen.getByLabelText('Nueva tarea')
    await user.type(input, 'Comprar pan')
    await user.click(screen.getByRole('button', { name: /agregar/i }))

    // Assert: onAdd recibió exactamente el texto escrito, una sola vez
    expect(onAdd).toHaveBeenCalledTimes(1)
    expect(onAdd).toHaveBeenCalledWith('Comprar pan')
  })
})