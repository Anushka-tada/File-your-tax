import React from 'react'
import Taxreturn_Nav from '../tax-return/Taxreturn_Nav'
import Support from '../financial-details/Support'
import BasicDetails from './BasicDetails'

const page = () => {
  return (
    <div>
      <Taxreturn_Nav/>
      <BasicDetails/>
      <Support/>
    </div>
  )
}

export default page
