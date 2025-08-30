"use client";
// import { useSearchParams, useParams } from "next/navigation";
import Link from "next/link";
import CareerForm from "../../CareerForm";
import careerbg from "../../../../../../public/images/careerbg.png";
// import { useEffect, useState } from "react";

export default function CarrierApply({ title }: { title: string }) {
  console.log(title);

  return (
    <section className="bg-gradient-to-b bg-white rounded-t-3xl rounded-b-3xl shadow-lg  overflow-hidden">
      <div
        className=" pt-10 md:pt-12 pb-14 lg:pb-20 xl:pb-22 rounded-b-2xl xl:rounded-b-4xl "
        style={{
          backgroundImage: `url(${careerbg.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {" "}
        {/* Breadcrumb */}
        <div className=" absolute  hidden md:flex left-8 top-8">
          {" "}
          <nav className="text-sm text-gray-300 mb-4 mt-15 px-6 py-1 rounded-full bg-black/50">
            <Link href="/">
              <span className="hover:underline cursor-pointer">Home</span>
            </Link>{" "}
            &gt;
            <Link href="/company/career">
              <span className="hover:underline cursor-pointer">Career</span>
            </Link>{" "}
            &gt;
            <span className="text-white">Apply</span>
          </nav>
        </div>
        {/* Title */}
        <h1 className="text-3xl px-10 md:text-4xl font-bold text-center md:text-start md:font-semibold text-white my-8 mt-20">
          - {title}
        </h1>
        {/* Info Cards */}
        <div className="px-10 py-4 bg-[#000c43]">
          <ul className="my-1">
            <li className="text-white list-inside list-disc text-xl  ">
              <span className="text-sm">Information</span>
            </li>
          </ul>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              {
                label: "Place",
                value: "Lagos Island",
                border: "border-yellow-400",
              },
              { label: "Category", value: "Market", border: "border-white/60" },
              {
                label: "Job Type",
                value: "Full Time",
                border: "border-green-400",
              },
              {
                label: "Job Level",
                value: "Senior",
                border: "border-red-400/60",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`border-3 border-dotted bg-black/30   rounded-lg p-4 py-6 text-center md:text-start ${item.border}`}
              >
                <p className="text-gray-300 text-sm mb-3">- {item.label}</p>
                <p className="text-white text-xl font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="bg-blue-950  py-14 lg:py-20 xl:py-22"></div> */}
      <CareerForm />
    </section>
  );
}
