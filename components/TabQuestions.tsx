import { TabsContent } from "@/components/ui/tabs";
import { H1 } from "@/components/Typography/H1";
import { QuestionCard } from "@/components/QuestionCard";

function TabQuestions() {
  return (
    <TabsContent value="questions">
      <H1>Questions about this course</H1>
      <div>
        <QuestionCard />
      </div>
    </TabsContent>
  );
}

export { TabQuestions };
