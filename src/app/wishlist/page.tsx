"use client";

import { getLoggedUserWishlist, removeProductFromWishlist } from "@/actions/washlist.actions";
import { productType } from "@/api/types/products.type";
import { CartContext } from "@/context/cartContext";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { FaBoxOpen, FaHeart, FaTrash } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { SyncLoader } from "react-spinners";
import AddBtn from "../_component/AddBtn/AddBtn";
import { toast } from "sonner";

export default function WishlistPage() {

  const [productDetails, setproductDetails] = useState<null | productType[]>(null);
  const [removeDisabeled, setremoveDisabeled] = useState(false)
  const {numOfWishlistItems, setnumOfWishlistItems} = useContext(CartContext)
  const [wishlistId, setwishlistId] = useState("")
  



  async function getUserWishlist(){
    const res = await getLoggedUserWishlist()
    // console.log(res);
    if (res.status === "success"){
      setproductDetails(res.data)
      setwishlistId(res.wishlistId)
    }
  }


  async function removeProduct(productId:string){

    setremoveDisabeled(true)

    const res = await removeProductFromWishlist(productId)
    console.log(res);
    if(res.status === "success"){
      toast.success(res.message, {position :"top-center", duration:2000})
      await getUserWishlist()
      setremoveDisabeled(false)
      setnumOfWishlistItems(numOfWishlistItems - 1)

    }
    else{
      toast.error(res.message, {position :"top-center", duration:2000})
      setremoveDisabeled(false)
    }
  }





  useEffect(() =>{
      getUserWishlist()
  },[])


  if(!productDetails){
      return <div className='h-screen flex items-center justify-center'>
        <SyncLoader color="#15803D"  size={25}/>
      </div>
    }

  return (
    <>
    {productDetails?.length > 0 ? (
    <div className="mx-auto px-5 py-10">
    
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-red-100 p-3 rounded-xl">
          <FaHeart className="text-red-500 text-xl" />
        </div>
    
        <div>
          <h1 className="text-3xl font-bold">My Wishlist</h1>
          <p className="text-gray-500">{productDetails?.length} item saved</p>
        </div>
      </div>
    
      {/* Table Header */}
      <div className="hidden md:grid grid-cols-5 text-gray-500 border-b pb-3 px-4 ms-5">
        <span className="md:col-span-2">Product</span>
        <span>Price</span>
        <span>Status</span>
        <span className="text-right">Actions</span>
      </div>
    
      {/* Items */}
      {productDetails?.map((product) => (
        <div
          key={product?.id}
          className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 border rounded-xl mt-4 shadow-sm"
        >
          {/* Product */}
          <div className="flex items-center gap-4 md:col-span-2">
            <img
              src={product?.imageCover}
              className="w-16 h-16 rounded-md object-cover"
            />
    
            <div>
              <h2 className="font-semibold">{product?.title}</h2>
              <p className="text-sm text-gray-400">{product?.category?.name}</p>
            </div>
          </div>
    
          {/* Price */}
          <div className="flex justify-between md:block">
            <span className="md:hidden text-gray-500">Price</span>
            <span className="font-semibold">{product?.price} EGP</span>
          </div>

    
          {/* Status */}
          <div className="flex justify-between md:block">
            <span className='inline-block mb-7 px-5 py-2 text-sm text-[#15803D] rounded-2xl bg-[#F0FDF4] me-3'>. in stock</span>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 max-h-10">
            <AddBtn id={product?.id} classes="flex items-center justify-center text-white py-3 bg-[#16A34A] hover:bg-[#15803D] w-full md:w-1/2 rounded-lg" word={<div className="flex text-sm items-center gap-2"><IoCart className='me-2'/>Add to cart</div>}></AddBtn>
            <button disabled={removeDisabeled} onClick={() => removeProduct(product?.id)} className="p-2 border rounded-md text-gray-400 hover:bg-red-500 hover:text-white transition disabled:cursor-not-allowed">
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    
      {/* Continue Shopping */}
      <Link href="/" className="inline-block mt-6 text-gray-500 hover:text-green-600">
        ← Continue Shopping
      </Link>
    </div>):(

      <div className="flex flex-col items-center justify-center h-[60vh] text-center">
          
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 mb-4">
            <FaBoxOpen className="w-8 h-8 text-gray-400"/>
          </div>
    
          <h2 className="text-xl font-semibold text-gray-800">
            Your wishlist is empty
          </h2>
    
          <p className="text-gray-500 mt-2">
            Looks like you haven't added anything to your cart yet.
            Start exploring our products!
          </p>
    
          <Link href={`/`}>
            <button className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition cursor-pointer">
              Start shopping
            </button>
          </Link>
    </div>
    )}
   </>
);
}

