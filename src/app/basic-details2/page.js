import React from 'react'
import Taxreturn_Nav from '../tax-return/Taxreturn_Nav'
import BasicForm from './BasicForm'
import Support from '../financial-details/Support'
import Mainsteps from './Mainsteps'

const page = () => {
  return (
    <>
      <Taxreturn_Nav/>
      <Mainsteps/>
      <BasicForm/>
      <Support/>
    </>
  )
}

export default page
