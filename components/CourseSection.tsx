import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

interface Props {
  section: string;
}

function CourseSection({ section }: Props) {
  return (
    <AccordionItem value={section} className="bg-popover px-4">
      <AccordionTrigger>
        <div className="flex flex-col items-start gap-2">
          <span>Section {section}: How to bulk</span>
          <span className="flex items-center gap-2 text-muted-foreground">4/11 | 10 mins</span>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div className="grid grid-cols-[auto_1fr] gap-x-4">
          <Checkbox className="row-span-2 size-5 my-auto" />
          <span>Lesson 1: Calories</span>
          <span className="text-muted-foreground">4 min</span>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

export { CourseSection };
