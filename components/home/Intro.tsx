"use client";
import ProfessionalLinks from "./ProfessionalLinks";
import CityWideStats from "../projects/interactive/CityWideStats";
import { i_Intro } from "@/lib/intro";

interface Props {
  data: i_Intro;
}

function Intro({ data }: Props) {
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
      aria-label="information about hunter yeago and links to his professional profiles"
      id="intro"
    >
      <div className="container grid gap-4 md:grid-cols-2">
        <article className="flex items-center justify-center text-center lg:text-left lg:items-start flex-col gap-4 px-4 p-2">
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
      </div>
    </section>
  );
}

export default Intro;
