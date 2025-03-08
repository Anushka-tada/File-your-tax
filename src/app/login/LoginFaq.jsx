import React from 'react'
import './LoginFaq.css'

const LoginFaq = () => {
  return (
    <div className='login-Faqs lg:px-44 md:px-32 px-4 py-10 flex flex-col items-center'>
        <h1 className='text-3xl font-bold faq-heading mb-6'>FAQ's</h1>
        <div className="Faqs flex flex-col gap-4">
          <div className="login-faq py-3">
                 <div className="que font-bold text-xl mb-3">What is income tax return e-filing?</div>
                 <p className='text-lg mb-3'>Income Tax Return (ITR) efiling is the process of electronically submitting your income tax return to the tax authorities 
                  through income tax login portal. It allows taxpayers to file their tax returns by providing a convenient and efficient way to fulfill 
                  their tax obligations and completing the income tax login process.In traditional income tax filing methods, taxpayers would manually fill
                   out paper tax forms and submit them physically to the tax department. However, with ITR efiling process, taxpayers can complete their tax returns online
                    using tax software (like Tax2win) or government-authorized income tax e-filing site login.</p>
                    <div className="que mb-3 text-xl font-bold">Income Tax efiling offers several benefits, including:</div>
                    <ul className='text-lg custom-circle lg:ps-5 ps-3'>
                      <li><b>Convenience:</b> Taxpayers can file their income tax return from the comfort of their homes or offices, eliminating the need to visit tax offices physically.</li>
                      <li><b>Faster Processing:</b> Efiling expedites the processing of returns, leading to quicker refunds or assessments.</li>
                      <li><b>Accuracy:</b> The online income tax filing process reduces the chances of errors since the software often includes built-in validations.</li>
                      <li><b>Secure and Confidential:</b> Authorized ITR efiling login portals provide a secure environment to protect sensitive taxpayer information.</li>
                    </ul>
          </div>


          <div className="login-faq py-3">
            <div className="que font-bold text-xl mb-3">What are the benefits of filing income tax return?</div>
            <p className='text-lg mb-3'>Filing income tax returns offers several benefits for individuals and businesses alike. Here are some of the key advantages:</p>
            <ul className='text-lg custom-circle lg:ps-5 ps-3'>
                                <li>Legal compliance and avoiding penalties.</li>
                                <li>Claiming refunds for excess tax paid.</li>
                                <li>Documentation of income for financial purposes.</li>
                                <li>Enhanced financial planning and decision-making.</li>
                                <li>Improved creditworthiness for individuals.</li>
                                <li>Credibility for businesses.</li>
                                <li>Access to government benefits and subsidies.</li>
                                <li>Carry forward losses for future tax reductions.</li>
                                <li>Avoiding tax scrutiny or audits.</li>
                                <li>Contributing to nation-building and public services.</li>
                                <li>Ethical responsibility towards society and the country.</li>
                            </ul>
                            <p className='text-lg mb-3'><span className='blue-text'>Click here</span> to know more. The last date to file ITR is soon approaching, i.e. 31st July 2023.</p>
          </div>


          <div className="login-faq py-3">
            <div className="que font-bold text-xl mb-3">How to file an income tax return online?</div>
            <p className='text-lg mb-3'>Income tax return can be filed via income tax login at the income tax department’s <span className='blue-text'>website</span> or you can simply visit Tax2win
               income tax login page. At Tax2win you can file the ITR in just 5 steps here. Tax2win offers two ways to file the ITR: <span className='blue-text'>DIY
               (Self-filing)</span> and <span className='blue-text'>Assisted filing (Book eCA)</span>. Simply income tax login on the <span className='blue-text'>website</span> and access the easy-to-use DIY tax return 
                filing platform that is designed to help you get your maximum refund</p>
          </div>


          <div className="login-faq py-3">
            <div className="que font-bold text-xl mb-3">What is the advantage of ITR filing via Tax2win portal? </div>
            <p className='text-lg mb-3'>Tax2win is authorized by the income tax department; hence, the ITR filed will be considered valid. Its easy-to-use interface allows
               you to file the income tax return in just four minutes.</p>
               <p className='text-lg mb-3'>No separate income tax login required for the process, as the website is directly integrated with the income tax portal to do live filing.
                 Tax2win motive is to simplify the complex process of tax filing so that a person with zero knowledge of taxes can also file their taxes easily.</p>
          </div>


          <div className="login-faq py-3">
            <div className="que font-bold text-xl mb-3">Can I file ITR online with Tax2win even if I am not registered on the income tax efiling portal?</div>
            <p className='text-lg mb-3'>It is necessary for you to first get registered on the income tax e-filing portal to file your ITR with Tax2win. Tax2win website computes the 
              taxation basis on the sources of income and other details provided by you. Tax2win, offers the feature of pre-filling data from the income tax
               department where taxpayers get their financial data imported directly from their Form 26AS, Form 16 or the income tax department's database.</p>
          </div>


          <div className="login-faq py-3">
            <div className="que font-bold text-xl mb-3">I do not have Form 16 with me and I am a salaried individual. Can I file the ITR?</div>
            <p className='text-lg mb-3'>Yes, at Tax2win you can file the ITR even without having Form 16. All you need to have salary slips, bank
               statements with you. To know more, read <span className='blue-text'>here</span>.</p>
          </div>


          <div className="login-faq py-3">
<div className="que font-bold text-xl mb-3">Can I file the ITR myself?</div>
<p className='text-lg mb-3'>Yes, at Tax2win we provide you with the option to file your tax return on your <span className='blue-text'>own</span>. It’s Easy, quick, and free when you file with Tax2win on your own.
   You simply login to our itr filing page and have to provide a few basic details about your income, and prefill your rest details in one click. Isn’t this easy
    and quick! File ITR with Tax2win under 4 minutes.</p>

          </div>


          <div className="login-faq py-3">
            <div className="que font-bold text-xl mb-3">What if I need assistance while filing the ITR?</div>
            <p className='text-lg mb-3'>Tax2win offers the services where you can <span className='blue-text'>Book an eCA</span>. A dedicated Tax Expert who tackles your taxes from start to finish. An end-to end
               tax filing assistance is provided by the professionals, who at each step provide you with all-round support and ensure error-free filing.
                Claim exciting discounts on booking a tax expert at Tax2win.</p>
          </div>


          <div className="login-faq py-3">
            <div className="que font-bold text-xl mb-3">How to check my ITR refund status?</div>
            <p className='text-lg mb-3'>You can check the status of your Income-tax refund for any particular year <span className='blue-text'>here</span>.</p>
          </div>
        </div>
    </div>
  )
}

export default LoginFaq
