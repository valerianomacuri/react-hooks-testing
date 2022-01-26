import React from "react";
import { cleanup, render } from "@testing-library/react";
import { todoReducer } from "../../components/08-useReducer/todoReducer";

const demoTodos = [
    {
        id: 1,
        desc: 'Aprender React',
        done: false
    }
]

describe('todoReducer', () => {
    afterEach(cleanup)
    test('debe retornar el estado inicial', () => {
        const state = todoReducer(demoTodos, {})
        expect( state ).toEqual( demoTodos )
    })

    test('debe agregar un nuevo todo', () => {
        const state = todoReducer([], { type: 'add', payload: demoTodos[0] })

        expect( state ).toEqual( demoTodos )
    })

    test('debe eliminar un todo', () => {
        const state = todoReducer(demoTodos, { type: 'delete', payload: demoTodos[0].id })

        expect( state.length ).toBe( 0 )
    })

    test('debe toggle un todo', () => {
        const state = todoReducer(demoTodos, { type: 'toggle', payload: demoTodos[0].id })

        expect( state[0].done ).toBe( true )
    })
    
    
});
