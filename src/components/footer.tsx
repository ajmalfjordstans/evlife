'use client';

import { Typography, Button, Input } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

const LINKS = ["Product", "About", "Contact", "Blog"];
const SUB_LINKS = ["Privacy", "Terms"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="px-8 pt-20 bg-[#7348A1]">
      <div className="mx-auto ">
        <div className="flex md:justify-evenly items-center md:gap-10 gap-4 flex-wrap lg:flex-nowrap" >
          <Image
            src='/logos/evblack.png'
            alt="ev"
            className="h-32 w-44 max-w-[172px] hover:cursor-pointer mx-auto md:mx-0"
            height={768}
            width={768}
          />
          {/* #7348A1 */}
          <div className="text-left">
            <div className="text-center">
              <p className='xl:text-[18px] sm:text-[16px] text-[#FFF] xl:tracking-[2.25px] sm:tracking-[2px] xl:leading-[22.5px] sm:leading-[20px] mt-[60px] md:mt-0'>ENABLING GREENER TRANSPORT SOLUTIONS</p>
              <p className='xl:text-[18px] sm:text-[16px] text-[#FFF] xl:tracking-[2.25px] sm:tracking-[2px] xl:leading-[22.5px] sm:leading-[20px] mt-3'>EV charger provider for Kerala and Karnataka.</p>
              <p className='xl:text-[18px] sm:text-[16px] text-[#FFF] xl:tracking-[2.25px] sm:tracking-[2px] xl:leading-[22.5px] sm:leading-[20px] mt-3'> An authorised distributor of Riod. </p>
            </div>
            <Link
              href='mailto:info@evlife.co.in'
            >
              <p className='xl:text-[18px] sm:text-[16px] text-[#FFF] xl:tracking-[2.25px] sm:tracking-[2px] xl:leading-[22.5px] sm:leading-[20px] mt-6'> info@evlife.co.in</p>
            </Link>
            <Link
              href='tel:+917736677477'
            >
              <p className='xl:text-[18px] sm:text-[16px] text-[#FFF] xl:tracking-[2.25px] sm:tracking-[2px] xl:leading-[22.5px] sm:leading-[20px] mt-3'> +91 77366 77477</p>
            </Link>
          </div>
          {/* <div className="w-[400px]">
            
          </div> */}
          <div className="">
            <p className='text-[24px] font-semibold text-[#FFF] xl:tracking-[2.25px] sm:tracking-[2px] xl:leading-[22.5px] sm:leading-[20px] mt-3'>Quick link</p>
            <Link
              href='/contact'
            >
              <p className='xl:text-[18px] sm:text-[16px] text-[#FFF] xl:tracking-[2.25px] sm:tracking-[2px] xl:leading-[22.5px] sm:leading-[20px] mt-5'>Contact</p>
            </Link>
            <Link
              href='/products'
            >
              <p className='xl:text-[18px] sm:text-[16px] text-[#FFF] xl:tracking-[2.25px] sm:tracking-[2px] xl:leading-[22.5px] sm:leading-[20px] mt-3'>Product</p>
            </Link>
            <Link
              href='/about'
            >
              <p className='xl:text-[18px] sm:text-[16px] text-[#FFF] xl:tracking-[2.25px] sm:tracking-[2px] xl:leading-[22.5px] sm:leading-[20px] mt-3'> About</p>
            </Link>
          </div>
          <div className="flex gap-4">
            <Image
              src='/image/ev/instagram.png'
              alt="instagram"
              onClick={() => window.open('https://www.instagram.com/evlife.in?igshid=YzAwZjE1ZTI0Zg==', '_blank')}
              className="h-11 w-11 hover:cursor-pointer"
              height={768}
              width={768}
            />
            <Image
              src='/image/ev/facebook.png'
              alt="facebook"
              onClick={() => window.open('https://www.facebook.com/profile.php?id=61551734563436&mibextid=LQQJ4d', '_blank')}
              className="h-11 w-11 hover:cursor-pointer"
              height={768}
              width={768}
            />
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-blue-gray-50 py-6 md:px-20 md:justify-between">
          <Typography className="text-center font-normal !text-white">
            COPYRIGHT &copy; {CURRENT_YEAR}  {" "}
            <a href="" target="_blank">
              EV LIFE
            </a>{" "}
            - ALL RIGHTS RESERVED.
          </Typography>

          <ul className="flex items-center">
            {SUB_LINKS.map((link, idx) => (
              <li key={link}>
                <Typography
                  as="a"
                  href={link.toLowerCase()}
                  className={`py-1 font-normal !text-white transition-colors hover:!text-gray-900 ${idx === SUB_LINKS.length - 1 ? "pl-2" : "px-2"
                    }`}
                >
                  {link}
                </Typography>
              </li>
            ))}
          </ul>
          <Typography className="text-center font-normal !text-white">
            POWERED BY FJORDSTANS PVT LTD
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
