"use client";

import { clearAllCartProducts, getLoggedUserCart, removeProductFromCart, updateProductQuantaty } from "@/actions/cart.actions";
import { useContext, useEffect, useState } from "react";
import { FaBoxOpen, FaTrash } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { toast } from "sonner";
import { ImSpinner3 } from "react-icons/im";
import Link from "next/link";
import { SyncLoader } from "react-spinners";
import { cartData  } from "@/api/types/products.type";
import { CartContext } from "@/context/cartContext";
import { FaTruck } from "react-icons/fa";


export default function CartPage() {

  const [productDetails, setproductDetails] = useState<null | cartData>(null);
  const [disabledUpdate, setdisabledUpdate] = useState(false)
  const [updateLoading, setupdateLoading] = useState(false)
  const [currentId, setcurrentId] = useState<null | string>(null)
  const [removeDisabeled, setremoveDisabeled] = useState(false)
  const {numOfCartItems, setnumOfCartItems} = useContext(CartContext)
  const [cartId, setcartId] = useState("")

  const subtotal = productDetails?.totalCartPrice || 0;

  const freeShippingLimit = 500;
  const remaining = freeShippingLimit - subtotal;

  const progress = Math.min((subtotal / freeShippingLimit) * 100, 100);
  const isFree = subtotal >= freeShippingLimit;
  

  async function getUserCart(){
    const res = await getLoggedUserCart()
    console.log(res);
    if (res.status === "success"){
      setproductDetails(res.data)
      setcartId(res.cartId)
    }
  }

  async function updateProduct(id:string, count:number, sign:string){

    setcurrentId(id)
    setdisabledUpdate(true)
    setupdateLoading(true)

    const res = await updateProductQuantaty(id, count)
    // console.log(res);
    if (res.status === "success"){
      toast.success(res.message, {position :"top-center", duration:2000})
      setproductDetails(res.data)
      setdisabledUpdate(false)
      setupdateLoading(false)
      if(sign === "+"){
        setnumOfCartItems(numOfCartItems +1)
      }else{
        setnumOfCartItems(numOfCartItems -1)
      }
    }


    else{
      toast.error(res.message, {position :"top-center", duration:2000})
      setdisabledUpdate(false)
      setupdateLoading(false)
    }
  }

  async function removeProduct(productId:string, count:number){

    setremoveDisabeled(true)

    const res = await removeProductFromCart(productId)
    console.log(res);
    if(res.status === "success"){
      toast.success(res.message, {position :"top-center", duration:2000})
      setproductDetails(res.data)
      setremoveDisabeled(false)
      setnumOfCartItems(numOfCartItems - count)
    }
    else{
      toast.error(res.message, {position :"top-center", duration:2000})
      setremoveDisabeled(false)
    }
  }

  async function removeAllProduct(){

    const res = await clearAllCartProducts()
    console.log(res);
    if(res.status === "success"){
      toast.success(res.message, {position :"top-center", duration:2000})
      setproductDetails(res.data)
      setnumOfCartItems(0)
      // setremoveDisabeled(false)
    }
    else{
      toast.error(res.message, {position :"top-center", duration:2000})
      // setremoveDisabeled(false)
    }
  }


  useEffect(() =>{
    getUserCart()
  },[])


  if(!productDetails){
    return <div className='h-screen flex items-center justify-center'>
      <SyncLoader color="#15803D"  size={25}/>
    </div>
  }

  return <>
    {productDetails?.products.length > 0 ? (
    <div className="w-[90%] mx-auto py-10 grid lg:grid-cols-3 gap-8">
      <div className="md:col-span-2 space-y-5">
        
        <div className="flex">
          <span className="text-3xl text-white bg-green-600 rounded-xl p-1 me-2"><IoCart/></span>
          <h1 className="text-3xl font-bold">  Shopping Cart</h1>
        </div>
        
        <p className="text-gray-500">
          You have<span className="text-green-600 font-semibold mx-2">
            {productDetails?.products.length} items</span>in your cart
        </p>

        {productDetails?.products.map((product) => (
        <div
          key={product.product.id}
          className="md:flex gap-5 border rounded-xl p-4 products-center shadow-sm">
          <img
            src={product.product.imageCover} alt={product.product.title}
            className="w-24 h-24 object-cover rounded-md"/>

          <div className="flex-1">
            <h2 className="font-semibold text-lg">{product.product.title}</h2>

            <span className="text-sm bg-green-100 text-green-600 px-3 py-1 rounded-full">{product.product.category.name}</span>

            <p className="text-green-600 font-bold text-xl mt-2">{product.price} EGP</p>

            <div className="space-y-4">
              <div className="flex items-center border border-gray-300 rounded-md w-fit overflow-hidden">
                <button
                  disabled={disabledUpdate}
                  onClick={() => updateProduct(product.product.id, product.count -1, "-" )}
                  className="px-3 py-1 text-lg hover:bg-gray-100 hover:text-green-600 cursor-pointer disabled:bg-slate-400 disabled:cursor-not-allowed disabled:">−</button>

                <span className="px-4 py-1 border-x border-gray-300">
                {updateLoading && product.product.id === currentId ? <ImSpinner3 className="animate-spin"/> : product.count}                    
                </span>

                <button
                  disabled={disabledUpdate}
                  onClick={() => updateProduct(product.product.id, product.count +1, "+" )}
                  className="px-3 py-1 text-lg hover:bg-gray-100 hover:text-green-600 cursor-pointer disabled:bg-slate-400 disabled:cursor-not-allowed disabled:">+</button>
              </div>
            </div>
          </div>

          <div className="flex items-end gap-2 space-y-3 ">
            <div className="flex justify-between gap-5 items-center bg-gray-100 rounded-md mt-1 py-2 px-1 mb-0">
                <span className="text-gray-600 text-sm">
                  Total:
                </span>
                <span className="text-green-600 font-semibold text-lg">
                  {product.count * product.price} EGP
                </span>
              </div>
              <button disabled={removeDisabeled} onClick={() => removeProduct(product.product.id, product.count)} className="p-3 border bg-red-50 border-red-200 hover:bg-red-400 rounded-xl text-red-400 hover:text-white cursor-pointer disabled:cursor-not-allowed"> <FaTrash className="text-sm"/>  </button>
            
          </div>
        </div>
          
        ))}
        
        <div className="flex justify-end text-sm text-gray-400 hover:text-red-500 cursor-pointer">
          <FaTrash className="mt-1 me-2"/>
          <button onClick={() => {removeAllProduct()}}>Clear all items </button>
        </div>
        
      </div>
      

      <div className="border rounded-xl shadow-sm h-fit overflow-hidden sticky top-20">
      <div className="bg-green-600 text-white p-4 font-semibold">
        <h2>Order Summary</h2>
        <p className="text-sm opacity-80">
          {productDetails?.products.length} item in your cart
        </p>
      </div>

      <div className="p-5 space-y-5">

        <div className={`rounded-xl p-4 ${isFree ? "bg-green-100" : "bg-orange-100"}`}>
          
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-emerald-200 rounded-full text-green-700 p-2"><FaTruck/></span>

            {!isFree ? (
              <p className="text-sm text-gray-700">
                Add <span className="font-bold">{remaining} EGP</span> for free shipping
              </p>
            ) : (
              <p className="text-green-700 font-semibold">
                You qualify for free delivery 
              </p>
            )}
          </div>

          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-300 ${
                isFree ? "bg-green-500" : "bg-orange-400"
              }`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-600 text-sm">
            Subtotal ({productDetails?.products.length} items)
          </span>
          <span className="font-semibold">
            {subtotal} EGP
          </span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span className="text-green-600">
            {isFree ? "Free" : "50 EGP"}
          </span>
        </div>

        <hr />

        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span className="text-green-600">
            {isFree ? subtotal : subtotal + 50} EGP
          </span>
        </div>

        <div className="border rounded-lg p-3 text-center text-gray-500 cursor-pointer hover:bg-gray-50 transition">
          Apply Promo Code
        </div>

        <Link href={`/checkOut/${cartId}`}>
          <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition m-2 cursor-pointer">
          Secure Checkout
          </button>
        </Link>

        <div className="text-center text-sm text-gray-500 flex justify-center gap-4">
          <span > Secure Payment</span>
          <span className="flex gap-2"><FaTruck className="mt-1"/> Fast Delivery</span>
        </div>

        <Link href="/" className="block text-center text-green-600 mt-2">
          ← Continue Shopping
        </Link>

      </div>
    </div>
    </div>):
    <div className="flex flex-col items-center justify-center h-[60vh] text-center">
          
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 mb-4">
            <FaBoxOpen className="w-8 h-8 text-gray-400"/>
          </div>
    
          <h2 className="text-xl font-semibold text-gray-800">
            Your cart is empty
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
    </div>}
  </>;
}