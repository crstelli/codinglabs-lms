import { CoursesList } from "@/components/CoursesList";
import { StatisticsList } from "@/components/StatisticsList";

import { H1 } from "@/components/Typography/H1";
import { H2 } from "@/components/Typography/H2";
import { P } from "@/components/Typography/P";

export default function page() {
  return (
    <>
      <H1>Welcome back, Giuseppe</H1>
      <P>What are your goals for today?</P>

      <StatisticsList />

      <H2 className="mt-10">Your Recent courses</H2>
      <CoursesList />
    </>
  );
}
