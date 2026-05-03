import React from 'react'
import { Key } from 'lucide-react';
import { getAllCategories } from '@/api/services/routemisr.services';
import Link from 'next/link';

export default async function HomeCategories() {




  const allCategories = await getAllCategories()

  return (
    <>
    <div className='p-5 mx-auto my-8'>
      <h1 className="text-4xl font-bold w-[90%] ps-3 border-s-8 border-[#16A34A]">
        Shop By <span className="text-[#16A34A]">Category</span>
      </h1>

      <div className='flex flex-wrap mt-5'>
        {allCategories?.map((category) =>
        
        <Link href={`/CategoryCard/${category._id}`} key={category._id} className='w-1/2 lg:w-1/4 xl:w-1/6 p-3'>
        <div className='p-4 flex flex-col items-center border rounded-lg shadow hover:shadow-xl transition-all' >
          <img src={category.image} alt={category.name}  className='size-20 rounded-full object-cover' />
          <h2 className='font-bold'>{category.name}</h2>
        </div>
      </Link>)}
      </div>
    </div>
    
    </>
    
  )
}
