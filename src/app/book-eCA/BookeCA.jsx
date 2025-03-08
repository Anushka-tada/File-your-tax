"use client";
import "./bookeca.css"



import React, { useState, useEffect } from "react";

const BookeCA = () => {

  const [selectedService, setSelectedService] = useState('');

  const serviceDetails = [
      { 
          name: 'Expert-Assisted ITR Filing', 
          details: [
            'Tax2win provides comprehensive tax filing services for various taxpayers, including salaried individuals, multiple Form 16 holders, Capital Gains, Business Returns, Multiple House Properties, Business Income, Capital Gains, Futures & Options, Clubbing Income, Foreign Income, ESOPs, Original Returns, Belated Returns, Revised Returns, or any tax-saving investments. Our personalized solutions maximize savings and minimize penalties.', 
            'Tax2win online CA offers tailored support and accurate, on-time filing while keeping your information secure and confidential. Let our knowledgeable experts handle your taxes and maximize your savings while you relax.'
        ],
          imgUrl: 'https://emailer.tax2win.in/assets/guides/ca-assisted/expert-assisted-itr-filing.png', 
          btn: 'Book eCA'
      },
      { 
          name: 'Revised Return Filing', 
          details: [
            'Filed your ITR and spotted an error? Don’t wait until it becomes a problem! Correct your mistakes with a revised return and avoid the hassle of an Income Tax Notice. Under Section 139(5) of the Income-Tax Act, 1961, you have the opportunity to amend any errors by filing a revised return, which will overwrite your original submission.', 
            'Remember, the last date to file a revised ITR is 31st December of the relevant assessment year'
        ],
          imgUrl: 'https://emailer.tax2win.in/assets/guides/ca-assisted/revice-return.png',
          btn: 'Revise your ITR' 
      },
      { 
          name: 'Belated Return Filing', 
          details: [
            'Missed the 31st July deadline for filing your Income Tax Return? No need to worry—you can still file a belated return under Section 139(4) of the Income Tax Act until 31st December of the relevant assessment year.', 
            'However, be aware of the penalties under Section 234F: if your taxable income exceeds ₹5 lakh, a fee of ₹5,000 applies; if its below ₹5 lakh, the penalty is ₹1,000. If your income falls below the basic exemption limit, no penalty is levied.'
        ],
          imgUrl: 'https://emailer.tax2win.in/assets/guides/ca-assisted/belated-itr-2.png' ,
            btn: 'File Belated Income Tax Return'
      },
      { 
          name: 'Tax Planning and Advisory Services', 
          details: [
            'Don’t let a lack of knowledge result in a tax blunder.Take control of your taxes with Tax2win’s Tax Consultancy Services.', 
            'Tax2win provides comprehensive tax planning services designed to help you strategically manage your finances and optimize your tax savings. Whether you are an individual, business owner, or NRI, our experienced tax advisors help you navigate the complexities of tax laws and regulations' ,
            'Our tax experts navigate through 300+ tax provisions to find the best according to your tax situation. We provide personalized tax planning, investment and retirement planning, and business tax advisory and ensure that clients take advantage of all eligible deductions and credits.'
        ],
          imgUrl: 'https://emailer.tax2win.in/assets/guides/ca-assisted/tax-planning-and-advisory-services.png' ,
           btn: 'Book Tax Consultation'
      },
      { 
          name: 'NRI/Foreign Income Taxation', 
          details: [
            'Tax2win offers specialized tax services for Non-Resident Indians (NRIs) and individuals with foreign income. Our expert team provides comprehensive guidance on tax residency status, foreign income taxation, double taxation avoidance, earnings from share trading, property transactions, and interest income.', 
            'Tax2win online tax experts also assist with the repatriation of funds, investment planning, and NRI tax filing, ensuring you comply with Indian tax laws and maximize your savings. Tax experts help NRIs save time and effort while reducing the risk of penalties and legal issues due to tax non-compliance.'
        ],
          imgUrl: 'https://emailer.tax2win.in/assets/guides/ca-assisted/nri-foreign-income-taxation.png' ,
           btn: 'Consult Today'
      },
      { 
          name: 'Respond and Resolve Tax Notices', 
          details: [
            'The Income Tax Department may issue notices for various reasons, such as errors in original return filing, incomplete tax payments, or late filing. Tax2win offers professional assistance in responding to and resolving tax notices, providing you with expert guidance and peace of mind.', 
            'If you receive a tax notice from the Income Tax Department, you will be connected with a tax expert specializing in this area to navigate the process smoothly. Our experienced team will carefully review the notice and assess your situation. We help you understand the notice, gather the required documents, and prepare an appropriate response. Additionally, we also help you with filing a revised or updated return, if required.'
        ],
          imgUrl: 'https://emailer.tax2win.in/assets/guides/ca-assisted/respond-and-resolve-tax-notices.png' ,
           btn: 'Income Tax Notice Assistance'
      },
      { 
          name: 'Updated Return Filling(ITR-U)', 
          details: [
            'If you have missed filing an income tax return or need to correct errors in a previously filed return, updated ITR filing is the solution for you. Taxpayers have a two-year window from the end of the relevant assessment year to file an updated return.', 
            'Tax2win’s experienced tax experts are here to help you navigate the updated return process and ensure your filing is done accurately. Whether you need to declare additional income, claim deductions, or rectify any other issues, we guide you every step of the way.'
        ],
          imgUrl: 'https://emailer.tax2win.in/assets/guides/ca-assisted/updated-return-filing-itr-u.png' ,
           btn: 'File Today'
      },
      { 
          name: 'Advance Tax Filing', 
          details: [
            'If you need to pay advance tax, Tax2win can help you calculate and file your payments accurately. Advance tax payments are due in four installments throughout the financial year for taxpayers with income other than salary (e.g., business income, rent). Interest u/s 234B and 234C are charged if the advance tax is not paid by the taxpayer at specified due dates.', 
            'Trust Tax2win online CA professionals to guide you through the process and ensure you stay on track with your tax obligations.'
        ],
          imgUrl: 'https://emailer.tax2win.in/assets/guides/ca-assisted/advance-tax-filing.png' ,
           btn: 'Pay Advance Tax'
      }
    ]

    useEffect(() => {
      if (!selectedService) {
          setSelectedService(serviceDetails[0].name);
      }
  }, [selectedService]);
  
  return (
    <>
      {/* top CA Consultants section start*/}
      <div className="ca-consultants py-20 lg:px-20 md:px-10 px-4 flex flex-wrap xl:justify-between lf:justify-between md:justify-between  justify-center items-center">
        <div className="ca-text flex flex-col mb-6 ">
          <h1 className='text-4xl'>Top Online CA Consultants for <span className='font-bold py-2 blue-text'>ITR Filing Services in India</span> </h1>
          <div className='inline-flex gap-1 rounded-full shadow py-1 px-5 my-6'>
            <p>4.9</p>
            <img src="https://tax2win.in/assets-new/img/ca-assisted/google-rating.png" alt="" />
            <p>10468 ratings</p>
          </div>

          <ul>
            <li className='flex gap-3 items-center mb-2 font-semibold'><img src="https://tax2win.in/assets-new/img/landing/common/tick-icon2.png" alt="" />
              <p>Lowest Tax Filing Fees in India</p>
            </li>
            <li className='flex gap-3 items-center mb-2  font-semibold'><img src="https://tax2win.in/assets-new/img/landing/common/tick-icon2.png" alt="" />
              <p>Reliable and Secure ITR Filing Platform</p>
            </li>
            <li className='flex gap-3 items-center  font-semibold'><img src="https://tax2win.in/assets-new/img/landing/common/tick-icon2.png" alt="" />
              <p>Tax Filing for all - Freelancers, NRI, Business Owners, Salaried Persons</p>
            </li>
          </ul>
        </div>
        <div className="ca-form lg:p-9 md:p-9 p-4 xl:p-9 lg:me-28 shadow-lg rounded-lg flex flex-col items-center">
          <img src="https://tax2win.in/assets-new/img/ca-assisted/offerbookca.png" alt="" className='banner' />
          <h1 className='text-2xl font-bold'>Register</h1>
          <div>
            <input type="text" placeholder='Full Name' className='py-2 px-5 mb-3 mt-8 rounded-md' />
            <input type="text" placeholder='Email Address' className='py-2 px-5 mb-3 rounded-md' />
            <input type="text" placeholder='Mobile Number' className='py-2  px-5 mb-6 rounded-md' />
          </div>
          <p className='font-sm'>By submitting the form, you agree to our
            <span className='text-blue-500'> Terms & Conditions </span> and <span className='text-blue-500'> Privacy Policy</span></p>
          <div className="book-btn rounded-lg mt-6 flex gap-3 justify-center w-full py-3">
            <p className='text-white text-xl'>Book eCA Now</p>
            <img src="https://tax2win.in/assets-new/img/new-theme/b_ghost_arrow.svg" alt="" />
          </div>
          <div className="google-btn rounded-lg flex gap-3 justify-center w-full py-3 mt-4">
            <img src="https://tax2win.in/assets-new/img/google-icon.svg" alt="" height={25} width={25} />
            <p className=' font-semibold text-xl '>Sign in with Google</p>
          </div>
        </div>



      </div>


      {/* ratings section start  */}

      <div className="ratings flex flex-wrap justify-center gap-5 py-14">
        <div className="rating mx-5 flex flex-col justify-center items-center gap-1">
          <img src="https://tax2win.in/assets-new/img/tax-advisory/rating.svg" alt="" />
          <p className='text-xl font-bold mt-2'>4.9</p>
          <p className='text-lg'>Google Rating</p>
        </div>

        <div className="rating mx-5 flex flex-col justify-center items-center gap-1">
          <img src="https://tax2win.in/assets-new/img/tax-advisory/satisfaction.svg" alt="" />
          <p className='text-xl font-bold mt-2'>1+ Million</p>
          <p className='text-lg'>Satisfied Customers</p>
        </div>

        <div className="rating mx-5 flex flex-col justify-center items-center gap-1">
          <img src="https://tax2win.in/assets-new/img/tax-advisory/already-saved.svg" alt="" />
          <p className='text-xl font-bold mt-2'>2500 Cr.</p>
          <p className='text-lg'>Saved Already!</p>
        </div>

        <div className="rating mx-5 flex flex-col justify-center items-center gap-1">
          <img src="https://tax2win.in/assets-new/img/tax-advisory/satisfaction.svg" alt="" />
          <p className='text-xl font-bold mt-2'>10+ Years</p>
          <p className='text-lg'>of Industry Experience</p>
        </div>

      </div>

      {/* tax return filling section start */}

      <div className="tax-return-filling flex flex-col justify-center items-center  py-14">
        <div className="text-center">
          <h1 className='text-4xl font-bold py-4' >Tax2win Online CA for Income Tax Return (ITR) Filing</h1>
          <p>Streamline your tax process with our online CA consultation services for smooth income tax return filing</p>

        </div>
        <div className="features flex  gap-5 mt-7">
          <div className=" flex justify-center flex-wrap gap-5">
            <div className='flex flex-col gap-3 bg-white step1 rounded-2xl p-5 '>
              <div className="flex items-center gap-4">
                <img src="https://tax2win.in/assets-new/img/ca-assisted/accurate-tax-compliant.svg" alt="" height={50} width={50} />
                <h3 className='text-xl font-semibold '>Accurate
                  & Tax Compliant</h3>
              </div>
              <p className='text-lg'>Our platform offers automatic data import from your Form 16/Form 26AS and provides guided assistance throughout the tax return filing process.</p>
            </div>
            <div className='flex flex-col gap-3 bg-white step1 rounded-2xl p-5 '>
              <div className="flex items-center gap-4">
                <img src="https://tax2win.in/assets-new/img/ca-assisted/online-process.svg" alt="" height={50} width={50} />
                <h3 className='text-xl font-semibold '>Fully
                  online process</h3>
              </div>
              <p className='text-lg'>A fully assisted online CA services means no need to visit the Tax Consultant office. You can also Track your e-filing through Tax2Win.</p>
            </div>
            <div className='flex flex-col gap-3 bg-white step1 rounded-2xl p-5'>
              <div className="flex items-center gap-4">
                <img src="https://tax2win.in/assets-new/img/ca-assisted/save-taxes.svg" alt="" height={50} width={50} />
                <h3 className='text-xl font-semibold '>Accurate
                  & Tax Compliant</h3>
              </div>
              <p className='text-lg'>Our online CA consultants can assist you with tax-saving investments based on your tax record, and you'll also gain access to
                financial guides and tools that help you manage your finances more efficiently.</p>
            </div>
          </div>
        </div>
      </div>


      {/* how it works section starts */}

      <div className="how-it-works flex flex-col justify-center items-center py-16 ">
        <div className="work-btn px-3 rounded-full inline-flex">
          <p >How it Works</p>
        </div>

        <div className="text-center px-6">
          <h1 className='text-4xl font-bold mt-5'>How our Online CA-Assisted ITR Filing Works?</h1>
        </div>

        <div className="works flex flex-wrap justify-center gap-5 mt-20">
          <div className="work flex flex-wrap lg:flex-nowrap md:flex-nowrap items-start gap-5 rounded-xl p-9">
            <img src="https://tax2win.in/assets-new/img/ca-assisted/hire-your-personal-eca.svg" alt="" width={40} height={40} />
            <div className='flex flex-col gap-4 '>
              <h2 className='text-xl font-bold'>Get online CA consultation & Upload the Documents</h2>
              <p className='text-lg'>Everything you’ve loved about a CA, you’ve had all in one place. For this, all you need to
                do is just enter your name, email & phone no. Make a payment of our professional fees and get
                your personal online CA services.</p>
            </div>
          </div>

          <div className="work flex flex-wrap lg:flex-nowrap md:flex-nowrap items-start gap-5 rounded-xl p-9">
            <img src="https://tax2win.in/assets-new/img/ca-assisted/eca-reviews.svg" alt="" width={40} height={40} />
            <div className='flex flex-col gap-4 '>
              <h2 className='text-xl font-bold'>CA Consultants Reviews Your Documents & Calls You</h2>
              <p className='text-lg'>Every Document is thoroughly studied for its accuracy and completeness. Further, our CA consultants will call
                you to discuss your income, investments & deductions to help you get the maximum refund.</p>
            </div>
          </div>

          <div className="work flex flex-wrap lg:flex-nowrap md:flex-nowrap items-start gap-5 rounded-xl p-9">
            <img src="https://tax2win.in/assets-new/img/ca-assisted/relaxicon.svg" alt="" width={40} height={40} />
            <div className='flex flex-col gap-4'>
              <h2 className='text-xl font-bold'>Relax & Leave All Hardwork to us</h2>
              <p className='text-lg'>Leave all the hard work on us, to maximise deductions and save taxes for you.
                We know everything about the tax laws applicable on you. We also check Form 26AS with the Department
                to get you the max. benefit of your TDS.</p>
            </div>
          </div>

          <div className="work flex flex-wrap lg:flex-nowrap md:flex-nowrap items-start gap-5 rounded-xl p-9">
            <img src="https://tax2win.in/assets-new/img/ca-assisted/itr-file.svg" alt="" width={40} height={40} />
            <div className='flex flex-col gap-4 '>
              <h2 className='text-xl font-bold'>Approve ITR, and Filing is Done</h2>
              <p className='text-lg'>A detailed summary of your Income Tax Return is sent to you for your approval.
                Once you approve it, the return can be filed from the dashboard.</p>
            </div>
          </div>


        </div>
      </div>

      {/* looking for CA section start */}

      <div className="looking-ca flex flex-col justify-center py-16 xl:px-20 lg:px-20 md:px-10 sm:px-5 px-4">
            <div className="text-center px-7">
                <h1 className='text-4xl font-bold mt-5'>Looking for an Online CA Service / CA Near Me?</h1>
            </div>

            <div className="ca-service-section flex flex-wrap justify-center items-start gap-5 mt-16">
                <div className="ca-services  flex flex-col gap-1">
                    {serviceDetails.map(service => (
                         <div
                         key={service.name}
                         className={`ca-service flex justify-between items-center bg-white p-4 rounded-lg cursor-pointer ${selectedService === service.name ? 'bg-green-100' : ''}`}
                         onClick={() => setSelectedService(service.name)}
                     >
                            <div className="flex gap-4">
                                <img src={service.imgUrl} alt="" height={22} width={22} />
                                <p className='font-semibold'>{service.name}</p>
                            </div>
                            <img src="https://emailer.tax2win.in/assets/guides/ca-assisted/green-arrow.png" alt="" width={24} height={15} />
                        </div>
                    ))}
                </div>

                <div className="services-details d-flex flex-col justify-center p-3 lg:p-12 xl:p-12 md:p-8 sm:p-5 bg-white rounded-xl">
                    {selectedService ? (
                        <>
                        {serviceDetails.find(service => service.name === selectedService)?.details.map((detail, index) => (
                            <p className="text-lg mt-4" key={index}>{detail}</p>
                        ))}
                        <div className="service-btn mt-4">
                            <button className="p-2 px-5 rounded-full mt-3 bg-blue text-white flex gap-3">
                                {serviceDetails.find(service => service.name === selectedService)?.btn}
                                <img src="https://tax2win.in/assets-new/img/new-theme/b_ghost_arrow.svg" alt="" />
                            </button>
                        </div>
                    </>
                    ) : (
                        <p>Select a service to see the details.</p>
                    )}
                </div>
            </div>
        </div>
    </>
  )
}

export default BookeCA
