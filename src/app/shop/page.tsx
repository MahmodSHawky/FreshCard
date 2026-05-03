import { getAllProducts } from "@/api/services/routemisr.services";
import React from "react";
import Link from "next/link";
import ProductCard from "../_component/ProductCard/ProductCard";
import { FaBoxOpen } from "react-icons/fa6";



export default async function Shop() {

  const allProducts = await getAllProducts();
  
  
  return <>


  <div className='bg-gradient-to-l from-[#4ADE80] via-[#22C55E] to-[#16A34A] my-4 pt-20 pb-10 flex gap-5'>
      <div className='flex justify-center items-center p-4'>
        <div className='flex justify-center items-center bg-[#cbfad358] rounded-lg size-20'>
          <FaBoxOpen className='text-white text-4xl'/>
        </div>
      </div>
      
      <div className='flex-col justify-center items-center'>
        <h2 className='mt-5 text-[30px] text-white font-bold '>All Products</h2>
        <span className='m-0 text-[#FFFFFFCC] '>Explore our complete product collection</span>
      </div>
    </div>


    <div className="   mx-auto my-8 flex flex-wrap">
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
    <div>Shop</div>
  </>
}
