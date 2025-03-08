"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import "./basic-form.css"

const BasicForm = () => {
    const [formData, setFormData] = useState({
        pincode: '',
        address1: '',
        address2: ''
      });

    

      const router = useRouter();

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]:  value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
       
          console.log(formData);
        
          router.push('/house-property');
        
      };
      
    return (
        <>
            <div className="basic-form-section flex flex-col justify-center items-center text-center pt-20">
                <h1 className="text-2xl font-semibold">ENTER PERMANENT/CURRENT ADDRESS DETAILS</h1>
                <p className="text-xl mt-1">We'll keep it a secret.</p>

                <div className="basic-form-outer rounded-2xl bg-white p-5 lg:p-8 md:p-8 xl:p-8 mb-7 mt-10 flex flex-col items-start">

                    <div className="basic-form ">
                        <div className="input flex flex-col items-start mb-4">
                            <label htmlFor="pincode">Pincode*</label>
                            <input type="text" name="pincode" className='p-3 rounded-lg' value={formData.pincode} onChange={handleChange} />
                        </div>

                        <div className="flex flex-wrap gap-5">
                            <div className="input flex flex-col items-start" >
                                <label htmlFor="address1">Flat / Door / Building *</label>
                                <input type="text" name="address1" className='p-3 rounded-lg' value={formData.address1} onChange={handleChange} />
                            </div>

                            <div className="input flex flex-col items-start" >
                                <label htmlFor="address2">Building / Village</label>
                                <input type="text" name="address2" className='p-3 rounded-lg' value={formData.address2} onChange={handleChange} />
                            </div>
                        </div>

                    </div>

                </div>
                <div className="financial-btns flex flex-wrap justify-between mb-10">
                    <a href="/basic-details">
                        <div className="back-btn flex items-center gap-3 py-3 px-10 mb-4 bg-white rounded-md">
                            <img src="https://tax2win.in/assets-new/img/new-theme/diy-flow/back-arrow.svg" alt="" height={15} width={15} />
                            <p className="text-blue">Back</p>
                        </div>
                    </a>

                    <div className="other-btns flex flex-wrap gap-4">
                        <div className="get-button px-10 py-3 rounded-md">
                            <p className="text-white font-semibold">GET CA ASSISTED</p>
                        </div>
                      
                        <div className="continue-btn flex gap-3 items-center px-10 py-3 rounded-md" onClick={handleSubmit}>
                            <p className="text-white font-semibold">CONTINUE</p>
                            <img src="https://tax2win.in/assets-new/img/new-theme/diy-flow/nex-arrow.svg" alt="" />
                        </div>
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default BasicForm
