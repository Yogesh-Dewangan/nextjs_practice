import Link from "next/link";
import React from "react";

export default function CategoryHeader({ category }: string | any) {
  return (
    <>
      <div className="w-full h-14 bg-indigo-700 flex items-center px-10">
        <h1 className="text-white font-semibold text-xl">{category}</h1>
      </div>
      <div className="px-10">
        <div className="my-2">
          <p className="text-gray-400 text-sm">
            <Link href="/">All Category</Link> &gt; &nbsp;
            <span className="text-black">{category}</span>
          </p>
        </div>
      </div>
    </>
  );
}
