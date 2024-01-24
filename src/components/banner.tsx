import React from 'react'

export default function Banner() {
  return (
    <div className="bg-[#83C4F9] w-full flex justify-evenly items-center py-[3px] text-[11px] md:text-[14px] px-[10px] text-white">
      <span>GET 10% OFF THIS MONTH WHEN YOU TRY OUR SERVICES!</span>
      <span
        className="hover:cursor-pointer px-4 py-1 bg-white rounded-md text-black my-2"
      ><a href='tel:+917736677477' className='hover:cursor-pointer font-[500]'>+91 773 667 7477</a>
      </span>
    </div>
  )
}
