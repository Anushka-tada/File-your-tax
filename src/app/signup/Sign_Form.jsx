"use client"

import React, { useState } from 'react';
import "./Signup.css";
import  {signupServ}  from "../services/authentication.service"

const Sign_Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    // whatsappUpdates: false,
  });

  const handleChange = (e) => {
    const { name, value} = e.target;
    setFormData({
      ...formData,
      [name] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
 
    try{
       let response = await signupServ(formData);
       console.log(response);
    }
    catch( error){

    }

    console.log(formData);
    
  };

  return (
    <div className="Sign-Form flex flex-col items-center text-center py-20 px-4 mb-7">
      <h1 className="text-3xl sign-heading font-semibold lg:w-1/3 md:w-1/3">Sign Up</h1>
      <p className="text-lg mb-12 mt-3">Join our 1M + customers who eFile with us</p>
      <div className="sign-social-btns flex gap-4 mb-4">
        <div className="sign-google flex gap-2 bg-white py-3 px-10 shadow-md rounded-lg">
          <img src="https://tax2win.in/assets-new/img/signup/btn_google_light_normal.svg" width="20px" height="20px" alt=""/>
          <p className="text-lg">Google</p>
        </div>
        {/* <div className="sign-facebook flex gap-2 bg-white py-3 px-10 shadow-md rounded-lg">
        <img src="https://tax2win.in/assets-new/img/signup/facebook_login.svg" width="20px" height="20px"  alt=""/>
        <p className="text-lg">Facebook</p>
        </div> */}
      </div>
      <p className="mb-3">or</p>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col'>
        <div className="flex gap-6 ">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="py-3 px-5 lg:px-7 md:px-7 w-full rounded-lg bg-transparent text-lg mb-3 lg:w-44 md:w-44"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="py-3 px-5 lg:px-7 md:px-7 w-full rounded-lg bg-transparent text-lg mb-3 lg:w-44 md:w-44"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="py-3 px-7 w-full rounded-lg bg-transparent text-lg mb-3 lg:w-96 md:w-96"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Mobile Number"
          className="py-3 px-7 w-full rounded-lg bg-transparent text-lg mb-3 lg:w-96 md:w-96"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="py-3 px-7 w-full rounded-lg bg-transparent text-lg md:w-96 lg:w-96"
          value={formData.password}
          onChange={handleChange}
        />
        <div className="text-left md:w-96 lg:w-96 mt-1 text-black">
          <div className="flex items-center justify-center gap-2 text-sm">
            <input
              type="checkbox"
              name="whatsappUpdates"
              className="mt-4 lg:mt-0 md:mt-0"
              checked={formData.whatsappUpdates}
              onChange={handleChange}
            />
            <p className="mt-4">I would like to receive updates about my ITR filing on WhatsApp</p>
          </div>
          <p className="text-sm mt-2">
            By clicking on Sign up, you agree to our <span className="text-blue">Terms & Conditions</span> and that you have read our <span className="text-blue">Privacy Policy</span>
          </p>
        </div>
        <button type="submit" className="sign-btn py-3 px-9 text-lg text-white rounded-lg font-medium mt-5 mb-3 md:w-96 lg:w-96 w-full mx-2">
          Sign Up
        </button>
        </div>
      </form>
      <p className="font-bold">
        Already have an account? <span className="sign-green">Log In</span>
      </p>
      <div>
        <ul className="flex flex-wrap justify-center lg:flex-nowrap gap-7 py-12">
          <li className="flex gap-3">
            <img src="https://tax2win.in/assets-new/img/signup/accurate.svg" alt="99.99% Accurate Return Filing"/>
            <p className="return-filling">99.99% Accurate Return Filing</p>
          </li>
          <li className="flex gap-3">
            <img src="https://tax2win.in/assets-new/img/signup/refund.svg" alt="Guaranteed Maximum Refunds"/>
            <p className="refunds">Guaranteed Maximum Refunds</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sign_Form;
