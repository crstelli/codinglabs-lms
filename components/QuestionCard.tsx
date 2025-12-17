import { ContentCard } from "@/components/ContentCard";

function QuestionCard() {
  return (
    <ContentCard
      votes={104}
      date="4 months ago"
      user={{ avatar: "/avatar-placeholder.png", name: "Spocchimax" }}
      body={{
        title: "My personal question.",
        content: "Should I builk or should I cut?",
      }}
    />
  );
}

export { QuestionCard };
