'use client';
import { useState } from "react";
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


export default function Partner() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <section className="px-8 pt-20">
      <div className="container mx-auto flex justify-center gap-10">
        <div>
          <div>

          </div>
          <a href="/partner">
            <Card
              shadow={false}
              className="relative grid h-[25rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center hover:cursor-pointer"
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
                <Typography placeholder=''
                  variant="h2"
                  color="white"
                  className="mb-6 font-medium leading-[1.5]"
                >
                  Become A Partner
                </Typography>
              </CardBody>
            </Card>
          </a>
        </div>
        <div className="w-full md:w-[50%]">
          <Typography placeholder=''
            variant="h3"
            className="mb-2"
          >
            FAQ
          </Typography>
          <Accordion open={open === 1} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className={`border-b-0 transition-colors ${open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
                }`}
            >
              FAQ 1
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              FAQ Description
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className={`border-b-0 transition-colors ${open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
                }`}
            >
              FAQ 2
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              FAQ Description
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3} className="rounded-lg border border-blue-gray-100 px-4">
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className={`border-b-0 transition-colors ${open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
                }`}
            >
              FAQ 3
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              FAQ Description
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </section>
  )
}