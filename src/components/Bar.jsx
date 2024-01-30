import React from 'react'
import { NavLink } from 'react-router-dom'

export default function () {
  return (
    <div className='bar'>
      <div className="side-bar container">
        <NavLink className='btn btn-light' to='/model'>Model</NavLink>
        <NavLink className='btn btn-light' to='brand'>Brand</NavLink>
        <NavLink className='btn btn-light' to='Product'>Product</NavLink>
      </div>
    </div>
  )
}
