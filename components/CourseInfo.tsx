import { H1 } from "@/components/Typography/H1";
import { P } from "@/components/Typography/P";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Star, User } from "lucide-react";

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
          <H1>How to bulk and get an aesthetic body</H1>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 text-yellow-500">
              <Star size={20} />
              <span>4.6</span>
            </span>

            <span className="flex items-center gap-1">
              <User size={20} />
              <span>14.231</span>
            </span>

            <span className="flex items-center gap-1">
              <Clock size={20} />
              <span>10.5h</span>
            </span>
            <P>by Giuseppe Crescitelli</P>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export { CourseInfo };
