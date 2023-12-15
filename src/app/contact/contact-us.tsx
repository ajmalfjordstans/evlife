"use client";

import ContactForm from "@/components/contact-form";

export default function ContactUs() {
  return (
    <div className='bg-[#7348A1] mt-[60px]'>
      <div className='w-[100%] max-w-[1440px] mx-auto px-[6%] text-white py-[80px]' id='contact'>
        <div className='max-w-[853px] flex flex-col items-center mx-auto'>
          <p className='text-[22px] tracking-[0.99px] leading-[27px] my-[20px]'>Please contact us below </p>
          <ContactForm/>
        </div>
        <div className='flex flex-col items-center'>
          <p className='my-[40px] text-[22px] leading-[27.5px]'>EV LIFE</p>
          <p className='mt-[px] text-[16px] font-[700] leading-[24px]'>
            Email:
            <a className='underline hover:cursor-pointer' href="mailto:info@evlife.co.in">info@evlife.co.in</a>
          </p>
          <p className='mt-[px] text-[16px] font-[700] leading-[24px]'>
            Phone:
            <a className='underline hover:cursor-pointer' href="tel:+917736677477">+91 77366 77477</a>
          </p>
          <button
            onClick={() => window.open('https://api.whatsapp.com/send/?phone=917736677477')}
            className="bg-[white] text-[#303030] font-[700] text-[14px] h-[56px] w-[286px] focus:outline-none focus:shadow-outline-black flex items-center justify-center mt-[30px]">
            {/* <img src={whatsapp} alt="" className='h-[29px] mr-[10px]' /> */}
            Message us on Whatsapp
          </button>

          <p className='text-[16px] leading-[24px] mt-[80px]'>Enabling Greener Transport Solutions</p>
        </div>
      </div>
    </div>
  )
}