type MetricDetail = "count" | "mean" | "std" | "min" | "max" | "25%" | "50%" | "75%";

interface MetricStats {
  count: number;
  mean: number;
  std: number;
  min: number;
  max: number;
  twentyFifthPercentile: number;
  median: number;
  seventyFifthPercentile: number;
}

interface YearData {
  GHGIntensity?: MetricStats;
  TotalGHGEmissions?: MetricStats;
  ElectricityUse?: MetricStats;
  NaturalGasUse?: MetricStats;
  SourceEUI?: MetricStats;
  SiteEUI?: MetricStats;
}

interface DataPoint {
  year: number;
  value: number;
}

const detailKeyMap: Record<MetricDetail, keyof MetricStats> = {
  count: "count",
  mean: "mean",
  std: "std",
  min: "min",
  max: "max",
  "25%": "twentyFifthPercentile",
  "50%": "median",
  "75%": "seventyFifthPercentile",
};

export function extractMetricData(historicStats: Record<string, YearData>, metricName: keyof YearData, detail: MetricDetail): DataPoint[] {
  return Object.entries(historicStats)
    .map(([year, yearData]) => {
      const stats = yearData[metricName];
      const value = stats ? stats[detailKeyMap[detail]] : undefined;
      return {
        year: parseInt(year),
        value: value ?? 0,
      };
    })
    .filter((d) => d.value !== 0)
    .sort((a, b) => a.year - b.year);
}
