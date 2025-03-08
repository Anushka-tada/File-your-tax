import React from 'react'
import Taxreturn_Nav from '../tax-return/Taxreturn_Nav'

import Deduction from './Deduction'
import Mainsteps from '../basic-details2/Mainsteps'


const page = () => {
  return (
    <div>
      <Taxreturn_Nav/>
    <Mainsteps/>
      <Deduction/>
    </div>
  )
}

export default page
