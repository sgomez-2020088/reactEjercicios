import React from 'react'
import { Temperature } from '../../components/Temperature/Temperature'
import { Link } from 'react-router-dom'

export const TemperaturePage = () => {
  return (
    <> 
    <Temperature/>
    <Link to='/romano'>
        <button>
          Romano
        </button>
      </Link>
    </>
  )
}
