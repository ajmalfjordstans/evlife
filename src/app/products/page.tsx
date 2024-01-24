"use client";

// components
import { Navbar, Footer } from "@/components";

// sections
import Products from "../products";
import IndustryShop from "./shop-by-industry";
import { Typography } from "@material-tailwind/react";
import Banner from "@/components/banner";

export default function ProductPage() {
  return (
    <>
      <div className="bg-product bg-cover bg-center px-8 h-[100vh] w-full flex justify-center items-center ">
        <Typography variant="h1" color="white" className="mb-2">
          PRODUCTS
        </Typography>
      </div>
      <Banner/>
      <Navbar/>
      <IndustryShop />
      <Products />
    </>
  )
}