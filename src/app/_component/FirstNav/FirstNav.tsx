"use client"

import React from 'react'
import { FaTruck } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { LuUserPlus } from "react-icons/lu";
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function FirstNav() {

    const { status} = useSession()
  


  return (
  <div className=' mx-auto p-2 hidden lg:flex justify-between border-b'>
    <div className='right-side flex gap-6'>
      <span className='flex gap-2 items-center text-sm text-[#6A7282]'>
        <FaTruck className='text-[#16A34A]' /> Free Shipping on Orders 500 EGP 
      </span>
      <span className='flex gap-2 items-center text-sm text-[#6A7282]'>
        <FaGift className='text-[#16A34A]' /> New Arrivals Daily 
      </span>
    </div>

    <div className='left-side flex justify-between gap-10 '>
      <div className='flex gap-3'>
        <span className='hover:text-[#16A34A] flex gap-2 items-center text-sm text-[#6A7282]'>
          <IoCall/> +1 (800) 123-4567
        </span>
        <span className='hover:text-[#16A34A] flex gap-2 items-center text-sm text-[#6A7282]'>
          < CiMail className='text-xl'  /> support@freshcart.com
        </span>
      </div>
      {status === "unauthenticated" ?(
        <div className='flex gap-3'>
        <Link href="/login">
          <span className='hover:text-[#16A34A] flex gap-2 items-center text-sm text-[#6A7282]'>
            < FiUser className='text-xl'  /> Sign In
          </span>
        </Link>
        <Link href="/register">
          <span className='hover:text-[#16A34A] flex gap-2 items-center text-sm text-[#6A7282]'>
          < LuUserPlus className='text-xl'  /> Sign Up
        </span>
        </Link>
        
        
      </div>
      
      ) : ""}
      
    </div>

  </div>
  )
}
