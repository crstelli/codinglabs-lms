import type { ChildrenString } from "@/types/ChildrenString";
import type { ClassName } from "@/types/ClassName";

type Props = ChildrenString & ClassName;

function H3({ children, className }: Props) {
  return <h3 className={`text-2xl py-2 ${className}`}>{children}</h3>;
}

export { H3 };
