import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { StatisticCard } from "@/components/StatisticCard";

import { STATISTICS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Collapsible } from "@radix-ui/react-collapsible";
import { CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

function StatisticsList() {
  return (
    <Collapsible>
      <Card className="w-130">
        <CardHeader>
          <CardAction>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="icon">
                <ChevronDown />
              </Button>
            </CollapsibleTrigger>
          </CardAction>
          <CardTitle className="text-end text-xl">Your current statistics</CardTitle>
        </CardHeader>
        <CollapsibleContent>
          <CardContent className="flex items-center justify-between gap-12 mt-4">
            {STATISTICS.map((stat) => (
              <StatisticCard icon={stat.icon} label={stat.label} value={stat.value} key={stat.label} />
            ))}
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
}

export { StatisticsList };
