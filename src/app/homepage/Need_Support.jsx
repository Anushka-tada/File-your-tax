import "./need_support.css"

const Need_Support = () => {
  return (
    <div className="needSupport flex flex-wrap-reverse items-center justify-center lg:justify-between py-11 lg:px-24 px-4 ">
         <div className="supports flex flex-wrap justify-center gap-6">
            <h2 className=" text-3xl font-semibold text-white">Need Support?</h2>
            <div className="contact flex gap-3 items-center">
            <img src="https://tax2win.in/assets-new/img/new-theme/call.svg" alt="Call Now" width="32" height="32"/>
            <h2 className=" text-white text-2xl">+91 91166 84439</h2>
            </div>
            <div className="mail flex gap-3 items-center">
            <img src="https://tax2win.in/assets-new/img/new-theme/mail.svg" alt="Call Now" width="32" height="32"/>
           <h2 className=" text-white text-2xl"> support@tax2win.in</h2>
            </div>
</div>

<div className="social-icons flex justify-center gap-6">
            <a href="https://www.facebook.com/tax2win" >
            <img src="https://tax2win.in/assets-new/img/new-theme/fb.svg" alt=""/>
           </a>
           <a href="https://twitter.com/tax2win" >
           <img src="https://tax2win.in/assets-new/img/new-theme/twiter.svg" alt=""/>
           </a>
           <a href="https://www.linkedin.com/company/tax2win" >
           <img src="https://tax2win.in/assets-new/img/new-theme/linkdin.svg" alt=""/>
           </a>
           <a href="https://www.youtube.com/channel/UCI5JZW94yuU6pxH6yKTwuOw/featured" >
           <img src="https://tax2win.in/assets-new/img/new-theme/youtube.svg" alt=""/>
           </a>
           <a href="https://www.instagram.com/tax2win/">
           <img src="https://tax2win.in/assets-new/img/new-theme/insta.svg" alt=""/>
           </a>  
                   </div>
    </div>
  )
}

export default Need_Support
