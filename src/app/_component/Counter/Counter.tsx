"use client";
import { NumberFieldDecrement } from "@base-ui/react";
import { useEffect, useState } from "react";


export default function Counter({ price } : {price : number} ) {
  const [count, setCount] = useState(1);


  const total = count * price;

  return (
    <div className="space-y-4">
      <div className="flex items-center border border-gray-300 rounded-md w-fit overflow-hidden">
        <button
          onClick={() => count > 1 && setCount(count - 1)}
          className="px-3 py-1 text-lg hover:bg-gray-100 hover:text-green-600 cursor-pointer">−</button>

        <span className="px-4 py-1 border-x border-gray-300">
          {count}
        </span>

        <button
          onClick={() => setCount(count + 1)}
          className="px-3 py-1 text-lg hover:bg-gray-100 hover:text-green-600 cursor-pointer">+</button>
      </div>

      <div className="flex justify-between items-center bg-gray-100 rounded-md px-4 py-3">        
        <span className="text-gray-600 text-sm">
          Total Price:
        </span>

        <span className="text-green-600 font-semibold text-lg">
          {total} EGP
        </span>
      </div>
    </div>
  );
}