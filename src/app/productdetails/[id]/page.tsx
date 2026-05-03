
import Counter from '@/app/_component/Counter/Counter'
import { Button } from '@base-ui/react'
import React from 'react'
import { CiStar } from 'react-icons/ci'
import { IoCart } from "react-icons/io5";
import { MdElectricBolt } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { MdOutlineRefresh } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { getSingleProduct } from '@/api/services/routemisr.services'
import ProductTabs from '@/app/_component/ProductTaps/ProductTaps'
import AddBtn from '@/app/_component/AddBtn/AddBtn'
import BtnWishlist from '@/app/_component/BtnWishlist/BtnWishlist';


export default async function ProductSetails(props :{params : Promise<{id : string}>}) {

  const params = await props.params
  const id = params.id

  const myProduct = await getSingleProduct(id)
    console.log("dataaaaaaa",myProduct);
  return<> 
    <div className=' w-[80%] mx-auto my-4 py-5 md:flex gap-5'>
      <div className='border rounded-md w-full md:w-1/4 p-4'>
        <img src={myProduct?.imageCover} alt={myProduct?.title} />
        <div className='flex flex-wrap'>
          {myProduct?.images.map((src) => <div key={src} className='w-1/3 my-2'>
            <img src={src} alt={src}/>
          </div>)}
        </div>
      </div>
      
      <div className='border rounded-md w-full md:w-3/4 p-4'>
        <span className='px-5 py-2 text-sm text-[#15803D] rounded-2xl bg-[#F0FDF4] me-3'>{myProduct?.category.name}</span>
        <span className='px-5 py-2 text-sm text-[#364153] rounded-2xl bg-[#F3F4F6] me-3'>{myProduct?.brand.name}</span>
        <h2 className='my-5 text-[30px] font-bold'>{myProduct?.title}</h2>

        <div className=' rate flex items-center gap-2'>
          <CiStar className='text-yellow-400' />
          <CiStar className='text-yellow-400'/>
          {myProduct?.ratingsAverage}
          {`(${myProduct?.ratingsQuantity})`} reviews
        </div>

        <div className='price flex justify-between my-4'>
          {myProduct?.priceAfterDiscount ? (
            <>
              <div className=' flex gap-4 items-center'>
                <span className=' text-4xl text-[#16A34A] font-bold'>{myProduct?.priceAfterDiscount} EGP</span>
                <span className='text-sm text-gray-400 line-through'>{myProduct?.price} EGP</span>
              </div>
            </>
          ): (
            <span className='text-4xl font-bold'>{myProduct?.price} EGP</span>
          ) }
          
        </div>

        <span className='inline-block mb-7 px-5 py-2 text-sm text-[#15803D] rounded-2xl bg-[#F0FDF4] me-3'>. in stock</span>

        <hr />
        <h5 className=' my-5 text-sm text-[#4A5565]'>{myProduct?.description}</h5>
        <h5 className=' my-5 text-sm '>Quantaty</h5>
        <Counter price={myProduct!.price}/>

        <div className=' md:flex gap-3 my-5'>
          <AddBtn id={id} classes="flex items-center justify-center text-white py-3 bg-[#16A34A] hover:bg-[#15803D] w-full md:w-1/2 rounded-lg" word={<div className="flex items-center gap-2"><IoCart className='me-2'/>Add to cart</div>}></AddBtn>
          <button  className="flex items-center justify-center text-white py-3 bg-[#101828] hover:bg-[#172237] w-full md:w-1/2 rounded-lg mt-5 md:mt-0" ><MdElectricBolt className='me-2'/>  Buy Now </button>
        </div>
        <BtnWishlist id={id} classes="flex items-center justify-center mb-5 py-3 bg-white border hover:text-[#16A34A] hover:border-[#16A34A] w-full rounded-lg" word={<div className="flex items-center gap-2"> <FaRegHeart className='me-2'/>  Add to Wishlist</div>}></BtnWishlist>
        <hr />

        <div className='md:flex justify-between'>
          <div className='flex items-center justify-center gap-3 p-5'>
            <div className='bg-[#DCFCE7] size-10 flex justify-center items-center rounded-full'> <FaTruckFast className='text-xl text-[#16A34A]'/></div>
            <div>
              <h5 className='text-[14px] text-[#101828]'>Free Delivery</h5>
              <p className='text-[12px] text-[#6A7282]'>Orders over $50</p>
            </div>
          </div>
          <div className='flex items-center justify-center gap-3 p-5'>
            <div className='bg-[#DCFCE7] size-10 flex justify-center items-center rounded-full'> <MdOutlineRefresh className='text-xl text-[#16A34A]'/></div>
            <div>
              <h5 className='text-[14px] text-[#101828]'>30 Days Return</h5>
              <p className='text-[12px] text-[#6A7282]'>Money back</p>
            </div>
          </div>
          <div className='flex items-center justify-center gap-3 p-5'>
            <div className='bg-[#DCFCE7] size-10 flex justify-center items-center rounded-full'> <MdOutlineSecurity className='text-xl text-[#16A34A]'/></div>
            <div>
              <h5 className='text-[14px] text-[#101828]'>Secure Payment</h5>
              <p className='text-[12px] text-[#6A7282]'>100% Protected</p>
            </div>
          </div>

        </div>
      </div>
    </div>
    
    <ProductTabs product ={myProduct!} />



  
  </>
}
