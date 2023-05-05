import { useState } from 'react'
import './m-formInput.css'

const FormInput = (props) => {
    const [focused, setFocused] = useState(false)
    const { label, onChange, id, ...inputProps } = props

    const handleFocus = (e) => {
        setFocused(true)
    }

    return (
        <>
            <div className='formInput formMeanStyle'>
                <label>{label}</label>
                <input className='Input'
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() => inputProps.name === 'confirmPassowrd' && setFocused(true)}
                focused={focused.toString()}
                />
            </div>
        </>
    )
}
 
export default FormInput