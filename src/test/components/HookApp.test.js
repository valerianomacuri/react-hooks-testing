import React from 'react';
import { render } from '@testing-library/react'
import { HookApp } from '../../HookApp';

describe('<HookApp />', () => {
    test('debe rederizarse el componente', () => {
        const { getByText } = render(<HookApp />)

        expect( getByText(/hola mundo/i).textContent ).toBe('Hola Mundo')

    });
    
});
