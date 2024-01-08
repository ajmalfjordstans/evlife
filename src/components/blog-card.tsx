import React from 'react';
import Image from "next/image";

import {
  Typography,
  Card,
  CardBody,
  CardHeader,
} from "@material-tailwind/react";
import Link from 'next/link';

interface BlogCardProps {
  img: string;
  title: string;
  date: string;
  desc: string;
  url: string;
}

export function BlogCard({
  img,
  title,
  date,
  desc,
  url
}: BlogCardProps) {
  return (
    <div>
      <Link
        href={url}
      >
        <Card color="transparent" shadow={false}>
          <CardHeader color="gray" floated={false} className="mx-0 mt-0 mb-6">
            <Image
              width={768}
              height={768}
              src={img}
              alt={title}
              className="h-full w-full object-cover object-center"
            />
          </CardHeader>
          <CardBody className="p-0">
            <Typography color="blue" className="mb-2 text-xs !font-semibold">
              {date}
            </Typography>
              <Typography
                variant="h5"
                color="white"
                className="mb-3 font-bold normal-case xl:w-64"
              >
                {title}
              </Typography>
            <Typography className="mb-4 font-normal !text-white">
              {desc}
            </Typography>
            <div className="flex gap-2">
              {/* <Typography
            variant="h5"
            color="blue-gray"
            className={offPrice ? "line-through" : ""}
          >
            {price}
          </Typography> */}
              {/* <Typography variant="h5" color="red">
            {price}
          </Typography> */}
            </div>
          </CardBody>
        </Card>
      </Link>
    </div>
  )

}
export default BlogCard