import { getAllCategories } from '@/api/services/routemisr.services'
import Link from 'next/link';
import React from 'react'
import { FaLayerGroup } from "react-icons/fa";

export default async function Categories() {

  const allCategories = await getAllCategories()
 
  return (
    <div>
      <div className='bg-gradient-to-l from-[#4ADE80] via-[#22C55E] to-[#16A34A] my-4 pt-20 pb-10 flex gap-5'>
        <div className='flex justify-center items-center p-4'>
            <div className=' flex justify-center items-center bg-[#cbfad358] rounded-lg size-20'>
              <FaLayerGroup className='text-white text-4xl'/>
            </div>
        </div>
        
        <div className='flex-col justify-center items-center'>
          <h2 className='mt-5 text-[30px] text-white font-bold'>All Categories</h2>
          <span className='m-0 text-[#FFFFFFCC] '>Browse our wide range of product categories</span>
        </div>
      </div>


      <div className='flex flex-wrap mt-5'>
        {allCategories?.map((category) =>
        
        <Link href={`/CategoryCard/${category._id}`} key={category._id} className='w-1/2 lg:w-1/4 xl:w-1/6 p-4'>
        <div className='relative group p-6 flex flex-col items-center border rounded-xl shadow hover:shadow-xl transition-all' >
          <div className=' relative group  rounded-xl overflow-hidden'>
            <img src={category.image} alt={category.name}  className='w-50 h-50 object-cover transition duration-500 group-hover:scale-110' />
          </div>
          <h2 className='group-hover:text-[#22C55E] font-bold my-5 transition duration-300'>{category.name}</h2>
          <div className="absolute bottom-5 flex items-center justify-center">

            <p className="text-white text-sm transform translate-y-3 group-hover:translate-y-0 group-hover:text-[#22C55E] transition duration-300">
              View subcategory
            </p>

          </div>

        </div>
      </Link>)}
      </div> 


    </div>
  )
}
