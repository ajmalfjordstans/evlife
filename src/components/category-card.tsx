import React from 'react';
import Image from "next/image";

import { Card, CardBody, Typography } from "@material-tailwind/react";

interface CategoryCardProps {
  // img: string;
  bg: string;
  title: string;
  desc: string;
}

function CategoryCard({
  // img, 
  bg, title, desc }: CategoryCardProps) {

  return (
    <Card
      className="relative grid h-[16rem] w-full overflow-hidden "
      color='blue'
      style={{ position: "relative", backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
    >
      <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
      {/* <Image
        width={768}
        height={768}
        src={img}
        alt={title}
        className="h-[50px] w-[50px] object-cover object-center m-auto"
      /> */}
      <CardBody className="relative flex flex-col justify-center h-full">
        <div className='flex flex-col items-center'>
          <Typography variant="h5" className="mb-1" color="white font-nunito">
            {title}
          </Typography>
          {desc.split('\n').map((line, i) => (
            <Typography color="white" className="text-[16px] font-[400]  opacity-70 mt-3 text-center font-nunito" key={i}>
              {line}
            </Typography>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
export default CategoryCard