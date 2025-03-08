import React from 'react'
import "./mainstep.css"

const Mainsteps = () => {
  return (
    <div className="main-steps-container">
      <div className="main-steps py-3">
        <ul className='flex gap-3 '>
          <a href="\tax-Retun" className='px-3 py-1 bg-white rounded-full'><li className='text-sm'>Source of Income</li></a>
          <a href="\financial-details" className='px-3 py-1 bg-white rounded-full'><li className='text-sm'>Financial Details</li></a>
          <a href="\basic-details" className='px-3 py-1 bg-white rounded-full'><li className='text-sm'>Basic Details</li></a>
          <a href="\basic-details2" className='px-3 py-1 bg-white rounded-full'><li className='text-sm'>Basic Details 2</li></a>
          <a href="\house-property" className='px-3 py-1 bg-white rounded-full'><li className='text-sm'>House Property Income</li></a>
          <a href="\deduction" className='px-3 py-1 bg-white rounded-full'><li className='text-sm'>Deduction</li></a>
          <a href="\bank-details" className='px-3 py-1 bg-white rounded-full'><li className='text-sm'>Bank Details</li></a>
          <a href="\prepaid-taxes" className='px-3 py-1 bg-white rounded-full'><li className='text-sm'>Prepaid Taxes</li></a>
          <a href="\extra-details" className='px-3 py-1 bg-white rounded-full'><li className='text-sm'>Extra Details</li></a>
          <a href="" className='px-3 py-1 bg-white rounded-full'><li className='text-sm'>Computation Details</li></a>
        </ul>
      </div>
    </div>
  )
}

export default Mainsteps;
