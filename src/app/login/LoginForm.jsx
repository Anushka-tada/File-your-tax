"use client"

import React, { useState } from 'react';
import "./loginForm.css";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit =  (e) => {
    e.preventDefault();

    console.log(formData);
   
  };

  return (
    <div className="login-Form flex flex-col items-center text-center py-20 px-4">
      <h1 className="text-3xl login-heading font-semibold lg:w-1/3 md:w-1/3">
        Login to Tax2win Income Tax Return filing Account
      </h1>
      <p className="text-lg mb-12 mt-3">File your ITR online in just 4 minutes</p>
      <div className="login-social-btns flex gap-4 mb-4">
        <div className="login-google flex gap-2 bg-white py-3 px-10 shadow-md rounded-lg">
          <img src="https://tax2win.in/assets-new/img/signup/btn_google_light_normal.svg" width="20px" height="20px" alt=""/>
          <p className="text-lg">Google</p>
        </div>
      </div>
      <p className="mb-3">or</p>
      <form onSubmit={handleSubmit}>
      <div className='flex flex-col'>
      <input
          type="text"
          name="email"
          placeholder="Email or Mobile Number"
          className="py-3 px-7 w-full rounded-lg bg-transparent text-lg mb-3 lg:w-96 md:w-96"
          value={formData.email}
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
      </div>
        <div className="flex justify-end md:w-96 lg:w-96 mt-2 forget-p">
          <p>Forgot Password?</p>
        </div>
        <button type="submit" className="login-btn py-3 px-9 text-lg text-white rounded-lg font-medium mt-5 mb-3 md:w-96 lg:w-96 w-full mx-2">
          Log In
        </button>
      </form>
      <p className="font-bold">
        Don’t have an account? <a href="./signup"><span className="sign-green">Sign Up</span></a>
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

export default LoginForm;
