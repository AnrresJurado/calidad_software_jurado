// src/components/TodoLoader.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { http, HttpResponse } from 'msw';
import { server } from '../test/mocks/server';
import { TodoLoader } from './TodoLoader';

describe('TodoLoader', () => {
    it('muestra el estado de carga al montarse', () => {
        render(<TodoLoader />);

        // getBy* es síncrono: el mensaje existe en el primer render.
        expect(screen.getByRole('status')).toHaveTextContent('Cargando tareas…');
    });
    it('muestra las tareas cuando la petición tiene éxito', async () => {
        render(<TodoLoader />);

        // findBy* = getBy* + waitFor. Espera a que aparezca el elemento.
        const lista = await screen.findByRole('list', { name: 'Lista de tareas' });

        expect(lista).toBeInTheDocument();
        expect(screen.getByText('Aprender Vitest')).toBeInTheDocument();
        expect(screen.getByText('Configurar MSW')).toBeInTheDocument();
        expect(screen.getByText('Testing')).toBeInTheDocument();
        expect(screen.getByText('Setup')).toBeInTheDocument();
    });



    it('muestra un mensaje de error si la petición falla', async () => {
        // Override puntual: este endpoint responderá 500 solo en este test.
        server.use(
            http.get('/api/todos', () => {
                return new HttpResponse(null, { status: 500 });
            }),
        );

        render(<TodoLoader />);

        // role="alert" aparece cuando setError se ejecuta.
        const alerta = await screen.findByRole('alert');
        expect(alerta).toHaveTextContent('No se pudieron cargar las tareas');
    });



});