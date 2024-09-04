"use client";

import Head from "next/head";
import Header from "../shared/header";
import { useSearchParams } from "next/navigation";
import CategoryHeader from "./categoty-header";
import React from "react";
import FilterSection from "./filter-section";
import ProductSection from "./product-section";
import { Provider } from "react-redux";
import { store } from "../store/store";
import RightSection from "./right-section";

export default function CategoryPage() {
  const searchParams = useSearchParams();
  const categoryName = searchParams.get("name") || "";
  const category = categoryName[0].toUpperCase() + categoryName?.slice(1);

  return (
    <section className="min-h-screen">
      <Head>
        <title>Category Page</title>
        <meta name="description" content="Product Page" />
      </Head>
      <Header></Header>
      <CategoryHeader category={category}></CategoryHeader>
      <Provider store={store}>
        <div className="px-10 pb-10 flex flex-row gap-x-4">
          <div className="basis-1/4 bg-white">
            <FilterSection></FilterSection>
          </div>
          <div className="basis-1/2 bg-white">
            <ProductSection category={category}></ProductSection>
          </div>
          <div className="basis-1/4 bg-white">
            <RightSection></RightSection>
          </div>
        </div>
      </Provider>
    </section>
  );
}
