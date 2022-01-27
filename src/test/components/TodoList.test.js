import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { TodoList } from '../../components/08-useReducer/TodoList'

const demoTodos = [
    {
        id: 1,
        desc: 'Aprender React',
        done: false
    }
]




describe('<TodoList />', () => {
    const handleDelete = jest.fn()
    const handleToggle = jest.fn()
    afterEach( cleanup )

    test('debe de mostrarse correctamente', () => {

        const { container, getByText } = render( 
            <TodoList 
                todos={ demoTodos }
                handleDelete={ handleDelete }
                handleToggle={ handleToggle }
            /> 
        )
        expect( container.querySelector('ul') ).toBeInTheDocument()

        expect( getByText(/aprender/i).textContent ).toBe( '1. ' + demoTodos[0].desc )

        expect( container.querySelectorAll('li').length ).toBe( 1 )
    })

    

    
})
