import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Expereince() {
  return (
    <section className="w-full bg-mainSec px-5 lg:px-20 py-10">
      <div className="w-full flex flex-col lg:flex-row gap-0 justify-between items-center">
        <div className="lg:w-1/2 w-full">
          <Image
            src={
              "https://media.istockphoto.com/id/1398994132/photo/happy-businesswoman-using-a-digital-tablet-young-leading-businesswoman-using-a-wireless.jpg?b=1&s=170667a&w=0&k=20&c=z-tvJG0r-SNUrIGwZb7YjLI9f_cOnkN30vcPafskrkQ="
            }
            alt={"Woman"}
            width={500}
            height={300}
            priority
          />
        </div>

        <div className=" bg-darkBrand lg:w-1/2 w-full py-10 px-10">
          <h1 className="text-3xl text-white font-medium">
            Making internet a brand new experience
          </h1>
          <p className="text-white my-7">
            Online banking can save you a lot of time and effort, you can
            undertake most transactions from the comforts of your home. However,
            it is crucial to use internet banking safely
          </p>

          <Link href={"/open-acc"}>
            <button className="px-5 py-2 bg-transparent border border-white text-white hover:bg-white hover:text-darkBrand text-center rounded-lg">
              Open An Account
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
