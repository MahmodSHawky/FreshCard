import { getAllSubCategories, getSingleCategory } from '@/api/services/routemisr.services'
import Link from 'next/link';
import { FaFolderOpen } from "react-icons/fa6";



export default async function categoryCard(props :{params : Promise<{id : string}>}) {

  const params = await props.params
  const id = params.id

  const myCategory = await getSingleCategory(id)
    console.log("dataaaaaaa",myCategory);

  const allSubCategories = await getAllSubCategories()
  return<> 
    <div className='bg-gradient-to-l from-[#4ADE80] via-[#22C55E] to-[#16A34A] my-4 pt-20 pb-10 flex gap-5'>
      <div className='flex justify-center items-center p-4'>
        <div className=' flex justify-center items-center bg-[#cbfad358] rounded-lg size-20'>
          <img className='w-[45]' src={myCategory?.image} alt={myCategory?.slug} />
        </div>
      </div>
      
      <div className='flex-col justify-center items-center'>
        <h2 className='mt-5 text-[30px] text-white font-bold '>{myCategory?.slug}</h2>
        <span className='m-0 text-[#FFFFFFCC] '>Choose a subcategory to browse products</span>
      </div>
    </div>
    

    <div className='m-5'>
      <Link href="/categories"  className='hover:text-[#16A34A]'>Back to Categories</Link>
    </div>

    <h1 className='font-bold m-5'>40 Subcategories in {myCategory?.name}</h1>


  <div className='flex flex-wrap mt-5'>
    {allSubCategories?.map((category) =>
    
    <Link href={`/SubCategory/${category._id}`} key={category._id} className='w-full md:w-1/2 lg:w-1/4  p-4'>
      <div className='relative group p-6 border rounded-xl shadow hover:shadow-xl transition-all' >
        <div className='w-full'>
          <div className='size-15 flex items-center justify-center rounded-2xl bg-[#cbfad358] group-hover:bg-[#8df99f58]'>
            <FaFolderOpen className='text-[#16A34A] text-3xl'/>
          </div>
        </div>

        <h2 className='group-hover:text-[#22C55E] font-semibold mx-0 my-5 transition duration-300'>{category.name}</h2>
        
        <div className="absolute bottom-5 flex items-center justify-center">
          <p className="text-white text-sm transform translate-y-1 group-hover:translate-y-0 group-hover:text-[#22C55E] transition duration-300">
            Browes Products
          </p>
        </div>


      </div>
    </Link>)}
  </div> 


    {/* <ProductTabs product ={myCategory} /> */}



  
  </>
}
