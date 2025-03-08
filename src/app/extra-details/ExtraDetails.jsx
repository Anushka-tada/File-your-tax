"use client"

import React, { useState } from 'react';
import "./extra-details.css";

const ExtraDetails = () => {
    const [showSection139, setShowSection139] = useState(false);

    const handleSelectChange = (event) => {
        const value = event.target.value;
        if (value === "Under Section 139(1)" || value === "Others") {
            setShowSection139(true);
        } else {
            setShowSection139(false);
        }
    };

    return (
        <div className="extra-details flex flex-col justify-center items-center text-center pt-20">
            <h1 className="text-2xl font-semibold ">ITR Details</h1>

            <div className="extra-detail-form rounded-2xl bg-white p-5 lg:p-10 md:p-10 xl:p-10 mb-5 mt-10">
                <div className="extra-input flex flex-wrap justify-between items-center full">
                    <div className="extra-text flex flex-col items-start gap-3 half text-left">
                        <h3 className='text-xl font-semibold'>Return Filing Type</h3>
                        <p className='mb-2'>If you have already filed ITR for this year and want to make corrections select Revised Return, else select Original Return</p>
                    </div>
                    <select id="" className="p-3 rounded-lg half ">
                        <option value="">Updated Return u/s 139(8A)</option>
                    </select>
                </div>
            </div>

            <div className="extra-detail-form rounded-2xl bg-white p-5 lg:p-10 md:p-10 xl:p-10 mb-7">
                <div className="extra-input flex flex-wrap justify-between items-center">
                    <div className="extra-text flex flex-col items-start gap-3 text-left">
                        <h3 className='text-xl font-semibold'>Whether the Return is already filed for this financial year?</h3>
                    </div>
                    <select id="" className="p-3 rounded-lg" onChange={handleSelectChange}>
                        <option value="">Please Select</option>
                        <option value="Not Filed">Not Filed</option>
                        <option value="Under Section 139(1)">Under Section 139(1)</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
            </div>

            {showSection139 && (
                <div className="extra-detail-form rounded-2xl bg-white p-5 lg:p-10 md:p-10 xl:p-10 mb-7">
                    <div className="extra-inputs flex flex-wrap gap-5">
                        <div className="extra-input flex flex-col items-start gap-1">
                            <label htmlFor="">ITR Filed Form</label>
                            <select id="" className="p-3 rounded-lg">
                                <option value="">Please Select</option>
                                <option value="ITR 1">ITR 1</option>
                                <option value="ITR 2">ITR 2</option>
                                <option value="ITR 3">ITR 3</option>
                                <option value="ITR 4">ITR 4</option>
                                <option value="ITR 5">ITR 5</option>
                                <option value="ITR 6">ITR 6</option>
                                <option value="ITR 7">ITR 7</option>
                            </select>
                        </div>
                        <div className="extra-input flex flex-col items-start gap-1">
                            <label htmlFor="" className='text-sm'>Filing Date</label>
                            <input type="text" className="p-3 rounded-lg" />
                        </div>
                        <div className="extra-input flex flex-col items-start gap-1">
                            <label htmlFor="" className='text-sm'>Acknowledgment No.</label>
                            <input type="text" className="p-3 rounded-lg" />
                        </div>
                    </div>

                    <h3 className='text-xl font-semibold mt-7 mb-5 text-left'>Fill the details of ITR already filed for this financial year only</h3>
                    <div className="extra-inputs flex flex-wrap gap-5">
                        <div className="extra-input flex flex-col items-start gap-1">
                            <label htmlFor="" className='text-sm'>Total Income as per last valid return</label>
                            <input type="text" className="p-3 rounded-lg" />
                        </div>
                        <div className="extra-input flex flex-col items-start gap-1">
                            <label htmlFor="" className='text-sm'>Total Tax Payable as per last ITR</label>
                            <input type="text" className="p-3 rounded-lg" />
                        </div>
                        <div className="extra-input flex flex-col items-start gap-1">
                            <label htmlFor="" className='text-sm'>Refund Claimed as per the last ITR</label>
                            <input type="text" className="p-3 rounded-lg" />
                        </div>
                        <div className="extra-input flex flex-col items-start gap-1">
                            <label htmlFor="" className='text-sm'>Refund Issued by Income Tax Department as per last ITR</label>
                            <input type="text" className="p-3 rounded-lg" />
                        </div>
                        <div className="extra-input flex flex-col items-start gap-1">
                            <label htmlFor="" className='text-sm'>Regular assessment tax paid if any</label>
                            <input type="text" className="p-3 rounded-lg" />
                        </div>
                    </div>

                    <div className="extra-input flex flex-wrap justify-between items-center px-3 py-10 shadow-md rounded-lg ">
                        <h3 className='text-xl font-semibold mb-2'>Reason to file the Updated ITR </h3>
                        <select id="" className="p-3 rounded-lg">
                                <option value="">Please Select</option>
                                <option value="ITR 1 ">Income not reported correctly  </option>
                                <option value="ITR 2">Wrong heads of income chosen</option>
                                <option value="ITR 3">Reduction of tax credit u/s 115JB/115JC</option>
                                <option value="ITR 4">Wrong Rate of Tax</option>
                                <option value="ITR 5">Others</option>
                            </select>
                    </div>

                    <h3 className='text-xl font-semibold mt-7 mb-5 text-left'>Fill the additional income which you are entering in the updated ITR</h3>
                    <div className="extra-inputs flex flex-wrap gap-5">
                        <div className="extra-input flex flex-col items-start gap-1">
                            <label htmlFor="" className='text-sm'>Income from Salary</label>
                            <input type="text" className="p-3 rounded-lg" />
                        </div>
                        <div className="extra-input flex flex-col items-start gap-1">
                            <label htmlFor="" className='text-sm'>Income from house property</label>
                            <input type="text" className="p-3 rounded-lg" />
                        </div>
                        <div className="extra-input flex flex-col items-start gap-1">
                            <label htmlFor="" className='text-sm'>Income from Business or Profession</label>
                            <input type="text" className="p-3 rounded-lg" />
                        </div>
                        <div className="extra-input flex flex-col items-start gap-1">
                            <label htmlFor="" className='text-sm'>Income from Capital Gains</label>
                            <input type="text" className="p-3 rounded-lg" />
                        </div>
                        <div className="extra-input flex flex-col items-start gap-1">
                            <label htmlFor="" className='text-sm'>Income from Other Sources</label>
                            <input type="text" className="p-3 rounded-lg" />
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
};

export default ExtraDetails;
