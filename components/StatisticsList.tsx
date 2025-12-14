import { StatisticCard } from "@/components/StatisticCard";
import { H2 } from "@/components/Typography/H2";

function StatisticsList() {
  return (
    <div className="mt-10">
      <H2>Your current statistics</H2>
      <div className="flex items-center gap-12 mt-4">
        <StatisticCard />
        <StatisticCard />
        <StatisticCard />
      </div>
    </div>
  );
}

export { StatisticsList };
