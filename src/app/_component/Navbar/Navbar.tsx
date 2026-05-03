"use client"

import  React,{useContext} from "react"
import Link from "next/link"
import { FaRegHeart } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { TiShoppingCart } from "react-icons/ti";
import { PiListLight } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import imgg from "../../../assets/images/logo.svg"


import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import { CartContext } from "@/context/cartContext";

const components: { title: string; href: string; }[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Shop",
    href: "/home",
  },
  {
    title: "All Categories",
    href: "/categories",
  },
  {
    title: "Brands",
    href: "/brands",
  },
  {
    title: "Beauty & health",
    href: "/categories",
  },
]

export default function Navbar() {

  const {data : mySessionData, status} = useSession()
  const {numOfCartItems, setnumOfCartItems, numOfWishlistItems, setnumOfWishlistItems} = useContext(CartContext)

  
  
  function mySignOut(){
    //clear token from cookies
    signOut({redirect : true, callbackUrl: "/login"})
  }

  return (
    <NavigationMenu className='max-w-full p-2 md:px-20 sticky top-0 bg-white z-50 shadow'>
      <NavigationMenuList className="flex justify-between">
        <Image
        src={imgg.src}
        alt="logo"
        width={200}
        height={40}
      />
        {/* <h6 className="font-open-sans text-3xl font-bold"><TiShoppingCart className="text-5xl text-[#16A34A] inline m-0"/> FreshCard</h6> */}

        <div className="flex gap-4">
          <NavigationMenuList className='hidden lg:flex max-w-fit gap-6'>
            <NavigationMenuItem className="hidden xl:flex mx-6">
                <div className="flex items-center border-2 focus-within:border-green-500 rounded-full overflow-hidden bg-white">

                  <input
                    type="text"
                    placeholder="Search for products, brands and more..."
                    className="flex-1 px-4 py-2 outline-none text-sm text-gray-600"
                  />

                  <button className="bg-green-600 text-white px-2 py-2 rounded-full flex items-center justify-center hover:bg-green-700 transition">
                    <FaSearch />
                  </button>

                </div>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link className="hover:text-[#16A34A] transition-all" href="/">Home</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link className="hover:text-[#16A34A] transition-all" href="/shop">Shop</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link className="hover:text-[#16A34A] transition-all" href="/categories">Categories</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link className="hover:text-[#16A34A] transition-all" href="/brands">Brands</Link>
            </NavigationMenuItem>
          </NavigationMenuList> 

          <NavigationMenuList className='flex max-w-fit gap-6'>
            <NavigationMenuItem>
              <Link  className=" text-gray-400 text-xl hover:text-[#16A34A] transition-all" href="/wishlist">
                <FaRegHeart />
                {numOfWishlistItems !== 0 &&(<div className="bg-[#c73f3f] size-5 rounded-full absolute top-[-14px] end-[-12px] flex justify-center items-center text-white text-sm">{numOfWishlistItems}</div>) }
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link  className="relative text-gray-400 text-2xl hover:text-[#16A34A] transition-all" href="/cart">
                <IoCart />
                {numOfCartItems !== 0 &&(<div className="bg-[#16A34A] size-6 rounded-full absolute top-[-14px] end-[-12px] flex justify-center items-center text-white text-sm">{numOfCartItems}</div>) }
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>

          <NavigationMenuList className="hidden lg:flex">
            {status === "unauthenticated" ?(
              <NavigationMenuItem>
              <Link href="/login"><Button  className="py-5 px-5 rounded-full bg-[#16A34A]"> <FiUser /> Signin</Button> </Link>
              </NavigationMenuItem>) :(
              <span ><Button onClick={mySignOut} className="py-5 px-5 rounded-full bg-[#16A34A]"> <FiUser /> log out</Button> </span>
              )}
          </NavigationMenuList>
        </div>      
        
        <NavigationMenuItem className="flex md:hidden">
          <NavigationMenuTrigger><PiListLight className="text-[#16A34A] text-4xl"/></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-100 gap-2 md:w-125 md:grid-cols-2">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink >
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
