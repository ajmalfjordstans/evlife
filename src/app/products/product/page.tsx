"use client";

import { useEffect } from "react";
import { useGlobalContext } from "@/app/Context/store";
import {
  Typography,
  Button
} from "@material-tailwind/react";
import Image from "next/image";

export default function Product() {
  const { selectedProduct } = useGlobalContext()
  const productDetails = Array.isArray(selectedProduct) ? selectedProduct[0] : selectedProduct;
  // console.log("selectedProductDetails", selectedProduct);
  return (
    <section className="px-8 pt-20 pb-20">
      <div className="container mx-auto mb-20 text-center flex justify-center">
        <div className="flex">
          <Image
            className="h-96 rounded-lg object-fit object-center shadow-xl shadow-blue-gray-900/50"
            src={productDetails?.img}
            alt="Charger"
            height={768}
            width={358}
          />
          <div className="w-[100%] max-w-[350px] text-left pl-14 mt-3">
            <a href="#">
              <Typography
                variant="h2"
                color="blue-gray"
                className="mb-3 font-bold normal-case"
              >
                {productDetails?.title}
                {/* PowerPod Home */}
              </Typography>
            </a>
            <Typography className="mb-4 font-normal !text-gray-500">
              {productDetails?.desc}
              {/* 22KW Fast EV Charger */}
            </Typography>
            <Typography variant="h5" color="red">
              {productDetails?.price}
              {/* $550000 */}
            </Typography>
            <Button
              fullWidth
              variant="outlined"
              className="mt-6"
              disabled
            >
              Add to Cart
            </Button>
            <Button
              className="mt-2"
              fullWidth
              disabled
            >
              Buy now
            </Button>
          </div>
        </div>

      </div>
    </section>
  )
}