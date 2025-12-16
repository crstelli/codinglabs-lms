import { H1 } from "@/components/Typography/H1";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function CourseInfo() {
  return (
    <div className="p-6">
      <Tabs className="gap-6" defaultValue="introduction">
        <TabsList>
          <TabsTrigger value="introduction">Introduction</TabsTrigger>
          <TabsTrigger value="questions">Questions</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="introduction">
          <H1>How to builk and get an aesthetic body</H1>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export { CourseInfo };
