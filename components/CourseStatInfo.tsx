import type { ClassName } from "@/types/ClassName";
import type { LucideIcon } from "lucide-react";

interface Props extends ClassName {
  icon: LucideIcon;
  children: string;
}

function CourseStatInfo({ icon: Icon, children, className }: Props) {
  return (
    <span className={`flex items-center gap-1 ${className}`}>
      <Icon size={20} />
      <span>{children}</span>
    </span>
  );
}

export { CourseStatInfo };
