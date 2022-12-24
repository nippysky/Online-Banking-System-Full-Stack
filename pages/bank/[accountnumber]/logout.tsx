import React from "react";
import { signOut } from "next-auth/react";
import Head from "next/head";
import Layout from "../../../components/bank/Layout";
import { requireAuthentication } from "../../../requireAuthentication";

export default function Logout() {
  return (
    <Layout>
      <Head>
        <title>Signout - NOIR BANK</title>
        <meta name="description" content="Bank For All" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="w-full flex h-full justify-center items-center">
        <button
          onClick={() => signOut()}
          className="bg-darkBrand text-white text-center font-semibold px-5 py-2 shadow-md hover:bg-black"
        >
          Log Out
        </button>
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
