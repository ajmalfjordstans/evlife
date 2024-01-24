"use client";

import React, { useEffect } from "react";
import CategoryCard from "@/components/category-card";

import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import {
  GlobeEuropeAfricaIcon,
  MicrophoneIcon,
  PuzzlePieceIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";
import applyScrollAnimation from "@/components/scroll-animation";

const CATEGORIES = [
  // {
  //   // img: "",
  //   bg: '/image/ev/warranty.jpg',
  //   title: "2 Year Warranty",
  //   desc: "Designed and Engineered by experts. \n Made with❤️in India \n Authorized distributor of  RIOD",
  // },
  {
    // img: "/image/ev/Icons/smart.png",
    bg: '/image/ev/smart.jpg',
    title: "SMART",
    desc: "Advanced Connectivity",
  },
  {
    // img: "/image/ev/Icons/fast.png",
    bg: '/image/ev/fast.jpg',
    title: "FAST",
    desc: "upto 22kW Charging",
  },
  {
    // img: "/image/ev/Icons/safe.png",
    bg: '/image/ev/safe.jpg',
    title: "SAFE",
    desc: "Advanced Protections",
  },
  {
    // img: "/image/ev/Icons/compatible.png",
    bg: '/image/ev/compatible.jpg',
    title: "COMPATIBLE",
    desc: "All 2, 3, 4 Wheelers",
  },
];

const About = () => {

  useEffect(() => {
    applyScrollAnimation('.scrollElement', '.triggerElement')
    applyScrollAnimation('.scrollElement2', '.triggerElement2')
  }, [])
  return (
    <section className="container mx-auto px-8 pb-20 pt-20 lg:pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="mb-20 mt-10  scrollElement triggerElement">
          <Typography variant="h2" color="blue-gray" className="my-3 font-montserrat text-[24px] md:text-[36px]">
            MEET POWERPOD
          </Typography>
          <Typography variant="lead" className="!text-gray-800 md:w-6/12 lg:w-[80%] text-[16px] md:text-[18px] font-nunito ">
            We are passionate about revolutionizing the EV charging experience in India. Our innovative charging solutions are designed to be reliable, durable, and user-friendly, ensuring that EV owners have access to fast and convenient charging wherever they go.
          </Typography>
          {/* <Card
            color="blue"
            className="relative grid h-[350px] w-[350px] place-items-center overflow-hidden text-center"
            style={{ position: "relative", backgroundImage: "url('image/ev/warranty.jpg')", backgroundSize: "cover" }}
          >
            <div className="absolute inset-0 h-full w-full bg-gray-900/75 " />
            <CardBody className="relative w-full">
              <Typography variant="h1" className="mt-9" color="white">
                2
              </Typography>
              <Typography variant="h4" className="mt-1" color="white">
                Year Warranty
              </Typography>
              <Typography
                color="white"
                className="mt-9 mb-14 font-normal opacity-50"
              >
                Designed and Engineered by experts.
              </Typography>
              <Typography
                color="white"
                className="mt-4 mb-14 font-normal opacity-50"
              >
                Made with❤️in India
              </Typography>
              <Typography
                color="white"
                className="mt-4 mb-14 font-normal opacity-50"
              >
                Authorized distributor of  RIOD
              </Typography>
            </CardBody>
          </Card> */}
        </div>
        {/*  xl:px-[150px] */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-3 scrollElement2 triggerElement2">

          {CATEGORIES.map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}

          {/* <div className="col-span-1 flex flex-col gap-6">
          </div> */}
          {/* <div className="col-span-1 flex flex-col gap-6">
            {CATEGORIES.slice(3, 5).map((props, key) => (
              <CategoryCard key={key} {...props} />
            ))}
          </div> */}
        </div>
      </div>
    </section >
  )
}

export default About