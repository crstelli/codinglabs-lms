import { ColorIcon } from "@/components/ColorIcon";
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
          <AccordionItem value="lesson-1" className="bg-popover px-4">
            <AccordionTrigger>
              <div className="flex flex-col items-start gap-2">
                <span>Section 1: How to bulk</span>
                <span className="flex items-center gap-2">
                  <ColorIcon icon={Clock} />
                  10 mins
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent>Contenuto</AccordionContent>
          </AccordionItem>
          <AccordionItem value="lesson-2">
            <AccordionTrigger>
              <div>Section 1: How to bulk</div>
            </AccordionTrigger>
            <AccordionContent>Contenuto</AccordionContent>
          </AccordionItem>
          <AccordionItem value="lesson-3">
            <AccordionTrigger>
              <div>Section 1: How to bulk</div>
            </AccordionTrigger>
            <AccordionContent>Contenuto</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="text-center">Course Info</div>
    </main>
  );
}
