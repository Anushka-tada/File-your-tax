import "./contact_footer.css"

const Contact_footer = () => {
  return (
    <div className="contact-footer lg:px-24 px-4 pt-16 mb-14">
      <div className="footer-panels flex flex-wrap justify-center gap-28 pb-16">
        <div className="panel">
        <ul className="flex flex-col gap-2 ">
            <li className="text-lg font-bold mb-2 contact-panel-h">Quick Links </li>
            <li><a href="" >About</a></li>
            <li><a href="" >Contact</a></li>
            <li><a href="" >Pricing</a></li>
            <li><a href="" >FAQ</a></li>
            <li><a href="">Tax Glossary</a></li>

            <p className="mt-7  text-lg font-bold mb-2">Set Alert For Tax News</p>
            <input type="email" placeholder="Enter Your Email Adress" className="py-2 px-12 bg-transparent contact-email" />
            <div className="bg-zinc-200  flex justify-center items-center p-3 w-36 rounded-md">
              <div className="btn ">Subscribe</div>
            </div>
            </ul>
        </div>

        <div className="panel">
        <ul  className="flex flex-col gap-2 ">
            <li className="text-lg font-bold mb-2 contact-panel-h">Products</li>
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


        <div className="panel ">
        
     
        <ul  className="flex flex-col gap-2 ">
        <li className="text-lg font-bold mb-2 contact-panel-h text-black">Tax Tools</li>
          
        <li><a href="" >Income Tax Calculator</a></li>
        <li><a href="">Form 12BB</a></li>
        <li><a href="">HRA Calculator</a></li>
        <li><a href="" >Gratuity Calculator</a></li>
        <li><a href="">Rent Reciept Generator</a></li>
        <li><a href="" >Old vs New Tax Slab Regime Calculator</a></li>
         <li><a href="" >Transport Allowance Calculator</a></li>
        <li><a href="">TDS Calculator</a></li>
        <li><a href="">Calculator on Section 234F</a></li>
        <li><a href="">Sukanya Samriddhi Yojana Calculator</a></li>
        <li><a href="">ITR Eligibility Checker</a></li>
        </ul>

       </div>

       <div className="panel">
        <ul  className="flex flex-col gap-2 ">
            <li className="text-lg font-bold mb-2 contact-panel-h">Guides</li>
            <li><a href="">Income Tax Retur</a></li>
            <li><a href="">Deductions</a></li>
            <li><a href="" >Form 16</a></li>
            <li><a href="">Rent Receipt</a></li>
            <li><a href="">How to Link Aadhar with Pan</a></li>
            <li><a href="" >Income Tax Slab Rate 2022-23</a></li>
            <li><a href="">Aadhar</a></li>
            <li><a href="">Form 12BB</a></li>
            <li><a href="">e-verify Income Tax Return</a></li>
            <li><a href="">Revised Income Tax Return</a></li>
        </ul>
        </div>

        

       
      </div>
    </div>
  )
}

export default Contact_footer
