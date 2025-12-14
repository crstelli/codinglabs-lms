import { Card, CardContent } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  value: number;
  label: string;
}

function StatisticCard({ icon: Icon, value, label }: Props) {
  return (
    <Card className="flex-row gap-4 p-4 border-primary/20">
      <span className="bg-primary/20 size-12 text-primary rounded-full aspect-square flex items-center justify-center">
        <Icon />
      </span>
      <div>
        <span className="text-xl">{value}</span>
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    </Card>
  );
}

export { StatisticCard };
