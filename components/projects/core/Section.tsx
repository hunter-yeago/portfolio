"use client";

import React, { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id: string;
}

export default function Section({ children, id }: SectionProps) {
  return (
    <article id={id} className="my-12 scroll-mt-12">
      {children}
    </article>
  );
}
