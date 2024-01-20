'use client'

import React, { useEffect, useState } from 'react';
import { Button } from "@material-tailwind/react";
import axios from 'axios';

interface Review {
  author_name: string;
  author_url: string;
  language: string;
  original_language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
  translated: boolean;
}

const Testimonial: React.FC = () => {
  const [carsouelCount, setCarsouelCount] = useState<number>(0);
  const [reviews, setReviews] = useState<Review[]>([
    {
      "author_name": "SawaiomAgro & Allied Products",
      "author_url": "https://www.google.com/maps/place/RIOD/@10.1838326,76.3864395,15z/data=!4m12!1m2!2m1!1sriod!3m8!1s0x3b0807d5301253b1:0x35738fbc3b3a9ae6!8m2!3d10.1838326!4d76.4054939!9m1!1b1!15sCgRyaW9kkgEMbWFudWZhY3R1cmVy4AEA!16s%2Fg%2F11f6y2q7j2?entry=ttu",
      "language": "en",
      "original_language": "en",
      "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocLUwf0enJF32o1bkHNNb-nHlLDHbn9X9ZpfiT9ISgSl=s128-c0x00000000-cc-rp-mo",
      "rating": 5,
      "relative_time_description": "a week ago",
      "text": "This is the first time I'm using RIOD for my Hydroponics Farm. Really Happy with their professionalism and Kind staff. Never let me down even once. Fast & reliable service. I highly recommend people who is interested in IOT  for farming.@ prashantriod ",
      "time": 1705019092,
      "translated": false
    },
    {
      "author_name": "gayatri v",
      "author_url": "https://www.google.com/maps/place/RIOD/@10.1838326,76.3864395,15z/data=!4m12!1m2!2m1!1sriod!3m8!1s0x3b0807d5301253b1:0x35738fbc3b3a9ae6!8m2!3d10.1838326!4d76.4054939!9m1!1b1!15sCgRyaW9kkgEMbWFudWZhY3R1cmVy4AEA!16s%2Fg%2F11f6y2q7j2?entry=ttu",
      "language": "en",
      "original_language": "en",
      "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocLUwf0enJF32o1bkHNNb-nHlLDHbn9X9ZpfiT9ISgSl=s128-c0x00000000-cc-rp-mo",
      "rating": 5,
      "relative_time_description": "a week ago",
      "text": "One stop solution for IoT in various fields like poultry farming, pisciculture, and EV chargers too. Well managed and a group of enthusiastic young minds working together. Good ambience of workspace. Kudos to the team.",
      "time": 1705019092,
      "translated": false
    },
    {
      "author_name": "ATHMESH ANDROID",
      "author_url": "https://www.google.com/maps/place/RIOD/@10.1838326,76.3864395,15z/data=!4m12!1m2!2m1!1sriod!3m8!1s0x3b0807d5301253b1:0x35738fbc3b3a9ae6!8m2!3d10.1838326!4d76.4054939!9m1!1b1!15sCgRyaW9kkgEMbWFudWZhY3R1cmVy4AEA!16s%2Fg%2F11f6y2q7j2?entry=ttu",
      "language": "en",
      "original_language": "en",
      "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocLUwf0enJF32o1bkHNNb-nHlLDHbn9X9ZpfiT9ISgSl=s128-c0x00000000-cc-rp-mo",
      "rating": 5,
      "relative_time_description": "a week ago",
      "text": "One of the leading electronic manufacturer company, providing solutions to customer and briefing them the solutions and giving the best customer service in every way possible. …",
      "time": 1705019092,
      "translated": false
    },
    {
      "author_name": "deepu joy",
      "author_url": "https://www.google.com/maps/place/RIOD/@10.1838326,76.3864395,15z/data=!4m12!1m2!2m1!1sriod!3m8!1s0x3b0807d5301253b1:0x35738fbc3b3a9ae6!8m2!3d10.1838326!4d76.4054939!9m1!1b1!15sCgRyaW9kkgEMbWFudWZhY3R1cmVy4AEA!16s%2Fg%2F11f6y2q7j2?entry=ttu",
      "language": "en",
      "original_language": "en",
      "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocLUwf0enJF32o1bkHNNb-nHlLDHbn9X9ZpfiT9ISgSl=s128-c0x00000000-cc-rp-mo",
      "rating": 5,
      "relative_time_description": "a week ago",
      "text": "An electronic device manufacturing company. They provide good services for their customers. A well experienced team is working here.",
      "time": 1705019092,
      "translated": false
    },
  ]);

  // useEffect(() => {
  //   const apiEndpoint = "https://bright-button-dove.cyclic.app/testimonial";
  //   axios.get<Review[]>(apiEndpoint)
  //     .then(response => {
  //       setReviews(response?.data || []);
  //     })
  //     .catch(error => {
  //       console.error('Error:', error.message);
  //     });
  // }, []);

  return (
    <div>
      <div className="w-full bg-secondary xs:hidden pt-[50px] pb-[70px] px-[2%] black">
        <div className="container mx-auto flex flex-col md:flex-row flew-wrap justify-between px-[5%] lg:px-0">
          <div className="flex justify-center items-center max-w-[257px]">
            <div className="border-l-[10px] border-[#7952B3] pl-[17px] text-[36px] leading-[40px] md:text-[48px] md:leading-[50px]">What Our Customers Say</div>
          </div>

          <div className="flex flex-col lg:flex-row w-[100%] md:w-[74%] justify-end items-center">
            <div className="flex h-full w-[100%] items-center justify-center max-w-[600px] py-[20px] mx-auto">
              <div
                onClick={() =>
                  setCarsouelCount((state) => {
                    if (state === 0) return reviews.length - 1;
                    else return state - 1;
                  })
                }
                className="flex justify-center items-center bg-white rounded-md p-[5px] hover:cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
              </div>
              <a
                href={reviews[carsouelCount]?.author_url}
              >
                <div className="flex flex-col items-center justify-start h-[200px] px-[20px] mt-[30px]">
                  <h6 className="font-[700] italic">
                    {reviews.length > 0 ? reviews[carsouelCount]?.author_name : "Review Loading"}
                  </h6>
                  <p className="testimonials__text min-w-[220px] max-w-[350px] w-full mt-[35px] ">
                    {reviews[carsouelCount]?.text.length === 0 ? "No Review" : reviews[carsouelCount]?.text.split(' ').slice(0, 25).join(' ') + "..."}
                  </p>
                </div>
              </a>
              <div
                onClick={() =>
                  setCarsouelCount((state) => {
                    if (state >= reviews.length - 1) return 0;
                    else return state + 1;
                  })
                }
                className="flex justify-center items-center bg-white rounded-md p-[5px] hover:cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
