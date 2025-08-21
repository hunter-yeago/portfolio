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
      color: "#e74c3c", // Red for emissions
    },
    // {
    //   title: "Electricity Use",
    //   key: "ElectricityUse", 
    //   yAxisLabel: "kWh",
    //   color: "#f39c12", // Orange for electricity
    // },
    // {
    //   title: "Natural Gas Usage",
    //   key: "NaturalGasUse",
    //   yAxisLabel: "therms",
    //   color: "#3498db", // Blue for gas
    // },
    // {
    //   title: "Water Consumption",
    //   key: "WaterUse",
    //   yAxisLabel: "gallons",
    //   color: "#27ae60", // Green for water
    // },
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
      
      {/* Charts container */}
      <div className="space-y-6">
        <CityWideStats graphs={graphs} />
      </div>
    </section>
  );
}

export default IntroParagraph;