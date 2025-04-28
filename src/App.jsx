
import { Link, useRoutes } from 'react-router-dom'
import './App.css'
import { routes } from './routes'
import { Toaster } from 'react-hot-toast'

function App() {

const element = useRoutes(routes)
  return (
    <>

      {element}
      <Toaster position='bottom-right' reverseOrder={false}/>
    </>
  )
}

export default App
