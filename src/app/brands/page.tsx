import { getAllBrands, getAllCategories } from '@/api/services/routemisr.services'
import Link from 'next/link';
import React from 'react'
import { TbBrandBing } from "react-icons/tb";


export default async function Brands() {

  const allBrands = await getAllBrands()
 
  return (
    <div>
      <div className='bg-gradient-to-l from-[#a971f3] via-[#7c39d4] to-[#7125d4] bg-gradient-to-lmb-4 pt-20 pb-10 flex gap-5'>
        <div className='flex justify-center items-center p-4'>
            <div className=' flex justify-center items-center bg-[#cbfad358] rounded-lg size-20'>
              <TbBrandBing className='text-white text-4xl'/>
            </div>
        </div>
        
        <div className='flex-col justify-center items-center '>
          <h2 className='mt-5 text-[30px] text-white font-bold'>Top Brands</h2>
          <span className='m-0 text-[#FFFFFFCC] '>Shop from your favorite brands
</span>
        </div>
      </div>


      <div className='flex flex-wrap mt-5'>
        {allBrands?.map((brand) =>
        
        <Link href={`/SpecificBrand/${brand._id}`} key={brand._id} className='w-full md:w-1/2 lg:w-1/4 xl:w-1/6 p-4'>
        <div className='relative group p-6 flex flex-col items-center border rounded-xl shadow hover:shadow-xl transition-all' >
          <div className=' relative group  rounded-xl overflow-hidden'>
            <img src={brand.image} alt={brand.name}  className='w-50 h-50 object-contain transition duration-500 group-hover:scale-115' />
          </div>
          <h2 className='group-hover:text-[#7125d4] font-bold my-5 transition duration-300'>{brand.name}</h2>
          <div className="absolute bottom-5 flex items-center justify-center">

            <p className="text-white text-sm transform translate-y-3 group-hover:translate-y-0 group-hover:text-[#7125d4] transition duration-300">
              View Products
            </p>

          </div>

        </div>
      </Link>)}
      </div> 


    </div>
  )
}
