"use client";
import { productType } from '@/api/types/products.type'
import { FaTruckFast } from "react-icons/fa6";
import { MdOutlineRefresh } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RatingStars from '../StarRating/StarRating';

export default function ProductTabs({product } : {product : productType}) {
  return (
    <div className="w-[80%] mx-auto my-6">

      <Tabs defaultValue="details" className="w-full p-5">

        <TabsList className="flex gap-8 border-b bg-transparent p-5 h-auto">

  <TabsTrigger
    value="details"
     className="py-5 text-gray-600 font-medium border-b-2 border-transparent rounded-none

  data-[active]:!text-green-600
  data-[active]:!border-b-green-600
"
  >
    Product Details
  </TabsTrigger>

  <TabsTrigger
    value="reviews"
     className="py-5 text-gray-600 font-medium border-b-2 border-transparent rounded-none

  data-[active]:!text-green-600
  data-[active]:!border-b-green-600
"
  >
    Reviews ({product?.ratingsQuantity})
  </TabsTrigger>

  <TabsTrigger
    value="shipping"
     className="py-5 text-gray-600 font-medium border-b-2 border-transparent rounded-none

  data-[active]:!text-green-600
  data-[active]:!border-b-green-600
"
  >
    Shipping & Returns
  </TabsTrigger>

 

</TabsList>

        {/* DETAILS */}
        <TabsContent value="details" className="mt-6">
          <div className="border rounded-lg p-6 space-y-4">

            

            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-md mb-6">
              Product Information
              </h3>


                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category</span>
                    <span>{product?.category?.name}</span>
                  </div>

                  <div className="flex justify-between">
                    <span  className="text-gray-600">Subcategory</span>
                    <span>{product?.category?.name}</span>
                  </div>

                  <div className="flex justify-between">
                    <span  className="text-gray-600">Brand</span>
                    <span>{product?.brand?.name}</span>
                  </div>

                  <div className="flex justify-between">
                    <span  className="text-gray-600">Items Sold</span>
                    <span>{product?.sold}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                
                <h4  className="font-semibold text-md mb-6">Key Features</h4>
                <p className="text-gray-600 mb-3 ms-7">Premium Quality Product</p>
                <p className="text-gray-600 mb-3 ms-7">100% Authentic Guarantee</p>
                <p className="text-gray-600 mb-3 ms-7">Fast & Secure Packaging</p>
                <p className="text-gray-600 mb-3 ms-7">Quality Tested</p>
              </div>

            </div>

          </div>
        </TabsContent>

        <TabsContent value="reviews" className="mt-6">

          <div className="flex flex-col md:flex-row gap-10 border rounded-lg p-6">

            <div className="text-center md:w-1/4">

              <h2 className="text-5xl font-bold mt-14">
                {product?.ratingsAverage?.toFixed(1)}
              </h2>

              <div className="flex justify-center my-5">
                <RatingStars rating={product?.ratingsAverage || 0} />
              </div>

              <p className="text-gray-500 text-sm">
                Based on {product?.ratingsQuantity} reviews
              </p>

            </div>

            <div className="flex-1 space-y-3">

              {[
                { star: 5, percent: 40 },
                { star: 4, percent: 30 },
                { star: 3, percent: 15 },
                { star: 2, percent: 10 },
                { star: 1, percent: 5 },
              ].map((item) => (
                
                <div key={item.star} className="flex items-center gap-4">

                  <span className="w-12 text-sm text-gray-600">
                    {item.star} star
                  </span>

                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400"
                      style={{ width: `${item.percent}%` }}
                    ></div>
                  </div>

                  <span className="w-10 text-sm text-gray-500 text-right">
                    {item.percent}%
                  </span>

                </div>
              ))}

            </div>

          </div>

        </TabsContent>

        <TabsContent value="shipping" className="mt-6">

          <div className="space-y-6">

            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-green-50 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-600 text-white rounded-full size-10 flex items-center justify-center">
                    <FaTruckFast/>
                  </div>
                  <h3 className="font-semibold text-lg">Shipping Information</h3>
                </div>

                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✔ Free shipping on orders over $50</li>
                  <li>✔ Standard delivery: 3-5 business days</li>
                  <li>✔ Express delivery available (1-2 business days)</li>
                  <li>✔ Track your order in real-time</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-600 text-white rounded-full size-10 flex items-center justify-center">
                    <MdOutlineRefresh/>
                  </div>
                  <h3 className="font-semibold text-lg">Returns & Refunds</h3>
                </div>

                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✔ 30-day hassle-free returns</li>
                  <li>✔ Full refund or exchange available</li>
                  <li>✔ Free return shipping on defective items</li>
                  <li>✔ Easy online return process</li>
                </ul>
              </div>

            </div>

            <div className="bg-gray-50 p-6 rounded-xl flex items-start gap-4">

              <div className="bg-gray-200 rounded-full size-12 flex items-center justify-center text-xl">
                <MdOutlineSecurity/>
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  Buyer Protection Guarantee
                </h3>

                <p className="text-sm text-gray-600 mt-1">
                  Get a full refund if your order doesn't arrive or isn't as described. 
                  We ensure your shopping experience is safe and secure.
                </p>
              </div>

            </div>

          </div>

        </TabsContent>

      </Tabs>

    </div>
  );
}