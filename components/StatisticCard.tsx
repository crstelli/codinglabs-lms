import { Card } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  value: number;
  label: string;
}

function StatisticCard({ icon: Icon, value, label }: Props) {
  return (
    <Card className="grid grid-cols-[auto_1fr] gap-y-0 p-4 w-1/2">
      <span className="bg-primary/20 row-span-2 size-8 text-primary rounded-full aspect-square flex items-center justify-center">
        <Icon size={20} />
      </span>

      <span className="text-xl">{value}</span>
      <p className="text-sm text-muted-foreground">{label}</p>
    </Card>
  );
}

export { StatisticCard };
