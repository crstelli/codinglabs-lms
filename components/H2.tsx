import type { ChildrenString } from "@/types/ChildrenString";
import type { ClassName } from "@/types/ClassName";

type Props = ChildrenString & ClassName;

function H2({ children, className }: Props) {
  return <h2 className={`text-2xl py-2 ${className}`}>{children}</h2>;
}

export { H2 };
