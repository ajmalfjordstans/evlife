"use client";

// components
import { Navbar, Footer } from "@/components";

// sections
import Products from "../products";
import IndustryShop from "./shop-by-industry";
import { Typography } from "@material-tailwind/react";

export default function ProductPage() {
  return (
    <>
      <div className="bg-white px-8 h-[80vh] w-full flex justify-center items-center "
        style={{ position: "relative", backgroundImage: "url('image/ev/productpagebackground.jpg')", backgroundSize: "cover", backgroundPosition: "150px" }}
      >
        <Typography variant="h1" color="white" className="mb-2">
          SHOP BY INDUSTRY
        </Typography>
      </div>
      <IndustryShop />
      <Products />
    </>
  )
}