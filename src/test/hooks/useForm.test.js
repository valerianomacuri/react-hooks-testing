import { act, renderHook } from '@testing-library/react-hooks'
import { useForm } from '../../hooks/useForm'

describe('useForm hook', () => {
    const initialForm = {
        name: 'fernando',
        email: 'fernando@gmail.com'
    }
    test('debe de regresar un formulario por defecto', () => {
        const { result } = renderHook( () => useForm( initialForm ) )
        const [ formValues, handleChange, reset ] = result.current
        expect( formValues ).toEqual( initialForm )
    })

    test('debe de cambiar el valor del formulario ( cambiar nombre )', () => {
        const { result } = renderHook( () => useForm( initialForm ) )
        const [ , handleChange, reset ] = result.current

        act( () => handleChange({
            target: {
                name: 'name',
                value: 'melissa'
            }
        }) )

        const [ formValues ] = result.current

        expect( formValues ).toEqual({ ...formValues, name: 'melissa' })
    })

    test('debe de restablecer el formulario con reset', () => {
        const { result } = renderHook( () => useForm( initialForm ) )
        const [ , handleChange, reset ] = result.current

        act( () => {
            handleChange({
                target: {
                    name: 'name',
                    value: 'melissa'
                }
            }) 

            reset()
        })

        const [ formValues ] = result.current

        expect( formValues ).toEqual( initialForm )


    })
    
    
    
})
