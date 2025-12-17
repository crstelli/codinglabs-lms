import { StarRating } from "@/components/StarRating";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleChevronUp } from "lucide-react";

function ReviewCard() {
  return (
    <Card className="grid grid-cols-[auto_1fr_auto] max-w-2xl">
      <CardHeader>
        <Avatar>
          <AvatarImage src="/avatar-placeholder.png" alt="@evilrabbit" />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent className="flex flex-col px-2">
        <CardTitle>Best course on the platform</CardTitle>
        <StarRating className="py-2" rating={5} />
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ipsam assumenda hic similique minima quidem.
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
  );
}

export { ReviewCard };
