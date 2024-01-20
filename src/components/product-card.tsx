import React, { useEffect } from 'react';
import Image from "next/image";

import {
  Typography,
  Card,
  CardBody,
  CardHeader,
  Button
} from "@material-tailwind/react";
import Link from 'next/link';

interface ProductCardProps {
  id?: number;
  img: string;
  title: string;
  desc: string;
  category: string;
  price: string;
  offPrice?: string;
  activeTab: string;
}

export function ProductCard({
  id,
  img,
  category,
  title,
  desc,
  price,
  activeTab,
}: ProductCardProps) {
 

  return category === activeTab || category === 'industry' ? (
    <Card color="transparent" shadow={false} className='transform transition-transform duration-500 ease-in-out'>
      <CardHeader color="gray" floated={false} className="mx-0 mt-0 mb-6">
        <Image
          width={768}
          height={768}
          src={img}
          alt={title}
          className="h-full w-full object-cover object-center"
        />
      </CardHeader>
      <CardBody className="p-0 flex justify-between items-center">
        <div className=''>
          <Typography color="blue" className="mb-2 text-xs !font-semibold text-[#7E48A1] font-nunito">
            {category}
          </Typography>
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-1 font-bold normal-case xl:w-64 font-nunito"
          >
            {title}
          </Typography>
          <Typography className="mb-4 font-normal !text-gray-500 font-nunito">
            {desc}
          </Typography>
          <div className="flex gap-2">
            <Typography variant="h5" className="text-black font-nunito">
              {price}
            </Typography>
          </div>
          <Link
            href={{
              // pathname: `/products/${title}${desc}`,
              pathname: `/products/charger`,
              query: {
                pname: title,
                pdesc: desc
              }
            }}
          >
            <Button
              // color="blue"
              ripple={true}
              className='mt-2 bg-[#7348a1]'
            >
              View
            </Button>
          </Link>
        </div>
      </CardBody>
    </Card>
  ) : null;

}
export default ProductCard