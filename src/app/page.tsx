// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import OtherBookOffers, { Blog } from "./blogs";
import CarouselFeatures from "./carousel-features";
import GetYourBookFromUs from "./get-your-book-from-us";
import Faq from "./faq";
import About from "./about";
import Products from "./products";
import Partner from "./partner";

export default function Campaign() {
  return (
    <div className="bg-blue-gray-100">
      <Hero />
      <Navbar/>
      <About/>
      <Products/>
      <Blog/>
      <Partner/>
      <CarouselFeatures />
      {/* <GetYourBookFromUs /> */}
      {/* <Faq /> */}
    </div>
  );
}
