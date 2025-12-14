import type { ChildrenString } from "@/types/ChildrenString";

function H1({ children }: ChildrenString) {
  return <h1 className="text-4xl py-3">{children}</h1>;
}

export { H1 };
