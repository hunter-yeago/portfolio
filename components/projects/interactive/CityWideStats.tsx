import ScatterGraph from "./ScatterGraph";

interface I_Graph {
  title: string;
  key: string;
  yAxisLabel: string;
  color: string;
}

const generateDummyData = (key: string) => {
  const baseData: any = {
    TotalGHGEmissions: [
      { year: 2018, value: 2450000 },
      { year: 2019, value: 2380000 },
      { year: 2020, value: 2100000 },
      { year: 2021, value: 2250000 },
      { year: 2022, value: 2180000 },
      { year: 2023, value: 2050000 },
      { year: 2024, value: 1980000 },
    ],
  };

  return baseData[key] || [];
};

export default function CityWideStats({ graphs }: { graphs: I_Graph[] }) {
  return (
    <article aria-label="green house gas emissions statistics from buildings across chicago">
      {graphs.map((g: I_Graph) => {
        
        // Use dummy data instead of extractMetricData for now
        const data = generateDummyData(g.key);

        return (
          <ScatterGraph
            key={g.key}
            title={g.title}
            data={data}
            yAxisLabel={g.yAxisLabel}
            fillColor={g.color}
            strokeColor={g.color}
          />
        );
      })}
    </article>
  );
}
