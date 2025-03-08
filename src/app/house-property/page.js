import React from 'react'
import Taxreturn_Nav from '../tax-return/Taxreturn_Nav'
import HouseProperty from './HouseProperty'

import Support from '../financial-details/Support'
import Mainsteps from '../basic-details2/Mainsteps'

const page = () => {
  return (
    <div>
      <Taxreturn_Nav/>
     <Mainsteps/>
      <HouseProperty/>
      <Support/>
    </div>
  )
}

export default page
