import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

function CourseCard() {
  return (
    <Card className="pt-0 border overflow-hidden">
      <div className="aspect-video w-full relative">
        <Image src="/placeholder.png" alt="Placeholder" fill className="object-center object-cover" />
      </div>
      <CardHeader>
        <CardTitle>Typescript Course</CardTitle>
        <CardDescription>
          Master typescript in this fantastic course made with 2189 instructors and lesgo
        </CardDescription>
      </CardHeader>
      <Separator className="m-0" />
      <CardContent className="grid grid-cols-2 items-center gap-4">
        <div className="flex items-center gap-4">
          <span className="text-sm">60%</span>
          <Progress value={60} />
        </div>
        <Button asChild>
          <Link href="/course/placeholder">Continue Learning</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export { CourseCard };
