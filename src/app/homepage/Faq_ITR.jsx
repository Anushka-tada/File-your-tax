"use client";

import React, { useState } from "react";
import "./faq_iter.css";

const Faq_ITR = () => {
  const [visibleAnswer, setVisibleAnswer] = useState();

  const toggleAnswer = (index) => {
    if (visibleAnswer === index) {
      setVisibleAnswer(null); // Hide the answer if it's already visible
    } else {
      setVisibleAnswer(index); // Show the answer
    }
  };

  return (
    <div className="section10 py-16 lg:px-24 px-4 text-center">
      <h1 className="section5-heading lg:font-bold md:font-bold font-semibold text-4xl lg:mb-16 mb-10">FAQ's on ITR</h1>
      <div className="section9-Faqs">

        <div className="Faq w-full flex justify-between py-6" onClick={() => toggleAnswer(0)}>
          <p className="text-xl font-bold question">What is e-Filing of income tax returns?</p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer === 0 &&
        <div className="answer text-left my-3"> 
          <p className="text-base mb-2">E-filing of Income-tax returns is the process of filing Income-tax online. As per the income tax department,
             income tax returns can be filed through the online method only. However, the super senior citizens filing ITR using Form 1 or Form 4 are allowed to use the offline or paper mode.</p>
          <p className="text-base">E-filing of Income-tax returns can be done easily and quickly in the comfort of your home or office in just 4
             minutes with Tax2win. Or you can simply visit the Income <span className="text-green-700">Tax e-filing portal</span>. You can learn both processes <span className="text-green-700">here</span>.</p> 
        </div>}


        <div className="Faq w-full flex justify-between py-6" onClick={() => toggleAnswer(1)}>
          <p className="text-xl font-bold question">Who should file an Income Tax Return?</p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer === 1 && 
        <div className="answer text-left my-3"> 
          <p className="text-base mb-3">Every Individual, including an NRI, must file an Income tax return where Gross Total Income exceeds the basic exemption limit. For old tax regimes, this basic exemption limit is 2.5 lakh and for new tax regime, this basic exemption limit is 3 lakhs for the individual filing income tax return. Senior citizens (individuals aged 60 years or above but less than 80 years) and super senior citizens (individuals aged 80 years or above) are required to file an ITR if their gross total income exceeds Rs. 3 lakhs and Rs. 5 lakhs, respectively, in a financial year.</p>
          <p className="text-base mb-3"> ITR filing is important for those cases also where the income is below the exemption limit for the following conditions:-</p> 
          <ol className="list-disc list-inside pl-5 flex flex-col gap-2 custom-circle">
            <li>Deposited an amount or aggregate of over Rs.1 crore in one or more current accounts maintained with a bank or a cooperative bank.</li>
            <li>Incurred an aggregate expenditure of over Rs.2 lakh for yourself or any other person for traveling to a foreign country.</li>
            <li>Incurred aggregate expenditure over Rs.1 lakh towards payment of electricity bill.</li>
            <li>The sales turnover of a business exceeds Rs 60 lakh during the year.</li>
            <li>Total professional gross receipts exceed Rs 10 lakh during the financial year.</li>
            <li>Total TDS or TCS exceeds Rs 25,000 during the financial year. This limit is Rs. 50000 for senior citizens.</li>
            <li>The amount deposited in one or more savings accounts is Rs 50 lakh or more during the financial year.</li>
          </ol> 
        </div>}

        <div className="Faq w-full flex justify-between py-6" onClick={() => toggleAnswer(2)}>
          <p className="text-xl font-bold question">Where can I file an Income Tax Return in India?</p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer === 2 &&
        <div className="answer text-left my-3"> 
          <p className="text-base mb-2">In India, taxpayers have several options for filing their Income Tax Return (ITR). Taxpayers can file their ITR via the income tax efiling login portal <span className="text-green-700"> (https://www.incometax.gov.in/iec/foportal/)</span>where taxpayers can file their ITR electronically.</p>
          <p className="text-base">You can file ITR with Tax2win e-filing login portal in under 4 minutes. Tax2Win's user-friendly interface and expert assistance help you to file the ITR easily and quickly. The due date to file ITR for the FY 2024-25 (AY 2025-26) is 31st July 2025.</p> 
        </div>}

        <div className="Faq w-full flex justify-between py-6" onClick={() => toggleAnswer(3)}>
          <p className="text-xl font-bold question">What if I miss the due date of filing the Income Tax Return?</p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer === 3 &&
        <div className="answer text-left my-3"> 
          <p className="text-base mb-2">If an individual misses the due date while filing their Income Tax Return (ITR), they may still file a belated return. The belated return can be filed by 31st December of the relevant assessment year (unless extended by the government).</p>
          <p className="text-base">However, please note a belated return can only be filed with the payment of late fees u/s 234F, subject to certain conditions.</p> 
        </div>}

        <div className="Faq w-full flex justify-between py-6" onClick={() => toggleAnswer(4)}>
          <p className="text-xl font-bold question">How to file an Income Tax Return online?</p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer === 4 &&
        <div className="answer text-left my-3 text-base"> 
          <p className=" mb-3">Income Tax online filing is a simple process and can be done by sitting at home for with Tax2win.</p>

          <ul className="flex flex-col gap-2 mb-3 custom-circle pl-5">
                <li><b className="me-2">Step 1:</b> Visit the <a href="https://tax2win.in/" target="_blank" className="link-p">Tax2Win</a> website. Here, click on the option “<a href="https://tax2win.in/efile-income-tax-return" target="_blank" className="link-p">File ITR Now</a>.”</li>
                <li><b className="me-2">Step 2:</b> Select your source of Income and click on continue.</li>
                <li><b className="me-2">Step 3:</b> If you're a salaried individual, just upload your Form 16. If you do not have form 16, you can skip the option and move further.</li>
                <li><b className="me-2">Step 4:</b> Enter the Financial Year, PAN &amp; Aadhaar number, and other basic details like your Employment Details, Deductions(If Any), and bank details.</li>
                <li><b className="me-2">Step 5:</b> After giving the details of all the required information. Review your tax computation and click the “File My ITR” button.</li>
              </ul>

          <p className=" mb-3">You can also <span className="text-green-700">take the advice of our expert CAs</span> to do tax filing for you. Tax2win eCA focuses on filing accurate returns, availing maximum deductions, and getting maximum tax refunds.</p> 
          <p className=" ">Also, the Income Tax <span className="text-green-700">e-filing portal</span> lets you easily file the return online.</p>
        </div>}

        <div className="Faq w-full flex justify-between py-6" onClick={() => toggleAnswer(5)}>
          <p className="text-xl font-bold question">How to e-file ITR with Form 16?</p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer === 5 &&
        <div className="answer text-left my-3 text-base"> 
          <p className=" mb-3">The procedure to e-file return with form-16 is as follows:</p>

          <ul className="flex flex-col gap-2 mb-3 custom-circle pl-5">
                <li><b className="me-2">Step 1:</b>Choose "File It Yourself" and click on the “ <span className="text-green-700">File ITR Now</span>” option at tax2win.in and upload your <span className="text-green-700">Form 16</span>.</li>
                <li><b className="me-2">Step 2:</b>  After uploading Form 16, Tax2win software will auto-fill the Form 16 data.</li>
                <li><b className="me-2">Step 3:</b> Verify your tax computation now and edit if required.</li>
                <li><b className="me-2">Step 4:</b>Click the "FILE MY RETURN" button, and you are done!</li>
              </ul>
        </div>}

        <div className="Faq w-full flex justify-between py-6" onClick={() => toggleAnswer(6)}>
          <p className="text-xl font-bold question">Can I e-file ITR without Form 16?</p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer === 6 &&
        <div className="answer text-left my-3 text-base"> 
          <p className=" mb-3">You can e-file your Income Tax Return even if you do not have Form 16. Salary slips also contain the details of the 
            deductions, which can be used in case Form 16 is unavailable.
             FORM 26AS and AIS/TIS are mandatory documents to file Income Tax Returns.</p>
        </div>}

        <div className="Faq w-full flex justify-between py-6" onClick={() => toggleAnswer(7)}>
          <p className="text-xl font-bold question">What are the penalties for not filing Income Tax Return in India?</p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer === 7 &&
        <div className="answer text-left my-3 text-base"> 
          <p className=" mb-3">If a taxpayer fails to file their Income Tax Return (ITR) by the due date, they may be liable to pay penalties and interest.
             The penalties for non-filing or late-filing of ITR in India are as follows:</p>
             <ol className="flex flex-col gap-1 mb-3 list-decimal pl-3 custom-circle" >
                  <li>Late filing fee: If a taxpayer fails to file their ITR by the due date, they may be liable to pay a late filing fee of up to Rs. 10,000, depending on the delay in filing. The late filing fee for belated ITR, i.e., ITR filed after the due date but before December 31st of the relevant assessment year, is Rs. 5,000. For returns filed after December 31st, the late filing fee increases to Rs. 10,000.</li>
                  <li>Interest on tax liability: If a taxpayer has any outstanding tax liability, interest will be charged on the amount due from the due date of filing until the date of payment. The interest rate is currently 1% per month, calculated from the due date of filing until the date of payment.</li>
                  <li>Loss of certain benefits: If a taxpayer files a belated return, they may lose certain benefits, such as the right to carry forward losses, etc. And in case of failure to file ITR at all, they will not be able to claim TDS refunds, if any.</li>
                  <li>Prosecution: In case of a willful failure to file ITR, the taxpayer may be subject to prosecution under Section 276CC of the Income Tax Act, which can result in imprisonment and/or fine.</li>
                </ol>
        </div>}

        <div className="Faq w-full flex justify-between py-6" onClick={() => toggleAnswer(8)}>
          <p className="text-xl font-bold question">What will be the next steps after e-filing of Income Tax Return?</p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer === 8 &&
        <div className="answer text-left my-3 text-base"> 
          <p className=" mb-3">Once you are done with e-filing of income tax return, you must:-</p>
          <ol className="list-disc list-inside pl-5 flex flex-col gap-2 mb-3 custom-circle">
            <li>Check your inbox for the provided email id. You will receive an intimation for successfully filing your Income Tax Return and ITR-V (Acknowledgement) attached to the email.</li>
            <li>With a new notification, a revised ITR can only be filed if your original ITR is verified.</li>
            <li>Cross Check all figures thoroughly in your filled ITR form or ITR-V for errors, mistakes, etc.</li>
            <li>Verify the income tax return within 30 days of filing, as Income Tax Return is processed only when ITR is verified. If you fail to verify the return, it will not be considered filed or processed by the Department. You will lose out on income tax refund (if any), etc. Also, you will have to file a new return from the beginning. Read more here.</li>
            <li>If you have a refund in your tax return, you shall receive the same in your bank account within the next few days. It is better to keep tracking your refund status so that you get all the important updates from the department. You can keep checking the refund status from here.</li>

          </ol> 
                <p>Note: Verifying ITR is an important step. The Income Tax Department will not process your filed Income Tax return unless it is verified . The time limit for verification of Filed Income Tax returns is 30 days. Previously this time limit was 120 days. This new rule is applicable for returns filed on or after 1st August 2022. If you have not verified your tax return, it shall be considered “Invalid,” 
                  i.e., null and void. It means that no Income Tax Return has been filed at all.</p>
        </div>}


      </div>
    </div>
  );
};

export default Faq_ITR;
