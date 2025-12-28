import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Section({ children, className }: Props) {
  return <section className={`container ${className ?? ""}`.trim()}>{children}</section>;
}
