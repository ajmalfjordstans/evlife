"use client";

import React from "react";
import CategoryCard from "@/components/category-card";

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
    title: "SMART",
    desc: "Advanced Connectivity",
  },
  {
    img: "/image/ev/Icons/fast.png",
    title: "FAST",
    desc: "upto 22kW Charging",
  },
  {
    img: "/image/ev/Icons/safe.png",
    title: "SAFE",
    desc: "Advanced Protections",
  },
  {
    img: "/image/ev/Icons/compatible.png",
    title: "Compatible",
    desc: "All 2, 3, 4 Wheelers",
  },
];

const About = () => {
  return (
    <section className="container mx-auto px-8 pb-20 pt-20 lg:pt-0">
      <div className="mb-20 grid place-items-center text-center">
        <Typography variant="h2" color="blue-gray" className="my-3">
          MEET POWERPOD
        </Typography>
        <Typography variant="lead" className="!text-gray-500 lg:w-6/12">
          At RIOD, we’re passionate about revolutionizing the EV charging experience in India. Our innovative charging solutions are designed to be reliable, durable, and user-friendly, ensuring that EV owners have access to fast and convenient charging wherever they go.
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card
          color="blue"
          className="relative grid h-full w-full place-items-center overflow-hidden text-center"
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
              Designed and Engineered by our in-house team at RIOD.
            </Typography>
            <Typography
              color="white"
              className="mt-4 mb-14 font-normal opacity-50"
            >
              Made with❤️in India
            </Typography>
          </CardBody>
        </Card>
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