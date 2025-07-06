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
    <div className="max-w-4xl px-4">
      <h1 className="text-2xl font-bold text-center mt-10 mb-6">Citywide Stats</h1>
      {graphs.map((g) => (
        <ScatterGraph key={g.key} title={g.title} data={extractMetricData(historicStats, g.key as any, "50%")} yAxisLabel={g.yAxisLabel} color={g.color} />
      ))}
    </div>
  );
}
