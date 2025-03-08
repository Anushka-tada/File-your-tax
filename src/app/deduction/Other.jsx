// "use client"

// import React, { useState } from 'react';
// import "./deduction.css";

// const Other = () => {

//     const [expenditure, setExpenditure] = useState('75,000');
//     const [expenditure2, setExpenditure2] = useState('75,000');

//     const handleRadioChange = (value) => {
//         if (value === '40') {
//             setExpenditure('75,000');
//         } else if (value === '80') {
//             setExpenditure('1,25,000');
//         }
//     };

//     const handleRadioChange2 = (value) => {
//         if (value === '40') {
//             setExpenditure2('75,000');
//         } else if (value === '80') {
//             setExpenditure2('1,25,000');
//         }
//     };

//     const [inputCount, setInputCount] = useState(1);
//     const [selectedOptions, setSelectedOptions] = useState(['']);

//     const handleOptionChange = (event, index) => {
//         const newSelectedOptions = [...selectedOptions];
//         newSelectedOptions[index] = event.target.value;
//         setSelectedOptions(newSelectedOptions);
//     };

//     const handleAddInput = () => {
//         setInputCount(inputCount + 1);
//         setSelectedOptions([...selectedOptions, '']);
//     };

//     const handleRemoveInput = () => {
//         if (inputCount > 1) {
//             setInputCount(inputCount - 1);
//             setSelectedOptions(selectedOptions.slice(0, -1));
//         }
//     };

//     return (
//         <div>
//             <div className="other-form mt-6">
//                 {Array.from({ length: inputCount }).map((_, index) => (
//                     <div className='other-inputs flex flex-wrap gap-7 mt-3' key={index}>
//                         <div className="other-input flex flex-col items-start gap-1">
//                             <label htmlFor="">Specify if any other</label>
//                             <select id="" className="p-3 rounded-lg" value={selectedOptions[index]} onChange={(e) => handleOptionChange(e, index)}>
//                                 <option value="select-policy-type">Please select</option>
//                                 <option value="80CCC">80CCC</option>
//                                 <option value="80CCH">80CCH</option>
//                                 <option value="80CCD(1)">80CCD(1)</option>
//                                 <option value="80CCD(1B)">80CCD(1B)</option>
//                                 <option value="80CCD(2)">80CCD(2)- Deposited by Employer</option>
//                                 <option value="80EE">80EE</option>
//                                 <option value="80EEA">80EEA</option>
//                                 <option value="80EEB">80EEB</option>
//                             </select>
//                         </div>

//                         <div className="other-input flex flex-col items-start gap-1">
//                             <label htmlFor="">Amount</label>
//                             <input type="text" className="p-3 rounded-lg" />
//                         </div>

//                         {selectedOptions[index] === '80CCD(1)' && (
//                             <div className="other-input flex flex-col items-start gap-1 ">
//                                 <label htmlFor="">Basic Salary + DA</label>
//                                 <input type="text" className="p-3 rounded-lg" />
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>

//             <div className="flex justify-end gap-4 mt-5">
//                 <button onClick={handleAddInput} className="bg-green-700 text-white px-4 py-2 rounded-lg text-xl font-bold">+</button>
//                 <button onClick={handleRemoveInput} className="bg-gray-300 text-black px-4 py-2 rounded-lg text-xl font-bold">-</button>
//             </div>

//             <div className='flex flex-col gap-6'>

//                 {/* for section 80DD / 80U */}


//                 <div className=' flex  flex-col items-start py-5 shadow-md rounded-xl px-3'>
//                     <h2 className='text-xl font-semibold my-5' >Section 80DD / 80U</h2>

//                     <div className="other-input flex flex-col items-start gap-1">
//                         <label htmlFor="">Disabled Member</label>
//                         <select id="" className="p-3 rounded-lg" >
//                             <option value="select-member">Please select Member</option>
//                             <option value="self">Self</option>
//                             <option value="family-member">Family Member Both</option>
//                             <option value="both">Both</option>

//                         </select>
//                     </div>

//                     {/* for self */}

//                     <h2 className='text-xl font-semibold my-5' >Self</h2>
//                     <div className="other-inputs flex flex-wrap gap-7">
//                         <div className="other-input flex flex-col items-start gap-1">
//                             <label htmlFor="">Total Expenditure</label>
//                             <div className="p-3 rounded-lg expenditure">{expenditure}</div>
//                         </div>

