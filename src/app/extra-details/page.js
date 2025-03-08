import React from 'react'
import Taxreturn_Nav from '../tax-return/Taxreturn_Nav'

import ExtraDetails from './ExtraDetails'
import Support from '../financial-details/Support'
import Mainsteps from '../basic-details2/mainsteps'

const page = () => {
  return (
    <div>
      <Taxreturn_Nav/>
    <Mainsteps/>
      <ExtraDetails/>
      <Support/>
    </div>
  )
}

export default page
