"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

function Hero() {

  useEffect(() => {
    gsap.fromTo(".triggerRef", { y: 150, opacity: 0, delay: 0 }, { y: 0, opacity: 1, delay: 0, duration: 1 })
  }, [])
  return (
    <header className="bg-landing bg-cover bg-center px-8 ">
      <div className="container mx-auto grid h-full min-h-[100dvh] w-full grid-cols-1 place-items-center gap-y-10 lg:grid-cols-2 font-nunito" >
        <div className="row-start-1 lg:row-auto text-[white] triggerRef" >
          <p className='xl:text-[18px] sm:text-[16px]  xl:tracking-[2.25px] sm:tracking-[2px] xl:leading-[22.5px] sm:leading-[20px] mt-[60px] md:mt-0 font-montserrat' >EV LIFE - ENABLING GREENER TRANSPORT SOLUTIONS</p>
          <p className='xl:text-[48px] sm:text-[38px] text-[32px] font-[600] xl:tracking-[-1.504px] sm:tracking-[0.874px] xl:leading-[57.6px] md:leading-[45px] source py-[20px] font-montserrat' >Charge your<br /> car anywhere, anytime</p>
          <p className='xl:text-[18px] sm:text-[16px] xl:leading-[27px] sm:leading-[24px] text-[#b3b3b3]'>Our EV chargers are compatible with all Plug-in electric vehicles</p>
          <div className="flex items-center gap-5" >
            <button className='h-[56px] w-[150px] bg-[#784DA7] hover:bg-[#7348A1] font-[700] xl:text-[16px] sm:text-[14px] tracking-[2.996px] text-white mt-[25px] mb-[30px] hover:shadow-xl transition-shadow duration-300 ease-in-out'
              onClick={() => window.location.href = `tel:+917736677477`}
            >CALL US</button>
          </div>
        </div>
        {/* <Image
          width={768}
          height={768}
          src="/image/ev/image1.jpg"
          className="rounded-lg shadow-md"
          alt="flowers"
        /> */}
      </div>
    </header>
  );
}
export default Hero;
