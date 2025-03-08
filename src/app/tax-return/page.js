import React from 'react'
import Taxreturn_Nav from './Taxreturn_Nav'
import Efilling_platform from './Efilling_platform'
import Footer from '../homepage/Footer'
import Need_Support from '../homepage/Need_Support'

const page = () => {
  return (
    <div>
      <Taxreturn_Nav/>
      <Efilling_platform/>
      <Need_Support/>
      <Footer/>
    </div>
  )
}

export default page
