import type { ChildrenString } from "@/types/ChildrenString";
import type { ClassName } from "@/types/ClassName";

type Props = ChildrenString & ClassName;

function H3({ children, className }: Props) {
  return <h3 className={`text-xl ${className}`}>{children}</h3>;
}

export { H3 };
