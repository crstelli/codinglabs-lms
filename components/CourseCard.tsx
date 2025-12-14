import { H3 } from "@/components/H3";
import { P } from "@/components/P";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

function CourseCard() {
  return (
    <div className="flex flex-col border w-sm rounded-md overflow-hidden">
      <div className="aspect-video w-full bg-primary"></div>
      <div className="p-3">
        <H3>Typescript Course</H3>
        <P>Master typescript in this fantastic course made with 2189 instructors and lesgo</P>
        <div className="grid grid-cols-2 items-center gap-4 mt-4">
          <div className="flex items-center gap-4">
            <span className="text-sm">60%</span>
            <Progress value={60} />
          </div>
          <Button>Continue Learning</Button>
        </div>
      </div>
    </div>
  );
}

export { CourseCard };
