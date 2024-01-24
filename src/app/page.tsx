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
import Testimonial from "./testimonial";
import Banner from "@/components/banner";

export default function Campaign() {
  return (
    // bg-blue-gray-100 bg-[#f5f5dc]
    <div className="bg-white ">
      <Hero />
      <Banner/>
      <Navbar />
      <About />
      <Products />
      <Blog />
      <Partner />
      <Testimonial/>
      <CarouselFeatures />
      {/* <GetYourBookFromUs /> */}
      {/* <Faq /> */}
    </div>
  );
}
