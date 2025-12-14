import { StatisticCard } from "@/components/StatisticCard";
import { H2 } from "@/components/Typography/H2";
import { STATISTICS } from "@/lib/constants";

function StatisticsList() {
  return (
    <div>
      <H2 className="text-end">Your current statistics</H2>
      <div className="flex items-center gap-12 mt-4">
        {STATISTICS.map((stat) => (
          <StatisticCard icon={stat.icon} label={stat.label} value={stat.value} key={stat.label} />
        ))}
      </div>
    </div>
  );
}

export { StatisticsList };
