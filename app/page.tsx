import { CourseCard } from "@/components/CourseCard";
import { H1 } from "@/components/H1";
import { H2 } from "@/components/H2";
import { P } from "@/components/P";

export default function page() {
  return (
    <>
      <H1>Welcome back, Giuseppe</H1>
      <P>What are your goals for today?</P>

      <H2 className="mt-10">Your Recent courses</H2>
      <div className="flex justify-between mt-2">
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </>
  );
}
