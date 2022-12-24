import React from "react";
import Sidebar from "./Sidebar";

export default function Layout({ children }: any) {
  return (
    <section className="w-full h-screen flex flex-row justify-start">
      <Sidebar />
      <div className="flex-1 bg-gray-200 text-black px-4 pt-8 pb-4 overflow-auto">
        {children}
      </div>
    </section>
  );
}