//                         <div className="other-input flex flex-col items-start gap-1">
//                             <label htmlFor="">Severity of disability </label>

//                             <div className='flex gap-6 mt-3'>
//                                 <div className="radio-input flex items-center gap-4">
//                                     <input
//                                         type="radio"
//                                         className='radio'
//                                         name="severity"
//                                         onChange={() => handleRadioChange('40')}
//                                         defaultChecked
//                                     />
//                                     <p className='text-lg'>More than 40%</p>
//                                 </div>
//                                 <div className="radio-input flex items-center gap-4">
//                                     <input
//                                         type="radio"
//                                         className='radio'
//                                         name="severity"
//                                         onChange={() => handleRadioChange('80')}
//                                     />
//                                     <p className='text-lg'>More than 80%</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="other-inputs flex flex-wrap gap-5 mt-6">
//                         <div className="other-input flex flex-col items-start gap-1">
//                             <label htmlFor="">Form 10IA Filing Date</label>
//                             <input className="p-3 rounded-lg" />
//                         </div>

//                         <div className="other-input flex flex-col items-start gap-1">
//                             <label htmlFor="">Form 10IA Ack Number</label>
//                             <input className="p-3 rounded-lg" />
//                         </div>

//                         <div className="other-input flex flex-col items-start gap-1">
//                             <label htmlFor="">UD ID Number</label>
//                             <input className="p-3 rounded-lg" />
//                         </div>
//                     </div>


//                     {/* for family members */}

//                     <h2 className='text-xl font-semibold my-5' >Family Member</h2>
//                     <div className="other-inputs flex flex-wrap gap-7">

//                     <div className="other-input flex flex-col items-start gap-1">
//                         <label htmlFor="">Relation with Dependent </label>
//                         <select id="" className="p-3 rounded-lg" >
//                             <option value="select-member">Please select Member</option>
//                             <option value="self">Spouse</option>
//                             <option value="family-member">Son</option>
//                             <option value="both">Daughter</option>
//                             <option value="both">Father</option>
//                             <option value="both">Mother</option>
//                             <option value="both">Brother</option>
//                             <option value="both">Sister</option>

//                         </select>
//                     </div>

//                         <div className="other-input flex flex-col items-start gap-1">
//                             <label htmlFor="">Total Expenditure</label>
//                             <div className="p-3 rounded-lg expenditure">{expenditure2}</div>
//                         </div>

//                         <div className="other-input flex flex-col items-start gap-1">
//                             <label htmlFor="">Severity of disability </label>

//                             <div className='flex gap-6 mt-3'>
//                                 <div className="radio-input flex items-center gap-4">
//                                     <input
//                                         type="radio"
//                                         className='radio'
//                                         name="severity"
//                                         onChange={() => handleRadioChange2('40')}
//                                         defaultChecked
//                                     />
//                                     <p className='text-lg'>More than 40%</p>
//                                 </div>
//                                 <div className="radio-input flex items-center gap-4">
//                                     <input
//                                         type="radio"
//                                         className='radio'
//                                         name="severity"
//                                         onChange={() => handleRadioChange2('80')}
//                                     />
//                                     <p className='text-lg'>More than 80%</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="other-inputs flex flex-wrap gap-5 mt-6">
//                         <div className="other-input flex flex-col items-start gap-1">
//                             <label htmlFor="">Form 10IA Filing Date</label>
//                             <input className="p-3 rounded-lg" />
//                         </div>

//                         <div className="other-input flex flex-col items-start gap-1">
//                             <label htmlFor="">Form 10IA Ack Number</label>
//                             <input className="p-3 rounded-lg" />
//                         </div>

//                         <div className="other-input flex flex-col items-start gap-1">
//                             <label htmlFor="">UD ID Number</label>
//                             <input className="p-3 rounded-lg" />
//                         </div>
//                     </div>

//                     <div className="other-inputs flex flex-wrap gap-5 mt-6">
//                         <div className="other-input flex flex-col items-start gap-1">
//                             <label htmlFor="">Dependent PAN</label>
//                             <input className="p-3 rounded-lg" />
//                         </div>

//                         <div className="other-input flex flex-col items-start gap-1">
//                             <label htmlFor="">Dependent Aadhaar</label>
//                             <input className="p-3 rounded-lg" />
//                         </div>

//                     </div>


//                 </div>
//                 {/* 
//             for section 80DDB */}

//                 <div className=' flex  flex-col items-start py-5 shadow-md rounded-xl px-3'>
//                     <h2 className='text-xl font-semibold my-5' >Section 80DDB</h2>

