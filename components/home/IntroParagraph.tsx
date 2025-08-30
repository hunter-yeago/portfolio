"use client";
import ProfessionalLinks from "./ProfessionalLinks";
import { IntroParagraphData } from "@/lib/intro_paragraph";
import CityWideStats from "../projects/interactive/CityWideStats";

interface Props {
  data: IntroParagraphData;
}

function IntroParagraph({ data }: Props) {
  const graphs = [
    {
      title: "Chicago Median GHG Emissions",
      key: "TotalGHGEmissions",
      yAxisLabel: "metric tons CO2e",
      color: "#e74c3c",
    },
  ];

  return (
    <section
      className="grid gap-4 md:grid-cols-2 max-w-[1400px] p-3 md:p-12 mx-auto"
      aria-label="information about hunter yeago and links to his professional profiles"
    >
      <article className="flex items-center justify-center text-center lg:text-left lg:items-start flex-col gap-4 px-10 p-6">
        <h1 className="text-3xl">{data.headline}</h1>
        {data.paragraphs.map((text: string, index: number) => (
          <p
            className="text-xl"
            key={index}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        ))}
        <ProfessionalLinks />
      </article>

      {/* Charts container */}
      <CityWideStats graphs={graphs} />
    </section>
  );
}

export default IntroParagraph;
