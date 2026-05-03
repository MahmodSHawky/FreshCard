"use client";

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaTruck, FaShieldAlt } from "react-icons/fa";
import { MdReplay } from "react-icons/md";
import { Headphones } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="bg-green-50 py-6 px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-auto">

          <Feature icon={<FaTruck />} title="Free Shipping" desc="On orders over 500 EGP" />
          <Feature icon={<MdReplay />} title="Easy Returns" desc="14-day return policy" />
          <Feature icon={<FaShieldAlt />} title="Secure Payment" desc="100% secure checkout" />
          <Feature icon={<Headphones />} title="24/7 Support" desc="Contact us anytime" />

        </div>
      </div>

      <footer className="bg-[#0F172A] text-gray-300 px-6 py-12">
        <div className="grid md:grid-cols-5 gap-10 mx-auto">

          <div className="md:col-span-2 space-y-4">
            <h2 className="text-white text-2xl font-bold flex items-center gap-2">
              🛒 FreshCart
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed">
              FreshCart is your one-stop destination for quality products.
              From fashion to electronics, we bring you the best brands
              at competitive prices with a seamless shopping experience.
            </p>

            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <FaPhoneAlt className="text-green-500" /> +1 (800) 123-4567
              </p>
              <p className="flex items-center gap-2">
                <MdEmail className="text-green-500" /> support@freshcart.com
              </p>
              <p className="flex items-center gap-2">
                <IoLocationSharp className="text-green-500" /> 123 Commerce Street, New York
              </p>
            </div>

            <div className="flex gap-3 pt-3">
              <SocialIcon icon={<FaFacebookF />} />
              <SocialIcon icon={<FaTwitter />} />
              <SocialIcon icon={<FaInstagram />} />
              <SocialIcon icon={<FaYoutube />} />
            </div>
          </div>

          <FooterCol title="Shop" links={[
            "All Products","Categories","Brands","Electronics","Men's Fashion","Women's Fashion"
          ]} />

          <FooterCol title="Account" links={[
            "My Account","Order History","Wishlist","Shopping Cart","Sign In","Create Account"
          ]} />

          <FooterCol title="Support" links={[
            "Contact Us","Help Center","Shipping Info","Returns & Refunds","Track Order"
          ]} />

          <FooterCol title="Legal" links={[
            "Privacy Policy","Terms of Service","Cookie Policy"
          ]} />

        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 max-w-7xl mx-auto">
          <p>© 2026 FreshCart. All rights reserved.</p>

          <div className="flex gap-4 mt-3 md:mt-0">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>PayPal</span>
          </div>
        </div>
      </footer>
    </>
  );
}


function Feature({ icon, title, desc }: any) {
  return (
    <div className="flex items-center gap-3">
      <div className="p-3 rounded-full bg-green-100 text-green-600 text-xl">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-gray-800">{title}</p>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>
    </div>
  );
}


function FooterCol({ title, links }: any) {
  return (
    <div>
      <h3 className="text-white font-semibold mb-4">{title}</h3>
      <ul className="space-y-2 text-sm">
        {links.map((link: string, i: number) => (
          <li key={i}>
            <Link href="#" className="hover:text-green-400 transition">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ icon }: any) {
  return (
    <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-green-600 transition cursor-pointer">
      {icon}
    </div>
  );
} 