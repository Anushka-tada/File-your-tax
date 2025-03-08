import './contactForm.css'

const Contactform = () => {
  return (
   <div className="contact-outer bg-slate-100 flex justify-center ">
    
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14228.241045568315!2d75.786518!3d26.933304!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5ad8de1da8bc13a9!2sTax2win!5e0!3m2!1sen!2sin!4v1515057762465" 
width="100%" height="400" frameBorder="0"  allowFullScreen=""></iframe>
<div className="map"></div>
     <div className='contactForm flex flex-wrap lg:flex-nowrap lg:justify-between  gap-8 bg-white lg:w-3/4 lg:mt-20 rounded-s-lg'>

          <div className="contact-left flex flex-col gap-4 p-8 py-10">
            <h2 className='text-xl mb-10'>Get Instant Tax Help</h2>
            <div className='flex gap-6 '>
                <input type="text" name="" placeholder='Name' className='p-2 name '/>
                <input type="text" placeholder='Phone' className='p-2 phone '/>
            </div>
            <input type="email" placeholder='Email' className='p-2 mail ' />
            <textarea name="" id="" placeholder='Comments' rows="3" className='p-2 comment' ></textarea>

        <div className="subit absolute lg:left-96 top-60  md:left-52 left-32 ms-36 bg-blue p-4 rounded-full">         
           <img src="https://tax2win.in/assets-new/img/send.svg" alt="" className='' width="35" height="35"></img>
           </div>
          </div>

          <div className="contact-right p-8 py-10 lg:px-14 md:px-9 px-4 flex  flex-col  gap-3 items-start ps-9 lg:ps-9 md:ps-9 ">
            <h2 className='text-white text-xl'>Write We are here to help</h2>
            
            <div className='flex justify-start gap-3'>
            <img src="https://tax2win.in/assets-new/img/location-icon.svg" alt="address" width="28" height="28" />
            <p className='text-white'>301, 302-303, C‐94, Fortune Heights Shubhash Marg, Jaipur, Rajasthan 302001</p>
            </div>

            <div className='flex gap-3 justify-start'>
            <img src="https://tax2win.in/assets-new/img/mobile-icon.svg" alt="call " width="28" height="28"/>
            <p className='text-white'>+91 91166 84439</p>
            </div>

            <div className='flex gap-3 justify-start'>
           <img src="https://tax2win.in/assets-new/img/email-icon.svg" alt="support" width="28" height="28"/>
              <a className='text-white' href="mailto:support@tax2win.in">support@tax2win.in</a>
            </div>

           <div className='flex justify-end w-full '>
           <img src="https://tax2win.in/assets-new/img/about-us/support.svg" alt="" width="120" className="support-img"></img>

           </div>
          </div>
          
     </div>
   </div>
  )
}

export default Contactform





// import './contactForm.css'

// const Contactform = () => {
//   return (
//    <div className="contact-outer bg-slate-100 flex justify-center ">
    
// <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14228.241045568315!2d75.786518!3d26.933304!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5ad8de1da8bc13a9!2sTax2win!5e0!3m2!1sen!2sin!4v1515057762465" 
// width="100%" height="400" frameBorder="0"  allowFullScreen=""></iframe>
// <div className="map"></div>
//      <div className='contactForm flex flex-wrap lg:flex-nowrap lg:justify-between md:justify-center justify-center gap-8 bg-white lg:w-3/4 lg:mt-20 rounded-s-lg'>

//           <div className="contact-left flex flex-col gap-4 p-8 py-10">
//             <h2 className='text-xl mb-10'>Get Instant Tax Help</h2>
//             <div className='flex gap-6 '>
//                 <input type="text" name="" placeholder='Name' className='p-2 name '/>
//                 <input type="text" placeholder='Phone' className='p-2 phone '/>
//             </div>
//             <input type="email" placeholder='Email' className='p-2 mail ' />
//             <textarea name="" id="" placeholder='Comments' rows="3" className='p-2 comment' ></textarea>

//         <div className="subit absolute lg:left-96 top-60  md:left-96 left-32 ms-36 bg-green-600 p-4 rounded-full">         
//            <img src="https://tax2win.in/assets-new/img/send.svg" alt="" className='' width="35" height="35"></img>
//            </div>
//           </div>

//           <div className="contact-right p-8 py-10 lg:px-14 md:px-9 px-4 flex  flex-col  gap-3 lg:items-start  ps-9 lg:ps-9 md:ps-9 ">
//             <h2 className='text-white text-xl'>Write We are here to help</h2>
            
//             <div className='flex justify-start gap-3'>
//             <img src="https://tax2win.in/assets-new/img/location-icon.svg" alt="address" width="28" height="28" />
//             <p className='text-white'>301, 302-303, C‐94, Fortune Heights Shubhash Marg, Jaipur, Rajasthan 302001</p>
//             </div>

//             <div className='flex gap-3 justify-start'>
//             <img src="https://tax2win.in/assets-new/img/mobile-icon.svg" alt="call " width="28" height="28"/>
//             <p className='text-white'>+91 91166 84439</p>
//             </div>

//             <div className='flex gap-3 justify-start'>
//            <img src="https://tax2win.in/assets-new/img/email-icon.svg" alt="support" width="28" height="28"/>
//               <a className='text-white' href="mailto:support@tax2win.in">support@tax2win.in</a>
//             </div>

//            <div className='flex justify-end w-full '>
//            <img src="https://tax2win.in/assets-new/img/about-us/support.svg" alt="" width="120" class="support-img"></img>

//            </div>
//           </div>
          
//      </div>
//    </div>
//   )
// }

// export default Contactform



