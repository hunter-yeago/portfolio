import { extractMetricData } from "@/lib/metrics";
import ScatterGraph from "./ScatterGraph";
import historicStats from "@/data/historic-stats.json";

interface I_Graph {
  title: string;
  key: string;
  yAxisLabel: string;
  color: string;
}

export default function CityWideStats({graphs}: {graphs: I_Graph[]}) {
  return (
    <article aria-label="green house gas emissions staistics from buildings across chicago">
      {graphs.map((g: any) => (
        <ScatterGraph
          key={g.key}
          title={g.title}
          data={extractMetricData(historicStats, g.key as any, "50%")}
          yAxisLabel={g.yAxisLabel}
          color={g.color}
        />
      ))}
    </article>
  );
}
