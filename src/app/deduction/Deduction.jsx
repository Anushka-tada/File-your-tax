"use client"

import React, { useState } from 'react';
import "./deduction.css";
import Section80C from './Section80C';
import Section80D from './Section80D';
import Donation from './Donation';
import Other from './Other';

const Deduction = () => {
    const [selectedSection, setSelectedSection] = useState('Section80C');

    const renderSelectedSection = () => {
        switch (selectedSection) {
            case 'Section80C':
                return <Section80C />;
            case 'Section80D':
                return <Section80D />;
            case 'Donation':
                return <Donation />;
            case 'Other':
                return <Other />;
            default:
                return <Section80C />;
        }
    };

    return (
        <>
            <div className="deduction-section flex flex-col justify-center items-center text-center pt-20 ">
                <h1 className="text-2xl font-semibold">ENTER TAX SAVING DEDUCTIONS</h1>
                <p className="text-xl mt-1">We're here to help you to get maximum deductions on your TAX</p>

                <div className="deduction-form relative rounded-2xl bg-white p-5 lg:p-8 md:p-8 xl:p-8 mb-7 mt-20 flex flex-col">
                    <div className="flex justify-center">
                        <div className="form-options flex flex-wrap justify-center gap-2 bg-white  px-2 rounded-full shadow-md ">
                            <div
                                className={`form-option px-6 py-1 rounded-full cursor-pointer mb-2 mt-2 ${selectedSection === 'Section80C' ? 'bg-blue text-white' : ''}`}
                                onClick={() => setSelectedSection('Section80C')}
                            >
                                <p className='text-lg'>Section 80C</p>
                            </div>
                            <div
                                className={`form-option px-6 py-1 rounded-full cursor-pointer mb-2 mt-2 ${selectedSection === 'Section80D' ? 'bg-blue text-white' : ''}`}
                                onClick={() => setSelectedSection('Section80D')}
                            >
                                <p className='text-lg'>Section 80D</p>
                            </div>
                            <div
                                className={`form-option px-6 py-1 rounded-full cursor-pointer mb-2 mt-2 ${selectedSection === 'Donation' ? 'bg-blue text-white' : ''}`}
                                onClick={() => setSelectedSection('Donation')}
                            >
                                <p className='text-lg'>Donation</p>
                            </div>
                            <div
                                className={`form-option px-6 py-1 rounded-full cursor-pointer mb-2 mt-2 ${selectedSection === 'Other' ? 'bg-blue text-white' : ''}`}
                                onClick={() => setSelectedSection('Other')}
                            >
                                <p className='text-lg'>Other</p>
                            </div>
                        </div>
                     </div>

                    <div className="notes py-6 flex justify-center items-center text-sm rounded-lg mt-5">
                        <p>Note: In case of New Tax Regime, only deduction u/s 80CCD(2) is allowed. This is available under Other tab.</p>
                    </div>

                    {/* Render the selected component */}
                    {renderSelectedSection()}
                </div>

                <div className="financial-btns flex flex-wrap justify-between mb-10">
                    <a href="\house-property">
                        <div className="back-btn flex items-center gap-3 py-3 px-10 mb-4 bg-white rounded-md">
                            <img src="https://tax2win.in/assets-new/img/new-theme/diy-flow/back-arrow.svg" alt="" height={15} width={15} />
                            <p className="text-blue">Back</p>
                        </div>
                    </a>

                    <div className="other-btns flex flex-wrap gap-4">
                        <div className="get-button px-10 py-3 rounded-md">
                            <p className="text-white font-semibold">GET CA ASSISTED</p>
                        </div>
                        <a href="\bank-details">
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
}

export default Deduction;
