import { cleanup, render } from '@testing-library/react';
import React from 'react'
import { HomeScreen } from '../../components/09-useContext/HomeScreen';
import { UserContext } from '../../components/09-useContext/UserContext';

describe('<Home />', () => {
    const user = {
        name: 'Leonardo',
        email: 'leonardo@gmail.com'
    }
    afterEach( cleanup )
    
    test('debe mostrarse correctamente', () => {
        const { getByText } = render( 
            <UserContext.Provider
                value={{
                    user
                }}
            >
                <HomeScreen />
            </UserContext.Provider> 
        )
        expect( getByText(/homescreen/i).textContent ).toBe( 'HomeScreen' )

    })


    
})
