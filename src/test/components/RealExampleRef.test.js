import React from 'react'
import { cleanup, fireEvent, render } from "@testing-library/react"
import { RealExampleRef } from "../../components/04-useRef/RealExampleRef"
import { MultipleCustomHooks } from '../../components/03-examples/MultipleCustomHooks'

describe('<RealExampleRef />', () => {

    afterEach( cleanup )

    test('debe mostrarse correctamente', () => {
        const { getByText } = render(<RealExampleRef />)
        expect( getByText(/realexampleref/i).textContent ).toBe('RealExampleRef')
    })
    
    test('debe mostrarse el componente <MultipleCustomHooks />', () => {
        const { container, getByText } = render( <RealExampleRef>
                                                    <MultipleCustomHooks />
                                                </RealExampleRef> )

        fireEvent.click( getByText(/show/i) )

        expect( getByText(/breakingbad/i) ).toBeInTheDocument()


    })
})
