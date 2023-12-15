'use client';

import {
  Typography,
  Card,
  CardHeader,
  CardBody
} from "@material-tailwind/react";
import Image from "next/image";

const INDUSTRIES = [
  {
    name: "Agriculture Technologies - RIOD INDIA",
    image: "/image/ev/agriculture.jpg",
    url: "/products/agriculture/"
  },
  {
    name: "Energy Solutions",
    image: "/image/ev/energy.jpg",
    url: "/products/energy-solutions/"
  },
  {
    name: "EV Charging Solutions RIOD INDIA",
    image: "/image/ev/charging.jpg",
    url: "/products/ev-charging/"
  },
  {
    name: "Industries 4.0",
    image: "/image/ev/industries.jpg",
    url: "/products/industries/"
  },
]

export default function IndustryShop() {
  return (
    <section className="px-8 py-20">
      <div className="container mx-auto text-center">
        <Typography variant="h1" color="blue-gray" className="mb-2">
          SHOP BY INDUSTRY
        </Typography>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
          {INDUSTRIES.map((industry, id) => {
            return (
              <a href={industry.url} key={id}>
                <Card
                  shadow={false}
                  className="relative grid h-[20rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center hover:cursor-pointer mx-auto"
                  
                >
                  <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className={`absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center bg-[url('/image/ev/${id}.jpg')] `}
                  >
                    <div className="absolute inset-0 h-full w-full bg-black opacity-50" ></div>
                    <Image
                      src={industry.image}
                      alt="industries"
                      className="h-full w-full object-cover"
                      height={100}
                      width={100}
                    />
                  </CardHeader>
                  <CardBody className="relative py-14 px-6 md:px-12">
                    <Typography
                      variant="h2"
                      color="white"
                      className="mb-6 font-medium text-[32px]"
                    >
                      {industry.name}
                    </Typography>
                  </CardBody>
                </Card>
              </a>
            )
          })}

        </div>
      </div>
    </section>
  )
}