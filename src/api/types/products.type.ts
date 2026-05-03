export interface productType{
  sold : number,
  images: string[],
  subcategory : [[object]],
  ratingsQuantity : number,
  _id : string,
  title : string,
  slug : string,
  description: string,
  quantity : number,
  price: number,
  imageCover : string,
  category : categoryType,
  brand : brandType,
  ratingsAverage: number,
  createdAt : string,
  updatedAt: string,
  id: string,
  availableColor? : string[],
  priceAfterDiscount? : number
}


export interface categoryType {
  _id: string,
  name: string,
  slug: string,
  image : string,
  updatedAt: string ,
  createdAt:string
}

export interface brandType {
  _id: string,
  name: string,
  slug: string,
  image : string
}

export interface cartData {
  cartOwner: string,
  createdAt:string,
  products: cartProduct[],
  totalCartPrice : number,
  updatedAt: string,
  __v: number,
  _id_id: string
}

export interface cartProduct {
  count: number,
  price:  number, 
  product: productType, 
  _id: string
}

