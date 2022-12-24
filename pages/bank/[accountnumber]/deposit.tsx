import Head from "next/head";
import React from "react";
import Layout from "../../../components/bank/Layout";
import { requireAuthentication } from "../../../requireAuthentication";

export default function Deposit() {
  return (
    <Layout>
      <Head>
        <title>Deposit - NOIR BANK</title>
        <meta name="description" content="Bank For Africans" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Form */}
      <section className="w-full bg-white p-10 shadow-md flex justify-center items-center">
        <p>Contact Support to activate this feature for your account.</p>
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
