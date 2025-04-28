import React from 'react'
import { Temperature } from '../../components/Temperature/Temperature'
import { Link } from 'react-router-dom'

export const TemperaturePage = () => {
  return (
    <>
    <Temperature/>
    <Link to='/'>
        <button>
          Romano
        </button>
      </Link>
    </>
  )
}
