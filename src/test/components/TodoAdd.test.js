import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { TodoAdd } from "../../components/08-useReducer/TodoAdd";


describe('<TodoAdd />', () => {

    afterEach( cleanup )
    const handleAddTodo = jest.fn()
    test('debe mostrarse correctamente', () => {
        const { getByText } = render( <TodoAdd  handleAddTodo={ handleAddTodo }/> )
        expect( getByText(/agregar todo/i).textContent ).toBe('Agregar TODO')

    })

    test('no debe llamar el handleAddTodo', () => {
        const { container } = render( <TodoAdd  handleAddTodo={ handleAddTodo }/> )
        const form = container.querySelector('form')
        fireEvent.submit(form, {
            preventDefault(){}
        })

        expect( handleAddTodo ).not.toHaveBeenCalled()
    })
    
    test('debe de llamar la función handleAddTodo', () => {
        const { container, getByPlaceholderText } = render( <TodoAdd  handleAddTodo={ handleAddTodo }/> )
        const form = container.querySelector('form')
        const value = 'Aprender React'
        fireEvent.change( getByPlaceholderText(/aprender/i), {
            target: {
                name: 'description',
                value
            }
        } )

        fireEvent.submit(form, {
            preventDefault(){}
        })

        expect( handleAddTodo ).toHaveBeenCalledTimes( 1 )

        expect( handleAddTodo ).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false,
        })

        expect( container.querySelector('input').value ).toBe('')
    })

    
        
})
