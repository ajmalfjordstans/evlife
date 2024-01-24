"use client";
import { Navbar } from "@/components";
import Blog from "../blogs";
import Banner from "@/components/banner";

export default function BlogPage(){
  return(
    <div>
      <Banner/>
      <Navbar/>
      <Blog/>
    </div>
  )
}