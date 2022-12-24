import React from "react";
import { Tab } from "@headlessui/react";
import classNames from "classnames";
import TabContent from "./TabContent";

export default function BankTabs() {
  return (
    <section className="w-full px-5 lg:px-20 py-20 bg-white">
      <h1 className="text-3xl font-semibold text-center">
        We Love Your Business
      </h1>

      {/* Tabs */}
      <div className="w-full mt-10">
        <Tab.Group>
          <Tab.List className="flex flex-col md:flex-row space-x-1 p-1 rounded-lg bg-gray-200">
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm font-medium leading-5",
                  selected
                    ? "bg-darkBrand text-white ring-white ring-opacity-60 focus:outline-none focus:ring-1 rounded-lg"
                    : null
                )
              }
            >
              Annual Interest
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm font-medium leading-5",
                  selected
                    ? "bg-darkBrand text-white ring-white ring-opacity-60 focus:outline-none focus:ring-1 rounded-lg"
                    : null
                )
              }
            >
              International Payments
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm font-medium leading-5",
                  selected
                    ? "bg-darkBrand text-white ring-white ring-opacity-60 focus:outline-none focus:ring-1 rounded-lg"
                    : null
                )
              }
            >
              24/7 365 Customer Service
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm font-medium leading-5",
                  selected
                    ? "bg-darkBrand text-white ring-white ring-opacity-60 focus:outline-none focus:ring-1 rounded-lg"
                    : null
                )
              }
            >
              Digital Wallets
            </Tab>
          </Tab.List>
          <Tab.Panels className="mt-5">
            <Tab.Panel className="bg-white p-3">
              <AnnualInterest />
            </Tab.Panel>
            <Tab.Panel className="bg-white p-3">
              <IntPayments />
            </Tab.Panel>
            <Tab.Panel className="bg-white p-3">
              <CustomerService />
            </Tab.Panel>
            <Tab.Panel className="bg-white p-3">
              <DigitalWallet />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
}

const AnnualInterest = () => {
  return (
    <div className="w-full">
      <TabContent
        image={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEeC8Lqurh0YyW_F--yI88rzw2DX_C-2BosHzDS3pDrWTIiLCFJ1f7bPcUxQQnny3ReeM&usqp=CAU"
        }
        title={"Let's Keep Your Business Money"}
        text="Our bank is proud to offer annual interest rates on all of our business accounts. With competitive rates and a commitment to excellent customer service, we are a top choice for individuals and businesses looking to grow their savings."
        link={"/"}
      />
    </div>
  );
};

const IntPayments = () => {
  return (
    <div className="w-full">
      <TabContent
        image={
          "https://thatsisterimages.s3.amazonaws.com/wp-content/uploads/2020/02/02030120/Featured-Image.jpg"
        }
        title={"Transforming the way you pay."}
        text={
          "Our bank offers fast and secure international payment services for individuals and businesses. With a network of partners around the world, we can facilitate payments in a variety of currencies and help you save on fees. "
        }
        link={"/"}
      />
    </div>
  );
};

const CustomerService = () => {
  return (
    <div className="w-full">
      <TabContent
        image={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS25holrjYnMOy1C2K5sRHvyVRmPm1UY213X5oU-Sv-9Ulid_NUpbVTOCBiwZNsBxRntvA&usqp=CAU"
        }
        title={"Anywhere, AnyTime, Reach Out To Us"}
        text={
          "At our bank, customer service is our top priority. Our team of dedicated professionals is available to assist you with any questions or concerns you may have. Whether you need help with your account, want to discuss your financial goals, or have any other banking-related needs, we are here to assist you."
        }
        link={"/"}
      />
    </div>
  );
};

const DigitalWallet = () => {
  return (
    <div className="w-full">
      <TabContent
        image={
          "https://www.simon-kucher.com/sites/default/files/styles/670xh/public/2019-12/%7B14375D91-BE12-4F69-82F2-9CEEFC4BAB59%7D.jpg?itok=ADTGwneW"
        }
        title={"Privacy, Innovation and Security in the Digital Payments World"}
        text={
          "We have deidicated app for your mobile and portable banking in your pocket. At our bank, customer service is our top priority. Our team of dedicated professionals is available to assist you with any questions or concerns you may have. Whether you need help with your account, want to discuss your financial goals, or have any other banking-related needs, we are here to assist you."
        }
        link={"/"}
      />
    </div>
  );
};
