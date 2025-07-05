"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";

interface DataPoint {
  year: number;
  emissions: number;
}

export function EmissionsChart() {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const data: DataPoint[] = [
      { year: 2018, emissions: 22000 },
      { year: 2019, emissions: 20000 },
      { year: 2020, emissions: 18000 },
      { year: 2021, emissions: 19080 },
    ];

    const width = 500;
    const height = 250;
    const margin = { top: 20, right: 20, bottom: 40, left: 50 };

    const svg = d3.select(ref.current).attr("width", width).attr("height", height).style("background-color", "#f9fafb");

    svg.selectAll("*").remove();

    const x = d3
      .scaleBand()
      .domain(data.map((d: DataPoint) => d.year.toString()))
      .range([margin.left, width - margin.right])
      .padding(0.2);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d: DataPoint) => d.emissions)!])
      .range([height - margin.bottom, margin.top]);

    svg
      .append("g")
      .attr("transform", `translate(0, ${height - margin.bottom})`)
      .call(d3.axisBottom(x));

    svg.append("g").attr("transform", `translate(${margin.left}, 0)`).call(d3.axisLeft(y));

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d: DataPoint) => x(d.year.toString())!)
      .attr("y", (d: DataPoint) => y(d.emissions))
      .attr("width", x.bandwidth())
      .attr("height", (d: DataPoint) => y(0) - y(d.emissions))
      .attr("fill", "#38bdf8"); // Tailwind blue-400
  }, []);

  return (
    <div className="mt-6 border rounded-md p-4 bg-white shadow">
      <h4 className="font-semibold text-gray-800 mb-2">Emissions Over Time</h4>
      <svg ref={ref} />
    </div>
  );
}
