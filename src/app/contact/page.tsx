"use client"

import { Typography } from "@material-tailwind/react"
import ContactUs from "./contact-us"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="w-full ">
      <div className="min-h-[70vh] flex flex-col items-center mt-[50px]">
        <Typography variant="h1" color="blue-gray" className="mb-2">
         Contact Us
        </Typography>
        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:w-[700px] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-5">
          <Image
            className="object-cover w-full rounded-t-lg h-96 md:h-[400px] md:w-[300px] md:rounded-none md:rounded-s-lg"
            src="/image/ev/office.jpeg"
            style={{ objectPosition: '100% 30%' }}
            height={768}
            width={768}
            alt="riod" />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Office Address</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">RIOD LOGIC PVT LTD</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              11/334-H, 2nd Floor, <br />
              Kallely Tower, Vengoor<br />
              Kidangoor P.O, Angamaly<br />
              Kochi, Kerala India - 683572<br />
              M : 9746006455<br />
              GSTIN: 32AAICR8672C1ZC<br />
            </p>
          </div>
        </a>
      </div>
      <ContactUs/>
    </div>
  )
}