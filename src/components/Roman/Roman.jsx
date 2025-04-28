import React, { useState } from 'react'
import { Input } from '../Input/Input'
import axios from 'axios'

export const Roman = () => {
    const [roman, setRoman] = useState('')
    const [resultado, setResultado] = useState(null)
    

    const handleSubmit = async(event) =>{
        event.preventDefault()
        const { data } = await axios.post('http://localhost:3641/v1/romano/converter', { roman })
        setResultado(data)
    }
    

  return (
    <>  
        <form onSubmit={handleSubmit}> 
            <Input
                field='roman'
                label='Numero Romano'
                value={roman}
                type='text'
                onChangeHandler={(event) =>setRoman(event.target.value)}

            />
            <button type='submit'>Submit</button>
        </form>
        {resultado && (
        <div style={{ marginTop: '20px' }}>
          <h3>Resultado:</h3>
          <pre>{JSON.stringify(resultado, null, 2)}</pre>
        </div>
      )}
    </>
  )
}
