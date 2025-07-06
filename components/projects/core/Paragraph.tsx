"use client";

import React, { ReactNode } from "react";

interface ParagraphProps {
  children: ReactNode;
}

export default function Paragraph({ children }: ParagraphProps) {
  return <div>{children}</div>;
}
