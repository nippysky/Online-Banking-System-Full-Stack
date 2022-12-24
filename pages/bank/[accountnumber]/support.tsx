import Head from "next/head";
import React from "react";
import Layout from "../../../components/bank/Layout";
import ContactForm from "../../../components/ContactForm";
import { requireAuthentication } from "../../../requireAuthentication";

export default function Support() {
  return (
    <Layout>
      <Head>
        <title>Customer Support- Flagstar</title>
        <meta name="description" content="Bank For Africans" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Form */}
      <section className="w-full bg-white p-10 shadow-md">
        <ContactForm />
      </section>
    </Layout>
  );
}

export async function getServerSideProps(context: any) {
  return requireAuthentication(context, ({ session }: any) => {
    return {
      props: { session },
    };
  });
}
