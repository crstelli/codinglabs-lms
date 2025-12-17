import { TabIntroduction } from "@/components/TabIntroduction";
import { TabQuestions } from "@/components/TabQuestions";
import { TabReviews } from "@/components/TabReviews";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

function CourseInfo() {
  return (
    <div className="pt-10 pb-20 px-6">
      <Tabs className="gap-6" defaultValue="introduction">
        <TabsList>
          <TabsTrigger value="introduction">Introduction</TabsTrigger>
          <TabsTrigger value="questions">Questions</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabIntroduction />
        <TabQuestions />
        <TabReviews />
      </Tabs>
    </div>
  );
}

export { CourseInfo };
