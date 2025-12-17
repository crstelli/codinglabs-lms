import { Star } from "lucide-react";

interface Props {
  rating: number;
}

function StarRating({ rating }: Props) {
  return (
    <span className="text-yellow-500">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} />
      ))}
    </span>
  );
}

export { StarRating };
