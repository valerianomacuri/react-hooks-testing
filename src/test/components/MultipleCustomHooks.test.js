import React from "react"
import { render } from "@testing-library/react"
import { MultipleCustomHooks } from "../../components/03-examples/MultipleCustomHooks"
import { useFetch } from "../../hooks/useFetch"
import { useCounter } from "../../hooks/useCounter"

// no importa la implementación solo los resultados
jest.mock("../../hooks/useFetch")
jest.mock("../../hooks/useCounter")

describe('<MultipleCustomHooks />', () => {

    useCounter.mockReturnValue({
        counter: 10,
        increment: f => f
    })

    test('debe de mostrarse correctamente', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        })
        const { getByText } = render(<MultipleCustomHooks />)

        expect( getByText(/breakingbad/i).textContent ).toBe('BreakingBad Quotes')


    })

    test('debe de mostrar la información', () => {
        useFetch.mockReturnValue({
            data: [{
                author: 'Fernando',
                quote: 'Hola Mundo'
            }],
            loading: false,
            error: null
        })

        const { getByText, container } = render( <MultipleCustomHooks /> )

        expect( getByText(/fernando/i).textContent ).toBe('Fernando')
        expect( getByText(/hola/i).textContent ).toBe('Hola Mundo')

        const blockquote = container.querySelector('blockquote')
        expect( blockquote ).toBeInTheDocument()
    });
    
})
