"use client";

import Image from "next/image";
import stationImage from "@images/station.jpg";
import ProfessionalLinks from "./ProfessionalLinks";
import { IntroParagraphData } from "@/lib/intro_paragraph";
import CityWideStats from "../projects/interactive/CityWideStats";

interface Props {
  data: IntroParagraphData;
}

function IntroParagraph({ data }: Props) {

const graphs = [
  {
    title: "Total GHG Emissions",
    key: "TotalGHGEmissions",
    yAxisLabel: "metric tons CO2e",
    color: "#3498db",
  },
];


  return (
    <section
      className="grid grid-rows gap-4 md-custom:grid-cols-[50%,50%] mx-auto"
      aria-label="information about hunter yeago and links to his professional profiles"
    >
      <article className="flex text-center md:text-left flex-col gap-4 py-6">
        <h1 className="text-3xl md:text-[1.875rem] font-semibold">
          {data.headline}
        </h1>

        <div className="block max-h-[300px] overflow-hidden rounded-xl md-custom:hidden">
          <Image
            className="object-left h-full object-cover"
            priority
            src={stationImage}
            alt="a man holding a broken umbrella stands next to a street light in Melbourne, Australia"
          />
        </div>

        {data.paragraphs.map((text: string, index: number) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
        ))}

        <ProfessionalLinks />
      </article>

      <CityWideStats graphs={graphs}/>
{/* 
      <div className="hidden overflow-hidden rounded-xl md-custom:block">
        <Image
          className="object-left h-full object-cover"
          priority
          src={stationImage}
          alt="a man holding a broken umbrella stands next to a street light in Melbourne, Australia"
        />
      </div> */}
    </section>
  );
}

export default IntroParagraph;
