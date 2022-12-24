//@ts-nocheck

import Head from "next/head";
import React, { useEffect, useState } from "react";
import Layout from "../../../components/bank/Layout";
import { requireAuthentication } from "../../../requireAuthentication";
import { useSession } from "next-auth/react";
import axios from "axios";

export default function Profile() {
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
        <title>Profile - NOIR BANK</title>
        <meta name="description" content="Bank For Africans" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Form */}
      <section className="w-full bg-white p-10 shadow-md grid lg:grid-cols-2 grid-cols-1 gap-10">
        <div className="flex justify-start">
          <p>{person[0]?.firstName}</p>
        </div>

        <div className="flex lg:justify-end justify-start">
          <p>{person[0]?.lastName}</p>
        </div>

        <div className="flex justify-start">
          <p>{person[0]?.accountNumber}</p>
        </div>

        <div className="flex lg:justify-end justify-start">
          <p>{person[0]?.email}</p>
        </div>

        <div className="flex justify-start">
          <p>{person[0]?.gender}</p>
        </div>

        <div className="flex lg:justify-end justify-start">
          <p>{person[0]?.maritalStatus}</p>
        </div>

        <div className="flex justify-start">
          <p>{person[0]?.address}</p>
        </div>
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
