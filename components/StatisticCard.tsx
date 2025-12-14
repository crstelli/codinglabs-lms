import { ColorIcon } from "@/components/ColorIcon";
import { Card } from "@/components/ui/card";

import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  value: number;
  label: string;
}

function StatisticCard({ icon: Icon, value, label }: Props) {
  return (
    <Card className="items-center p-4 gap-2 text-center w-30">
      <ColorIcon icon={Icon} />

      <div>
        <span className="text-xl">{value}</span>
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    </Card>
  );
}

export { StatisticCard };
