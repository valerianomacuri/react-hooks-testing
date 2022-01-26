import React from 'react';
import { TodoListItem } from "../../components/08-useReducer/TodoListItem";
import { cleanup, fireEvent, render } from '@testing-library/react'

const demoTodos = [
    {
        id: 1,
        desc: 'Aprender React',
        done: false
    }
]

describe('<TodoListItem />', () => {

    const handleDelete = jest.fn()
    const handleToggle = jest.fn()
    afterEach( cleanup )

    test('debe de mostrarse correctamente', () => {
        
        const { container } = render(
            <TodoListItem 
                todo={ demoTodos[0] }
                index={ 0 }
                handleDelete={ handleDelete }
                handleToggle={ handleToggle }
            />
        )

        expect( container.querySelector('li') ).toBeInTheDocument()
    });

    test('debe llamar la función delete', () => {
        
        const { getByText } = render(
            <TodoListItem 
                todo={ demoTodos[0] }
                index={ 0 }
                handleDelete={ handleDelete }
                handleToggle={ handleToggle }
            />
        )

        fireEvent.click(  getByText(/borrar/i) )

        expect( handleDelete ).toHaveBeenCalledWith( demoTodos[0].id )
    });

    test('debe llamar la función toggle', () => {
        
        const { container } = render(
            <TodoListItem 
                todo={ demoTodos[0] }
                index={ 0 }
                handleDelete={ handleDelete }
                handleToggle={ handleToggle }
            />
        )

        fireEvent.click(  container.querySelector('p') )

        expect( handleToggle ).toHaveBeenCalledWith( demoTodos[0].id )
    });

    test('debe mostrar el texto correctamente', () => {
        
        const { getByText } = render(
            <TodoListItem 
                todo={ demoTodos[0] }
                index={ 0 }
                handleDelete={ handleDelete }
                handleToggle={ handleToggle }
            />
        )

        expect( getByText(/aprender react/i).textContent ).toBe( `1. ${ demoTodos[0].desc }` )
    })
    
    test('debe de tener la clase complete', () => {
        
        const todo = demoTodos[0]
        todo.done = true
        const { container } = render(
            <TodoListItem 
                todo={ todo }
                index={ 0 }
                handleDelete={ handleDelete }
                handleToggle={ handleToggle }
            />
        )

        expect( container.querySelector('p').className ).toBe( 'complete' )
        expect( container.querySelector('p') ).toHaveClass('complete')
    })
});
