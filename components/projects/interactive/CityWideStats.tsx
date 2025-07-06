import { extractMetricData } from "@/lib/metrics";
import ScatterGraph from "./ScatterGraph";
import historicStats from "@/data/historic-stats.json";

const graphs = [
  {
    title: "Total GHG Emissions",
    key: "TotalGHGEmissions",
    yAxisLabel: "metric tons CO2e",
    color: "#3498db",
  },
  {
    title: "Electricity Use",
    key: "ElectricityUse",
    yAxisLabel: "kWh",
    color: "#f39c12",
  },
];

export default function CityWideStats() {
  return (
    <article aria-label="green house gas emissions staistics from buildings across chicago">
      {graphs.map((g) => (
        <ScatterGraph key={g.key} title={g.title} data={extractMetricData(historicStats, g.key as any, "50%")} yAxisLabel={g.yAxisLabel} color={g.color} />
      ))}
    </article>
  );
}
