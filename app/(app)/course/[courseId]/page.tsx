import { CourseContent } from "@/components/CourseContent";

export default function page() {
  return (
    <main className="w-full h-screen grid grid-cols-[4fr_3fr]">
      <div className="bg-muted aspect-video flex">
        <span className="m-auto">Video Player</span>
      </div>
      <CourseContent />
      <div className="text-center">Course Info</div>
    </main>
  );
}
