"use client";

import { Typography } from "@material-tailwind/react";
import Partner from "../partner";
import CarouselFeatures from "../carousel-features";

export default function AboutPage() {
  return (
    <div className="w-full container mx-auto">
      <div className="flex flex-col items-center mt-[50px]">
        <Typography variant="h1" color="blue-gray" className="mb-2">
          About us
        </Typography>

        <Typography
          variant="lead"
          className="mt-3"
        >
          EV charger provider for Kerala and Karnataka. An authorised distributor of Riod.
        </Typography>
        <div className="text-center">
          <Typography
            variant="paragraph"
            className="mt-3"
          >
            We aim to make our customers happy, secure and comfortable in their personal and professional lives by realizing the ideas of Internet of things (IoT) and automation in every aspects.
          </Typography>
          <Typography
            variant="paragraph"
            className="mt-3"
          >
            Along with Riod, our experienced and dedicated team  is passionate about revolutionizing the EV charging experience in India. Our innovative charging solutions are designed to be reliable, durable, and user-friendly, ensuring that EV owners have access to fast and convenient charging wherever they go.
          </Typography>
        </div>
        <div className="grid grid-cols-3 mt-20 gap-10">
          <div>
            <Typography variant="h5" color="blue-gray" className="mb-7 text-center">
              POWERPOD HOME
            </Typography>
            <Typography variant="paragraph" color="blue-gray" className="mb-2 text-center">
              Power up your EV in the comfort of your own home or business with our private EV charger.
            </Typography>
          </div>
          <div>
            <Typography variant="h5" color="blue-gray" className="mb-7 text-center">
              POWERPOD GO
            </Typography>
            <Typography variant="paragraph" color="blue-gray" className="mb-2 text-center">
              Get fast and reliable EV charging for your business with our commercial-grade EV charger.
            </Typography>
          </div>
          <div>
            <Typography variant="h5" color="blue-gray" className="mb-7 text-center">
              POWERPOD CITY
            </Typography>
            <Typography variant="paragraph" color="blue-gray" className="mb-2 text-center">
              Charge two vehicles at once with our rugged commercial-grade dual vehicle EV charger.
            </Typography>
          </div>
        </div>
      </div>
      <Partner />
      <CarouselFeatures />
    </div>
  )
}