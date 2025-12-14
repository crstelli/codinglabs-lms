import { CourseCard } from "@/components/CourseCard";

function CoursesList() {
  return (
    <div className="flex justify-center mt-2 flex-wrap gap-10">
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
