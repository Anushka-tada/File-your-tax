"use client"

import React, { useState } from 'react';
import "./deduction.css";

const Donation = () => {
    const [selectedSection, setSelectedSection] = useState('80GGC');

    const handleSectionChange = (event) => {
        setSelectedSection(event.target.value);
    };

    return (
        <div>
            <div className="donation-form">
                <div className="donation-input policy-type flex flex-wrap justify-evenly mt-3 py-4 rounded-lg items-center">
                    <label htmlFor="section-type" className='text-xl font-semibold'>Donation Type</label>
                    <select id="section-type" className="p-3 rounded-lg" value={selectedSection} onChange={handleSectionChange}>
                        <option value="80GGC">Section 80GGC</option>
                        <option value="80G">Section 80G</option>
                    </select>
                </div>

                {selectedSection === '80GGC' && (
                    <div className='flex flex-col items-start'>
                        <h2 className='text-2xl font-semibold my-5'>Section 80GGC</h2>
                        <div className='flex flex-wrap gap-7'>
                            <div className="donation-input flex flex-col items-start gap-1">
                                <label htmlFor="">Donation Date</label>
                                <input type="date" className="p-3 rounded-lg" />
                            </div>
                            <div className="donation-input flex flex-col items-start gap-1">
                                <label htmlFor="">Donation in Cash</label>
                                <input type="" className="p-3 rounded-lg" />
                            </div>
                            <div className="donation-input flex flex-col items-start gap-1">
                                <label htmlFor="">Donation in Other Mode</label>
                                <input type="" className="p-3 rounded-lg" />
                            </div>
                            <div className="donation-input flex flex-col items-start gap-1">
                                <label htmlFor="">Total Donation Amount</label>
                                <input type="" className="p-3 rounded-lg" />
                            </div>
                            <div className="donation-input flex flex-col items-start gap-1">
                                <label htmlFor="">Eligible Donation Amount</label>
                                <input type="" className="p-3 rounded-lg" />
                            </div>
                        </div>
                    </div>
                )}

                {selectedSection === '80G' && (
                    <div className='flex flex-col items-start'>
                        <h2 className='text-2xl font-semibold my-5'>Section 80G</h2>
                        <p className='text-start font-semibold'>Under section 80G several donations are eligible for deduction either up to 100% or 50% with or without restriction.
                            Just enter the amount we will automatically do the rest of the calculation to get maximum refunds.</p>
                        <div className='flex flex-wrap gap-8 mt-8'>
                            <div className="donation-input flex flex-col items-start gap-1">
                                <label htmlFor="">Name of Donee</label>
                                <input type="" className="p-3 rounded-lg" />
                            </div>
                            <div className="donation-input flex flex-col items-start gap-1">
                                <label htmlFor="">PAN of Donee</label>
                                <input type="" className="p-3 rounded-lg" />
                            </div>
                            <div className="donation-input flex flex-col items-start gap-1">
                                <label htmlFor="">Limit of Deductions</label>
                                <select id="" className="p-3 rounded-lg">
                                    <option value="select-policy-type">Please select</option>
                                    <option value="qualified-limit">Qualified Limit</option>
                                    <option value="without-qualified-limit">Without Qualified Limit</option>
                                </select>
                            </div>
                            <div className="donation-input flex flex-col items-start gap-1">
                                <label htmlFor="">Percentage of Amount</label>
                                <select id="" className="p-3 rounded-lg">
                                    <option value="select-policy-type">Please select</option>
                                    <option value="50%">50%</option>
                                    <option value="100%">100%</option>
                                </select>
                            </div>
                        </div>
                        <h2 className='text-xl font-semibold mb-6 mt-12'>DONEE ADDRESS</h2>
                        <div className="donation-input flex flex-col items-start gap-1 mb-5">
                            <label htmlFor="">Pincode</label>
                            <input type="" className="p-3 rounded-lg" />
                        </div>
                        <div className="address-input flex flex-col items-start gap-1">
                            <label htmlFor="">Address</label>
                            <input type="" className="p-3 rounded-lg" />
                        </div>
                        
                    </div>
                )}
                <div className='add-btn-outer flex justify-end mt-5'>
                            <div className="add-btn rounded-full px-6 py-2">
                                <p className='text-white'>+ Add Donation</p>
                            </div>
                        </div>
            </div>
        </div>
    );
}

export default Donation;
