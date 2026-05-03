"use client";

import { FaEnvelope, FaLeaf } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { IoPricetag } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaMobileRetro } from "react-icons/fa6";


export default function NewsletterSection() {
  return (
    <div className="bg-[#eef6f2] p-6 md:p-10 rounded-3xl">
      <div className="grid md:grid-cols-2 gap-8 items-center">

        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-green-500 text-white p-4 rounded-xl shadow">
                <FaEnvelope size={20} />
            </div>

            <div>
              <p className="text-green-600 font-semibold">NEWSLETTER</p>
              <p className="text-gray-500 text-sm">50,000+ subscribers</p>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get the Freshest Updates{" "}
            <span className="text-green-600">Delivered Free</span>
          </h2>

          <p className="text-gray-500 mb-6">
            Weekly recipes, seasonal offers & exclusive member perks.
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow text-sm">
              <FaLeaf className="text-green-600" /> 
              Fresh Picks Weekly
            </span>

            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow text-sm">
              <MdLocalShipping className="text-green-600" />
              Free Delivery Codes
            </span>

            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow text-sm">
              <IoPricetag className="text-green-600" />
              Members-Only Deals
            </span>
          </div>

          <div className="flex gap-3">
            <input
              type="email"
              placeholder="you@example.com"
              className="flex-1 px-5 py-3 rounded-xl border outline-none"
            />

            <button className="bg-green-600 text-white px-6 py-3 rounded-xl hover:scale-105 transition">
              Subscribe →
            </button>
          </div>

          <p className="text-xs text-gray-400 mt-3">
            ✨ Unsubscribe anytime. No spam, ever.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white rounded-3xl p-8 shadow-xl">
          <p className="bg-green-500/20 text-green-400 inline-block px-3 py-1 rounded-full text-sm mb-4">
            <FaMobileRetro className="inline-block"/> MOBILE APP
          </p>

          <h3 className="text-2xl font-bold mb-3">
            Shop Faster on Our App
          </h3>

          <p className="text-gray-300 mb-6">
            Get app-exclusive deals & 15% off your first order.
          </p>

          <div className="flex flex-col gap-4">
            <button className="bg-white/10 p-4 rounded-xl text-left hover:bg-white/20 transition">
              Download on  <br /><FaApple className="inline-block"/> <b>App Store</b>
            </button>

            <button className="bg-white/10 p-4 rounded-xl text-left hover:bg-white/20 transition">
              Get it on <br /><FaGooglePlay className="inline-block"/> <b>Google Play</b>
            </button>
          </div>

          <p className="mt-6 text-sm text-yellow-400">
            ⭐⭐⭐⭐⭐ 4.9 · 100K+ downloads
          </p>
        </div>

      </div>
    </div>
  );
}