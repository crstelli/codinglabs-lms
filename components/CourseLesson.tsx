import { Checkbox } from "@/components/ui/checkbox";

function CourseLesson() {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-x-4 cursor-pointer py-3 hover:bg-background">
      <Checkbox className="row-span-2 size-5 my-auto" />
      <span>Lesson 1: Calories</span>
      <span className="text-muted-foreground">4 min</span>
    </div>
  );
}

export { CourseLesson };
