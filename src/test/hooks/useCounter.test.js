import { fireEvent } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks'
import { useCounter } from '../../hooks/useCounter';

describe('useCounter hook', () => {
    test('debe de retornar valores por defecto', () => {
        const { result } = renderHook( () => useCounter() )

        expect( result.current.counter ).toBe( 10 )
        expect( typeof result.current.increment ).toBe( 'function' )
        expect( typeof result.current.decrement ).toBe( 'function' )
    })

    test('debe de incrementar el counter en 1', () => {
        const { result } = renderHook( () => useCounter() )

        act( () => result.current.increment() )

        expect( result.current.counter ).toBe( 11 )
    })

    test('debe de decrementar el counter en 1', () => {
        const { result } = renderHook( () => useCounter() )

        act( () => result.current.decrement() )

        expect( result.current.counter ).toBe( 9 )
    })
    
    test('debe de resetear el counter a initialValue', () => {
        let initialValue = 1

        const { result, rerender } = renderHook( () => useCounter( initialValue ) )

        initialValue = 100

        rerender()
        act( () => result.current.reset() )

        expect( result.current.counter ).toBe( 100 )
    })
});
