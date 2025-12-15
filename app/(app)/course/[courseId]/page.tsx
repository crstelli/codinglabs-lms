import { ColorIcon } from "@/components/ColorIcon";
import { CourseSection } from "@/components/CourseSection";
import { H2 } from "@/components/Typography/H2";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Clock } from "lucide-react";

export default function page() {
  return (
    <main className="w-full h-screen grid grid-cols-[4fr_3fr]">
      <div className="bg-muted aspect-video flex">
        <span className="m-auto">Video Player</span>
      </div>
      <div className="row-span-2 h-screen divide overflow-y-auto overflow-x-hidden py-2">
        <H2>Course Content</H2>
        <Accordion type="multiple">
          <CourseSection section="1" />
          <CourseSection section="2" />
          <CourseSection section="3" />
        </Accordion>
      </div>
      <div className="text-center">Course Info</div>
    </main>
  );
}
