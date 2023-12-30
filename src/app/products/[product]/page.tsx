"use client";

import {
  Typography,
  Button
} from "@material-tailwind/react";
import Image from "next/image";
import { CONST_PRODUCTS } from "@/app/Context/constants";

export default function Product({ params }: {
  params:
  {
    product: number
  }
}) {
  // const productDetails = CONST_PRODUCTS[params.product - 1]
  let productDetails = {
    id: 0,
    img: "",
    category: "",
    title: "",
    desc: "",
    price: ""
  }
  const productId = params.product.toString();

  // Check if productId is a valid positive integer and within the range of CONST_PRODUCTS
  if (Number.isInteger(parseInt(productId)) && parseInt(productId) > 0 && parseInt(productId) <= CONST_PRODUCTS.length) {
    productDetails = CONST_PRODUCTS[parseInt(productId) - 1];
  } else {
    window.location.href = '/products';
  }

  const handleWhatsappClick = () => {
    const product = productDetails
    const message = `Enquiry about ${product.title} ${product.desc} `;

    const whatsappURL = `https://wa.me/917736677477?text=${encodeURIComponent(message)}`;
    // console.log(whatsappURL);
    window.location.href = whatsappURL;
  }
  return (
    <section className="px-8 pt-20 pb-20">
      <div className="container mx-auto mb-20 text-center flex justify-center">
        <div className="flex flex-col md:flex-row">
          <Image
            className="h-96 rounded-lg object-fit object-center shadow-xl shadow-blue-gray-900/50"
            src={productDetails?.img}
            alt="Charger"
            height={768}
            width={358}
          />
          <div className="w-[100%] max-w-[350px] text-left md:pl-14 mt-5 md:mt-3">
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
              className="mt-6 text-[#25D366] border-[#25D366] text-[18px]"
              // disabled
              onClick={handleWhatsappClick}
            >
              Ask In Whatsapp
            </Button>
            {/* <Button
              className="mt-2"
              fullWidth
              disabled
            >
              Buy now
            </Button> */}
          </div>
        </div>

      </div>
    </section>
  )
}