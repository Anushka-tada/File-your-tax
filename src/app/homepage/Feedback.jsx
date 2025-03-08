// second half part of section5 feedbacks

import React from 'react'

import './Feedback.css'

const Feedback = () => {
  return (
    
    <div className='section6 lg:px-24  px-4 '>
        <div className="text-center  lg:px-96 ">
      <h1  className="section5-heading lg:font-bold  md:font-bold  font-semibold text-4xl mb-2">We appreciate feedback from
      our customers</h1>
      <p className='font-normal text-lg flex flex-wrap items-center justify-center'>10,000+ Reviews Of Delighted Clients with
    </p>
    <p className='font-normal text-lg flex flex-wrap items-center justify-center'>  Google 4.8 
      <span><img alt="Rating" src="https://tax2win.in/assets-new/img/testimonials/five-star.png" width="90" height="16" loading="lazy"/></span> 
       Rating</p>

       </div>

   <div className="feedbacks flex flex-wrap gap-8 lg:flex-nowrap overflow-y-hidden pt-20 pb-32 px-7">

    <div className="feedback p-10 rounded-2xl bg-white">
        <p className='font-bold mb-2 text-lg'>Neha Kumari</p>
        <img alt="Rating" src="https://tax2win.in/assets-new/img/testimonials/five-star.png" width="90" height="16" loading="lazy"/>
        <p className='mt-2 '>Good service, quick response, and friendly interaction.Thank you Tax2win team for filing my ITR, especially to Heena</p>
    </div>

<div className="feedback p-10 rounded-2xl bg-white">
        <p  className='font-bold mb-2 text-lg'>Neeladri Sen</p>
        <img alt="Rating" src="https://tax2win.in/assets-new/img/testimonials/five-star.png" width="90" height="16" loading="lazy"/>
        <p className='mt-2 '>I would like record my Thanks &amp; Appreciation for the excellent support by Abishek who I spoke to was very patient and responsive
             no matter how many times. Thank you filing my tax returns.</p>
    </div>


    <div className="feedback p-10 rounded-2xl bg-white">
        <p  className='font-bold mb-2 text-lg'>Sumit Chattaraj</p>
        <img alt="Rating" src="https://tax2win.in/assets-new/img/testimonials/five-star.png" width="90" height="16" loading="lazy"/>
        <p className='mt-2 '>Thank you filing my tax returns. Gopal Sir was really good and he answered all my clarifications with patience and helped] me with prompt filing. I truly appretiate Gopal sir and T2W team.</p>
    </div>

   </div>

    </div>
  )
}

export default Feedback

// "use client";

// import React, { useState } from 'react';
// import './comp6.css';

// const Component6 = () => {
//   const feedbacks = [
//     {
//       name: 'Neha Kumari',
//       text: 'Good service, quick response, and friendly interaction. Thank you Tax2win team for filing my ITR, especially to Heena.',
//     },
//     {
//       name: 'Neeladri Sen',
//       text: 'I would like to record my Thanks & Appreciation for the excellent support by Abishek who I spoke to was very patient and responsive no matter how many times. Thank you for filing my tax returns.',
//     },
//     {
//       name: 'Sumit Chattaraj',
//       text: 'Thank you for filing my tax returns. Gopal Sir was really good and he answered all my clarifications with patience and helped me with prompt filing. I truly appreciate Gopal sir and T2W team.',
//     },
//   ];

//   const [currentFeedback, setCurrentFeedback] = useState(0);

//   const nextFeedback = () => {
//     setCurrentFeedback((currentFeedback + 1) % feedbacks.length);
//   };

//   const prevFeedback = () => {
//     setCurrentFeedback((currentFeedback - 1 + feedbacks.length) % feedbacks.length);
//   };

//   return (
//     <div className='section6'>
//       <div className="text-center lg:px-96 lg:mx-28">
//         <h1 className="section5-heading lg:font-bold md:font-bold font-semibold text-4xl mb-2">We appreciate feedback from our customers</h1>
//         <p className='font-normal text-lg flex flex-wrap items-center justify-center'>10,000+ Reviews Of Delighted Clients with</p>
//         <p className='font-normal text-lg flex flex-wrap items-center justify-center'>Google 4.8 
//           <span><img alt="Rating" src="https://tax2win.in/assets-new/img/testimonials/five-star.png" width="90" height="16" loading="lazy" /></span> Rating
//         </p>
//       </div>

//       <div className="relative feedbacks flex items-center justify-center pt-20 pb-32">
//         <button onClick={prevFeedback} className="absolute left-0 ml-4 p-2 px-4 bg-slate-300 rounded-full fixed">&lt;</button>
//         <div className="feedback p-10 rounded-2xl bg-white mx-4 transition-transform transform duration-500 lg:mx-96">
//           <p className='font-bold mb-2 text-lg'>{feedbacks[currentFeedback].name}</p>
//           <img alt="Rating" src="https://tax2win.in/assets-new/img/testimonials/five-star.png" width="90" height="16" loading="lazy" />
//           <p className='mt-2'>{feedbacks[currentFeedback].text}</p>
//         </div>
//         <button onClick={nextFeedback} className="absolute right-0 mr-4">&gt;</button>
//       </div>
//     </div>
//   );
// }

// export default Component6;
