import type { ClassName } from "@/types/ClassName";
import { Star } from "lucide-react";

interface Props extends ClassName {
  rating: number;
}

function StarRating({ rating, className }: Props) {
  return (
    <span className={`text-yellow-500 flex items-center gap-1 fill-yellow-500 ${className}`}>
      {[...Array(rating)].map((_, i) => (
        <Star fill="inherit" size={18} key={i} />
      ))}
      <span></span>
    </span>
  );
}

export { StarRating };
