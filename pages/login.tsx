import Head from "next/head";
import Link from "next/link";
import React from "react";

import { AiOutlineHome } from "react-icons/ai";
import SignInForm from "../components/SignInForm";

export default function LogIn() {
  return (
    <section className="w-full h-screen">
      <Head>
        <title>Online Bank - NOIR BANK</title>
        <meta name="description" content="Bank For All" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full px-20 py-5 flex">
        <div className="text-black flex text-[1rem] font-semibold py-2">
          <Link href={"/"}>
            <span className="flex gap-1">
              <span className="relative top-1">
                <AiOutlineHome />
              </span>
              Home
            </span>
          </Link>
        </div>
      </div>

      {/* Form */}
      <div className="w-full lg:px-80 px-5 my-20">
        <SignInForm />
      </div>
    </section>
  );
}
