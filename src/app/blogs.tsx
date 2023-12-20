"use client";

import { Typography } from "@material-tailwind/react";
import BookCard, { ProductCard } from "@/components/product-card";
import BlogCard from "@/components/blog-card";
import { useEffect } from "react";
import applyScrollAnimation from "@/components/scroll-animation";

const BLOGS = [
  {
    img: `/image/ev/powerpodcity1.png`,
    date: "17 October 2023",
    title: "Powerpod City - Use Cases",
    desc: "The implementation of PowerPod City promises to transform the way we view and utilize electric vehicle (EV) charging stations. Here are soem potential use cases that illustrate the impact on various sectors and individua...",
  },
  {
    img: `/image/ev/powerpodgo.png`,
    date: "17 October 2023",
    title: "Powerpod Go Commercial Variant - Use cases",
    desc: "Our chargers are used in various settings, including homes, workplaces, public places, and along highways. These chargers provide convenient options for EV owners to recharge their vehicles, whether at residential locati...",
  },
];

export function Blog() {
  useEffect(()=>{
    applyScrollAnimation(".animate",".animate")
  },[])
  return (
    <section className="px-8 py-28 bg-[#7348A1]">
      <div className="container mx-auto mb-10 scrollElement triggerElement">
        <Typography variant="h2" color="white" className="mb-2">
          BLOG
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 items-start gap-x-6 gap-y-20 md:grid-cols-3 animate">
        {BLOGS.map((props, key) => (
          <BlogCard key={key} {...props}/>
        ))}
      </div>
    </section>
  );
}

export default Blog;
