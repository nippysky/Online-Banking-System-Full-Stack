import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  image: string;
  title: string;
  text: string;
  link: string;
}

export default function TabContent({ image, title, text, link }: Props) {
  return (
    <div className="w-full flex-col flex md:flex-row gap-10 justify-between items-start">
      {/* Image */}
      <div className="md:w-1/2 w-full">
        <Image src={image} alt={title} width={500} height={450} priority />
      </div>

      {/* text and button */}
      <div className="md:w-1/2 w-full mt-7 md:mt-0">
        <h1 className="text-3xl font-medium text-black">{title}</h1>
        <p className="my-5 text-black">{text}</p>
        <Link href={link}>
          <button className="px-5 bg-mainRed py-2 text-center text-white hover:bg-black">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
}
