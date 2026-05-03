import { getProductsByBrand, getSingleBrand } from '@/api/services/routemisr.services'
import Link from 'next/link';
import ProductCard from './../../_component/ProductCard/ProductCard';
import { FaBoxOpen } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa";



export default async function SpecificBrand(props :{params : Promise<{id : string}>}) {

  const params = await props.params
  const id = params.id

  const myBrand = await getSingleBrand(id)
    // console.log("dataaaaaaa",myBrand);

    const products = await getProductsByBrand(id)
        // console.log("prooodataaaaaaa",products);


  return<> 
    <div className='bg-gradient-to-l from-[#4ADE80] via-[#22C55E] to-[#16A34A] my-4 pt-20 pb-10 flex gap-5'>
        <div className='flex justify-center items-center p-4'>
        <div className=' flex justify-center items-center bg-[#cbfad358] rounded-lg size-20'>
            <img className='w-[45]' src={myBrand?.image} alt={myBrand?.slug} />
        </div>
        </div>

        <div className='flex-col justify-center items-center'>
        <h2 className='mt-5 text-[30px] text-white font-bold '>{myBrand?.slug}</h2>
        <span className='m-0 text-[#FFFFFFCC] '>Shop Dell products</span>
        </div>
    </div>
    

    <div className='m-5'>
        <Link href="/brands"  className='hover:text-[#16A34A]'>Back to brands</Link>
    </div>

    <div className='ms-5 inline-block text-sm text-[#364153]'><FaFilter/> </div> <span className='text-sm text-[#364153]'>Active Filters:</span>   <span className='px-5 py-2 text-sm text-[#7008E7] rounded-2xl bg-[#DDD6FF] me-3'>{myBrand?.name}</span>
    <p className='text-sm text-[#364153] m-5'>Showing {products?.length} products</p>


    <div className="   mx-auto my-8 flex flex-wrap">
    {products?.map((product) => (
        <Link
        key={product._id}
        className="p-2 w-full lg:w-1/4 xlw-:1/5"
        href={`/productdetails/${product.id}`}
        >
        <ProductCard product={product} />
        </Link>
    ))}
    </div>



    {products?.length === 0 &&<div className="flex flex-col items-center justify-center h-[60vh] text-center">
      
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 mb-4">
        <FaBoxOpen
          className="w-8 h-8 text-gray-400"
        />
          
      </div>

      <h2 className="text-xl font-semibold text-gray-800">
        No Products Found
      </h2>

      <p className="text-gray-500 mt-2">
        No products match your current filters.
      </p>

      <Link href={`/`}>
        <button className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition cursor-pointer">
          View All Products
        </button>
      </Link>
    </div>}
    


  
  </>
}
