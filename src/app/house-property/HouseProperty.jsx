

"use client"

import "./houseproperty.css";
import React, { useState } from 'react';

const HouseProperty = () => {
    // for self occupied
    const [showYesContent, setShowYesContent] = useState(false);
    const [selectedButton, setSelectedButton] = useState('no');

    // for let out
    const [showLetYesContent, setShowLetYesContent] = useState(false);
    const [LetselectedButton, setLetSelectedButton] = useState('no');
    const [LetOutContent, setLetOutContent] = useState('no');
    const [letOutSections, setLetOutSections] = useState(1);

    const addLetOutSection = () => setLetOutSections(letOutSections + 1);
    const removeLetOutSection = () => {
        if (letOutSections > 1) setLetOutSections(letOutSections - 1);
    };

    return (
        <>
            <div className="house-property flex flex-col justify-center items-center text-center pt-20">
                <h1 className="text-2xl font-semibold">ENTER OWNED HOUSE PROPERTY DETAILS-RENT RECEIVED OR HOME LOAN INTEREST PAID</h1>
                <p className="text-xl mt-1">Enter details about all your Self occupied / Let out property.</p>

                <div className="house-propery-form rounded-2xl bg-white p-5 lg:p-8 md:p-8 xl:p-8 mb-7 mt-10 flex flex-col ">
                    <div className="flex flex-wrap justify-around py-4 types-imput items-center">
                        <label htmlFor="house-property-type" className="text-xl font-semibold mb-3">Types of House Property</label>
                        <select id="house-property-type" className="p-3 rounded-lg" onChange={(e) => setLetOutContent(e.target.value)}>
                            <option value="self">Self Occupied</option>
                            <option value="let">Let Out</option>
                            <option value="deemed">Deemed Let Out</option>
                        </select>
                    </div>

                    <div className="address pb-5 flex flex-col items-start">
                        <h3 className="text-xl font-semibold mb-6 mt-4">Address details</h3>
                        <div className="address-inputs flex flex-wrap gap-4">
                            <div className="flex flex-col items-start">
                                <label htmlFor="pincode">Pincode</label>
                                <input id="pincode" type="text" className="p-3 rounded-lg mt-1 add-inpt" />
                            </div>
                            <div className="flex flex-col items-start">
                                <label htmlFor="address">Address</label>
                                <input id="address" type="text" className="p-3 rounded-lg mt-1 add-inpt" />
                            </div>
                        </div>
                    </div>


                     {/* content for Deemed let out option */}

                    {LetOutContent === 'deemed' && (
                         <>
                              <div className="deemed-content flex justify-start mt-6 gap-5 pb-5 ">
                                     <div className="yes-input flex flex-col">
                                         <label htmlFor="interest-on-loan" className="text-xl font-semibold">Estimated rent receivable *</label>
                                         <input id="interest-on-loan" type="text" className="p-3 rounded-lg mt-3" />
                                     </div>
                                 </div>
                       </>
                    )}

                    {/* content for let out option */}

                    {LetOutContent === 'let' && (
                        <>
                          <div className="deemed-content  mt-6 flex flex-col items-start pb-5 ">
                          <h2 className="text-xl font-semibold">Tenant Details</h2>
                            {[...Array(letOutSections)].map((_, index) => (
                              
                                    <div key={index} className="deemed-inputs flex flex-wrap justify-start mt-3 gap-5 ">
                                        <div  className="yes-input flex flex-col items-start">
                                            <label htmlFor={`tenant-name-${index}`}>Name of Tenant*</label>
                                            <input id={`tenant-name-${index}`} type="text" className="p-3 rounded-lg mt-3" />
                                        </div>

                                        <div className="yes-input flex flex-col items-start">
                                            <label htmlFor={`tenant-pan-${index}`}>PAN of Tenant (optional)</label>
                                            <input id={`tenant-pan-${index}`} type="text" className="p-3 rounded-lg mt-3" />
                                        </div>

                                        <div className="yes-input flex flex-col items-start">
                                            <label htmlFor={`rent-received-${index}`}>Rent Received *</label>
                                            <input id={`rent-received-${index}`} type="text" className="p-3 rounded-lg mt-3" />
                                        </div>
                                    </div>
                              
                            ))}
                            </div>
                            <div className="flex justify-end gap-4 mt-4">
                                <button onClick={addLetOutSection} className="p-1 px-3  text-2xl font-bold  rounded-lg bg-blue text-white">+ </button>
                                <button onClick={removeLetOutSection} className="p-1 px-3 text-2xl font-bold rounded-lg bg-gray-300 text-black">- </button>
                            </div>
                        </>
                    )}

                    {/* self yes no section */}
                    <div className="loan-input flex flex-wrap justify-between mt-9">
                        <h2 className="text-xl font-semibold">Have you taken any loan to buy the property?</h2>
                        <div className="loan-btns flex gap-4 mt-3">
                            <div className={`yes-btn rounded-full shadow px-8 py-1 ${selectedButton === 'no' ? 'bg-blue' : ''}`} onClick={() => { setShowYesContent(false); setSelectedButton('no'); }}><p className={`${selectedButton === 'no' ? 'text-white' : ''}`}>No</p></div>
                            <div className={`yes-btn rounded-full shadow px-8 py-1 ${selectedButton === 'yes' ? 'bg-blue' : ''}`} onClick={() => { setShowYesContent(true); setSelectedButton('yes'); }}><p className={`${selectedButton === 'yes' ? 'text-white' : ''}`}>Yes</p></div>
                        </div>
                    </div>

                    {showYesContent && (
                        <div className="yes-content flex flex-wrap  mt-6 gap-5">
                            <div className="yes-input flex  flex-col items-start">
                                <label htmlFor="interest-on-loan">Interest on Loan for purchase of house property</label>
                                <input id="interest-on-loan" type="text" className="p-3 rounded-lg mt-1" />
                            </div>
                            <div className="yes-input flex flex-col items-start">
                                <label htmlFor="repair-loan">Interest on Loan for repair/renewal or reconstruction</label>
                                <input id="repair-loan" type="text" className="p-3 rounded-lg mt-1" />
                            </div>
                            <div className="yes-input flex flex-col items-start">
                                <label htmlFor="pre-construction-interest">Pre Construction Period Interest</label>
                                <input id="pre-construction-interest" type="text" className="p-3 rounded-lg mt-1" />
                            </div>
                        </div>
                    )}

                    {/* let out yes no section */}
                    {(LetOutContent === 'let' || LetOutContent === 'deemed') && (
                        <>
                            <div className="loan-input flex flex-wrap justify-between mt-9">
                                <h2 className="text-xl font-semibold">Property tax paid?</h2>
                                <div className="loan-btns flex gap-4 mt-3">
                                    <div className={`yes-btn rounded-full shadow px-8 py-1 ${LetselectedButton === 'no' ? 'bg-blue' : ''}`} onClick={() => { setShowLetYesContent(false); setLetSelectedButton('no'); }}><p className={`${LetselectedButton === 'no' ? 'text-white' : ''}`}>No</p></div>
                                    <div className={`yes-btn rounded-full shadow px-8 py-1 ${LetselectedButton === 'yes' ? 'bg-blue' : ''}`} onClick={() => { setShowLetYesContent(true); setLetSelectedButton('yes'); }}><p className={`${LetselectedButton === 'yes' ? 'text-white' : ''}`}>Yes</p></div>
                                </div>
                            </div>

                            {showLetYesContent && (
                                <div className="yes-content flex justify-start mt-3 gap-5">
                                    <div className="yes-input flex flex-col">
                                        <label htmlFor="interest-on-loan">Property Tax/ Municipal Tax Paid By Owner *</label>
                                        <input id="interest-on-loan" type="text" className="p-3 rounded-lg mt-1" />
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>


                <div className="add-property flex xl:justify-end lg:justify-end md:justify-end sm:justify-end justify-center mb-5">
                     <div className="add-btn rounded-full shadow px-8 py-2">
                        <p className="text-white">+ Add House Property</p>
                     </div>
                 </div>

                 <div className="financial-btns flex flex-wrap justify-between mb-10">
                     <a href="\basic-details2">
                         <div className="back-btn flex items-center gap-3 py-3 px-10 mb-4 bg-white rounded-md">
                             <img src="https://tax2win.in/assets-new/img/new-theme/diy-flow/back-arrow.svg" alt="" height={15} width={15} />
                             <p className="text-blue">Back</p>
                         </div>
                     </a>
                     <div className="other-btns flex flex-wrap gap-4">
                         <div className="get-button px-10 py-3 rounded-md">
                             <p className="text-white font-semibold">GET CA ASSISTED</p>
                         </div>
                         <a href="\deduction">
                             <div className="continue-btn flex gap-3 items-center px-10 py-3 rounded-md">
                                 <p className="text-white font-semibold">CONTINUE</p>
                                 <img src="https://tax2win.in/assets-new/img/new-theme/diy-flow/nex-arrow.svg" alt="" />
                             </div>
                         </a>
                     </div>
                 </div>
                
            </div>
        </>
    )
}

export default HouseProperty;
