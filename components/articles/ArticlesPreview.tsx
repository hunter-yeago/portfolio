import ArticlePreview from "./ArticlePreview";

export default function ArticlesPreview() {
  return (
    <div
      className="max-w-[70vw] mx-auto mt-12
    md-custom:max-w-[60vw]"
    >
      <h2 className="text-3xl text-center w-fit mx-auto mb-8">
        {" "}
        PHP[TEK] 2024{" "}
      </h2>
      <ArticlePreview />
    </div>
  );
}
