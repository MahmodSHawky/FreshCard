"use client";

import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

type Props = {
  rating: number;
};

export default function RatingStars({ rating }: Props) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-1 text-yellow-400">
      {[...Array(5)].map((_, i) => {
        if (i < fullStars) return <FaStar key={i} />;
        if (i === fullStars && hasHalf) return <FaStarHalfAlt key={i} />;
        return <FaRegStar key={i} />;
      })}
    </div>
  );
}