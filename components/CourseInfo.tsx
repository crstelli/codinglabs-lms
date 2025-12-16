import { H1 } from "@/components/Typography/H1";
import { P } from "@/components/Typography/P";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Star, User } from "lucide-react";

function CourseInfo() {
  return (
    <div className="p-6">
      <Tabs className="gap-6" defaultValue="introduction">
        <TabsList>
          <TabsTrigger value="introduction">Introduction</TabsTrigger>
          <TabsTrigger value="questions">Questions</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="introduction">
          <H1>How to bulk and get an aesthetic body</H1>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 text-yellow-500">
              <Star size={20} />
              <span>4.6</span>
            </span>

            <span className="flex items-center gap-1">
              <User size={20} />
              <span>14.231</span>
            </span>

            <span className="flex items-center gap-1">
              <Clock size={20} />
              <span>10.5h</span>
            </span>
            <P>by Giuseppe Crescitelli</P>
          </div>
          <P>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quidem ipsum natus aut maxime, ducimus
            voluptates provident amet odit voluptas molestias dolor quos quia exercitationem, autem dignissimos eos
            asperiores accusantium tempore fugit commodi consequatur cumque iusto numquam. Qui nobis voluptatem quis,
            tenetur dolorem sit nemo dolore numquam, molestias, animi nihil soluta? Facere temporibus iure recusandae
            corporis, asperiores distinctio rem reiciendis ullam incidunt excepturi perferendis minus provident
            perspiciatis accusantium iusto cum? Odio officiis, debitis quod illum maiores vitae sequi odit unde
            aspernatur modi soluta ab. Impedit dignissimos temporibus officiis eligendi. Vero error porro alias,
            obcaecati qui nihil nesciunt in beatae! Tenetur.
          </P>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export { CourseInfo };
