"use client";
import ProfessionalLinks from "./ProfessionalLinks";
import { IntroParagraphData } from "@/lib/intro_paragraph";
import CityWideStats from "../projects/interactive/CityWideStats";
import PageTitle from "../core/PageTitle";

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
      className="grid grid-rows gap-4 md-custom:grid-cols-2 mx-auto max-w-[1400px] p-12"
      aria-label="information about hunter yeago and links to his professional profiles"
    >
      <article className="flex text-left flex-col gap-8 py-6">
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
      <div className="space-y-6">
        <CityWideStats graphs={graphs} />
      </div>
    </section>
  );
}

export default IntroParagraph;
