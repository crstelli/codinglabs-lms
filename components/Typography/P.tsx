import type { ChildrenString } from "@/types/ChildrenString";

function P({ children }: ChildrenString) {
  return <p className="text-muted-foreground">{children}</p>;
}

export { P };
