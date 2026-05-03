"use client";

import { motion } from "framer-motion";

export default function PromoSection() {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-10 bg-gray-100 overflow-hidden">

      {/* LEFT CARD */}
      <motion.div
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative overflow-hidden rounded-2xl p-8 text-white bg-gradient-to-br from-green-500 to-green-700"
      >
        {/* background circles */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full" />

        <p className="bg-white/20 inline-block px-3 py-1 rounded-full text-sm mb-4">
          🔥 Deal of the Day
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Fresh Organic Fruits
        </h2>

        <p className="text-white/90 mb-5">
          Get up to 40% off on selected organic fruits
        </p>

        <h3 className="text-3xl font-bold mb-6">
          40% OFF{" "}
          <span className="text-sm font-normal ml-2">
            Use code: <b>ORGANIC40</b>
          </span>
        </h3>

        <button className="bg-white text-green-600 px-6 py-3 rounded-full font-medium hover:scale-105 transition">
          Shop Now →
        </button>
      </motion.div>

      {/* RIGHT CARD */}
      <motion.div
        initial={{ x: 150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative overflow-hidden rounded-2xl p-8 text-white bg-gradient-to-br from-orange-400 to-red-500"
      >
        {/* background circles */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full" />

        <p className="bg-white/20 inline-block px-3 py-1 rounded-full text-sm mb-4">
          ✨ New Arrivals
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Exotic Vegetables
        </h2>

        <p className="text-white/90 mb-5">
          Discover our latest collection of premium vegetables
        </p>

        <h3 className="text-3xl font-bold mb-6">
          25% OFF{" "}
          <span className="text-sm font-normal ml-2">
            Use code: <b>FRESH25</b>
          </span>
        </h3>

        <button className="bg-white text-orange-500 px-6 py-3 rounded-full font-medium hover:scale-105 transition">
          Explore Now →
        </button>
      </motion.div>

    </div>
  );
}