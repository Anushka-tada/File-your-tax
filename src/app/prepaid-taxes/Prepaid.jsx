"use client"

import React, { useState } from 'react';
import "./prepaid.css";

const Prepaid = () => {
  const [sections, setSections] = useState([
    { id: Date.now(), title: 'Advance Tax and Self Assessment Tax Payment', description: 'Add details of any tax paid directly to the government via Challan 280', showInput: false, inputs: [{ id: Date.now() }] },
    { id: Date.now() + 1, title: 'Details of payments of tax on updated return u/s 140B', description: '', showInput: false, inputs: [{ id: Date.now() + 1 }] },
    { id: Date.now() + 2, title: 'Details of TDS Paid on Other Than Salary', description: 'If you have had TDS deducted on any source of income except salary; like on interest, rent etc. then you can enter here. (refer Form 16A or 26AS)', showInput: false, inputs: [{ id: Date.now() + 2 }] },
    { id: Date.now() + 3, title: 'Details of TDS Paid on Rental Income', description: 'If you have received rent exceeding Rs. 50,000 per month then this section is for you!! Enter the details of TDS deducted on rent by your tenant u/s 194IB. You can also check this from Form 26AS.', showInput: false, inputs: [{ id: Date.now() + 3 }] },
    { id: Date.now() + 4, title: 'Details of Tax Collected at Source', description: 'If at the time of sale of the specified category of goods, the seller has collected TCS from you then enter the details here. You can also check this from Form 26AS.t', showInput: false, inputs: [{ id: Date.now() + 4 }] }
  ]);

  const toggleShowInput = (id) => {
    setSections(
      sections.map((section) =>
        section.id === id ? { ...section, showInput: !section.showInput } : section
      )
    );
  };

  const addInput = (sectionId) => {
    setSections(
      sections.map((section) =>
        section.id === sectionId
          ? { ...section, inputs: [...section.inputs, { id: Date.now() }] }
          : section
      )
    );
  };

  const removeInput = (sectionId, inputId) => {
    setSections(
      sections.map((section) =>
        section.id === sectionId
          ? { ...section, inputs: section.inputs.filter(input => input.id !== inputId) }
          : section
      )
    );
  };

  return (
    <>
      <div className="prepaid-taxes flex flex-col justify-center items-center text-center pt-20">
        <h1 className="text-2xl font-semibold">ENTER YOUR BANK & AADHAAR DETAILS</h1>
        <p className="text-xl mt-1">Provide your bank details correctly to receive an income tax refund.</p>

        <div className="prepaid-tax-form rounded-2xl bg-white p-5 lg:p-10 md:p-10 xl:p-10 mb-7 mt-10">
          <div className="notes py-6 flex justify-center items-center text-sm rounded-lg ">
            <p>Note: In case of New Tax Regime, only deduction u/s 80CCD(2) is allowed. This is available under Other tab.</p>
          </div>

          <div className="prepaid-inputs">
            {sections.map((section, index) => (
              <div key={section.id} className="prepaid-input py-7 shadow-md rounded-lg px-4 mb-7">
                <div className="input-no flex flex-wrap justify-between items-center mb-3">
                  <div className="input-text flex flex-col items-start gap-2 mb-7 text-left xl:me-32 lg:me-30 md:me-10 me-0">
                    <h3 className='text-xl font-semibold'>{section.title}</h3>
                    <p>{section.description}</p>
                  </div>
                  <div className="btns flex gap-4 mt-3">
                    <div
                      className={`yes-btn rounded-full cursor-pointer shadow px-8 py-1 ${!section.showInput ? 'bg-blue text-white' : ''}`}
                      onClick={() => toggleShowInput(section.id)}
                    >
                      <p>No</p>
                    </div>
                    <div
                      className={`yes-btn rounded-full cursor-pointer shadow px-8 py-1 ${section.showInput ? 'bg-blue text-white' : ''}`}
                      onClick={() => toggleShowInput(section.id)}
                    >
                      <p>Yes</p>
                    </div>
                  </div>
                </div>

                {section.showInput && section.inputs.map((input) => (
                  <div key={input.id} className="input-yes pt-7  mb-5">
                    <div className="inside-inputs flex flex-wrap gap-5">
                      {/* Different input fields based on the section index */}
                      {index === 0 && (
                        <>
                          <div className="inside-input flex flex-col gap-1 items-start">
                            <label htmlFor="">BSR Code </label>
                            <input type="text" className='p-3 rounded-lg' />
                          </div>
                          <div className="inside-input flex flex-col gap-1 items-start">
                            <label htmlFor="">Date of Challan</label>
                            <input type="text" className='p-3 rounded-lg' />
                          </div>
                          <div className="inside-input flex flex-col gap-1 items-start">
                            <label htmlFor="">Challan No.</label>
                            <input type="text" className='p-3 rounded-lg' />
                          </div>
                          <div className="inside-input flex flex-col gap-1 items-start">
                            <label htmlFor="">Tax Amount</label>
                            <input type="text" className='p-3 rounded-lg' />
                          </div>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <div className="inside-input flex flex-col gap-1 items-start">
                            <label htmlFor="">BSR Code </label>
                            <input type="text" className='p-3 rounded-lg' />
                          </div>
                          <div className="inside-input flex flex-col gap-1 items-start">
                            <label htmlFor="">Date of Challan</label>
                            <input type="text" className='p-3 rounded-lg' />
                          </div>
                          <div className="inside-input flex flex-col gap-1 items-start">
                            <label htmlFor="">Challan No.</label>
                            <input type="text" className='p-3 rounded-lg' />
                          </div>
                          <div className="inside-input flex flex-col gap-1 items-start">
                            <label htmlFor="">Tax Amount</label>
                            <input type="text" className='p-3 rounded-lg' />
                          </div>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <div className="inside-input flex flex-col gap-1 items-start">
                            <label htmlFor="">Name of Deductor </label>
                            <input type="text" className='p-3 rounded-lg' />
                          </div>
                          <div className="inside-input flex flex-col gap-1 items-start">
                            <label htmlFor="">TAN of Deductor</label>
                            <input type="text" className='p-3 rounded-lg' />
                          </div>
                          <div className="inside-input flex flex-col gap-1 items-start">
                            <label htmlFor="">Amount on which TDS deducted </label>
                            <input type="text" className='p-3 rounded-lg' />
                          </div>
                          <div className="inside-input flex flex-col gap-1 items-start">
                            <label htmlFor="">Total TDS deducted </label>
                            <input type="text" className='p-3 rounded-lg' />
                          </div>
                        </>
                      )}
                      {index === 3 && (
                        <>
                          <div className="inside-input flex flex-col gap-1 items-start">
                            <label htmlFor="">Name of Deductor </label>
                            <input type="text" className='p-3 rounded-lg' />
                          </div>
                          <div className="inside-input flex flex-col gap-1 items-start">
                            <label htmlFor="">PAN of Deductor</label>
                            <input type="text" className='p-3 rounded-lg' />
                          </div>
                          <div className="inside-input flex flex-col gap-1 items-start">
                            <label htmlFor="">Amount on which TDS deducted </label>
                            <input type="text" className='p-3 rounded-lg' />
                          </div>
                          <div className="inside-input flex flex-col gap-1 items-start">
                            <label htmlFor="">Total TDS deducted </label>
                            <input type="text" className='p-3 rounded-lg' />
                          </div>
                        </>
                      )}
                      {index === 4 && (
                        <>
                          <div className="inside-input flex flex-col gap-1 items-start">
                            <label htmlFor="">Name of Collector</label>
                            <input type="text" className='p-3 rounded-lg' />
                          </div>
                          <div className="inside-input flex flex-col gap-1 items-start">
                            <label htmlFor="">TAN of Collector</label>
                            <input type="text" className='p-3 rounded-lg' />
                          </div>
                          <div className="inside-input flex flex-col gap-1 items-start">
                            <label htmlFor="">Amount on which TCS collected</label>
                            <input type="text" className='p-3 rounded-lg' />
                          </div>
                          <div className="inside-input flex flex-col gap-1 items-start">
                            <label htmlFor="">TTotal TCS Collected </label>
                            <input type="text" className='p-3 rounded-lg' />
                          </div>
                        </>
                      )}
                    </div>

                    {section.inputs.length > 1 && (
                      <div className="remove-input flex justify-end my-3">
                        <button
                          className="remove-btn rounded-lg shadow px-4 py-2 bg-gray-300 text-white"
                          onClick={() => removeInput(section.id, input.id)}
                        >
                          <p className='font-bold text-xl text-black'>-</p>
                        </button>
                      </div>
                    )}
                  </div>
                ))}

                {section.showInput && (
                  <div className="add-input flex justify-end ">
                    <button
                      className="add-btn rounded-lg shadow px-4 py-2 bg-blue text-white"
                      onClick={() => addInput(section.id)}
                    >
                      <p className='font-bold text-xl '>+</p>
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="financial-btns flex flex-wrap justify-between mb-10">
        <a href="\bank-details">
          <div className="back-btn flex items-center gap-3 py-3 px-10 mb-4 bg-white rounded-md">
            <img src="https://tax2win.in/assets-new/img/new-theme/diy-flow/back-arrow.svg" alt="" height={15} width={15} />
            <p className="text-blue">Back</p>
          </div>
        </a>
        <div className="other-btns flex flex-wrap gap-4">
          <div className="get-button px-10 py-3 rounded-md">
            <p className="text-white font-semibold">GET CA ASSISTED</p>
          </div>
          <a href="\extra-details">
            <div className="continue-btn flex gap-3 items-center px-10 py-3 rounded-md">
              <p className="text-white font-semibold">CONTINUE</p>
              <img src="https://tax2win.in/assets-new/img/new-theme/diy-flow/nex-arrow.svg" alt="" />
            </div>
          </a>
        </div>
      </div>
      </div>
    </>
  );
};

export default Prepaid;
