'use client';
import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Faq from "./faq";
import applyScrollAnimation from "@/components/scroll-animation";


export default function Partner() {
  const [open, setOpen] = useState(1);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  useEffect(() => {
    applyScrollAnimation(".animatepartner", ".animatepartner")
  }, [])

  return (
    <section className="px-8 pt-[40px] pb-[40px] md:pt-[100px]">
      <div className="container mx-auto flex justify-center gap-10 flex-col md:flex-row ">
        <div>
          <div className="max-w-[622px] border-l-[12px] border-[#7348a1] pl-[25px]">
            <p className="text-[24px] font-[600]">B2B Agent Program</p>
            <p className="text-[16px] mt-[10px]">EV Life provides elite service tailored to ev charger agencies. We go out of our way to ensure safety and quality of your customers. In addition, we offer attractive commissions to help you grow your business.</p>

            <a href="/partner">
              <div className="bg-[#7348a1] px-[5px] flex text-white py-[3px] rounded-[5px] w-[160px] justify-center mt-[10px]">Register Now</div>
            </a>
          </div>
          {/* <a href="/partner">
            <Card
              shadow={false}
              className="relative grid h-[25rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center hover:cursor-pointer mx-auto animatepartner"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('/image/ev/partner.jpg')] bg-cover bg-center"

              >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
              </CardHeader>
              <CardBody className="relative py-14 px-6 md:px-12">
                <Typography
                  variant="h2"
                  color="white"
                  className="mb-6 font-medium leading-[1.5]"
                >
                  Become A Partner
                </Typography>
              </CardBody>
            </Card>
          </a> */}
        </div>
        <Faq />
      </div>
    </section>
  )
}