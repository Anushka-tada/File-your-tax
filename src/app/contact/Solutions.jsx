import "./Soultions.css"

const Solutions = () => {
  return (
    <div className="">
    <div className="solutions lg:pt-40 md:pt-96 pt-96 pb-16 lg:px-40">
        <div className="solution-part1 flex  justify-center lg:flex-nowrap flex-wrap gap-6">
            <div className="part1-box text-center flex flex-col px-16 justify-center items-center  rounded-lg bg-white shadow-lg py-7   w-72">
            <img src="https://tax2win.in/assets-new/img/homepage/rating.svg" alt="Google Rating" title="Google Rating" width="35" height="35"/>
            <p className="font-medium mt-2">4.8 Google
            Rating</p>
            </div>
            <div className="part1-box text-center flex flex-col px-16 justify-center items-center rounded-lg bg-white shadow-lg py-7  w-72">
            <img src="https://tax2win.in/assets-new/img/homepage/team.svg" alt="Trusted by" title="Trusted by" width="35" height="35" />
            <p className="font-medium mt-2">Trusted by 1+ Million
            Users</p>
            </div>
            <div className="part1-box text-center flex flex-col px-16 justify-center items-center rounded-lg bg-white shadow-lg py-7  w-72">
            <img src="https://tax2win.in/assets-new/img/homepage/safe_secure.svg" alt="Safe and Secure" title="Safe and Secure" width="35" height="35"></img>
            <p className="font-medium mt-2">Secure and
            safe</p>
            </div>

            <div className="part1-box text-center flex flex-col px-10 justify-center items-center rounded-lg bg-white shadow-lg py-7 w-72">
            <img src="https://tax2win.in/assets-new/img/homepage/authorised.svg" alt="Authorized by Income Tax Department" title="Authorized by Income Tax Department" width="35" height="35"/>
<p className="font-medium mt-2">Authorized by Income Tax Department</p>
            </div>
        </div>
      
    </div>

    <div className="Queries py-16 bg-white text-center lg:px-40">
        <h1 className="font-bold text-2xl mb-9">We Have Solutions for All Your Tax Queries</h1>
        <div className="flex flex-wrap lg:flex-wrap justify-center gap-4">
             <div className="query rounded-lg p-4">
                <h5 className="font-bold">File Your Return</h5>
             </div>
             <div className="query rounded-lg p-4">
                <h5 className="font-bold">CA Assisted Tax Filing</h5>
             </div>
             <div className="query rounded-lg p-4">
                <h5 className="font-bold">Tax Planning Optimiser</h5>
             </div>
             <div className="query rounded-lg p-4">
                <h5 className="font-bold">Income Tax Calculator</h5>
             </div>
             <div className="query rounded-lg p-4">
                <h5 className="font-bold">Income Tax Notices</h5>
             </div>
             <div className="query rounded-lg p-4">
                <h5 className="font-bold">Income Tax Refund</h5>
             </div>
        </div>
    </div>
    </div>
  )
}

export default Solutions
