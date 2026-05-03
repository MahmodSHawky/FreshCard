"use client";

import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { useForm, Controller } from "react-hook-form";
import { Button, Input } from "@base-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ckeckOutSchema, ckeckOutSchemaType } from "@/schemas/checkOut.schema";
import { LuNotepadText } from "react-icons/lu"
import { RiHome7Fill } from "react-icons/ri";
import { RiCashFill } from "react-icons/ri";
import { MdPayments } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { onLinePayment } from "@/actions/checkOut.action"; 
import { cashPayment } from "@/actions/cashPayment.action"; 
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { getLoggedUserCart } from "@/actions/cart.actions";
import { cartData } from "@/api/types/products.type";
import { useRouter } from "next/navigation";
import { CartContext } from "@/context/cartContext";

export default function checkOut() {

  
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const {numOfCartItems, setnumOfCartItems} = useContext(CartContext)
  const [productDetails, setproductDetails] = useState<null | cartData>(null);
  
  const {id}:{id:string} = useParams()
  
  const router = useRouter();

  const subtotal = productDetails?.totalCartPrice || 0;
  const freeShippingLimit = 500;
  const isFree = subtotal >= freeShippingLimit;

  async function getUserCart(){
    const res = await getLoggedUserCart()
    // console.log(res);
    if (res.status === "success"){
      setproductDetails(res.data)
    }
  }



  const form = useForm ({
    defaultValues: {
      details: "",
      phone: "",
      city:"",
    },
    resolver : zodResolver(ckeckOutSchema)
  });

  const { handleSubmit, control } = form;

  async function mySubmit(data: ckeckOutSchemaType) {

  if (paymentMethod === "cash") {

    const res = await cashPayment(id, data);

    if (res.status === "success") {
      router.push("/allorders");
      setnumOfCartItems(0)
    }

  } else {

    const res = await onLinePayment(id, "", data);

    if (res.status === "success") {
      window.location.href = res.session.url;
      setnumOfCartItems(0)
    }

  }
}


  useEffect(() =>{
      getUserCart()
    },[])
  


  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="mb-10">
        <h1 className="text-4xl font-bold flex">
        <span className="p-2 me-2 size-13 bg-green-700 text-white rounded-xl"><LuNotepadText/></span> Complete Your Order
        </h1>
        <p className="text-gray-600 m-2">
          Review your items and complete your purchase
        </p> 
      </div>
      <div className=" mx-auto grid md:grid-cols-3 gap-8">
        
        {/* LEFT */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">

            <div className="bg-green-600 text-white p-4 font-semibold">
              <h2 className="flex font-bold text-xl"> <RiHome7Fill className="me-2 mt-1"/> Shipping Address</h2>
              <p className="text-sm text-green-100">
                Where should we deliver your order?
              </p>
            </div>

            <div className="p-5 space-y-10">
              <div className="flex bg-blue-50 border border-blue-200 text-blue-700 p-3 rounded-lg">
                <div className="flex justify-center items-center bg-blue-300 rounded-full size-7 m-2">
                  <IoIosInformationCircleOutline/>
                </div>
                <div className="text-sm">
                  <span className="font-bold">Delivery Information</span> <br />
                  Please ensure your address is accurate for smooth delivery
                </div>
              </div>

              <div  className="space-y-6">
                <Controller
                name="city"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="city">city*</FieldLabel>
                    <Input
                      {...field}
                      id="city"
                      type="text"
                      aria-invalid={fieldState.invalid}
                      placeholder="eg. Cairo, Alexandria, Giza"
                      autoComplete="off"
                      className="w-full mt-1 border rounded-md p-2 outline-none focus:ring-2 focus:ring-green-500"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
                />

                <Controller
                name="details"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="details">Street adress*</FieldLabel>
                    <textarea
                      {...field}
                      id="details"
                      aria-invalid={fieldState.invalid}
                      placeholder="Street name, bulding number, floor...."
                      autoComplete="off"
                      className="w-full mt-1 border rounded-md p-2 outline-none focus:ring-2 focus:ring-green-500"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
                />

                <Controller
                  name="phone"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="phone">Phone*</FieldLabel>
                      <Input
                        {...field}
                        id="phone"
                        type="tel"
                        aria-invalid={fieldState.invalid}
                        placeholder="Enter Your Phone"
                        autoComplete="off"
                        className="w-full mt-1 border rounded-md p-2 outline-none focus:ring-2 focus:ring-green-500"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </div>

            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
            <div className="bg-green-600 text-white p-4 font-semibold">
              <h2 className="flex font-bold text-xl"> <MdPayments className="me-2 mt-1"/> Payment Method</h2>
              <p className="text-sm text-green-100">
                Choose how you'd like to pay
              </p>
            </div>
            <div className="p-5 space-y-4">
              <div
                onClick={() => setPaymentMethod("cash")}
                className={`flex items-center justify-between border p-4 rounded-lg cursor-pointer transition ${
                  paymentMethod === "cash"
                    ? "border-green-600 bg-green-50"
                    : "hover:border-green-400"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-green-600 text-white p-2 rounded-md"><RiCashFill/></div>
                  <div>
                    <p className="font-semibold">Cash on Delivery</p>
                    <p className="text-sm text-gray-500">
                      Pay when your order arrives
                    </p>
                  </div>
                </div>

                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                  paymentMethod === "cash" ? "border-green-600" : ""
                }`}>
                  {paymentMethod === "cash" && (
                    <div className="w-2.5 h-2.5 bg-green-600 rounded-full"></div>
                  )}
                </div>
              </div>

              <div
                onClick={() => setPaymentMethod("online")}
                className={`flex items-center justify-between border p-4 rounded-lg cursor-pointer transition ${
                  paymentMethod === "online"
                    ? "border-green-600 bg-green-50"
                    : "hover:border-green-400"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-gray-200 p-2 rounded-md"><MdPayment/></div>
                  <div>
                    <p className="font-semibold">Pay Online</p>
                    <p className="text-sm text-gray-500">
                      Secure payment with card
                    </p>
                  </div>
                </div>

                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                  paymentMethod === "online" ? "border-green-600" : ""
                }`}>
                  {paymentMethod === "online" && (
                    <div className="w-2.5 h-2.5 bg-green-600 rounded-full"></div>
                  )}
                </div>
              </div>

              <div className="bg-green-50 border text-green-700 p-3 rounded-lg text-sm">
                Secure & Encrypted - Your payment info is protected
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="md:col-span-1">
          <div className="sticky top-15">
            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
              <div className="bg-green-600 text-white p-4 font-semibold">
                Order Summary
                <p className="text-sm text-green-100">{productDetails?.products.length} items</p>
              </div>

              <div className="p-4 space-y-3 max-h-60 overflow-y-auto">
                {productDetails?.products.map((item) => (
                  
                  <div
                    key={item.product.id}
                    className="flex items-center justify-between bg-gray-50 p-2 rounded-lg"
                  >

                    {/* LEFT */}
                    <div className="flex items-center gap-2">

                      {/* IMAGE */}
                      <img
                        src={item.product.imageCover}
                        alt={item.product.title}
                        className="w-10 h-10 rounded-md object-cover"
                      />

                      {/* INFO */}
                      <div className="text-xs">
                        <p className="font-medium line-clamp-1">
                          {item.product.title}
                        </p>

                        <p className="text-gray-400">
                          {item.count} × {item.price} EGP
                        </p>
                      </div>

                    </div>

                    {/* RIGHT (TOTAL) */}
                    <span className="text-sm font-semibold">
                      {item.count * item.price} EGP
                    </span>

                  </div>

                ))}
              </div>

              <div className="p-5 border-t space-y-3">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal</span>
                  <span>{productDetails?.totalCartPrice}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600">
                    {isFree ? "Free" : "50 EGP"}
                  </span>
                </div>

                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-green-600"> {isFree ? subtotal : subtotal + 50} EGP</span>
                </div>

                <button
                  onClick={handleSubmit(mySubmit)}
                  className="w-full bg-green-600 text-white py-3 rounded-lg mt-4 hover:bg-green-700 transition"
                >
                  {paymentMethod === "cash"
                    ? "Place Order"
                    : "Proceed to Payment"}
                </button>

              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
