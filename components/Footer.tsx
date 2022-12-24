import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <section className="lg:px-20 px-5 pt-20 pb-5 bg-black w-full">
      <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center gap-10 md:gap-0">
        <div>
          <h3 className="font-bold text-white text-xl mb-7">NOIR BANK</h3>
          <div className="my-3 text-[0.85rem]">
            <Link href={"/"} className=" text-gray-400">
              About Us
            </Link>
          </div>

          <div className="my-3 text-[0.85rem]">
            <Link href={"/"} className=" text-gray-400">
              Privacy Policy
            </Link>
          </div>

          <div className="my-3 text-[0.85rem]">
            <Link href={"/"} className=" text-gray-400">
              Terms And Conditions
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-white text-xl mb-7">Banking With Us</h3>
          <div className="my-3 text-[0.85rem]">
            <Link href={"/"} className=" text-gray-400">
              For Africa
            </Link>
          </div>

          <div className="my-3 text-[0.85rem]">
            <Link href={"/"} className=" text-gray-400">
              By Africans
            </Link>
          </div>

          <div className="my-3 text-[0.85rem]">
            <Link href={"/"} className=" text-gray-400">
              To Africans
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-white text-xl mb-7">
            Customer Service
          </h3>
          <div className="my-3 text-[0.85rem]">
            <Link href={"/"} className=" text-gray-400">
              Press And Media
            </Link>
          </div>

          <div className="my-3 text-[0.85rem]">
            <Link href={"/contact-us"} className=" text-gray-400">
              Contact Us
            </Link>
          </div>

          <div className="my-3 text-[0.85rem]">
            <Link href={"/register"} className=" text-gray-400">
              Open Account
            </Link>
          </div>
        </div>
      </div>

      <hr className="my-10" />
      {/* Copyright */}
      <div className="w-full flex justify-center items-center">
        <p className="text-[0.85rem] text-gray-400">
          NOIR BANK © 2023 / All Rights Reserved
        </p>
      </div>
    </section>
  );
}
