'use client';

import { Typography } from "@material-tailwind/react";
import { ProductCard } from "@/components";

import { INDUSTRY_CATEGORIES } from "@/app/Context/constants";

type Product = {
  title: string;
  img: string;
  price: string;
};

type Category = {
  title: string;
  desc: string;
  products: Product[];
};

type INDUSTRY_CATEGORIES = Record<string, Category>;

export default function Industries({ params }: {
  params:
  {
    industry: string
  }
}) {

  let products

  // const categories: Record<string, string> = {
  //   agriculture: "agriculture",
  //   energy_solutions: "energy-solutions",
  //   ev_charging: "ev-charging",
  //   industries: "industries"
  // }

  // const findCategoryKey = (value: string): string | undefined => {
  //   return Object.keys(categories).find((key) => categories[key] === value);
  // };
  // const categoryKey = findCategoryKey(params.industry);
  const categoryKey = params.industry;
  if (categoryKey === 'parkingspace') {
    products = INDUSTRY_CATEGORIES.parkingspace
  } else if (categoryKey === 'apartmentandhome') {
    products = INDUSTRY_CATEGORIES.apartmentandhome
  } else if (categoryKey === 'workplace') {
    products = INDUSTRY_CATEGORIES.workplace
  }
  console.log(products as Category);
  // console.log(INDUSTRY_CATEGORIES);
  // console.log(INDUSTRY_CATEGORIES.energy_solutions);

  return (
    <section className="px-8 pt-20 pb-20">
      <div className="container mx-auto md:px-20">
        <Typography placeholder=''
          variant="h3"
          className="text-center"
        >
          {products?.title}
        </Typography>
        <Typography placeholder=''
          variant="paragraph"
          className="mt-14"
        >
          {products?.desc}
        </Typography>
        <div className="grid grid-cols-2 items-start gap-x-6 gap-y-20 md:grid-cols-2 xl:grid-cols-3 mt-20">
          {products?.products.map((props, key) => {
            return (
              <ProductCard key={key} {...props} category='' desc='' activeTab="industry" />
            )
          })}
        </div>
      </div>
    </section>
  )
}