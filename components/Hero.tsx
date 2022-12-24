import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section
      className="w-full h-screen bg-cover flex justify-start items-center px-5 lg:px-20 py-10"
      style={{
        backgroundImage:
          "url('https://www.urban.org/sites/default/files/ap_01050202563_crop.jpg')",
      }}
    >
      <div className="bg-darkBrand w-full lg:w-[40%] min-h-[400px] py-10 px-10 rounded-xl">
        <h1 className="text-3xl font-semibold text-white leading-10">
          A Trusted Partner To Our Community.
        </h1>
        <p className="my-10 text-white">
          At NOIR BANK, we are dedicated to providing financial solutions
          tailored to the unique needs of our African customers. With a team of
          knowledgeable and compassionate staff, we are committed to helping our
          clients achieve their financial goals and build a brighter future.
        </p>

        <Link href={"/open-acc"}>
          <button className="bg-white py-2 px-5 text-darkBRand font-semibold hover:bg-darkBrand hover:text-white rounded-lg">
            Open An Account
          </button>
        </Link>
      </div>
    </section>
  );
}
