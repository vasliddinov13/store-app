import React from 'react'

const FormInput = ({label,type,name,defaultValue}) => {
  return (
    <div className='form-contro'>
        <label className='label flex'>
            {label}
        </label>
        <input
            type={type}
            defaultValue={defaultValue}
            name={name}
            className='input' 
        />
    </div>
  )
}

export default FormInput