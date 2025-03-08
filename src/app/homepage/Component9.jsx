import "./comp9.css"

const Component9 = () => {
  return (
    <div className="section9 lg:px-24 px-4 text-center py-10">
      <h1  className='section5-heading lg:font-bold md:font-bold font-semibold text-4xl lg:mb-16 mb-10'>Income Tax e-filing Popular Guides</h1>

     <div className="section9-parts flex lg:flex-nowrap flex-wrap gap-6">
        <div className="section9-part1 ">
        <img src="https://tax2win.in/assets-new/img/new-theme/incometax_guides.svg" width="720" height="324" alt=" Your Income Tax Return (ITR) for FY 2024-25 (AY 2025-26)"
         className="img-responsive rounded-lg" loading="lazy"></img>
          <div className="guide  p-4 rounded-2xl bg-white ">
         <p className="text-lg font-medium text-left">Your Income Tax Return (ITR) For FY 2024-25 (AY 2025-26)</p>
         </div>
        </div>

        <div className="section9-part2">
        
        <div className="guides flex gap-4 p-4 py-6 rounded-2xl bg-white ">
        <img src="https://tax2win.in/assets-new/img/new-theme/b_ghost_arrow.svg " alt="Income Tax Notice Assistance" title="Income Tax Notice Assistance" loading="lazy" width="22" height="22" className="icon"></img>
        <p className="text-lg text-left font-medium"> Income Tax Deductions - The Most Comprehensive Guide to Tax Saving in India [Updated]</p>
        </div>

        <div className="guides flex gap-4 p-4 py-6 rounded-2xl bg-white">
        <img src="https://tax2win.in/assets-new/img/new-theme/b_ghost_arrow.svg" alt="Income Tax Notice Assistance" title="Income Tax Notice Assistance" loading="lazy" width="22" height="22" className="icon"></img>
        <p className="text-lg text-left font-medium"> Know the easiest way to link Aadhaar card with PAN card</p>
        </div>

        <div className="guides flex gap-4 p-4 py-6 rounded-2xl bg-white">
        <img src="https://tax2win.in/assets-new/img/new-theme/b_ghost_arrow.svg" alt="Income Tax Notice Assistance" title="Income Tax Notice Assistance" loading="lazy" width="22" height="22" className="icon"></img>
        <p className="text-lg text-left font-medium"> Income Tax Slabs and Rates for FY 2024-25 (AY 2025-26) [Updated] </p>
        </div>

        <div className="guides flex gap-4 p-4 py-6 rounded-2xl bg-white">
        <img src="https://tax2win.in/assets-new/img/new-theme/b_ghost_arrow.svg" alt="Income Tax Notice Assistance" title="Income Tax Notice Assistance" loading="lazy" width="22" height="22" className="icon"></img>
        <p className="text-lg text-left font-medium">   What is verification of Income Tax Return? How to do e-verification of ITR?</p>
        </div>
        </div>
     </div>

<div className="section9-btn flex gap-2 inline-flex px-12 py-3  gap-3 rounded-full mt-10 mb-16">
     
      <p className="text-white font-medium"> Read More Guides</p>
      <img src="https://tax2win.in/assets-new/img/new-theme/w-borderarow.svg" alt="Read More Guides" title="Read More Guides" loading="lazy" width="22" height="22"></img>  
</div>

    </div>
  )
}

export default Component9
