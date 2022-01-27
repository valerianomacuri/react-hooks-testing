import React from "react";
import { cleanup, fireEvent, prettyDOM, render, act } from "@testing-library/react";
import { TodoApp } from "../../components/08-useReducer/TodoApp";
describe('<TodoApp />', () => {

    afterEach( cleanup )
    Storage.prototype.setItem = jest.fn( () => {} )

    test('debe mostrarse correctamente', () => {
        const { getByText, container } = render( <TodoApp /> )
        expect( getByText(/todoapp/i).textContent ).toBe( "TodoApp ( 0 )" )
        expect( container.querySelector('h1').textContent ).toBe( "TodoApp ( 0 )" )
    })

    test('debe de agregar y borrar un todo', () => {
        const { getByPlaceholderText, getByText, container } = render( <TodoApp /> )
        const form = container.querySelector('form')
        let value = 'Aprender Next'

        fireEvent.change( getByPlaceholderText(/aprender/i), {
            target: {
                id: expect.any(Number),
                name: 'description',
                value,

            }
        } )

        fireEvent.submit( form, {
            preventDefault: () => {}
        } )

        expect( getByText(/aprender next/i) ).toBeInTheDocument()
        expect( container.querySelector('h1').textContent ).toBe( "TodoApp ( 1 )" )

        fireEvent.click( getByText(/borrar/i) )

        expect( container.querySelector('h1').textContent ).toBe( "TodoApp ( 0 )" )

    })    
    
})

