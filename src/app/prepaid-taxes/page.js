import React from 'react'
import Taxreturn_Nav from '../tax-return/Taxreturn_Nav'

import Prepaid from './Prepaid'
import Support from '../financial-details/Support'
import Mainsteps from '../basic-details2/Mainsteps'


const page = () => {
  return (
    <>
     <Taxreturn_Nav/>
     <Mainsteps/>
     <Prepaid/>
     <Support/>
    </>
  )
}

export default page
