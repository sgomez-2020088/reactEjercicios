import React from 'react'
import { Link } from 'react-router-dom'
import { Roman } from '../../components/Roman/Roman'

export const RomanPage = () => {
  return (
    <>
    <Roman/>
    <Link to='/temperature'>
        <button>
          Temperature
        </button>
      </Link>
    </>
  )
}