//                     <div className="other-inputs flex flex-wrap gap-7">
//                         <div className="other-input flex flex-col items-start gap-1">
//                             <label htmlFor="">Diseased Citizen</label>
//                             <select id="" className="p-3 rounded-lg" >
//                                 <option value="">Please select Member</option>
//                                 <option value="">Normal Citizen (Less than 60 years of age)</option>
//                                 <option value="">Senior(60 or more)</option>


//                             </select>
//                         </div>

//                         <div className="other-input flex flex-col items-start gap-1">
//                             <label htmlFor="">Total Expenditure</label>
//                             <input type="text" className="p-3 rounded-lg" />
//                         </div>
//                     </div>

//                 </div>


//                 {/*    for section 80GG */}

//                 <div className=' flex  flex-col items-start py-5 shadow-md rounded-xl px-3'>
//                     <h2 className='text-xl font-semibold my-5' >Section 80E</h2>

//                     <div className="other-inputs flex gap-7">
//                         <div className="other-input flex flex-col items-start gap-1">
//                             <label htmlFor="">Interest on education loan</label>
//                             <input type="text" className="p-3 rounded-lg" />
//                         </div>

//                     </div>

//                 </div>

//                 {/* 
//             for section 80GG */}

//                 <div className=' flex  flex-col items-start py-5 shadow-md rounded-xl px-3'>
//                     <h2 className='text-xl font-semibold my-5' >Section 80GG</h2>

//                     <div className="other-inputs flex flex-wrap  gap-7">
//                         <div className="other-input flex flex-col items-start gap-1">
//                             <label htmlFor="">Rent Paid for the year</label>
//                             <input type="text" className="p-3 rounded-lg" />
//                         </div>

//                         <div className="other-input flex flex-col items-start gap-1">
//                             <label htmlFor="">Number of months rent is paid for</label>
//                             <input type="text" className="p-3 rounded-lg" />
//                         </div>
//                     </div>

//                 </div>

//                 {/*    for Section 80TTA/80TTB */}

//                 <div className=' flex  flex-col items-start py-5 shadow-md rounded-xl px-3 '>
//                     <h2 className='text-xl font-semibold my-5' >Section 80TTA/80TTB</h2>
//                     <p className='font-semibold text-start'>Note: Under Section 80TTA/80TTB, you get a deduction on your savings bank interest, which the system auto-considers while
//                         computing your taxable income. Mention your savings account interest on the "Other Sources" income page.</p>

//                 </div>

//             </div>

//         </div>
//     );
// };

// export default Other;



"use client"

import React, { useState } from 'react';
import "./deduction.css";

