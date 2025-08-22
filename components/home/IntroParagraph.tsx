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
      title: "Chicago Median GHG Emissions",
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
      className="grid grid-rows gap-4 md-custom:grid-cols-2 mx-auto max-w-[1400px] p-12"
      aria-label="information about hunter yeago and links to his professional profiles"
    >
      <article className="flex text-left flex-col gap-8 py-6">
        <h1 className="text-5xl font-bold">
          {data.headline}
        </h1>
        {/* <div className="block max-h-[300px] overflow-hidden rounded-xl md-custom:hidden">
          <Image
            className="object-left h-full object-cover"
            priority
            src={stationImage}
            alt="a man holding a broken umbrella stands next to a street light in Melbourne, Australia"
          />
        </div> */}
        {data.paragraphs.map((text: string, index: number) => (
          <p className="text-xl" key={index} dangerouslySetInnerHTML={{ __html: text }} />
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