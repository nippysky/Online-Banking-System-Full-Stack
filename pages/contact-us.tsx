import Head from "next/head";
import Image from "next/image";
import React from "react";
import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar";

export default function ContactUs() {
  return (
    <section className="w-full">
      <Head>
        <title>Contact Us - NOIR BANK</title>
        <meta name="description" content="Bank For All" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="sticky top-0 z-10">
        <Navbar />
      </div>

      <main>
        <section className="w-full lg:p-20 px-5 py-10">
          <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-10">
            {/* image */}
            <div className="lg:w-1/2 w-full">
              <Image
                src={
                  "https://s3.amazonaws.com/mentoring.redesign/s3fs-public/why-black-owned-banks-matter.jpg"
                }
                alt={"Contact Us"}
                width={500}
                height={550}
                priority
              />
            </div>

            {/* Form */}
            <div className="lg:w-1/2 w-full">
              <h1 className="text-3xl font-semibold text-black">
                Contact Customer Support
              </h1>

              <p className="my-10 text-black">
                Address: The 54 Countries of Africa.
                <br />
                Email: noirbankinfo@noirbank.com
              </p>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}
