import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleChevronUp } from "lucide-react";

interface Props {
  votes: number;
  date: string;

  user: {
    avatar: string;
    name: string;
  };

  body: { title: string; content: string; subtitleNode?: React.ReactNode };
}

function ContentCard({ votes, date, user, body }: Props) {
  return (
    <Card className="grid grid-cols-[auto_1fr_auto] max-w-2xl">
      <CardHeader>
        <Avatar>
          <AvatarImage src={user.avatar} alt={`Avatar image of ${user.name}`} />
          <AvatarFallback>{user.name}</AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent className="flex flex-col px-2">
        <CardTitle>{body.title}</CardTitle>
        {body.subtitleNode}
        <CardDescription className="mt-2">{body.content}</CardDescription>

        <div className="mt-4 text-sm flex items-center gap-4">
          <span className="text-primary">{user.name}</span>
          <span>{date}</span>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-end justify-between">
        <Button size={"icon-sm"}>
          <CircleChevronUp />
        </Button>
        <span>{votes} votes</span>
      </CardFooter>
    </Card>
  );
}

export { ContentCard };
