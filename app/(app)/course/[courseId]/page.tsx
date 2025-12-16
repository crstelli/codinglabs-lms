import { CourseContent } from "@/components/CourseContent";
import { CourseInfo } from "@/components/CourseInfo";

export default function page() {
  return (
    <main className="w-full min-h-screen grid grid-cols-[5fr_2fr] grid-rows-[auto_1fr]">
      <div className="bg-muted aspect-video flex">
        <span className="m-auto">Video Player</span>
      </div>
      <CourseContent />
      <CourseInfo />
    </main>
  );
}