const Other = () => {

    const [expenditure, setExpenditure] = useState('75,000');
    const [expenditure2, setExpenditure2] = useState('75,000');

    const handleRadioChange = (value) => {
        if (value === '40') {
            setExpenditure('75,000');
        } else if (value === '80') {
            setExpenditure('1,25,000');
        }
    };

    const handleRadioChange2 = (value) => {
        if (value === '40') {
            setExpenditure2('75,000');
        } else if (value === '80') {
            setExpenditure2('1,25,000');
        }
    };

    const [selectedMember, setSelectedMember] = useState('');

  const handleSelectChange = (event) => {
    setSelectedMember(event.target.value);
  };

    const [inputCount, setInputCount] = useState(1);
    const [selectedOptions, setSelectedOptions] = useState(['']);

    const handleOptionChange = (event, index) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[index] = event.target.value;
        setSelectedOptions(newSelectedOptions);
    };

    const handleAddInput = () => {
        setInputCount(inputCount + 1);
        setSelectedOptions([...selectedOptions, '']);
    };

    const handleRemoveInput = () => {
        if (inputCount > 1) {
            setInputCount(inputCount - 1);
            setSelectedOptions(selectedOptions.slice(0, -1));
        }
    };

    return (
        <div>
            <div className="other-form mt-6">
                {Array.from({ length: inputCount }).map((_, index) => (
                    <div className='other-inputs flex flex-wrap gap-7 mt-3' key={index}>
                        <div className="other-input flex flex-col items-start gap-1">
                            <label htmlFor="">Specify if any other</label>
                            <select id="" className="p-3 rounded-lg" value={selectedOptions[index]} onChange={(e) => handleOptionChange(e, index)}>
                                <option value="select-policy-type">Please select</option>
                                <option value="80CCC">80CCC</option>
                                <option value="80CCH">80CCH</option>
                                <option value="80CCD(1)">80CCD(1)</option>
                                <option value="80CCD(1B)">80CCD(1B)</option>
                                <option value="80CCD(2)">80CCD(2)- Deposited by Employer</option>
                                <option value="80EE">80EE</option>
                                <option value="80EEA">80EEA</option>
                                <option value="80EEB">80EEB</option>
                            </select>
                        </div>

                        <div className="other-input flex flex-col items-start gap-1">
                            <label htmlFor="">Amount</label>
                            <input type="text" className="p-3 rounded-lg" />
                        </div>

                        {selectedOptions[index] === '80CCD(1)' && (
                            <div className="other-input flex flex-col items-start gap-1 ">
                                <label htmlFor="">Basic Salary + DA</label>
                                <input type="text" className="p-3 rounded-lg" />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="flex justify-end gap-4 mt-5">
                <button onClick={handleAddInput} className="bg-green-700 text-white px-4 py-2 rounded-lg text-xl font-bold">+</button>
                <button onClick={handleRemoveInput} className="bg-gray-300 text-black px-4 py-2 rounded-lg text-xl font-bold">-</button>
            </div>

            <div className='flex flex-col gap-6'>

                {/* for section 80DD / 80U */}


                <div className=' flex  flex-col items-start py-5 shadow-md rounded-xl px-3'>
      <h2 className='text-xl font-semibold my-5' >Section 80DD / 80U</h2>

      <div className="other-input flex flex-col items-start gap-1">
        <label htmlFor="">Disabled Member</label>
        <select id="disabledMember" className="p-3 rounded-lg" onChange={handleSelectChange}>
          <option value="select-member">Please select Member</option>
          <option value="self">Self</option>
          <option value="family-member">Family Member</option>
          <option value="both">Both</option>
        </select>
      </div>

      {/* for self */}
      {selectedMember === 'self' || selectedMember === 'both' ? (
        <div className='flex flex-col items-start'>
          <h2 className='text-xl font-semibold my-5' >Self</h2>
          <div className="other-inputs flex flex-wrap gap-7">
            <div className="other-input flex flex-col items-start gap-1">
              <label htmlFor="">Total Expenditure</label>
              <div className="p-3 rounded-lg expenditure">{expenditure}</div>
            </div>

            <div className="other-input flex flex-col items-start gap-1">
              <label htmlFor="">Severity of disability </label>

              <div className='flex gap-6 mt-3'>
                <div className="radio-input flex items-center gap-4">
                  <input
                    type="radio"
                    className='radio cursor-pointer'
                    name="severity"
                    onChange={() => handleRadioChange('40')}
                    defaultChecked
                  />
                  <p className='text-lg'>More than 40%</p>
                </div>
                <div className="radio-input flex items-center gap-4">
                  <input
                    type="radio"
                    className='radio cursor-pointer'
                    name="severity"
                    onChange={() => handleRadioChange('80')}
                  />
                  <p className='text-lg'>More than 80%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="other-inputs flex flex-wrap gap-5 mt-6">
            <div className="other-input flex flex-col items-start gap-1">
              <label htmlFor="">Form 10IA Filing Date</label>
              <input className="p-3 rounded-lg" />
            </div>

            <div className="other-input flex flex-col items-start gap-1">
              <label htmlFor="">Form 10IA Ack Number</label>
              <input className="p-3 rounded-lg" />
            </div>

            <div className="other-input flex flex-col items-start gap-1">
              <label htmlFor="">UD ID Number</label>
              <input className="p-3 rounded-lg" />
            </div>
          </div>
        </div>
      ) : null}

      {/* for family members */}
      {selectedMember === 'family-member' || selectedMember === 'both' ? (
        <div className='flex flex-col items-start'>
          <h2 className='text-xl font-semibold my-5' >Family Member</h2>
          <div className="other-inputs flex flex-wrap gap-7">
            <div className="other-input flex flex-col items-start gap-1">
              <label htmlFor="">Relation with Dependent </label>
              <select id="" className="p-3 rounded-lg" >
                <option value="select-member">Please select Member</option>
                <option value="self">Spouse</option>
                <option value="family-member">Son</option>
                <option value="both">Daughter</option>
                <option value="both">Father</option>
                <option value="both">Mother</option>
                <option value="both">Brother</option>
                <option value="both">Sister</option>
              </select>
            </div>

            <div className="other-input flex flex-col items-start gap-1">
              <label htmlFor="">Total Expenditure</label>
              <div className="p-3 rounded-lg expenditure">{expenditure2}</div>
            </div>

            <div className="other-input flex flex-col items-start gap-1">
              <label htmlFor="">Severity of disability </label>

              <div className='flex gap-6 mt-3'>
                <div className="radio-input flex items-center gap-4">
                  <input
                    type="radio"
                    className='radio cursor-pointer'
                    name="severity2"
                    onChange={() => handleRadioChange2('40')}
                    defaultChecked
                  />
                  <p className='text-lg'>More than 40%</p>
                </div>
                <div className="radio-input flex items-center gap-4">
                  <input
                    type="radio"
                    className='radio cursor-pointer'
                    name="severity2"
                    onChange={() => handleRadioChange2('80')}
                  />
                  <p className='text-lg'>More than 80%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="other-inputs flex flex-wrap gap-5 mt-6">
            <div className="other-input flex flex-col items-start gap-1">
              <label htmlFor="">Form 10IA Filing Date</label>
              <input className="p-3 rounded-lg" />
            </div>

            <div className="other-input flex flex-col items-start gap-1">
              <label htmlFor="">Form 10IA Ack Number</label>
              <input className="p-3 rounded-lg" />
            </div>

            <div className="other-input flex flex-col items-start gap-1">
              <label htmlFor="">UD ID Number</label>
              <input className="p-3 rounded-lg" />
            </div>
          </div>
          <div className="other-inputs flex flex-wrap gap-5 mt-6">
            <div className="other-input flex flex-col items-start gap-1">
              <label htmlFor="">Dependent PAN</label>
              <input className="p-3 rounded-lg" />
            </div>

            <div className="other-input flex flex-col items-start gap-1">
              <label htmlFor="">Dependent Aadhaar</label>
              <input className="p-3 rounded-lg" />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  
                {/* 
            for section 80DDB */}

                <div className=' flex  flex-col items-start py-5 shadow-md rounded-xl px-3'>
                    <h2 className='text-xl font-semibold my-5' >Section 80DDB</h2>

                    <div className="other-inputs flex flex-wrap gap-7">
                        <div className="other-input flex flex-col items-start gap-1">
                            <label htmlFor="">Diseased Citizen</label>
                            <select id="" className="p-3 rounded-lg" >
                                <option value="">Please select Member</option>
                                <option value="">Normal Citizen (Less than 60 years of age)</option>
                                <option value="">Senior(60 or more)</option>


                            </select>
                        </div>

                        <div className="other-input flex flex-col items-start gap-1">
                            <label htmlFor="">Total Expenditure</label>
                            <input type="text" className="p-3 rounded-lg" />
                        </div>
                    </div>

                </div>


                {/*    for section 80GG */}

                <div className=' flex  flex-col items-start py-5 shadow-md rounded-xl px-3'>
                    <h2 className='text-xl font-semibold my-5' >Section 80E</h2>

                    <div className="other-inputs flex gap-7">
                        <div className="other-input flex flex-col items-start gap-1">
                            <label htmlFor="">Interest on education loan</label>
                            <input type="text" className="p-3 rounded-lg" />
                        </div>

                    </div>

                </div>

                {/* 
            for section 80GG */}

                <div className=' flex  flex-col items-start py-5 shadow-md rounded-xl px-3'>
                    <h2 className='text-xl font-semibold my-5' >Section 80GG</h2>

                    <div className="other-inputs flex flex-wrap  gap-7">
                        <div className="other-input flex flex-col items-start gap-1">
                            <label htmlFor="">Rent Paid for the year</label>
                            <input type="text" className="p-3 rounded-lg" />
                        </div>

                        <div className="other-input flex flex-col items-start gap-1">
                            <label htmlFor="">Number of months rent is paid for</label>
                            <input type="text" className="p-3 rounded-lg" />
                        </div>
                    </div>

                </div>

                {/*    for Section 80TTA/80TTB */}

                <div className=' flex  flex-col items-start py-5 shadow-md rounded-xl px-3 '>
                    <h2 className='text-xl font-semibold my-5' >Section 80TTA/80TTB</h2>
                    <p className='font-semibold text-start'>Note: Under Section 80TTA/80TTB, you get a deduction on your savings bank interest, which the system auto-considers while
                        computing your taxable income. Mention your savings account interest on the "Other Sources" income page.</p>

                </div>

            </div>

        </div>
    );
};

export default Other;
