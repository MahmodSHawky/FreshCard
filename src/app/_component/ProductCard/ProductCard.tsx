import { productType } from '@/api/types/products.type'
import { Button } from '@base-ui/react'
import React from 'react'
import { CiStar } from 'react-icons/ci'
import RatingStars from "@/app/_component/StarRating/StarRating";
import AddBtn from "@/app/_component/AddBtn/AddBtn";
import { IoHeartOutline } from "react-icons/io5";
import { LuRefreshCw } from "react-icons/lu";
import { FaEye } from "react-icons/fa";
import BtnWishlist from '../BtnWishlist/BtnWishlist';


export default function ProductCard({product } : {product : productType}) {
  return(
      <div key={product._id} className=''>
        <div className='border rounded-lg p-3 hover:shadow-xl transition-all'>
          <div className="relative">
            <img className='w-full rounded-md' src={product.imageCover} alt={product.title} />
            <div className="absolute top-3 right-3 flex flex-col gap-3 z-10">
              <BtnWishlist id={product._id} classes="p-2 rounded-full shadow hover:text-red-500 cursor-pointer" word={<IoHeartOutline/>}>
                
              </BtnWishlist>
              <button className="p-2 rounded-full shadow hover:text-green-500 cursor-pointer">
                <LuRefreshCw/>
              </button>
              <button className="p-2 rounded-full shadow hover:text-green-500 cursor-pointer">
                <FaEye/>
              </button>
            </div>
          </div>
          <h2 className='line-clamp-1'>{product.title}</h2>
          <h3 className='line-clamp-1'>{product.description}</h3>
          <div className=' rate flex items-center gap-2'>
            <RatingStars rating={product?.ratingsAverage || 0} />

            <span className='text-sm text-gray-400'>
              {product?.ratingsAverage} ({product?.ratingsQuantity})
            </span>

          </div>
          <div className='price flex justify-between'>
            {product.priceAfterDiscount ? (
              <>
                <div className='flex gap-4 items-center'>
                  <span className='text-[#16A34A] font-bold'>{product.priceAfterDiscount} EGP</span>
                  <span className='text-sm text-gray-400 line-through'>{product.price} EGP</span>
                </div>
              </>
            ): (
              <span className='font-bold'>{product.price} EGP</span>
            ) }
            <AddBtn id={product.id} classes='text-white rounded-full size-10 text-2xl bg-[#16A34A] cursor-pointer' word='+' ></AddBtn>
              
          </div>

        </div>
      </div>
  )
}
