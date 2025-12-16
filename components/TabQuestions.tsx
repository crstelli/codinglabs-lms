import { H1 } from "@/components/Typography/H1";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";

function TabQuestions() {
  return (
    <TabsContent value="questions">
      <H1>Questions about this course</H1>
      <div>
        <Card>
          <Avatar>
            <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
        </Card>
      </div>
    </TabsContent>
  );
}

export { TabQuestions };
