'use client';

import { Typography } from "@material-tailwind/react"
import ContactForm from "@/components/contact-form";
import { Navbar } from "@/components";
import Banner from "@/components/banner";

export default function PartnerPage() {
  return (
    <>
      <Banner />
      <Navbar />
      <section className="">
        <div className="container mx-auto text-center max-w-[1000px] px-8 pt-20 pb-20">
          <Typography variant="h1" color="blue-gray" className="mb-2">
            Channel Partner
          </Typography>
          <Typography variant="paragraph" className="mt-7 border-t-[1px] border-b-[1px] py-14">
            Welcome to RIOD, your trusted manufacturer of electric vehicle (EV) charging stations. We are proud to offer our high-quality products to businesses looking to expand their offerings and meet the growing demand for EV charging solutions.
          </Typography>
          <div className="text-left  mx-auto mt-24">
            <Typography variant="paragraph" className="mt-7 font-semibold">
              Affiliate Partner Engagement
            </Typography>
            <Typography variant="paragraph" className="mt-7">
              We have a lucrative affiliate marketing program that gives you 10% on all orders referred to us through your site or other channels.
            </Typography>
            <Typography variant="paragraph" className="mt-7 font-semibold">
              Distributor/Dealership Mode Engagement
            </Typography>
            <Typography variant="paragraph" className="mt-7">
              One of the key benefits of becoming RIOD distributor is our industry-best margins. We offer competitive pricing on all of our products, allowing you to maximize your profits and grow your business. Our team is also committed to providing exceptional customer service, so you can always count on us for support and assistance whenever you need it.
            </Typography>
            <Typography variant="paragraph" className="mt-7 font-semibold">
              Business Partner Engagement
            </Typography>
            <Typography variant="paragraph" className="mt-7">
              Our business partner able to create a unique branding strategy that combines the strengths of both companies. This can include co-branded products, joint marketing campaigns, and more.
            </Typography>
          </div>
        </div>
        <div className='w-[100%] mx-auto px-[6%] text-white py-[80px] bg-[#7348A1]' id='contact'>
          <div className='max-w-[853px] flex flex-col items-center mx-auto'>
            <p className='text-[22px] tracking-[0.99px] leading-[27px] my-[20px]'>Please contact us below </p>
            <ContactForm />
          </div>
        </div>
      </section >
    </>
  )
}