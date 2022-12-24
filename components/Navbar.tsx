import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

import { IoChatbubblesOutline, IoClose } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";

export default function Navbar() {
  const { asPath } = useRouter();
  const [mobile, setMobile] = useState<boolean>(false);

  return (
    <section className="sticky top-0 z-10">
      {/*Menu Links */}
      <div className="w-full flex justify-between items-center px-5 lg:px-20 py-3">
        <div className="lg:w-[15%] w-1/2">
          <Link href={"/"}>
            <h3 className="text-darkBrand text-xl font-black">NOIR BANK.</h3>
          </Link>
        </div>

        <div className="flex gap-5 justify-end items-center w-1/2 lg:w-[15%] font-medium">
          <Link href={"/contact-us"}>
            <span className="flex gap-1">
              Customer Care
              <span className="relative">
                <IoChatbubblesOutline size={22} />
              </span>
            </span>
          </Link>
        </div>
      </div>

      {/* Register And Login*/}
      <header className="w-full flex gap-5 justify-end items-center bg-darkBrand px-0 lg:px-20">
        <div className=" flex text-[0.75rem] font-semibold bg-white text-darkBrand hover:bg-darkBrand hover:text-white py-2 px-5">
          <Link href={"/open-acc"}>Register</Link>
        </div>

        <div className=" flex text-[0.75rem] font-semibold bg-white text-darkBrand hover:bg-darkBrand hover:text-white py-2 px-5">
          <Link href={"/login"}>Sign In</Link>
        </div>
      </header>

      {/* MOBILE MENU OPEN DIV */}
      {mobile ? (
        <div
          style={{ transition: "width 300ms cubic bezier(0.2,0,0,1)0s" }}
          className="bg-darkBrand w-1/2 fixed top-0 left-0 h-screen overflow-hidden"
          onClick={() => setMobile(false)}
        >
          <div className="w-full px-5 py-10 ">
            <nav className="flex flex-col gap-10">
              <Link className="text-white" href={"/"}>
                <span
                  className={`${
                    asPath === "/"
                      ? "font-medium border-b-2 border-mainRed"
                      : null
                  }`}
                >
                  Home
                </span>
              </Link>

              <Link className="text-white" href={"/about-us"}>
                <span
                  className={`${
                    asPath === "/about-us"
                      ? "font-medium border-b-2 border-mainRed"
                      : null
                  }`}
                >
                  About Us
                </span>
              </Link>

              <Link href={"/contact-us"}>
                <span className="flex gap-1 text-white">
                  Contact Us
                  <span className="relative">
                    <IoChatbubblesOutline size={22} />
                  </span>
                </span>
              </Link>
            </nav>
          </div>
        </div>
      ) : null}
    </section>
  );
}
