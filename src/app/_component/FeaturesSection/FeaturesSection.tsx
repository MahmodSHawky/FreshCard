"use client";

import { FaTruck, FaShieldAlt } from "react-icons/fa";
import { MdReplay } from "react-icons/md";
import { Headphones } from "lucide-react";

export default function FeaturesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 px-5">

      <FeatureItem
        icon={<FaTruck />}
        title="Free Shipping"
        desc="On orders over 500 EGP"
        bg="bg-blue-100"
        color="text-blue-600"
      />

      <FeatureItem
        icon={<FaShieldAlt />}
        title="Secure Payment"
        desc="100% secure transactions"
        bg="bg-green-100"
        color="text-green-600"
      />

      <FeatureItem
        icon={<MdReplay />}
        title="Easy Returns"
        desc="14-day return policy"
        bg="bg-orange-100"
        color="text-orange-500"
      />

      <FeatureItem
        icon={<Headphones />}
        title="24/7 Support"
        desc="Dedicated support team"
        bg="bg-purple-100"
        color="text-purple-500"
      />

    </div>
  );
}

function FeatureItem({
  icon,
  title,
  desc,
  bg,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  bg: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-4 p-5 rounded-2xl border bg-white shadow-sm hover:shadow-md transition">

      <div className={`p-3 rounded-full ${bg}`}>
        <div className={`text-xl ${color}`}>
          {icon}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>

    </div>
  );
}