import { brandType, categoryType, productType } from "../types/products.type"

export async function getAllProducts() : Promise<productType[] | undefined> {
  try{
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products`,{
      cache: "force-cache",
    })
    const data = await res.json()
    return data.data
    
    if(res.ok){

    }
  }

  catch(err){
    return undefined
  }
}


export async function getSingleProduct(id : string) : Promise <productType | undefined>{
    try{
      const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      const data = await res.json()

      return data.data 
    }

    catch(err){
      return undefined
    }
  }



  export async function getAllCategories() : Promise<categoryType[] | undefined>  {
  try{
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/categories`)
    const data = await res.json()

    // console.log("dataaa" , data.data);
    return data. data

  }
  catch(err){
    return undefined
  }
}

export async function getSingleCategory(_id : string) : Promise <categoryType | undefined>{
    try{
      const res = await fetch(`https://ecommerce.routemisr.com/api/v1/categories/${_id}`)
      const data = await res.json()
      console.log(data.data );
      return data.data 

      
    }

    catch(err){
      return undefined
    }
  }
  
export async function getAllSubCategories() : Promise<categoryType[] | undefined>  {
  try{
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/subcategories`)
    const data = await res.json()

    // console.log("dataaa" , data.data);
    return data. data

  }
  catch(err){
    return undefined
  }
}



export async function getSpecificSubCategory(_id : string) : Promise<categoryType | undefined>  {
  try{
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/subcategories/${_id}`)
    const data = await res.json()

    // console.log("dataaa" , data.data);
    return data. data

  }
  catch(err){
    return undefined
  }
}




export async function getAllBrands() : Promise<brandType[] | undefined>  {
  try{
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/brands`)
    const data = await res.json()

    // console.log("dataaa" , data.data);
    return data. data

  }
  catch(err){
    return undefined
  }
}


export async function getSingleBrand(_id : string) : Promise <brandType | undefined>{
    try{
      const res = await fetch(`https://ecommerce.routemisr.com/api/v1/brands/${_id}`)
      const data = await res.json()
      // console.log(data.data );
      return data.data

      
    }

    catch(err){
      return undefined
    }
  }

  export async function getProductsByBrand(brandId: string) : Promise<productType[] | undefined>  {
  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/products?brand=${brandId}`
    );

    const data = await res.json();

    return data.data;
  } catch {
    return [];
  }
}


  export async function getProductsBySubCategory(categoryId: string) : Promise<productType[] | undefined>  {
  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/products?subcategory=${categoryId}`
    );

    const data = await res.json();

    return data.data;
  } catch {
    return [];
  }
}