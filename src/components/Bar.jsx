import React from 'react'
import { NavLink } from 'react-router-dom'

export default function () {
  return (
    <div>
      <NavLink to='/model'>Model</NavLink>
      <NavLink to='brand'>Brand</NavLink>
      <NavLink to='Product'>Product</NavLink>
    </div>
  )
}
