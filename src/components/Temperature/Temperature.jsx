import React, { useState } from 'react'
import { Input } from '../Input/Input'

import axios from 'axios'

export const Temperature = () => {
    const [value, setValue] = useState('')
    const [unit, setUnit] = useState('')
    const [resultado, setResultado] = useState(null)
    

    const handleSubmit = async(event) =>{
        event.preventDefault()
        const { data } = await axios.post('http://localhost:3641/v1/temperature/', { value,unit })
        setResultado(data)
    }
    

  return (
    <>  
    <h1>Temperatura</h1>
        <form onSubmit={handleSubmit}> 
            <Input
                field='value'
                label='Temperature'
                value={value}
                type='text'
                onChangeHandler={(event) =>setValue(event.target.value)}
            />

            <Input
                field='unit'
                label='Unit'
                value={unit}
                type='text'
                onChangeHandler={(event) =>setUnit(event.target.value)}
                placeHolder='Ingrese C-K-F'

            />
            <button type='submit'>Submit</button>
        </form>
        {resultado && (
        <div>
          <h3>Resultado:</h3>
          <h2>{JSON.stringify(resultado, null, 2)}</h2>
        </div>
      )}
    </>
  )
}
