// src/types.ts
export interface Todo {
  titulo: string;
  id: string;
  text: string;
  completed: boolean;
}

export type Filter = 'all' | 'active' | 'completed';

export interface User {
  id: string;
  name: string;
}