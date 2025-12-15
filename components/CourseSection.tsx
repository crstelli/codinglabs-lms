import { CourseLesson } from "@/components/CourseLesson";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface Props {
  section: string;
}

function CourseSection({ section }: Props) {
  return (
    <AccordionItem value={section} className="bg-popover">
      <AccordionTrigger className="px-4">
        <div className="flex flex-col items-start gap-2">
          <span>Section {section}: How to bulk</span>
          <span className="flex items-center gap-2 text-muted-foreground">4/11 | 10 mins</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="flex flex-col divide-y py-0">
        <CourseLesson />
        <CourseLesson />
        <CourseLesson />
      </AccordionContent>
    </AccordionItem>
  );
}

export { CourseSection };
