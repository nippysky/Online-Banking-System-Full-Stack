import React from "react";
import services from "./content";

export default function Services() {
  return (
    <section className="w-full px-5 lg:px-20 py-20 bg-mainSec">
      <h1 className="text-center text-3xl font-semibold text-black">
        Conviniency Is What You Need
      </h1>

      <div className="w-full grid gap-10 md:grid-cols-2 lg:grid-cols-4 mt-20">
        {services.map((service) => (
          <div key={service.id} className="w-full">
            {service.icon}
            <h3 className="my-5 text-2xl font-medium text-black">
              {service.title}
            </h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
