"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="mt-12 bg-white px-8">
      <div className="container mx-auto grid h-full min-h-[65vh] w-full grid-cols-1 place-items-center gap-y-10 lg:grid-cols-2">
        <div className="row-start-1 lg:row-auto">
          <p className='xl:text-[18px] sm:text-[16px] text-[#7348A1] xl:tracking-[2.25px] sm:tracking-[2px] xl:leading-[22.5px] sm:leading-[20px] mt-[60px] md:mt-0'>EV LIFE - ENABLING GREENER TRANSPORT SOLUTIONS</p>
          <p className='xl:text-[48px] sm:text-[38px] text-[32px] font-[600] xl:tracking-[1.104px] sm:tracking-[0.874px] xl:leading-[57.6px] md:leading-[45px] text-[#151515] source py-[20px]'>Charge your<br /> car anywhere, anytime</p>
          <p className='xl:text-[18px] sm:text-[16px] xl:leading-[27px] sm:leading-[24px] text-[#575757]'>Our EV chargers are compatible with all Plug-in electric vehicles</p>
          <button className='h-[56px] w-[150px] bg-[#784DA7] hover:bg-[#7348A1] font-[700] xl:text-[16px] sm:text-[14px] tracking-[2.996px] text-white mt-[25px] mb-[30px] hover:shadow-xl transition-shadow duration-300 ease-in-out'
            onClick={() => window.location.href = `tel:+917736677477`}
          >CALL US</button>
        </div>
        <Image
          width={768}
          height={768}
          src="/image/ev/image1.png"
          className="rounded-lg shadow-md"
          alt="flowers"
        />
      </div>
    </header>
  );
}
export default Hero;