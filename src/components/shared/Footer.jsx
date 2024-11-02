import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'
import footerlogo from '../../assets/footerlogo.png'

export default function Footer() {
  return (
    <footer className="bg-[#0B2851] text-white py-12 md:px-[4vw] px-[3vw]">
      <div className="mx-auto">
        <div className="flex justify-center mb-12">
          <img
            src={footerlogo}
            alt="Sleepstiq Logo"
            className="h-16 w-auto"
          />
        </div>

        {/* Main Footer Content */}
        <div className="flex flex-wrap items-start justify-between md:gap-8 gap-6">
          {/* Company Section */}
          <div className='w-fit'>
            <h3 className="font-semibold text-base mb-3 text-[#FFFFFF]">COMPANY</h3>
            <ul className="space-y-2 text-[#ABABAB] md:text-base text-sm">
              <li><a href="/about" className="hover:text-blue-300">About</a></li>
              <li><a href="/blog" className="hover:text-blue-300">Blog</a></li>
              <li><a href="/contact" className="hover:text-blue-300">Contact</a></li>
              <li><a href="/jobs" className="hover:text-blue-300">Jobs</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className='w-fit'>
            <h3 className="font-semibold text-base mb-3 text-[#FFFFFF]">CONTACT</h3>
            <div className="space-y-2">
              <p className="text-[#ABABAB] md:text-[15px] text-sm">Phone</p>
              <p className="font-[500] text-white">+234 708 507 3128</p>
              <p className="text-[#ABABAB] md:text-[15px] text-sm mt-4">Address</p>
              <p className='font-[500] text-white max-w-[150px]'>16, Ogindipe Close, Upston Close</p>
            </div>
          </div>

          {/* Consumer Advisory */}
          <div className="lg:col-span-2 w-fit max-w-sm">
            <h3 className="font-semibold text-base mb-3 text-[#FFFFFF]">CONSUMER ADVISORY</h3>
            <p className="text-neutral-300  text-sm font-light">
              These statements have not been evaluated by the Food and Drug Administration. 
              This product is not intended to diagnose, treat, cure, or prevent any disease. 
              This product should be used only as directed on the label. All trademarks and 
              copyrights are property of their respective owners and not affiliated with nor 
              do they endorse this product. Results may vary.
            </p>
            <p className="text-neutral-300 mt-3 md:text-base text-sm">
              By using our website or product, you agree to follow our <span className='text-blue-400'>terms of service.</span>
            </p>
          </div>



           {/* Get in Touch Section */}
            <div className=" w-fit text-left ">
             <div className='border-neutral-500 border-l-[1px] pl-4'>
              <h3 className="text-base font-semibold mb-3 text-[#FFFFFF]">GET IN TOUCH</h3>
              <p className="text-gray-300 mb-3">Feel free to get in touch with us vai email</p>
              <a href="mailto:hello@sleepstiq.com" className="md:text-2xl text-xl font-semibold hover:text-blue-300">
                hello@sleepstiq.com
              </a>

              <div className="flex justify-start gap-4 md:mt-8 mt-4">
                <a href="#" className="p-2 bg-blue-400 rounded-full hover:bg-blue-500" aria-label="Facebook">
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-blue-400 rounded-full hover:bg-blue-500" aria-label="Twitter">
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-blue-400 rounded-full hover:bg-blue-500" aria-label="LinkedIn">
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
             </div>

              <div className="text-left mt-8 text-sm text-gray-300">
                © 2020@sleepstiq. All Rights Reserved.
              </div>
            </div>
         </div>
      </div>
    </footer>
  )
}