import { CourseCard } from "@/components/CourseCard";

function CoursesList() {
  return (
    <div className="flex justify-between mt-2 flex-wrap gap-y-10">
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
    </div>
  );
}

export { CoursesList };
