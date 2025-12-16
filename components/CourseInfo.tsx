import { H1 } from "@/components/Typography/H1";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

function CourseInfo() {
  // return <H1>How to builk and get an aesthetic body</H1>;

  return (
    <Tabs>
      <TabsList>
        <TabsTrigger value="introduction">Introduction</TabsTrigger>
        <TabsTrigger value="questions">Questions</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

export { CourseInfo };
