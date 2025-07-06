"use client";

import React, { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id: string;
}

export default function Section({ children, id }: SectionProps) {
  return (
    <article id={id} className="flex flex-col gap-4 my-4 scroll-mt-12">
      {children}
    </article>
  );
}
