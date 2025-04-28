import React, { useState } from 'react'
import { Input } from '../Input/Input'
import axios from 'axios'
import '../../Pages/WelcomePage.css'
export const Roman = () => {
    const [romano, setRomana] = useState('')
    const [resultado, setResultado] = useState(null)
    

    const handleSubmit = async(event) =>{
        event.preventDefault()
        const { data } = await axios.post('http://localhost:3641/v1/romano/converter', { romano })
        setResultado(data)
    }
    

  return (
    <>  
    <h1>Convertir Romano</h1>
        <form onSubmit={handleSubmit}> 
            <Input className='Label'
                field='roman'
                label='Numero Romano'
                value={romano}
                type='text'
                onChangeHandler={(event) =>setRomana(event.target.value)}

            />
            <button type='submit'>Submit</button>
        </form>
        {resultado && (<div> 

          <h3>Resultado:</h3>
          <h2>{JSON.stringify(resultado, null, 2)}</h2>
        </div>
        
      )}
    </>
  )
}
