"use client";

import React, { useEffect } from "react";
import CategoryCard from "@/components/category-card";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import {
  GlobeEuropeAfricaIcon,
  MicrophoneIcon,
  PuzzlePieceIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

const CATEGORIES = [
  {
    img: "/image/ev/Icons/smart.png",
    bg: '/image/ev/smart.jpg',
    title: "SMART",
    desc: "Advanced Connectivity",
  },
  {
    img: "/image/ev/Icons/fast.png",
    bg: '/image/ev/fast.jpg',
    title: "FAST",
    desc: "upto 22kW Charging",
  },
  {
    img: "/image/ev/Icons/safe.png",
    bg: '/image/ev/safe.jpg',
    title: "SAFE",
    desc: "Advanced Protections",
  },
  {
    img: "/image/ev/Icons/compatible.png",
    bg: '/image/ev/compatible.jpg',
    title: "Compatible",
    desc: "All 2, 3, 4 Wheelers",
  },
];

const About = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.from('.scrollElement', {
      // y: 80,
      // opacity: 0,
      // duration: 0.5,
      // scrollTrigger: {
      //   trigger: '.scrollElement',
      //   start: "top 50%",
      //   end: "top 100%",
      //   toggleActions: "restart none reverse reset ",
      //   // markers: true
      // }
    })
  }, [])
  return (
    <section className="container mx-auto px-8 pb-20 pt-20 lg:pt-0 scrollElement">
      <div className="mb-20 mt-10  grid place-items-center text-center">
        {/* <Typography variant="h2" color="blue-gray" className="my-3">
          MEET POWERPOD
        </Typography>
        <Typography variant="lead" className="!text-gray-500 lg:w-6/12">
          We are passionate about revolutionizing the EV charging experience in India. Our innovative charging solutions are designed to be reliable, durable, and user-friendly, ensuring that EV owners have access to fast and convenient charging wherever they go.
        </Typography> */}
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* <Card
          color="blue"
          className="relative grid h-full w-full place-items-center overflow-hidden text-center"
          style={{ position: "relative", backgroundImage: "url('image/ev/warranty.jpg')", backgroundSize: "cover" }}
        >
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
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
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(0, 2).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(2, 4).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default About