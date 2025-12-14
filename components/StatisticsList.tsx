import { StatisticCard } from "@/components/StatisticCard";
import { H2 } from "@/components/Typography/H2";

function StatisticsList() {
  return (
    <div>
      <H2 className="text-end">Your current statistics</H2>
      <div className="flex items-center gap-12 mt-4">
        <StatisticCard />
        <StatisticCard />
        <StatisticCard />
      </div>
    </div>
  );
}

export { StatisticsList };
