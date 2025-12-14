import { Archive } from "lucide-react";

function StatisticCard() {
  return (
    <div className="aspect-square w-36 flex flex-col gap-2 items-center justify-center rounded-md bg-card border">
      <span className="bg-primary/20 text-primary p-3 rounded-full">
        <Archive />
      </span>
      <span className="text-primary text-2xl">10</span>
      <p className="text-sm text-muted-foreground">Courses</p>
    </div>
  );
}

export { StatisticCard };
