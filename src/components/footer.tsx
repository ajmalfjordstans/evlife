'use client';

import { Typography, Button, Input } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

const LINKS = ["Product", "About", "Contact", "Blog"];
const SUB_LINKS = ["Privacy", "Terms"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center md:gap-10 gap-4 flex-wrap lg:flex-nowrap" >
          <Image
            src='/logos/evblack.png'
            alt="ev"
            className="h-32 w-44 hover:cursor-pointer mx-auto"
            height={768}
            width={768}
          />
          <div className="text-center">
            <p className='xl:text-[18px] sm:text-[16px] text-[#7348A1] xl:tracking-[2.25px] sm:tracking-[2px] xl:leading-[22.5px] sm:leading-[20px] mt-[60px] md:mt-0'>ENABLING GREENER TRANSPORT SOLUTIONS</p>
            <p className='xl:text-[18px] sm:text-[16px] text-[#7348A1] xl:tracking-[2.25px] sm:tracking-[2px] xl:leading-[22.5px] sm:leading-[20px] mt-3'>EV charger provider for Kerala and Karnataka. An authorised distributor of Riod. </p>
          </div>
          <div className="w-[400px]">
            <Link
              href='/contact'
            >
              <Typography
                variant="lead"
                className="hover:cursor-pointer"
                href="mailto:info@evlife.co.in"
              >
                info@evlife.co.in
              </Typography>
            </Link>
            <Link
              href='tel:+917736677477'
            >
              <Typography
                variant="lead"
                className="hover:cursor-pointer"

              >
                +91 77366 77477
              </Typography>
            </Link>
          </div>
          <div className="md:w-[400px]">
            <Typography
              variant="h4"
            >
              Quick link
            </Typography>
            <Link
              href='/contact'
            >
              <Typography
                variant="lead"
                className="hover:cursor-pointer"

              >
                Contact
              </Typography>
            </Link>
            <Link
              href='/products'
            >
              <Typography
                variant="lead"
                className="hover:cursor-pointer"

              >
                Product
              </Typography>
            </Link>
            <Link
              href='/contact'
            >
              <Typography
                variant="lead"
                className="hover:cursor-pointer"
              >
                About
              </Typography>
            </Link>
          </div>
          <div className="flex gap-4">
            <Image
              src='/image/ev/instagram.png'
              alt="instagram"
              onClick={() => window.open('https://www.instagram.com/evlife.in?igshid=YzAwZjE1ZTI0Zg==', '_blank')}
              className="h-8 w-8 hover:cursor-pointer"
              height={768}
              width={768}
            />
            <Image
              src='/image/ev/facebook.png'
              alt="facebook"
              onClick={() => window.open('https://www.facebook.com/profile.php?id=61551734563436&mibextid=LQQJ4d', '_blank')}
              className="h-8 w-8 hover:cursor-pointer"
              height={768}
              width={768}
            />
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-blue-gray-50 py-6 md:justify-between">
          <Typography className="text-center font-normal !text-gray-700">

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
                  className={`py-1 font-normal !text-gray-700 transition-colors hover:!text-gray-900 ${idx === SUB_LINKS.length - 1 ? "pl-2" : "px-2"
                    }`}
                >
                  {link}
                </Typography>
              </li>
            ))}
          </ul>
          <Typography className="text-center font-normal !text-gray-700">
            POWERED BY FJORDSTANS PVT LTD
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
