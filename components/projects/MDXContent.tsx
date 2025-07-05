"use client";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { components } from "./mdxComponents";

interface MDXContentProps {
  source: MDXRemoteSerializeResult;
  meta: any;
}

export default function MDXContent({ source, meta }: MDXContentProps) {
  return (
    <main className="prose mx-auto px-4">
      test
      <h1>{meta.title}</h1>
      <MDXRemote {...source} components={components} />
    </main>
  );
}
