import React from 'react'
import logo from '../assets/logo.png'

function Logo({width = '100px'}) {
  return (
    <div ><img className='h-10 py-1 ' src={logo} alt="" /></div>
  )
}

export default Logo