import type { ChildrenString } from "@/types/ChildrenString";
import type { ClassName } from "@/types/ClassName";

type Props = ChildrenString & ClassName;

function P({ children, className }: Props) {
  return <p className={`text-muted-foreground ${className}`}>{children}</p>;
}

export { P };
