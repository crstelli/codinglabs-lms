import { CourseSection } from "@/components/CourseSection";
import { Accordion } from "@/components/ui/accordion";

export default function page() {
  return (
    <main className="w-full h-screen grid grid-cols-[4fr_3fr]">
      <div className="bg-muted aspect-video flex">
        <span className="m-auto">Video Player</span>
      </div>
      <div className="row-span-2 h-screen divide overflow-y-auto overflow-x-hidden">
        <h3 className="p-6 border">Course Content</h3>
        <Accordion type="multiple">
          <CourseSection section="1" />
          <CourseSection section="2" />
          <CourseSection section="3" />
          <CourseSection section="4" />
          <CourseSection section="5" />
          <CourseSection section="6" />
        </Accordion>
      </div>
      <div className="text-center">Course Info</div>
    </main>
  );
}
