"use client";

// components
import { Navbar, Footer } from "@/components";

// sections
import Products from "../products";
import IndustryShop from "./shop-by-industry";

export default function ProductPage() {
  return (
    <>
      <IndustryShop />
      <Products />
    </>
  )
}