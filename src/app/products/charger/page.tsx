"use client";

import {
  Typography,
  Button
} from "@material-tailwind/react";
import Image from "next/image";
import { CONST_PRODUCTS } from "@/app/Context/constants";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components";

export default function Product() {
  let productDetails = {
    id: 0,
    img: "",
    category: "",
    title: "",
    desc: "",
    price: ""
  }
  const params = useSearchParams()

  productDetails = CONST_PRODUCTS.find(product => product.title === params.get('pname') && product.desc === params.get('pdesc')) || {
    id: 0,
    img: "",
    category: "",
    title: "",
    desc: "",
    price: ""
  };

  const handleWhatsappClick = () => {
    const product = productDetails
    const message = `Enquiry about ${product.title} ${product.desc} `;
    const whatsappURL = `https://wa.me/917736677477?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappURL;
  }

  return (
    <>
      <Navbar />
      <section className="px-8 pt-20 pb-20">
        <div className="container mx-auto mb-20 text-center flex justify-center">
          {productDetails.id !== 0 ?
            <div className="flex flex-col md:flex-row">
              <Image
                className="h-96 rounded-lg object-fit object-center shadow-xl shadow-blue-gray-900/50"
                src={productDetails?.img}
                alt="Charger"
                height={768}
                width={358}
              />
              <div className="w-[100%] max-w-[350px] text-left md:pl-14 mt-5 md:mt-3">
                <Typography
                  variant="h2"
                  color="blue-gray"
                  className="mb-3 font-bold normal-case"
                >
                  {productDetails?.title}
                  {/* PowerPod Home */}
                </Typography>
                <Typography className="mb-4 font-normal !text-gray-500">
                  {productDetails?.desc}
                  {/* 22KW Fast EV Charger */}
                </Typography>
                <Typography variant="h5" color="black">
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

                <Typography className="mt-10" variant="small">
                  About this product: Chargers are compatible with all Plug-in electric vehicles
                </Typography>
                {/* <Button
              className="mt-2"
              fullWidth
              disabled
            >
              Buy now
            </Button> */}
              </div>
            </div>
            :
            <div>
              <Typography
                variant="h2"
                color="blue-gray"
                className="mb-3 font-bold normal-case"
              >
                Product Not Found
              </Typography>
            </div>
          }

        </div>
      </section>
    </>
  )
}