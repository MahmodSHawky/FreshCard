import Link from 'next/link'
import React from 'react'
import { FaBoxOpen } from 'react-icons/fa'

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center">
              
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 mb-4">
        <FaBoxOpen className="w-8 h-8 text-gray-400"/>
      </div>

      <h2 className="text-xl font-semibold text-gray-800">
        No orders yet
      </h2>

      <p className="text-gray-500 mt-2">
        When you place orders, they'll appear here
        so you can track them.
      </p>

      <Link href={`/`}>
        <button className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition cursor-pointer">
          Start shopping
        </button>
      </Link>
        </div>
  )
}
