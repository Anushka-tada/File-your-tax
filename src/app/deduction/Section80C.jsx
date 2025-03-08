import React from 'react'
import "./deduction.css"

const Section80C = () => {
  return (
    <>
      <div className="80C-form mt-5">
         
        

        <div className='flex flex-col items-start mt-6'>
        <p className='font-semibold'>Enter your tax saving investment details like PPF investment, Fixed Deposits etc. </p>
         <div className="80c-inputs flex flex-wrap justify-center gap-5 mt-6">
            <div className="c-imput flex flex-col gap-1 items-start">
                <label htmlFor="">LIC</label>
                <input type="" className='p-3 rounded-lg' />
            </div>

            <div className="c-imput flex flex-col gap-1  items-start">
                <label htmlFor="">PF</label>
                <input type="" className='p-3 rounded-lg' />
            </div>

            <div className="c-imput flex flex-col gap-1  items-start">
                <label htmlFor="">PPF</label>
                <input type="" className='p-3 rounded-lg' />
            </div>


            <div className="c-imput flex flex-col gap-1 items-start">
                <label htmlFor="">Principal Repayment on housing Loan</label>
                <input type="" className='p-3 rounded-lg' />
            </div>

            <div className="c-imput flex flex-col gap-1  items-start">
                <label htmlFor="">FDR (Tax Savings)</label>
                <input type="" className='p-3 rounded-lg' />
            </div>

            <div className="c-imput flex flex-col gap-1  items-start">
                <label htmlFor="">NSC</label>
                <input type="" className='p-3 rounded-lg' />
            </div>


            <div className="c-imput flex flex-col gap-1 items-start">
                <label htmlFor="">Tuition fees</label>
                <input type="" className='p-3 rounded-lg' />
            </div>

            <div className="c-imput flex flex-col gap-1  items-start">
                <label htmlFor="">Premium paid to Annuity</label>
                <input type="" className='p-3 rounded-lg' />
            </div>

            <div className="c-imput flex flex-col gap-1  items-start">
                <label htmlFor="">Other 80C Deductions</label>
                <input type="" className='p-3 rounded-lg' />
            </div>
         </div>
        </div>
      </div>
    </>
  )
}

export default Section80C
