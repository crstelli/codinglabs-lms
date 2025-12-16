import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  children: string;
}

function CourseStatInfo({ icon: Icon, children }: Props) {
  return (
    <span className="flex items-center gap-1 text-yellow-500">
      <Icon size={20} />
      <span>{children}</span>
    </span>
  );
}

export { CourseStatInfo };
