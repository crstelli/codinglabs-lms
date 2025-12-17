import { TabsContent } from "@/components/ui/tabs";
import { H1 } from "@/components/Typography/H1";
import { ReviewCard } from "@/components/ReviewCard";

function TabReviews() {
  return (
    <TabsContent value="reviews">
      <H1>Reviews of this course</H1>
      <div className="grid grid-cols-2 gap-4">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </TabsContent>
  );
}

export { TabReviews };
