import React, { useEffect } from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation';

import {
  Typography,
  Card,
  CardBody,
  CardHeader,
  Button
} from "@material-tailwind/react";

import { useGlobalContext } from '@/app/Context/store';

interface ProductCardProps {
  img: string;
  title: string;
  desc: string;
  category: string;
  price: string;
  offPrice?: string;
  activeTab: string;
}

export function ProductCard({
  img,
  category,
  title,
  desc,
  price,
  activeTab,
}: ProductCardProps) {
  const router = useRouter()
  const { selectedProduct, setSelectedProduct } = useGlobalContext()
  const buyButtonHandler = () => {
    const currentSelectedProduct = [{
      img,
      category,
      title,
      desc,
      price,
    }]
    setSelectedProduct(currentSelectedProduct)

    router.push('/products/product');
  }

  return activeTab === category || "industry" ? (
    <Card color="transparent" shadow={false}>
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
        <div >
          <Typography color="blue" className="mb-2 text-xs !font-semibold">
            {category}
          </Typography>
          <a href="#">
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-3 font-bold normal-case xl:w-64"
            >
              {title}
            </Typography>
          </a>
          <Typography className="mb-4 font-normal !text-gray-500">
            {desc}
          </Typography>
          <div className="flex gap-2">
            <Typography variant="h5" color="red">
              {price}
            </Typography>
          </div>
        </div>
        {/* <a href="/products/product"> */}
        <Button
          color="blue"
          ripple={true}
          onClick={buyButtonHandler}
        >
          View
        </Button>
        {/* </a> */}
      </CardBody>
    </Card>
  ) : null;

}
export default ProductCard