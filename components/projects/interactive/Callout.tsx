import { ReactNode } from "react";

type CalloutType = "info" | "warning" | "danger";

interface CalloutProps {
  type?: CalloutType;
  children: ReactNode;
}

export function Callout({ type = "info", children }: CalloutProps) {
  const colors: Record<CalloutType, string> = {
    info: "bg-blue-100 text-blue-800 border-blue-300",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
    danger: "bg-red-100 text-red-800 border-red-300",
  };

  return <div className={`border-l-4 p-4 my-6 rounded-md ${colors[type]}`}>{children}</div>;
}
