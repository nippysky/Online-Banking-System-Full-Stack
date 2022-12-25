//@ts-nocheck

import Head from "next/head";
import React, { useEffect, useState } from "react";
import Layout from "../../../components/bank/Layout";
import { useSession } from "next-auth/react";
import axios from "axios";
import { requireAuthentication } from "../../../requireAuthentication";

export default function Dashboard() {
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
        <title>Dashboard - NOIR BANK</title>
        <meta name="description" content="Bank For Africans" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="w-full bg-white shadow-md p-10">
        <div className="w-full">
          <h3 className="font-semibold text-gray-500 text-[0.85rem]">
            NAIRA BALANCE
          </h3>
          <h1 className="text-3xl mt-5 text-gray-900 font-bold">
            NGN{person[0]?.balance}
          </h1>
        </div>
      </section>

      {/* Transaction History */}
      <section className="mt-10 w-full">
        <h1 className="text-xl text-gray-900 font-medium">
          Transaction History
        </h1>

        {person[0]?.transaction < 1 ? (
          <div className="mt-10 text-gray-600">
            <p>
              No Transaction record yet. use the send feature to start seeing
              transaction
            </p>
          </div>
        ) : (
          person[0]?.transaction
            ?.slice(0)
            .reverse()
            .map((txn) => (
              <div
                key={txn._id}
                className="w-full bg-white shadow-md py-5 px-10 mt-5 flex justify-between items-center"
              >
                <div className="w-1/3 flex flex-col gap-3">
                  <p className="font-medium">{txn.date}</p>
                  <p className="font-medium">{txn.time}</p>
                </div>

                <div className="w-1/3 flex justify-center">
                  <p className="font-medium">{txn.method}</p>
                </div>

                <div
                  className={`w-1/3 flex justify-end ${
                    txn.method === "deposit" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  <p className="font-medium">
                    {txn.method === "deposit" ? "+" : "-"}NGN{txn.amount}
                  </p>
                </div>
              </div>
            ))
        )}
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

// if (status === "unauthenticated") {
//   Router.replace("/login");
// }
