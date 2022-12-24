import Link from "next/link";
import React from "react";

type Prop = {
  bg: string;
  title: string;
};

export default function PageHeaders({ bg, title }: Prop) {
  return (
    <section
      className="w-full h-[400px] bg-cover flex justify-start items-center px-20"
      style={{
        backgroundImage: bg,
        opacity: 0.75,
        backgroundColor: "black",
      }}
    >
      <div>
        <h1 className="text-3xl font-normal text-black">{title}</h1>
        <div className="flex mt-7">
          <Link href={"/"}>Home </Link>
          <span>
            {" /"} {title}
          </span>
        </div>
      </div>
    </section>
  );
}
