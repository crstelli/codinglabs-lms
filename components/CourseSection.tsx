import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import { ColorIcon } from "@/components/ColorIcon";
import { Clock } from "lucide-react";

interface Props {
  section: string;
}

function CourseSection({ section }: Props) {
  return (
    <AccordionItem value={section} className="bg-popover px-4">
      <AccordionTrigger>
        <div className="flex flex-col items-start gap-2">
          <span>Section {section}: How to bulk</span>
          <span className="flex items-center gap-2">
            <ColorIcon icon={Clock} />
            10 mins
          </span>
        </div>
      </AccordionTrigger>
      <AccordionContent>Contenuto</AccordionContent>
    </AccordionItem>
  );
}

export { CourseSection };
