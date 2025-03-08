import React from 'react'
import Nav from './Nav'
import { Container } from 'postcss'
import Connect from './Connect'

const Navbar = () => {
  return (
    <div>
        <Connect/>
      <Nav/>
    </div>
  )
}

export default Navbar
