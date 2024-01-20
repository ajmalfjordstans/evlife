"use client";
import React from "react";

import { Typography, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
const FAQS = [
  {
    title: "Immediate availability",
    desc: "Book online 24/7 with immediate confirmation. With EV Life, you have real time availability and hassle free booking.",
  },
  {
    title:
      "Priority support",
    desc: "A professional support team is accessible 24/7 to assist with any day to day needs including on-site requirements. Our services ensure customer satisfaction.",
  },
  {
    title: "Best service guaranteed",
    desc: "Make bookings for your clients with assurance of offering them the best possible price and getting the best benefit for you and your client.",
  }
];

function Icon({ id, open }: { id: number, open: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id == open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export function Faq() {
  const [open, setOpen] = React.useState(1);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section className="px-8">
      <div className="container mx-auto animatepartner">
        <div className="mx-auto lg:max-w-screen-lg lg:px-20">
          {FAQS.map(({ title, desc }, key) => (
            <Accordion key={key} icon={<Icon id={key + 1} open={open} />} open={open === key + 1} className="mb-2 border border-blue-gray-100 rounded-[10px] bg-white">
              <AccordionHeader
                onClick={() => handleOpen(key + 1)}
                className="text-left text-white hover:text-white bg-[#6B414B] text-[16px] px-[20px] rounded-[10px] font-[500] font-nunito"
              >
                {title}
              </AccordionHeader>
              <AccordionBody className="font-normal text-black bg-white px-[20px] rounded-b-[10px] font-nunito">
                {desc}
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Faq;
