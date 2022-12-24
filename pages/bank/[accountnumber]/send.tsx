//@ts-nocheck

import { useSession } from "next-auth/react";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Layout from "../../../components/bank/Layout";
import SendForm from "../../../components/bank/SendForm";
import { requireAuthentication } from "../../../requireAuthentication";
import axios from "axios";

export default function SendMoney() {
  const [person, setPerson] = useState<object[]>([]);
  const { data, status } = useSession();
  const email = data?.user?.email;

  useEffect(() => {
    axios
      .get("/api/user")
      .then(function (response) {
        // handle success
        const gottenArray = response.data.data;
        function filterByValue(array, value) {
          return array.filter(
            (data) =>
              JSON.stringify(data)
                .toLowerCase()
                .indexOf(value.toLowerCase()) !== -1
          );
        }
        setPerson(filterByValue(gottenArray, email));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <Layout>
      <Head>
        <title>Send Money - Flagstar</title>
        <meta name="description" content="Bank For Africans" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="w-full">
        {/* balance */}
        <div className="w-full flex justify-between items-center">
          <h3 className="font-semibold text-gray-500 text-[0.85rem]">
            Account Balance:
          </h3>
          <h1 className="font-semibold text-black text-2xl">
            NGN{person[0]?.balance}
          </h1>
        </div>
      </section>

      {/* Form */}
      <section className="w-full bg-white p-10 my-20 shadow-md">
        <SendForm />
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
