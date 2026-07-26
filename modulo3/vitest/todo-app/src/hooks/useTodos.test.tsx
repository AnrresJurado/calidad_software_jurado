// src/hooks/useTodos.test.tsx
import { renderHook } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import type { Todo } from '../types'
import { useTodos } from './useTodos'

describe('useTodos', () => {
  it('arranca con lista vacía y filtro "all"', () => {
    const { result } = renderHook(() => useTodos())
    //      ^^^^^^ objeto con .current (snapshot del retorno del hook)

    // result.current contiene exactamente lo que el hook retorna
    expect(result.current.todos).toEqual([])
    expect(result.current.filter).toBe('all')
  })

  it('respeta el estado inicial provisto', () => {
    const inicial: Todo[] = [{ id: 'x', text: 'Pre-cargada', completed: false, titulo:'' }]
    const { result } = renderHook(() => useTodos(inicial))

    expect(result.current.todos).toHaveLength(1)
    expect(result.current.todos[0].text).toBe('Pre-cargada')
  })
})