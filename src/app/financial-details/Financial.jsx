"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import "./financial.css";

const Financial = () => {
  const [formData, setFormData] = useState({
    financialYear: "2024-2025",
    panNumber: "",
    dateOfBirth: ""
  });

  const router = useRouter(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleContinue = () => {
    console.log(formData);
   router.push('/basic-details'); 
  };

  return (
    <>
      <div className="financial-details flex flex-col justify-center items-center text-center pt-20">
        <h1 className="text-2xl font-semibold">START YOUR INCOME TAX RETURN FILING</h1>
        <p className="text-xl mt-1">Let us do the paperwork.</p>

        <div className="financial-form rounded-2xl bg-white p-10 mb-7 mt-10">
          <div className="flex flex-wrap lg:flex-nowrap md:flex-nowrap gap-5 mb-4">
            <div className="inputs input-1 flex flex-col">
              <label htmlFor="financialYear" className="mb-1">Financial Year</label>
              <select
                name="financialYear"
                className="p-3 rounded-lg year"
                value={formData.financialYear}
                onChange={handleChange}
              >
                <option value="2024-2025">2024-2025</option>
                <option value="2023-2024">2023-2024</option>
                <option value="2022-2023">2022-2023</option>
                <option value="2021-2022">2021-2022</option>
              </select>
            </div>
            <div className="inputs input-1 flex flex-col">
              <label htmlFor="panNumber" className="mb-1">PAN NUMBER</label>
              <input
                type="text"
                name="panNumber"
                className="p-3 rounded-lg"
                value={formData.panNumber}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="input input-2 flex flex-col">
            <label htmlFor="dateOfBirth" className="mb-1">Date of birth</label>
            <input
              type="text"
              name="dateOfBirth"
              className="p-3 rounded-lg"
              placeholder="dd-mm-yyyy"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="financial-btns flex flex-wrap justify-center lg:justify-between md:justify-between xl:justify-between sm:justify-between mb-10">
          <a href="\tax-return">
            <div className="back-btn flex items-center gap-3 py-3 px-10 mb-4 bg-white rounded-md">
              <img src="https://tax2win.in/assets-new/img/new-theme/diy-flow/back-arrow.svg" alt="" height={15} width={15} />
              <p className="text-blue">Back</p>
            </div>
          </a>

          <div className="other-btns flex flex-wrap justify-center gap-4">
            <div className="get-button px-10 py-3 rounded-md">
              <p className="text-white font-semibold">GET CA ASSISTED</p>
            </div>
            <div
              onClick={handleContinue}
              className="continue-btn flex gap-3 items-center px-10 py-3 rounded-md cursor-pointer"
            >
              <p className="text-white font-semibold">CONTINUE</p>
              <img src="https://tax2win.in/assets-new/img/new-theme/diy-flow/nex-arrow.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Financial;
