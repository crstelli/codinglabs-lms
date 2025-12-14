import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
}

function ColorIcon({ icon: Icon }: Props) {
  return (
    <span className="text-primary bg-primary/10 p-1.5 rounded-full">
      <Icon size={20} />
    </span>
  );
}

export { ColorIcon };
