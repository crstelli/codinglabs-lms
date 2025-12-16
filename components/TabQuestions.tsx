import { H1 } from "@/components/Typography/H1";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { CircleChevronUp, CirclePlus } from "lucide-react";

function TabQuestions() {
  return (
    <TabsContent value="questions">
      <H1>Questions about this course</H1>
      <div>
        <Card className="grid grid-cols-[auto_1fr_auto] max-w-2xl">
          <CardHeader>
            <Avatar>
              <AvatarImage src="/avatar-placeholder.png" alt="@evilrabbit" />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </CardHeader>
          <CardContent className="flex flex-col px-2">
            <CardTitle>How to use MyFitnessPal?</CardTitle>
            <CardDescription className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ipsam assumenda hic similique minima
              quidem.
            </CardDescription>

            <div className="mt-4 text-sm flex items-center gap-4">
              <span className="text-primary">User 21</span>
              <span>1 year ago</span>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-end justify-between">
            <Button size={"icon-sm"}>
              <CircleChevronUp />
            </Button>
            <span>351 votes</span>
          </CardFooter>
        </Card>
      </div>
    </TabsContent>
  );
}

export { TabQuestions };
