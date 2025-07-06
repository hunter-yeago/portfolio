"use client";

import React, { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
}

export default function Section({ children }: SectionProps) {
  return <article className="flex flex-col gap-4 my-4">{children}</article>;
}
