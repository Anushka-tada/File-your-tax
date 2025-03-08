import "./Services.css"

const Services = () => {
  return (
    <div className="section5 lg:px-24 px-4 py-20  ">
      <div className="text-center">
      <p className="font-medium mb-3 text-lg section5-p">Popular Services</p>
      <h1 className="section5-heading lg:font-bold  md:font-bold  font-semibold text-5xl mb-12">Income Tax Services We Offer</h1>
      </div>
{/* 
      1st blue box of service */}


      <div className="section5-boxes flex flex-wrap justify-center lg:px-16   lg:gap-5 gap-2">
      <div className="flex flex-wrap justify-center lg:flex-nowrap gap-5">
        <div className="section5-box-1 first-box p-9 rounded-2xl">
            <h1 className="text-white lg:font-bold  md:font-bold  font-semibold text-4xl mb-6">Tax Planning Services</h1>
            <p className="text-white mb-8 text-xl ">Maximize tax savings with Tax2win's Tax Advisory Services, offering guidance on advance tax calculations, property transactions, and more.</p>
            <div className="section5-btn flex   bg-white inline-flex py-3  px-10 gap-3 rounded-full mt-4">
          <btn-text className="font-medium  section5-p">Get Expert Help</btn-text>
          <img src="https://tax2win.in/assets-new/img/new-theme/b_ghost_arrow.svg" alt="Tax Planning Services" title="Tax Planning Services"/>
        </div>
        </div>

{/* other same boxes */}

        <div className="section5-box-sameline rounded-xl p-5 bg-white">
        <img src="https://tax2win.in/assets-new/img/new-theme/tax-notice-assistance.svg" alt="Income Tax Notice Assistance" title="Income Tax Notice Assistance" loading="lazy" width="57" height="57" className="icon"/>
        <h2 className="text-2xl font-bold mb-5">Income Tax Notice Assistance</h2>
        <p className="mb-4">A dedicated tax expert helps you navigate and respond to notices under sections 139(9), 143(1), high-value transactions, and other notices from the Income Tax Department.</p>
        <div className="flex gap-2">
      <p className="text-blue font-bold ">  Connect With Tax Experts</p>
       <img src="https://tax2win.in/assets-new/img/new-theme/b_ghost_arrow.svg" alt="Income Tax Notice Assistance" title="Income Tax Notice Assistance" loading="lazy" width="20" height="20" className="icon"></img>
        </div>
        </div>

</div>

        <div className="section5-box-2 rounded-xl p-5 bg-white flex flex-col justify-between">
        <img src="https://tax2win.in/assets-new/img/new-theme/itr-u.svg" alt="Updated Return Filing (ITR-U)" title="Updated Return Filing (ITR-U)" loading="lazy" width="57" height="57" className="icon"/>
        <div>
        <h2 className="text-2xl font-bold mb-3 mt-2">Updated Return Filing (ITR-U)</h2>
        <p className="mb-4">ITR-U helps individuals to update the correct income in the already filed ITR and 
          also provides an opportunity for those who haven't filed previously.</p>
        </div>
        <div className="flex gap-2">
      <p className="text-blue font-bold "> File Now</p>
       <img src="https://tax2win.in/assets-new/img/new-theme/b_ghost_arrow.svg" alt="Income Tax Notice Assistance" title="Income Tax Notice Assistance" loading="lazy" width="20" height="20" className="icon"></img>
        </div>
        </div>

        <div className="section5-box-2 rounded-xl p-5 bg-white flex flex-col justify-between">
        <img src="https://tax2win.in/assets-new/img/new-theme/diy-filing.svg" alt="File ITR Yourself (DIY filing )" title="File ITR Yourself (DIY filing )" loading="lazy" width="57" height="57" className="icon"/>
      <div>
      <h2 className="text-2xl font-bold mb-3 mt-2">File ITR Yourself (DIY filing )</h2>
        <p className="mb-4">Trust us; you can file your Income tax return on your own. It’s fast, easy,
           and safe when you file ITR with Tax2win on your own.</p>
      </div>
        <div className="flex gap-2">
      <p className="text-blue font-bold ">Start Filing</p>
       <img src="https://tax2win.in/assets-new/img/new-theme/b_ghost_arrow.svg" alt="Income Tax Notice Assistance" title="Income Tax Notice Assistance" loading="lazy" width="20" height="20" className="icon"></img>
        </div>
        </div>

        <div className="section5-box-2 rounded-xl p-5 bg-white flex flex-col justify-between">
        <img src="https://tax2win.in/assets-new/img/new-theme/icon-eca.svg" alt="Expert Assisted Filing" title="Expert Assisted Filing" loading="lazy" width="57" height="57" className="icon"/>
    <div>
    <h2 className="text-2xl font-bold mb-3 mt-2">Expert Assisted ITR Filing</h2>
        <p className="mb-4">Hire personal eCA to do Income Tax Filing for you. It is convenient & fast, with maximum refund calculated
        for you.</p>
    </div>
        <div className="flex gap-2">
      <p className="text-blue font-bold ">Book eCA Today</p>
       <img src="https://tax2win.in/assets-new/img/new-theme/b_ghost_arrow.svg" alt="Income Tax Notice Assistance" title="Income Tax Notice Assistance" loading="lazy" width="20" height="20" className="icon"></img>
        </div>
        </div>

        <div className="section5-box-2 rounded-xl p-5 bg-white flex flex-col justify-between">
        <img src="https://tax2win.in/assets-new/img/new-theme/nri-filing.svg" alt="NRI Tax Filing" title="NRI Tax Filing" loading="lazy" width="50" height="50" className="icon"/>
        <div>
        <h2 className="text-2xl font-bold mb-3 mt-4">NRI Tax Filing</h2>
        <p className="mb-4">Ease your Indian tax filing with our experts, covering both foreign and domestic income.
           Our online CA ensures compliance with the Income tax laws and help you claim eligible tax deductions.</p>
        </div>
        <div className="flex gap-2">
      <p className="text-blue font-bold "> Connect Now</p>
       <img src="https://tax2win.in/assets-new/img/new-theme/b_ghost_arrow.svg" alt="Income Tax Notice Assistance" title="Income Tax Notice Assistance" loading="lazy" width="20" height="20" className="icon"></img>
        </div>
        </div>

        <div className="section5-box-2 rounded-xl p-5 bg-white flex flex-col justify-between">
        <img src="https://tax2win.in/assets-new/img/new-theme/icon_upload.svg" alt="Upload Form 16" title="Upload Form 16" loading="lazy" width="57" height="57" className="icon"/>
       <div>
       <h2 className="text-2xl font-bold mb-3">Upload Form 16</h2>
        <p className="mb-4">Simplify the Income Tax Return filing process at Tax2win. Just upload your
           Form 16 and get the ITR prepared automatically.</p>
       </div>
        <div className="flex gap-2 ">
      <p className="text-blue font-bold ">Upload Now</p>
       <img src="https://tax2win.in/assets-new/img/new-theme/b_ghost_arrow.svg" alt="Income Tax Notice Assistance" title="Income Tax Notice Assistance" loading="lazy" width="20" height="20" className="icon"></img>
        </div>
        </div>

        <div className="section5-box-2 rounded-xl p-5 bg-white flex flex-col justify-between">
        <img src="https://tax2win.in/assets-new/img/new-theme/capital-gain.svg" alt="Capital Gain Tax Filing" title="Capital Gain Tax Filing" loading="lazy" width="55" height="55" className="icon"/>
       <div>
       <h2 className="text-2xl font-bold mb-3 mt-2">Capital Gain Tax Filing</h2>
        <p className="mb-4">Seeking tax expert advice on the transaction done with respect to the sale of property, 
          equity shares, mutual fund units, or bonds in addition to salary/business income.</p>
       </div>
        <div className="flex gap-2">
      <p className="text-blue font-bold ">  Connect Today</p>
       <img src="https://tax2win.in/assets-new/img/new-theme/b_ghost_arrow.svg" alt="Income Tax Notice Assistance" title="Income Tax Notice Assistance" loading="lazy" width="20" height="20" className="icon"></img>
        </div>
        </div>

       
      </div>
      
    </div>
  )
}

export default Services
