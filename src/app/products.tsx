"use client";

import React, { useEffect } from "react";
import {
  Button,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import { ProductCard } from "@/components/product-card";
import { useGlobalContext } from "./Context/store";
import applyScrollAnimation from "@/components/scroll-animation";
const Categories = [
  "Home GO",
  "Dual",
  "Commercial",
];

export function Products() {
  const [activeTab, setActiveTab] = React.useState("Home GO");
  const { products } = useGlobalContext()

  useEffect(() => {
    applyScrollAnimation(".scrollAnimate", ".scrollAnimate")
    applyScrollAnimation(".scrollAnimate2", ".scrollAnimate2")
  }, [])
  return (
    <section className="px-8 pt-20 pb-20">
      <div className="container mx-auto mb-20 text-center scrollAnimate">
        <Typography variant="h1" color="blue-gray" className="mb-2">
          Our Products
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-9/12"
        >
          Check out our EV Chargers
        </Typography>
        <div className="mt-20 flex items-center justify-center">
          <Tabs value={activeTab} className="w-full lg:w-8/12">
            <TabsHeader
              className="h-12 bg-transparent"
              indicatorProps={{
                className: "!bg-[#7348A1] rounded-lg",
              }}
            >
              {Categories.map((category) => (
                <Tab
                  key={category}
                  value={category}
                  className={`!font-medium capitalize transition-all duration-300
                    ${activeTab === category ? "text-white" : "capitalize"}
                  `}
                  onClick={() => setActiveTab(category)}
                >
                  {category}
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
        </div>
      </div>
      {/* <div className="container mx-auto grid grid-cols-1 items-start gap-x-6 gap-y-20 md:grid-cols-2 xl:grid-cols-3 scrollAnimate2"> */}
      <div className="container mx-auto grid grid-cols-1 items-start gap-x-6 gap-y-20 md:grid-cols-2 xl:grid-cols-4 scrollAnimate2">
        {products.map((props, key) => (
          <ProductCard key={key} {...props} activeTab={activeTab} />
        ))}
      </div>
      {/* <div className="grid place-items-center">
        <Button className="mt-32" variant="outlined">
          Show more
        </Button>
      </div> */}
    </section>
  );
}


export default Products;