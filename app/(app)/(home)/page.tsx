import { CoursesList } from "@/components/CoursesList";
import { StatisticsList } from "@/components/StatisticsList";

import { H1 } from "@/components/Typography/H1";
import { H2 } from "@/components/Typography/H2";
import { P } from "@/components/Typography/P";

export default function page() {
  return (
    <>
      <div className="max-lg:flex-col max-lg:items-center max-lg:text-center flex items-start justify-between mt-10">
        <div>
          <H1>Welcome back, Giuseppe</H1>
          <P>What are your goals for today?</P>
        </div>

        <StatisticsList />
      </div>

      <H2 className="max-lg:mt-20 mt-10 max-lg:text-center">Your Recent courses</H2>
      <CoursesList />
    </>
  );
}
