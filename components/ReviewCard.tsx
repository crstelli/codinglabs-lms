import { ContentCard } from "@/components/ContentCard";
import { StarRating } from "@/components/StarRating";

function ReviewCard() {
  return (
    <ContentCard
      votes={208}
      date="7 months ago"
      user={{ avatar: "/avatar-placeholder.png", name: "Spocchimax" }}
      body={{
        content: "Never seen a course like this, incredible.",
        title: "Best course on the platform",
        subtitleNode: <StarRating rating={5} className="mt-2" />,
      }}
    />
  );
}

export { ReviewCard };
