"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import "./Efilling.css"

const Efilling_platform = () => {
   const[formData , setFormData] = useState({
    salaryPension: false,
    houseProperty: true,
    businessProfession: false,
    capitalGains: false,
    otherSources: false,
    foreignSource: false,
   });

   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value === 'Yes',
    });
  };

  const router = useRouter();

  const handleContinue = () => {
    const dataToStore = {
      isSalary: formData.salaryPension,
      isHouseProperty: formData.houseProperty,
      isProfession: formData.businessProfession,
      isCapitalGain: formData.capitalGains,
      isOtherSource: formData.otherSources,
      isForeignSource: formData.foreignSource,
    };
    console.log(dataToStore);
    router.push('/financial-details');
  };
  
  return (
    <>

      {/* income tax return e-filling */}
      <div className='eFilling-outer flex flex-col items-center py-8 px-4'>
        <h1 className='font-bold text-3xl mb-3'>Income Tax eFiling Platform</h1>
        <p className='text-lg'>Tax2win <span className='font-bold'>simplifies e-filing your Income Tax</span> Return! Take the first step towards ITR filing.</p>
        <p className='text-lg mb-5'>Choose your income source and file ITR today!</p>
        <div className="efilling-questions bg-white p-5 rounded-md lg:w-3/4 md:w-11/12">
          <div className="efill-que flex flex-wrap justify-between py-5">
            <p className='text-xl font-semibold mb-2 lg:mb-0 md:mb-0'>Q1. Income from <span className='font-bold'>Salary/Pension</span>?</p>
            <div className='flex gap-3 font-bold text-lg'>
              <div className='flex gap-1 items-center'>
                <input type="radio" name="salaryPension" value="Yes" className='h-5 w-5 custom-radio' 
              onChange={handleChange} />
                <p>Yes</p>
              </div>
              <div className='flex gap-1 items-center'>
                <input type="radio" name="salaryPension"  value="No" className='h-5 w-5  custom-radio' defaultChecked   
              onChange={handleChange} />
                <p>No</p>
              </div>
              <div className='bg-gray-200 rounded-full p-2'>
                <img src="https://tax2win.in/assets-new/img/source-of-income/info.svg" width="10" alt="info"></img>
              </div>
            </div>
          </div>

          <div className="efill-que flex flex-wrap justify-between py-5">
            <p className='text-xl font-semibold mb-2 lg:mb-0 md:mb-0'>Q2. Income from <span className='font-bold'>House Property (Home Loan/ Rental Income, etc)?</span></p>
            <div className='flex gap-3 font-bold text-lg'>
              <div className='flex gap-1 items-center'>
                <input type="radio" name="houseProperty" value="Yes" className='h-5 w-5 custom-radio' defaultChecked   
              onChange={handleChange}/>
                <p>Yes</p>
              </div>
              <div className='flex gap-1 items-center'>
                <input type="radio" name="houseProperty" value="No" className='h-5 w-5 custom-radio '  
              onChange={handleChange} />
                <p>No</p>
              </div>
              <div className='bg-gray-200 rounded-full p-2'>
                <img src="https://tax2win.in/assets-new/img/source-of-income/info.svg" width="10" alt="info"></img>
              </div>
            </div>
          </div>

          <div className="efill-que flex flex-wrap justify-between py-5">
            <p className='text-xl font-semibold mb-2 lg:mb-0 md:mb-0'>Q3. Income from <span className='font-bold'>Business/Profession?</span></p>
            <div className='flex gap-3 font-bold text-lg'>
              <div className='flex gap-1 items-center'>
                <input type="radio" name="businessProfession" value="Yes" className='h-5 w-5 custom-radio'  
              onChange={handleChange}/>
                <p>Yes</p>
              </div>
              <div className='flex gap-1 items-center'>
                <input type="radio" name="businessProfession" value="No" className='h-5 w-5 custom-radio' defaultChecked  
              onChange={handleChange} />
                <p>No</p>
              </div>
              <div className='bg-gray-200 rounded-full p-2'>
                <img src="https://tax2win.in/assets-new/img/source-of-income/info.svg" width="10" alt="info"></img>
              </div>
            </div>
          </div>

          <div className="efill-que flex flex-wrap justify-between py-5">
            <p className='text-xl font-semibold mb-2 lg:mb-0 md:mb-0'>Q4. Income from <span className='font-bold'>Capital Gains (Shares/ Mutual Funds/Property etc)?</span></p>
            <div className='flex gap-3 font-bold text-lg'>
              <div className='flex gap-1 items-center'>
                <input type="radio" name="capitalGains" value="Yes" className='h-5 w-5 custom-radio' 
              onChange={handleChange} />
                <p>Yes</p>
              </div>
              <div className='flex gap-1 items-center'>
                <input type="radio" name="capitalGains" value="No" className='h-5 w-5 custom-radio'defaultChecked   
              onChange={handleChange}/>
                <p>No</p>
              </div>
              <div className='bg-gray-200 rounded-full p-2'>
                <img src="https://tax2win.in/assets-new/img/source-of-income/info.svg" width="10" alt="info"></img>
              </div>
            </div>
          </div>

          <div className="efill-que flex flex-wrap justify-between py-5">
            <p className='text-xl font-semibold mb-2 lg:mb-0 md:mb-0'>Q5. Income from <span className='font-bold'>Other Sources?</span></p>
            <div className='flex gap-3 font-bold text-lg'>
              <div className='flex gap-1 items-center'>
                <input type="radio" name="otherSources" value="Yes" className='h-5 w-5 custom-radio'  
              onChange={handleChange} />
                <p>Yes</p>
              </div>
              <div className='flex gap-1 items-center'>
                <input type="radio" name="otherSources" value="No" className='h-5 w-5 custom-radio' defaultChecked   
              onChange={handleChange}/>
                <p>No</p>
              </div>
              <div className='bg-gray-200 rounded-full p-2'>
                <img src="https://tax2win.in/assets-new/img/source-of-income/info.svg" width="10" alt="info"></img>
              </div>
            </div>
          </div>

          <div className="efill-que flex flex-wrap justify-between py-5">
            <p className='text-xl font-semibold mb-2 lg:mb-0 md:mb-0'>Q6. Income from <span className='font-bold'>Foreign Source?</span></p>
            <div className='flex gap-3 font-bold text-lg'>
              <div className='flex gap-1 items-center'>
                <input type="radio" name="foreignSource" value="Yes" className='h-5 w-5 custom-radio'  
              onChange={handleChange} />
                <p>Yes</p>
              </div>
              <div className='flex gap-1 items-center'>
                <input type="radio" name="foreignSource" value="No" className='h-5 w-5 custom-radio' defaultChecked  
              onChange={handleChange}/>
                <p>No</p>
              </div>
              <div className='bg-gray-200 rounded-full p-2'>
                <img src="https://tax2win.in/assets-new/img/source-of-income/info.svg" width="10" alt="info"></img>
              </div>
            </div>
          </div>
        </div>

       
       <div onClick={handleContinue} className="continue-btn flex flex-wrap gap-3 py-3 px-20 rounded mt-7 cursor-pointer">
          <p className='text-white'>CONTINUE</p>
          <img src="https://tax2win.in/assets-new/img/diy-landing/nex-arrow.svg" alt="Continue" width="21" height="21"></img>
        </div>

{/* <a href="\financial-details">
<div onClick={handleContinue} className="continue-btn flex flex-wrap gap-3 py-3 px-20 rounded mt-7 cursor-pointer">
          <p className='text-white'>CONTINUE</p>
          <img src="https://tax2win.in/assets-new/img/diy-landing/nex-arrow.svg" alt="Continue" width="21" height="21"></img>
        </div>

</a> */}
        

        <div className="efilling-rates flex justify-center flex-wrap gap-7 py-14">
          <div className="efilling-rate flex gap-2">
            <img src="https://tax2win.in/assets-new/img/tax-advisory/rating.svg" width="25" height="25" alt="4.9 Google Rating" title="4.9 Google Rating" />
            <p><span className='font-bold'>4.9</span> Google Rating</p>
          </div>
          <div className="efilling-rate flex gap-2">
            <img src="https://tax2win.in/assets-new/img/tax-advisory/satisfaction.svg" width="25" height="25" alt="1+ Million satisfied customers" title="1+ Million satisfied customers" />
            <p><span className='font-bold'>1+ Million</span> Satisfied Customers</p>
          </div>
          <div className="efilling-rate flex gap-2">
            <img src="https://tax2win.in/assets-new/img/tax-advisory/already-saved.svg" width="25" height="25" alt="2500 Cr. Saved Already!" title="2500 Cr. Saved Already!" />
            <p><span className='font-bold'>2500 Cr.</span> Tax Saved</p>
          </div>
          <div className="efilling-rate flex gap-2">
            <img src="https://tax2win.in/assets-new/img/tax-advisory/experiance.svg" width="25" height="25" alt="10+ Years of Industry Experience" title="10+ Years of Industry Experience" />
            <p><span className='font-bold'>10+ Years </span> of Industry Experience</p>
          </div>
        </div>

        <div className="looking-CA flex flex-wrap justify-center rounded-lg p-7 text-white gap-3">
          <img src="https://tax2win.in/assets-new/img/diy-landing/hireca.svg" alt="Hire Expert CA" width="55" />

          <div className='lg:me-32' >
            <p className='text-2xl text-white font-bold'> Looking for a dedicated CA to handle your taxes?</p>
            <div className="flex flex-wrap">
              <div className="flex">
                <img src="https://tax2win.in/assets-new/img/diy-landing/list_arrow.svg" alt="" />
                <p className=' text-white'>All-Round Support</p>
              </div>
              <div className="flex ">
                <img src="https://tax2win.in/assets-new/img/diy-landing/list_arrow.svg" alt="" />
                <p className='text-white'>Reliable and Secure</p>
              </div>
              <div className="flex ">
                <img src="https://tax2win.in/assets-new/img/diy-landing/list_arrow.svg" alt="" />
                <p className='text-white'>Lowest Filing Fees</p>
              </div>
            </div>
          </div>

          <div className="looking-btn flex  bg-white lg:px-5 md:px-5 px-2 lg:w-72 gap-2 justify-center py-3 rounded-full">
            <p className='font-semibold text-lg text-black'>Connect with Experts</p>
            <img src="https://tax2win.in/assets-new/img/diy-landing/bdark-arrow.svg"></img>
          </div>

        </div>


      </div>
      {/* Made a mistake in your FIled ITR section */}

      <div className="made-a-mistake-outer flex flex-col justify-center items-center py-9">
        <h1 className='font-bold text-4xl my-14'>Made a Mistake in Your Filed ITR? File a Revised Return</h1>
        <div className="revised-returns flex flex-wrap justify-center gap-5 ">
          <div className="revised-return p-5 rounded-3xl">
            <img src="https://tax2win.in/assets-new/img/diy-landing/pre-fill-data-from-it-department.svg" alt="" />
            <h3 className='text-xl font-bold mb-2 mt-2'>Eligibility</h3>
            <p className='text-xl  mb-2'>Anyone who has filed an original or belated income
              tax return under Section 139(1) and section
              139(4) respectively of the Income Tax Act, 1961, can file a revised return.</p>

          </div>

          <div className="revised-return p-5 rounded-3xl">
            <img src="https://tax2win.in/assets-new/img/new-theme/icon_upload.svg" alt="" />
            <h3 className='text-xl font-bold mb-2 mt-2'>Filing Process</h3>
            <p className='text-xl  mb-2'>You can file a revised return with Tax2Win. Just select 'Revised return' on the ITR Details
              page and enter the correct information. If tax filing feels overwhelming,
              our experts are just a click away to help you out. Connect with us today.</p>
          </div>

          <div className="revised-return p-5 rounded-3xl">
            <img src="https://tax2win.in/assets-new/img/new-theme/diy-filing.svg" alt="" />
            <h3 className='text-xl font-bold mb-2 mt-2'>Reasons for filing Revised Return</h3>
            <p className='text-xl  mb-2'>Correction of errors, Missed Tax Deductions, Missed Income Declaration, Personal information modifications, etc.</p>
          </div>

          <div className="revised-return p-5 rounded-3xl">
            <img src="https://tax2win.in/assets-new/img/new-theme/tax-notice-assistance.svg" alt="" />
            <h3 className='text-xl font-bold mb-2 mt-2'>Deadline</h3>
            <p className='text-xl  mb-2'>File your revised return by December 31 of the relevant assessment year.</p>
          </div>
        </div>
      </div>

      {/* Find ITR Filling Plans Section start */}

      <div className="Itr-plans-section flex flex-col justify-center items-center py-14  mt-7">
        <h1 className='font-extrabold text-4xl mb-4'>Find the Perfect ITR Filing Plans For Your Needs</h1>
        <p className='text-2xl mb-2 font-semibold'>Choose the tailored income tax return filing plans to get your IT Returns</p>

        <div className="itr-plans mt-14 flex flex-wrap gap-5">
          <div className="itr-plan rounded-2xl p-7">
            <div className="flex justify-end">
              <div className="itrfilling-btn inline-flex px-5 py-1  rounded-full mb-6 ">
                <p className='font-bold'>#itrfiling</p>
              </div>
            </div>
            <h2 className='font-semibold text-2xl mb-3'>eCA Assisted - Standard</h2>
            <p className='font-bold mb-2'>Plan is applicable for:-</p>
            <div className='flex gap-3 mb-2'>
              <img src="https://tax2win.in/assets-new/img/diy-landing/arrow-green.svg" alt="" />
              <p className=''>Salary Income</p>
            </div>
            <div className='flex gap-3 mb-2'>
              <img src="https://tax2win.in/assets-new/img/diy-landing/arrow-green.svg" alt="" />
              <p>House Property Income</p>
            </div>
            <div className='flex gap-3 mb-3'>
              <img src="https://tax2win.in/assets-new/img/diy-landing/arrow-green.svg" alt="" />
              <p>Interest & Other Sources Income</p>
            </div>
            <p className='mb-2 font-bold '>Services Included:-</p>
            <div className='flex gap-3 mb-2'>
              <img src="https://tax2win.in/assets-new/img/diy-landing/arrow-green.svg" alt="" />
              <p>Easy ITR e-filing for one A.Y.</p>
            </div>
            <div className='flex gap-3 mb-2'>
              <img src="https://tax2win.in/assets-new/img/diy-landing/arrow-green.svg" alt="" />
              <p>Suggestion to maximise tax deductions</p>
            </div>
            <div className='flex gap-3 mb-2'>
              <img src="https://tax2win.in/assets-new/img/diy-landing/arrow-green.svg" alt="" />
              <p>26AS Data Import</p>
            </div>
            <div className='flex gap-3 mb-2'>
              <img src="https://tax2win.in/assets-new/img/diy-landing/arrow-green.svg" alt="" />
              <p>Tax Payment Assistance</p>
            </div>
            <div className='flex gap-3 mb-3 pb-6'>
              <img src="https://tax2win.in/assets-new/img/diy-landing/arrow-green.svg" alt="" />
              <p>Expanded set of self-help tools</p>
            </div>

            <p className='text-red-700 text-xl strike mt-7'>₹1499</p>
            <div className='flex justify-between align-middle'>
              <p className='text-4xl font-bold'>₹1274</p>
              <div className="buy-btn inline-flex px-4 py-1 font-bold rounded-full">
                <p>Buy Now</p>
              </div>
            </div>
            <p className='mb-8'>+ Taxes</p>
          </div>


          <div className="itr-plan-2 rounded-2xl p-7">
            <div className="flex justify-end">
              <div className="itrfilling-btn inline-flex px-5 py-1 bg-blue rounded-full mb-6 ">
                <p className='font-bold'>#efiling</p>
              </div>
            </div>
            <h2 className='font-semibold text-2xl mb-3 text-white'>File ITR Yourself</h2>
            <p className=' mb-2 text-white'> Includes income from Salary, House Property, Capital Gain/Loss, Mutual Funds, Properties,
              Presumptive Tax u/s 44AD & 44ADA, and Other Sources.</p>

            <div className='plan flex justify-between mb-3 mt-3 pt-2'>
              <p className='text-sm text-white'> Income 0 - 10K</p>
              <div className="free-btn py-1 px-4 bg-amber-400 rounded-full">
                <p className='font-semiblod'>Free</p>
              </div>
            </div>
            <div className="plan mb-3 pt-2">
              <div className="flex justify-between mb-1">
                <p className='text-xl text-white font-semibold'>Basic</p>
                <div className="flex gap-2">
                  <p className='text-white strike' >₹99</p>
                  <div className="bg-white rounded-full  px-4">
                    <p className='text-lg text-blue'>₹49</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <p className='text-sm text-white'>Income 10K - 1L</p>
                <p className='text-sm text-white'>+ Taxes</p>
              </div>
            </div>

            <div className="plan mb-3 pt-2">
              <div className="flex justify-between mb-1">
                <p className='text-xl text-white font-semibold'> Standard</p>
                <div className="flex gap-2">
                  <p className='text-white strike' >₹449</p>
                  <p className='text-2xl text-white font-bold'>₹382</p>
                </div>
              </div>
              <div className="flex justify-between">
                <p className='text-sm text-white'>Income 1L - 5L</p>
                <p className='text-sm text-white'>+ Taxes</p>
              </div>
            </div>

            <div className="plan mb-3 pt-2">
              <div className="flex justify-between mb-1">
                <p className='text-xl text-white font-semibold '>Advance</p>
                <div className="flex gap-2">
                  <p className='text-white strike' >₹649</p>
                  <p className='text-2xl text-white font-bold'>₹552</p>
                </div>
              </div>
              <div className="flex justify-between">
                <p className='text-sm text-white'>Income 5L - 10L</p>
                <p className='text-sm text-white'>+ Taxes</p>
              </div>
            </div>

            <div className="plan mb-3 pt-2">
              <div className="flex justify-between mb-1">
                <p className='text-xl text-white  font-semibold'>Premium</p>
                <div className="flex gap-2">
                  <p className='text-white strike ' >₹1499</p>
                  <p className='text-2xl text-white font-bold'>₹1274</p>
                </div>
              </div>
              <div className="flex justify-between">
                <p className='text-sm text-white'>Income 10L+</p>
                <p className='text-sm text-white'>+ Taxes</p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="filling-now-btn bg-white inline-flex py-2 px-5 rounded-full gap-4 mt-8">
                <p className='text-lg font-semibold '>Start Filling Now</p>
                <img src="	https://tax2win.in/assets-new/img/new-theme/b_ghost_arrow.svg" alt="" />
              </div>
            </div>

          </div>


          <div className="itr-plan rounded-2xl p-7">
            <div className="flex justify-end">
              <div className="itrfilling-btn inline-flex px-5 py-1  rounded-full mb-6 ">
                <p className='font-bold'>#fileincometaxreturn</p>
              </div>
            </div>
            <h2 className='font-semibold text-2xl mb-3'>eCA Assisted - Capital Gain</h2>
            <p className='font-bold mb-2'>Plan is applicable for:-</p>
            <div className='flex gap-3 mb-2'>
              <img src="https://tax2win.in/assets-new/img/diy-landing/arrow-green.svg" alt="" />
              <p>Salary Income from multiple employer            </p>
            </div>
            <div className='flex gap-3 mb-2'>
              <img src="https://tax2win.in/assets-new/img/diy-landing/arrow-green.svg" alt="" />
              <p>Capital Gain Income from securities , property , mutual funds , crypto</p>
            </div>
            <div className='flex gap-3 mb-3'>
              <img src="https://tax2win.in/assets-new/img/diy-landing/arrow-green.svg" alt="" />
              <p>Business Income & Interest</p>
            </div>
            <p className='mb-2 font-bold '>Services Included:-</p>
            <div className='flex gap-3 mb-2'>
              <img src="https://tax2win.in/assets-new/img/diy-landing/arrow-green.svg" alt="" />
              <p>Easy ITR e-filing for one A.Y.</p>
            </div>
            <div className='flex gap-3 mb-2'>
              <img src="https://tax2win.in/assets-new/img/diy-landing/arrow-green.svg" alt="" />
              <p>Relief u/s 89</p>
            </div>
            <div className='flex gap-3 mb-2'>
              <img src="https://tax2win.in/assets-new/img/diy-landing/arrow-green.svg" alt="" />
              <p>Expanded set of self-help tools</p>
            </div>
            <div className='flex gap-3 mb-2'>
              <img src="https://tax2win.in/assets-new/img/diy-landing/arrow-green.svg" alt="" />
              <p>26AS Data Import</p>
            </div>

            <p className='text-red-700 text-xl strike mt-7'>₹4999</p>
            <div className='flex justify-between align-middle'>
              <p className='text-4xl font-bold'>₹4249</p>
              <div className="buy-btn inline-flex px-4 py-1 font-bold rounded-full">
                <p>Buy Now</p>
              </div>
            </div>
            <p className='mb-8'>+ Taxes</p>
          </div>

        </div>
      </div>


      {/* Faqs section start from here */}

      <div className="Faq-section pt-28">
        <div className="faq-head flex justify-center">
          <h1 className='text-4xl font-bold mb-10'>FAQs on Income Tax Returns Filing</h1>
        </div>

        <div className="faq pb-7 mt-6">
          <p className="que text-2xl font-bold mb-2">What is ITR filing?</p>
          <p className="ans ">E-filing of income tax returns refers to the process of filing ITR (Income Tax Return)
            online. In other words, it is the process of submitting your tax returns electronically.</p>
        </div>

        <div className="faq pb-7 mt-6">
          <p className="que text-2xl font-bold mb-2">What are the documents required to file ITR?</p>
          <p className="ans mb-3">Following are the documents required for filing ITR:</p>
          <ul>
            <li> ●   <a href="" className="link-p">Form 16</a></li>
            <li>● <a href="" className="link-p">Aadhar</a> and <a href="" target="_blank" className="link-p">PAN Card</a></li>
            <li> ● Salary Slips</li>
            <li>●   Bank interest certificates</li>
            <li>● TDS certificate issued by banks and others</li>
            <li> ● Annual Information Statement</li>
            <li> ●  Proofs of tax-saving investment</li>
            <li>●  <a href="" className="link-p">Capital gains statement</a></li>
            <li>● Details of foreign assets and investments</li>
            <li>● <a href="" className="link-p">Form 26AS</a></li>
          </ul>
        </div>
        <div className="faq pb-7 mt-6">
          <p className="que text-2xl font-bold mb-2">What are the benefits of filing an ITR?</p>
          <p className="ans mb-3">Apart from staying compliant, there are various other benefits of filing income tax return online.
            Some of them are listed below:</p>
          <ul>
            <li>●  Easy loan approval</li>
            <li>●  Income and Address Proof</li>
            <li>●  Quick Visa Processing</li>
            <li>●  ITR filing online ensures speedy income tax refund</li>
            <li>●  Acts as proof of income and address</li>
            <li>●  Losses can be Carried Forward</li>
            <li>●  For buying term insurance</li>
            <li>●  Avoid penalty on non-filing of income tax returns</li>
          </ul>
        </div>

        <div className="faq pb-7 mt-6">
          <p className="que text-2xl font-bold mb-2">Which income tax return should I select for e-filing?</p>
          <p className="ans mb-3">There are 7 ITR forms in India; each served to different taxpayer profiles:</p>
          <ul>
            <li>● <b><a className="link-p" href="">ITR 1 (Sahaj):</a></b> For residents with an income up to Rs 50 lakh from salary, a single house property, or other sources (excluding lottery and racehorses). NRIs cannot use this form.</li>
            <li>● <b><a className="link-p" href="">ITR 2:</a></b> For individuals and HUFs with income above Rs 50 lakh and income from agriculture exceeding Rs 5,000. Suitable for those earning from salary, home, capital gains, or other means. Can also be used by NRIs.</li>
            <li>● <b><a className="link-p" href="">ITR 3:</a></b> For individuals and HUFs earning from a profession or sole proprietorship, including income from business, employment, real estate, capital gains, trades, and dealing in futures and options.</li>
            <li>● <b><a className="link-p" href="">ITR 4: (Sugam):</a></b> For individuals with income from a business with turnover up to Rs 2 crore or a profession with income up to Rs 50 lakh. Suitable for freelancers in notified professions.</li>
            <li>● <b><a className="link-p" href="">ITR 5:</a></b> For entities like Investment Funds, Business Trusts, Cooperative societies, LLPs, AOPs, BOIs, etc. to declare profits and other sources of income.</li>
            <li>● <b><a className="link-p" href="">ITR 6:</a></b> For companies, except those seeking Section 11 exemption. Requires disclosure of housing property rental revenue, business income, and multiple sources of income.</li>
            <li>● <b><a className="link-p" href="">ITR 7:</a></b> For individuals or entities required to furnish returns under Sections 139(4A) to 139(4F), which include trusts, political parties, scientific research associations, medical institutions, universities, business trusts, and investment funds.</li>
          </ul>
        </div>


        <div className="faq pb-7 mt-6">
          <p className="que text-2xl font-bold mb-2">How Can I File my ITR Myself?</p>
          <p className="ans ">Yes, taxpayers can file their ITR themselves either through the income tax department’s website or through Tax2win’s website.
            Filing your Income Tax Return (ITR) with Tax2win offers a convenient and user-friendly experience. All you have to do is enter some basic
            information about your salary and personal details, and the AI-integrated DIY ITR filing software automatically extracts your personal
            details and employment details, selects the appropriate ITR form, computes the tax liability, and files your ITR.</p>
        </div>

        <div className="faq pb-7 mt-6">
          <p className="que text-2xl font-bold mb-2">What if I missed filing my ITR?</p>
          <p className="ans">If you missed the income tax filing due date, don’t worry. You still have a
            chance to file a late return but with penalty.
            The last date to file a belated return is 31 December.</p>
        </div>

        <div className="faq pb-7 mt-6">
          <p className="que text-2xl font-bold mb-2">What is the late fee for ITR Filing?</p>
          <p className="ans"> <span className='link-p'>Section 234F</span> of Income Tax Act deals with penalties on taxpayers who fails to file their income tax return before the
            due date. This due date to file ITR is generally 31st July. However, if the taxpayer miss to file by the deadline,
            they have the option to file late return with the penalty of up to Rs. 5000. This penalty can be increased depending on the delay
            in filing ITR. Section 234F mandates taxpayers who miss the 31st deadline for filing returns face penalties.</p>
        </div>

        <div className="faq pb-7 mt-6">
          <p className="que text-2xl font-bold mb-2">Can I file a revised return after 31st July?</p>
          <p className="ans">Yes, if you discover an error in your filed ITR, you can correct it by filing a revised return.
            The last date to revise your return is 31 December.</p>
        </div>

        <div className="faq pb-7 mt-6">
          <p className="que text-2xl font-bold mb-2">Is it compulsory to do the e-filing of ITR?</p>
          <p className="ans">Yes, e-filing of Income Tax Returns (ITR) is mandatory if the gross total income of an individual
            taxpayer exceeds the basic exemption limit. Under the old tax regime, individuals under 60 years old needed to file
            an Income Tax Return (ITR) if their income exceeded Rs. 2.5 lakhs,
            while individuals over 60 years old needed to file if their income exceeded Rs. 3 lakhs..</p>
          <p>In the new tax regime, the income threshold for individuals under 60 years old has been raised to Rs. 4 lakhs (post budget 2025). <a href="" className="link-p">Other Scenarios Where it is Mandatory to File ITR</a>.</p>

        </div>

        <div className="faq pb-7 mt-6">
          <p className="que text-2xl font-bold mb-2">Can I do ITR filing without Form 16?</p>
          <p>Yes, you can <a target="_blank" className="link-p" href="">file your ITR without Form 16</a>. Salaried employees can file their ITR even
            if they have not received Form 16 from their employer. In such cases, the TDS details can be found using Form 26AS, and income details
            can be found using AIS/TIS. Alternatively, you can ask your employer to issue Form-16, as it serves as a statement of TDS deducted.</p>
        </div>

        <div className="faq pb-7 mt-6">
          <p className="que text-2xl font-bold mb-2">What is the basic exemption limit for filing an ITR?</p>
          <p>In India, the basic exemption limit for filing an Income Tax Return (ITR) varies depending
            on the chosen tax regime
            (old or new) and the taxpayer's age.</p>

          <p className='text-xl font-semibold mb-3 mt-4'>Tax slabs under the new tax regime (FY 2025-26)</p>

          <table className="table-1 table-auto border-collapse border border-gray-300 mb-5">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left font-bold">Income Range</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-bold">Tax Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 ">0-4 lakh</td>
                <td className="border border-gray-300 px-4 py-2">Nil</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 ">4-8 lakh</td>
                <td className="border border-gray-300 px-4 py-2">5%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 ">8-12 lakh</td>
                <td className="border border-gray-300 px-4 py-2">10%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 ">12-16 lakh</td>
                <td className="border border-gray-300 px-4 py-2">15%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 ">16-20 lakh</td>
                <td className="border border-gray-300 px-4 py-2">20%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 ">20-24 lakh</td>
                <td className="border border-gray-300 px-4 py-2">25%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 ">Above 24 lakh</td>
                <td className="border border-gray-300 px-4 py-2">30%</td>
              </tr>
            </tbody>
          </table>

          <div className="table-2-outer flex flex-wrap gap-4 mt-10">
            <div>
              <p className=' text-xl font-semibold mb-3'>New Regime (FY 2024-25)</p>

              <table className="table-2 table-auto w-full border-collapse border border-gray-300 mb-5">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-4 py-2 text-left font-bold">Range of Income (Rs.)</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-bold">Tax Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 ">Up to 3,00,000</td>
                    <td className="border border-gray-300 px-4 py-2">NIL</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 ">3,00,000-7,00,000</td>
                    <td className="border border-gray-300 px-4 py-2">5%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 ">7,00,000-10,00,000</td>
                    <td className="border border-gray-300 px-4 py-2">10%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 ">10,00,000-12,00,000</td>
                    <td className="border border-gray-300 px-4 py-2">15%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 ">12,00,000-15,00,000</td>
                    <td className="border border-gray-300 px-4 py-2">20%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 ">Above 15,00,000</td>
                    <td className="border border-gray-300 px-4 py-2">30%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <p className='text-xl font-semibold mb-3'>Old Regime (FY 2024-25)</p>

              <table className="table-2 table-auto w-full border-collapse border border-gray-300 mb-5">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-4 py-2 text-left font-bold">Range of Income (Rs.)</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-bold">Tax Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 ">Up to 2,50,000</td>
                    <td className="border border-gray-300 px-4 py-2">Nil</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 ">2,50,000-5,00,000</td>
                    <td className="border border-gray-300 px-4 py-2">5%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 ">5,00,000-10,00,000</td>
                    <td className="border border-gray-300 px-4 py-2">20%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 ">Above 10,00,000</td>
                    <td className="border border-gray-300 px-4 py-2">30%</td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>

        </div>

        <div className="faq pb-7 mt-6">
          <p className="que text-2xl font-bold mb-2">What is the last date to e-verify income tax return?</p>
          <p>The new time limit for <span className='link-p'>e-verification</span> of ITR is 30 days from the date
             of filing the return of income. However, where the return is filed on or before 31.07.2022, the earlier time limit of 120 days
              will continue to apply. <span className='link-p'>e-Verify your ITR</span></p>
        </div>

        <div className="faq pb-7 mt-6">
          <p className="que text-2xl font-bold mb-2">How can I check my income tax refund status?</p>
          <p>You can check the refund status of your ITR via Tax2win's "<a href="" className="link-p">Check Income Tax Refund Status</a>."</p>
        </div>


        <div className="faq pb-7 mt-6">
          <p className="que text-2xl font-bold mb-2">Is there any charges associated with Tax2win for ITR filing?</p>
          <p className='mb-2'>Tax2win has simplified the complex task of filing income tax returns. It is fast, safe, and easy to use. With its
             user-friendly platform,
             you can easily file your ITR in just 4 minutes. A small platform usage fee is applicable to deliver smooth services.</p>
        </div>
        
        <div className="faq pb-7 mt-6">
          <p className="que text-2xl font-bold mb-2">What is a rebate under Section 87A and who can claim it?</p>
         <p className='mb-2'>Under Section 87A of the Income Tax Act, an individual who is a resident in India and has a total income not exceeding
           Rs. 5,00,000 is eligible to claim a rebate from their tax liability under the old tax regime. The rebate is granted as a 
           deduction from the tax liability, and it is the lower of:</p>
           <ul className='mb-2'>
                              <li> ● 100% of the income-tax liability, or</li>
                              <li> ● Rs. 12,500.</li>
                            </ul>

                 <p className='mb-2'>Further, a maximum rebate of Rs. 25,000 is allowed under section 87A from the amount of 
                  income tax on total income, which is chargeable to tax under new tax regime. However, this rebate is allowed if the total
                   income of assessee chargeable to tax under section 115BAC(1A) is up to Rs. 7,00,000.</p>   

               <h3>Budget 2025 Update:</h3>   
               <p className='mb-2'>For salaried individuals opting for the new tax regime, income up to Rs. 12,75,000 will be tax-free. Additionally,
                 the Section 87A rebate has been increased to Rs. 60,000, up from the previous threshold of Rs.
                  25,000 under the new tax regime. This provides significant tax relief to individuals with taxable income up to Rs. 12,75,000 under the new regime.</p>   
                  
                  <p className='mb-2'>The changes announced in Budget 2025 will be applicable from FY 2025-26 onwards.</p>      
        </div>


      </div>

    </>
  )
}

export default Efilling_platform



