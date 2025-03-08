"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import "./basic-details.css";

const BasicDetails = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    fatherName: '',
    phoneNumber: '',
    email: '',
    gender: 'male',
    whatsappUpdates: false
  });
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const validate = () => {
    const newErrors = {};
    
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.fatherName) newErrors.fatherName = 'Father\'s Name is required';
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Mobile Number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Mobile Number must be 10 digits';
    }
    if (!formData.email) {
      newErrors.email = 'Email ID is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email ID is invalid';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
    
      router.push('/basic-details2');
    }
  };

  return (
    <div className='basic-details flex flex-col justify-center items-center text-center pt-20'>
      <h1 className="text-2xl font-semibold">ENTER PERMANENT INFORMATION TO PREPARE YOUR TAX RETURN</h1>
      <p className="text-xl mt-1">We'll keep it a secret.</p>
      <form className="basic-details-form rounded-2xl bg-white p-5 lg:p-10 md:p-10 xl:p-10 mb-7 mt-10" onSubmit={handleSubmit}>
        <div className="row1 flex flex-wrap gap-5 mb-5">
          <div className="input input1 flex flex-col items-start">
            <label htmlFor="firstName" className='mb-2'>First Name #</label>
            <input type="text" name="firstName" className='p-3 rounded-lg' value={formData.firstName} onChange={handleChange} />
            {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
          </div>

          <div className="input input1 flex flex-col items-start">
            <label htmlFor="middleName" className='mb-2'>Middle Name #</label>
            <input type="text" name="middleName" className='p-3 rounded-lg' value={formData.middleName} onChange={handleChange} />
          </div>

          <div className="input input1 flex flex-col items-start">
            <label htmlFor="lastName" className='mb-2'>Last Name #*</label>
            <input type="text" name="lastName" className='p-3 rounded-lg' value={formData.lastName} onChange={handleChange} />
            {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
          </div>

          <div className="input input2 flex flex-col items-start">
            <label htmlFor="fatherName" className='mb-2'>Father's Name *</label>
            <input type="text" name="fatherName" className='p-3 rounded-lg' value={formData.fatherName} onChange={handleChange} />
            {errors.fatherName && <p className="text-red-500">{errors.fatherName}</p>}
          </div>

          <div className="input input2 flex flex-col items-start">
            <label htmlFor="phoneNumber" className='mb-2'>Mobile Number *</label>
            <input type="text" name="phoneNumber" className='p-3 rounded-lg' value={formData.phoneNumber} onChange={handleChange} />
            {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>}
          </div>

          <div className="input input2 flex flex-col items-start">
            <label htmlFor="email" className='mb-2'>Email ID *</label>
            <input type="text" name="email" className='p-3 rounded-lg' value={formData.email} onChange={handleChange} />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
        </div>

        <div className="Gender-input flex flex-wrap justify-center gap-4 py-7">
          <p className='text-lg mb-2 lg:mb-0 md:mb-0'>Gender</p>
          <div className='flex gap-3'>
            <div className='flex gap-1 items-center'>
              <input type="radio" name="gender" value="male" className='h-5 w-5 custom-radio' checked={formData.gender === 'male'} onChange={handleChange} />
              <p>Male</p>
            </div>
            <div className='flex gap-1 items-center'>
              <input type="radio" name="gender" value="female" className='h-5 w-5 custom-radio' checked={formData.gender === 'female'} onChange={handleChange} />
              <p>Female</p>
            </div>
          </div>
        </div>

        <div className="note flex justify-center text-center py-5 rounded-lg">
          <p className='text-sm'>Note #: Please enter above mentioned details as mentioned on your PAN Card</p>
        </div>

        <div className="whatsapp flex justify-start ps-4 text-center py-4 mt-5 gap-3 items-center rounded-lg">
          <input type='checkbox' name="whatsappUpdates" className='custom-checkbox' checked={formData.whatsappUpdates} onChange={handleChange} />
          <p className='text'>I would like to receive updates about my ITR filing on WhatsApp</p>
        </div>
      </form>

      <div className="financial-btns flex flex-wrap justify-between mb-10">
        <a href="/financial-details">
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
  );
}

export default BasicDetails;
