'use client';

import { Typography, Button, Input } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import VideoPlayer from "./common/video-player";
import { useState } from "react";

const LINKS = ["Product", "About", "Contact", "Blog"];
const SUB_LINKS = ["Privacy", "Terms"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  const [showVideo, setShowVideo] = useState(false)
  const [url, setUrl] = useState("")
  const handleShowVideo = () => {
    setShowVideo(!showVideo);
  }
  const setVidUrl = (url: string) => {
    setUrl(url)
    handleShowVideo()
  }
  return (
    <footer className="px-8 pt-20 bg-[#4A3360]">
      <div className="mx-auto ">
        <div className="flex md:justify-evenly md:gap-10 gap-4 flex-wrap lg:flex-nowrap" >
          <div className="flex flex-col items-center">
            <Image
              src='/logos/evwhite.png'
              alt="ev"
              className="h-32 w-44 max-w-[172px] hover:cursor-pointer mx-auto md:mx-0"
              height={768}
              width={768}
            />
            {/* #7348A1 */}
            <div className="text-left max-w-[500px]">
              <div className="text-center">
                <p className='xl:text-[16px] sm:text-[14px] text-[#FFF] xl:tracking-[2.25px] sm:tracking-[2px] xl:leading-[22.5px] sm:leading-[20px] mt-[60px] md:mt-0'>ENABLING GREENER TRANSPORT SOLUTIONS</p>
                <p className='xl:text-[16px] sm:text-[14px] text-[#FFF] xl:tracking-[2.25px] sm:tracking-[2px] xl:leading-[22.5px] sm:leading-[20px] mt-3'>EV charger provider for Kerala and Karnataka.</p>
                <p className='xl:text-[16px] sm:text-[14px] text-[#FFF] xl:tracking-[2.25px] sm:tracking-[2px] xl:leading-[22.5px] sm:leading-[20px] mt-3'> An authorised distributor of Riod. </p>
              </div>
            </div>
          </div>
          {/* <div className="w-[400px]">
          </div> */}
          <div className="flex flex-col">
            <p className='text-[20px] font-semibold text-[#FFF] xl:tracking-[2.25px] sm:tracking-[2px] xl:leading-[22.5px] sm:leading-[20px] mt-3'>Video Overview</p>
            {showVideo && url &&
              <VideoPlayer url={`https://youtu.be/${url}`} onClose={handleShowVideo} />
            }
            <p onClick={() => setVidUrl('DtE7gTPdCiQ')} className='xl:text-[16px] sm:text-[14px] text-[#FFF] xl:tracking-[2.25px] sm:tracking-[2px] xl:leading-[22.5px] sm:leading-[20px] mt-5 hover:cursor-pointer'>Chargers and Solution</p>
            <p onClick={() => setVidUrl('ZBbDTwgZcEA')} className='xl:text-[16px] sm:text-[14px] text-[#FFF] xl:tracking-[2.25px] sm:tracking-[2px] xl:leading-[22.5px] sm:leading-[20px] mt-5 hover:cursor-pointer'>Charger Production</p>
            <p onClick={() => setVidUrl('UPnjTfhT7HI')} className='xl:text-[16px] sm:text-[14px] text-[#FFF] xl:tracking-[2.25px] sm:tracking-[2px] xl:leading-[22.5px] sm:leading-[20px] mt-5 hover:cursor-pointer'>Charger Installation</p>
            {/* <iframe id="video_frame" width="560" height="315" src="" frameBorder="0"></iframe> */}
          </div>

          <div className="">
            <p className='text-[20px] font-semibold text-[#FFF] xl:tracking-[2.25px] sm:tracking-[2px] xl:leading-[22.5px] sm:leading-[20px] mt-3'>Quick link</p>
            <Link
              href='/contact'
            >
              <p className='xl:text-[16px] sm:text-[14px] text-[#FFF] xl:tracking-[2.25px] sm:tracking-[2px] xl:leading-[22.5px] sm:leading-[20px] mt-5'>Contact</p>
            </Link>
            <Link
              href='/products'
            >
              <p className='xl:text-[16px] sm:text-[14px] text-[#FFF] xl:tracking-[2.25px] sm:tracking-[2px] xl:leading-[22.5px] sm:leading-[20px] mt-3'>Product</p>
            </Link>
            <Link
              href='/about'
            >
              <p className='xl:text-[16px] sm:text-[14px] text-[#FFF] xl:tracking-[2.25px] sm:tracking-[2px] xl:leading-[22.5px] sm:leading-[20px] mt-3'> About</p>
            </Link>
            <Link
              href='/privacy'
            >
              <p className='xl:text-[16px] sm:text-[14px] text-[#FFF] xl:tracking-[2.25px] sm:tracking-[2px] xl:leading-[22.5px] sm:leading-[20px] mt-3'> Privacy</p>
            </Link>
            <Link
              href='/terms'
            >
              <p className='xl:text-[16px] sm:text-[14px] text-[#FFF] xl:tracking-[2.25px] sm:tracking-[2px] xl:leading-[22.5px] sm:leading-[20px] mt-3'> Terms</p>
            </Link>
            {/* <ul className="flex items-center">
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
            </ul> */}
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <Link
                href='mailto:info@evlife.co.in'
              >
                <p className='xl:text-[16px] sm:text-[14px] text-[#FFF] xl:tracking-[2.25px] sm:tracking-[2px] xl:leading-[22.5px] sm:leading-[20px] mt-6'> info@evlife.co.in</p>
              </Link>
              <Link
                href='tel:+917736677477'
              >
                <p className='xl:text-[16px] sm:text-[14px] text-[#FFF] xl:tracking-[2.25px] sm:tracking-[2px] xl:leading-[22.5px] sm:leading-[20px] mt-3'> +91 77366 77477</p>
              </Link>
            </div>
            <div className="flex gap-[10px]">
              <Image
                src='/image/ev/instagram.png'
                alt="instagram"
                onClick={() => window.open('https://www.instagram.com/evlife.in?igshid=YzAwZjE1ZTI0Zg==', '_blank')}
                className="h-7 w-7 hover:cursor-pointer"
                height={768}
                width={768}
              />
              <Image
                src='/image/ev/facebook.png'
                alt="facebook"
                onClick={() => window.open('https://www.facebook.com/profile.php?id=61551734563436&mibextid=LQQJ4d', '_blank')}
                className="h-7 w-7 hover:cursor-pointer"
                height={768}
                width={768}
              />
            </div>
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


          <Typography className="text-center font-normal !text-white">
            POWERED BY FJORDSTANS PVT LTD
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
