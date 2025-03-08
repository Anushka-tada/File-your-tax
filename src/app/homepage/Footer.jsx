import "./footer.css"

const Footer = () => {
  return (
    <div className="footer-section lg:px-24 px-4 pt-16">
      <div className="footer-panels flex flex-wrap gap-20 pb-16">
        <div className="panel">
        <ul className="flex flex-col gap-2 ">
            <li className="text-xl font-bold mb-2 panel-h">Quick Links </li>
            <li><a href="" >About</a></li>
            <li><a href="" >Contact</a></li>
            <li><a href="" >Pricing</a></li>
            <li><a href="" >FAQ</a></li>
            <li><a href="">Tax Glossary</a></li>
            </ul>
        </div>

        <div className="panel">
        <ul  className="flex flex-col gap-2 ">
            <li className="text-xl font-bold mb-2 panel-h">Products</li>
            <li><a href="">File Income Tax Return</a></li>
            <li><a href="">Upload Form 16</a></li>
            <li><a href="" >CA Assisted ITR Filing</a></li>
            <li><a href="">Tax Planning Optimiser</a></li>
            <li><a href="">Check ITR Refund Status</a></li>
            <li><a href="" >TDS Solution</a></li>
            <li><a href="">NRI Taxes &amp; ITR Filing</a></li>
            <li><a href="">Tax Advisory Services</a></li>
            <li><a href="">Capital Gain Tax Filing</a></li>
            <li><a href="">Income Tax Notices</a></li>
        </ul>
        </div>
{/* 
        tools panel */}

        <div className="panel ">
         <li className="text-xl font-bold mb-2 panel-h">Tax Tools</li>
          <div className="flex flex-wrap lg:flex-nowrap gap-20 justify-between">
        <ul  className="flex flex-col gap-2 ">
          
        <li><a href="" >Income Tax Calculator</a></li>
        <li><a href="">House Property Calculator</a></li>
        <li><a href="">Rent Receipt Generator</a></li>
        <li><a href="" >Tax Saving Calculator</a></li>
        <li><a href="">Simple Interest Calculator</a></li>
        <li><a href="" >Leave Encashment Calculator</a></li>
         <li><a href="" >80TTA Calculator</a></li>
        <li><a href="">Compound Interest Calculator</a></li>
        </ul>

        
        <ul  className="flex flex-col gap-2 ">
        <li><a href="" >Form 12BB</a></li>
        <li><a href="" >HRA Calculator</a></li>
        <li><a href="" >TDS Calculator</a></li>
        <li><a href="">Calculator on Section 234F</a></li>
        <li><a href="" >SSY Calculator</a></li>
        <li><a href="" >Cryptocurrency Tax Calculator</a></li>
        <li><a href="" >80DD Calculator</a></li>
       
        </ul>
       
<ul  className="flex flex-col gap-2 ">
<li><a href="">IFSC Code Search</a></li>
<li><a href="">Gratuity Calculator</a></li>
        <li><a href="" >Transport Allowance Calculator</a></li>
        <li><a href="">NSC Calculator</a></li>
      <li><a href="" >ITR Eligibility Checker</a></li>
        <li><a href="" >80D Calculator</a></li>
        <li><a href="" >80U Calculator</a></li>
         <li><a href="">Old vs New Tax Slab Regime Calculator</a></li>
</ul>
</div>
        </div>

        <div className="panel">
        <ul  className="flex flex-col gap-2 ">
            <li className="text-xl font-bold mb-2 panel-h">Services for Individuals
            </li>
            <li><a href="">Income Tax Returns Filing</a></li>
        <li><a href="">TDS Returns Filing</a></li>
        <li><a href="">Tax Planning &amp; Saving</a></li>
        <li><a href="">Digital Signature Certificate</a></li>
        <li><a href="">PAN Card Services</a></li></ul>
        </div>

        <div className="panel">
        <ul  className="flex flex-col gap-2 ">
            <li className="text-xl font-bold mb-2 panel-h">Services for Businesses</li>
            <li><a href="">GST Registration</a></li>
            <li><a href="">Income Tax Returns filing</a></li>
            <li><a href="">GST Returns filing</a></li>
            <li><a href="">TDS Returns filing</a></li>
            <li><a href="">Tax Planning &amp; Saving</a></li>
            <li><a href="">Digital Signature Certificate</a></li>
            <li><a href="">PAN Card Services</a></li>
            <li><a href="">Company Registration</a></li>
            </ul>
        </div>

        <div className="panel">

        <ul  className="flex flex-col gap-2 ">
            <li className="text-xl font-bold mb-2 panel-h">Income Tax Guides</li>
            <li><a href="" >Income Tax Return</a></li>
        <li><a href="">Deductions</a></li>
        <li><a href="">Form 16</a></li>
        <li><a href="">Rent Receipt</a></li>
        <li><a href="">House Property tax</a></li>
        <li><a href="" >How to Link Aadhar with Pan</a></li>
        <li><a href="" >Income Tax Slab Rate 2023-24</a></li>
        <li><a href="" >Pan Card</a></li>
        <li><a href="" >Aadhar</a></li>
        <li><a href="">TDS</a></li>
        <li><a href="">Capital Gains Income</a></li>
        <li><a href="" >e-verify Income Tax Return</a></li>
        <li><a href="">Revised Income Tax Return</a></li>
        </ul>
        </div>

        <div className="panel">
           
        <ul  className="flex flex-col gap-2 ">
        <li className="text-xl font-bold mb-2 panel-h">GST Guides
        </li>
            <li><a href="t">GST</a></li>
        <li><a href="">GST System</a></li>
        <li><a href="">GST Registration</a></li>
        <li><a href="">Input Tax Credit</a></li>
        <li><a href="">GST Procedure</a></li>
        <li><a href="">GST Returns</a></li>
        <li><a href="">GST eWay Bill</a></li>
        <li><a href="h">GST Rates</a></li>
        </ul>
        </div>

        <div className="panel">

        <ul  className="flex flex-col gap-2 ">
            <li className="text-xl font-bold mb-2 panel-h">Mutual Fund Guides</li>
            <li><a href="">Mutual Fund Types</a></li>
        <li><a href="">Tax-Saving mutual Fund</a></li>
        <li><a href="">ELSS</a></li>
        <li><a href="">Dividend mutual Fund</a></li>
        <li><a href="">Tax saving investments</a></li>
        </ul>
        </div>
      </div>


      <div className="footer-last-parts flex flex-wrap justify-between items-end py-7">
        <div className="footer-part1 ">
            <p className="text-base pl-3  mb-2">Set Alert for Tax News</p>
            <div className="flex flex-wrap gap-3">
                <input type="email" placeholder="Enter Your Email Address" className="email-input text-lg py-3 px-10  lg:px-16 rounded-full"/>
                <div className="subscribe-btn text-white text-lg font-medium inline-flex  py-3 px-12 gap-3 rounded-full mt-4 mb-5  lg:mb-0 md:mb-0 lg:w-auto md:w-auto w-full flex justify-center">
                    Subscribe
                </div>
            </div>

        </div>

        <div className="footer-image">
        <img src="https://tax2win.in/assets-new/img/new-theme/iso-certificates.svg" alt="ISO Certified" width="330" height="43"/>
        </div>

      </div>

      <div className="copyrights flex flex-wrap justify-between py-5">
        <p>© 2025 TAX2WIN. All Rights Reserved.</p>
        <p>Terms & Conditions | Privacy Policy        </p>
      </div>
    </div>
  )
}

export default Footer
