import { getAllProducts } from "@/api/services/routemisr.services";
import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import Link from "next/link";

export default async function FeaturedProducts() {
  const allProducts = await getAllProducts();
  // console.log("allllllldataaaaaaaaaaaaaaaa",allProducts);

  return (
    <>
      <h1 className="text-4xl m-6 font-bold w-[90%] ps-3 border-s-8 border-[#16A34A] hidden md:flex">
        Featured <span className="text-[#16A34A]">Products</span>
      </h1>

      <div className="mx-auto my-8 hidden md:flex flex-wrap">
        {allProducts?.map((product) => (
          <Link
            key={product._id}
            className="p-2 w-full md:w-1/3 lg:w-1/4 xl:w-1/5"
            href={`/productdetails/${product.id}`}
          >
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </>
  );
}
