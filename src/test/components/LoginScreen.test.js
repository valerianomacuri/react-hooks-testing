import React from "react"
import { cleanup, fireEvent, prettyDOM, render } from "@testing-library/react"
import { LoginScreen } from "../../components/09-useContext/LoginScreen"
import { UserContext } from "../../components/09-useContext/UserContext"


describe('<LoginScreen />', () => {
    let setUser = jest.fn()

    afterEach( cleanup )
    test('debe mostrarse correctamente', () => {
        const { getByText } = render(
            <UserContext.Provider
                value={{
                    setUser
                }}
            >
                <LoginScreen />
            </UserContext.Provider>
        ) 

        expect( getByText(/loginscreen/i).textContent ).toBe('LoginScreen')
    })

    test('debe ejecutar el setUser con el argumento esperado', () => {
        const { getByRole } = render(
            <UserContext.Provider
                value={{
                    setUser
                }}
            >
                <LoginScreen />
            </UserContext.Provider>
        ) 
        fireEvent.click( getByRole('button', { name: /login/i }), {
            id: 123,
            name: 'Fernando'
        } )

        console.log( prettyDOM( getByRole('button', { name: /login/i }) ) )

        expect( setUser ).toBeCalledTimes( 1 )
    })
    
    
})
