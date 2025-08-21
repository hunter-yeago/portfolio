// CityWideStats.jsx with dummy data for testing
import ScatterGraph from "./ScatterGraph";

interface I_Graph {
  title: string;
  key: string;
  yAxisLabel: string;
  color: string;
}

// Dummy data generator
const generateDummyData = (key: string) => {
  const baseData: any = {
    TotalGHGEmissions: [
      { year: 2018, value: 2450000 },
      { year: 2019, value: 2380000 },
      { year: 2020, value: 2100000 }, // COVID impact
      { year: 2021, value: 2250000 },
      { year: 2022, value: 2180000 },
      { year: 2023, value: 2050000 },
      { year: 2024, value: 1980000 },
    ],
    // ElectricityUse: [
    //   { year: 2018, value: 15800000 },
    //   { year: 2019, value: 16200000 },
    //   { year: 2020, value: 14500000 }, // COVID impact
    //   { year: 2021, value: 15900000 },
    //   { year: 2022, value: 16100000 },
    //   { year: 2023, value: 15700000 },
    //   { year: 2024, value: 15400000 },
    // ],
    // NaturalGasUse: [
    //   { year: 2018, value: 8900000 },
    //   { year: 2019, value: 9200000 },
    //   { year: 2020, value: 9500000 }, // More home usage
    //   { year: 2021, value: 9100000 },
    //   { year: 2022, value: 8800000 },
    //   { year: 2023, value: 8500000 },
    //   { year: 2024, value: 8200000 },
    // ],
    // WaterUse: [
    //   { year: 2018, value: 450000 },
    //   { year: 2019, value: 465000 },
    //   { year: 2020, value: 480000 },
    //   { year: 2021, value: 470000 },
    //   { year: 2022, value: 455000 },
    //   { year: 2023, value: 445000 },
    //   { year: 2024, value: 440000 },
    // ],
  };

  return baseData[key] || [];
};

export default function CityWideStats({graphs}: {graphs: I_Graph[]}) {
  return (
    <article aria-label="green house gas emissions statistics from buildings across chicago">
      {graphs.map((g: I_Graph) => {
        // Use dummy data instead of extractMetricData for now
        const data = generateDummyData(g.key);
        
        // Debug log
        console.log(`Rendering ${g.title} with data:`, data);
        
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