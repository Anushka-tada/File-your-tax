"use client"

import React, { useState } from 'react';
import "./deduction.css";

const Section80D = () => {
    const [forms, setForms] = useState([{ showYesContent: false, selectedButton: 'no' }]);

    const handleAddForm = () => {
        setForms([...forms, { showYesContent: false, selectedButton: 'no' }]);
    };

    const handleRemoveForm = () => {
        if (forms.length > 1) {
            setForms(forms.slice(0, -1));
        }
    };

    const handleButtonClick = (index, value) => {
        const newForms = [...forms];
        newForms[index].showYesContent = value === 'yes';
        newForms[index].selectedButton = value;
        setForms(newForms);
    };

    return (
        <>
            {forms.map((form, index) => (
                <div className="80D-form mt-5" key={index}>
                    <div className='flex gap-5 items-center flex-wrap'>
                        <div className="D-input flex flex-col gap-1 items-start mt-6">
                            <label htmlFor="">Medical Insurance</label>
                            <select id="insurance-type" className="p-3 rounded-lg">
                                <option value="select-policy-type">Select Policy type</option>
                                <option value="for-self-spouse-children">For Self, Spouse and Dependent children</option>
                                <option value="for-parents">For Parents</option>
                            </select>
                        </div>

                        <div className="D-input flex flex-wrap justify-between items-center gap-5 policy-holder">
                            <p className='text-lg font-bold'>Is any of the policy holder aged 60 years or more</p>
                            <div className="btns flex gap-4 mt-3">
                                <div
                                    className={`yes-btn rounded-full cursor-pointer shadow px-8 py-1 ${form.selectedButton === 'no' ? 'bg-green-700' : ''}`}
                                    onClick={() => handleButtonClick(index, 'no')}
                                >
                                    <p className={`${form.selectedButton === 'no' ? 'text-white' : ''}`}>No</p>
                                </div>
                                <div
                                    className={`yes-btn rounded-full cursor-pointer shadow px-8 py-1 ${form.selectedButton === 'yes' ? 'bg-green-700' : ''}`}
                                    onClick={() => handleButtonClick(index, 'yes')}
                                >
                                    <p className={`${form.selectedButton === 'yes' ? 'text-white' : ''}`}>Yes</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-6">
                        <div className="D-input flex flex-col gap-1 items-start mt-4">
                            <label htmlFor="">Prevent Health Check Up</label>
                            <input type="text" className="p-3 rounded-lg" />
                        </div>

                        {form.showYesContent && (
                            <div className="D-input flex flex-col gap-1 items-start mt-4">
                                <label htmlFor="">Medical Expenditure</label>
                                <input type="text" className="p-3 rounded-lg" />
                            </div>
                        )}

                        <div className="D-input flex flex-col gap-1 items-start mt-4">
                            <label htmlFor="">Medical insurance premium</label>
                            <input type="text" className="p-3 rounded-lg" />
                        </div>
                    </div>
                </div>
            ))}

            <div className="flex justify-end gap-4 mt-5">
               
<button onClick={handleAddForm} className="bg-green-700 text-white px-4 py-2 rounded-lg text-xl font-bold">+</button>
<button onClick={handleRemoveForm} className="bg-gray-300  text-black px-4 py-2 rounded-lg text-xl font-bold">-</button>
            </div>
        </>
    );
};

export default Section80D;



