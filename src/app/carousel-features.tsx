"use client";

import Image from "next/image";
import { Typography, Carousel } from "@material-tailwind/react";

const VEHICLES = {
  Audi: '/logos/Vehicle/Audi.png',
  Bentley: '/logos/Vehicle/Bentley.png',
  Citroen: '/logos/Vehicle/Citroen.png',
  Kia: '/logos/Vehicle/Kia.png',
  LandRover: '/logos/Vehicle/LandRover.png',
  Mahindra: '/logos/Vehicle/Mahindra.png',
  MG: '/logos/Vehicle/MG.png',
  Mitsubishi: '/logos/Vehicle/Mitsubishi.png',
  Nissan: '/logos/Vehicle/Nissan.png',
  Tata: '/logos/Vehicle/Tata.png',
  Vauxhall: '/logos/Vehicle/Vauxhall.png',
}

const LOOPS = [
  {
    vehicles: [VEHICLES.Audi, VEHICLES.LandRover, VEHICLES.Bentley, VEHICLES.Kia, VEHICLES.Citroen]
  },
  {
    vehicles: [VEHICLES.Nissan, VEHICLES.Audi, VEHICLES.Vauxhall, VEHICLES.LandRover, VEHICLES.MG]
  },
  {
    vehicles: [VEHICLES.Mitsubishi, VEHICLES.Citroen, VEHICLES.Mahindra, VEHICLES.Tata, VEHICLES.Audi]
  },
]

export function CarouselFeatures() {
  return (
    <div className="px-8 py-20 ">
      {/* bg-[#7348a1] */}
      <div className="container mx-auto !rounded-lg  bg-center py-10 lg:px-16 gradient-element border-[1px] border-[#7348a1]">
        <Typography
          variant="h2"
          color="white"
          className="mb-5 text-xl font-normal text-center font-nunito"
        >
          ELECTRIC VEHICLES
        </Typography>
        <Typography
          variant="lead"
          color="white"
          className="mb-5 text-xl font-normal text-center max-w-[357px] mx-auto font-nunito"
        >
          Our EV Chargers Are Compatible With All Plug-In Electric Vehicles
        </Typography>
        <Carousel
          transition={{ duration: 1 }}
          nextArrow={() => <></>}
          prevArrow={() => <></>}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute left-16 bottom-0 z-50 flex h-auto w-20 -translate-x-2/4 gap-2 md:left-2/4 mx-auto">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 w-10 cursor-pointer transition-all content-[''] mt-[25px] ${activeIndex === i ? "bg-white" : "bg-white/50"
                    }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          {LOOPS.map((list, id) => (
            <div className="col-span-2 flex w-full shrink-0 md:!justify-end" key={id}>
              {list.vehicles.map((vehicle, index) => (
                <Image
                  key={index}
                  width={768}
                  height={768}
                  src={vehicle}
                  alt={`vehicle-${index}`}
                  className="h-[40px] md:h-[100px] w-2/4 object-contain md:!w-2/3"
                />
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselFeatures;
