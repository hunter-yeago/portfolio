"use client";

import { useRef, useEffect } from "react";
import * as d3 from "d3";

interface DataPoint {
  year: number;
  value: number;
}

interface Props {
  data: DataPoint[];
  color: string;
  yAxisLabel: string;
  title: string;
}

export default function ScatterGraph({ data, color, yAxisLabel, title }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !tooltipRef.current) return;

    const container = d3.select(containerRef.current);
    const tooltip = d3.select(tooltipRef.current);

    const renderChart = () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.clientWidth;
      const containerHeight = 300;
      const margin = { top: 20, right: 30, bottom: 40, left: 60 };
      const width = containerWidth - margin.left - margin.right;
      const height = containerHeight - margin.top - margin.bottom;

      container.select("svg").remove(); // clear previous SVG

      const svg = container
        .append("svg")
        .attr("width", containerWidth)
        .attr("height", containerHeight)
        .attr("viewBox", `0 0 ${containerWidth} ${containerHeight}`)
        .attr("preserveAspectRatio", "xMidYMid meet")
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      // Formatter for axis and tooltip with SI prefixes (e.g. M for millions)
      const formatValue = d3.format(".2s");

      // Scales
      const x = d3
        .scaleLinear()
        .domain(d3.extent(data, (d) => d.year) as [number, number])
        .range([0, width]);

      const maxValue = d3.max(data, (d) => d.value)!;
      const paddedMax = maxValue * 1.2;

      const y = d3.scaleLinear().domain([0, paddedMax]).nice().range([height, 0]);

      // Axes
      const graphYears = data.map((d) => d.year);

      svg
        .append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x).tickFormat(d3.format("d")).tickValues(graphYears));

      svg.append("g").call(d3.axisLeft(y).ticks(5).tickFormat(formatValue));

      // Y axis label
      svg
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left + 5)
        .attr("x", 0 - height / 2)
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .style("font-size", "12px")
        .text(yAxisLabel);

      // Line path
      const line = d3
        .line<DataPoint>()
        .x((d) => x(d.year))
        .y((d) => y(d.value))
        .curve(d3.curveMonotoneX);

      svg.append("path").datum(data).attr("fill", "none").attr("stroke", color).attr("stroke-width", 2).attr("d", line);

      // Circles
      const circles = svg
        .append("g")
        .selectAll("circle")
        .data(data)
        .join("circle")
        .attr("cx", (d) => x(d.year))
        .attr("cy", (d) => y(d.value))
        .attr("r", 6)
        .attr("fill", color);

      // Tooltip handlers
      circles
        .on("mouseover", () => tooltip.style("opacity", 1))
        .on("mousemove", (event, d) => {
          const [xPos, yPos] = d3.pointer(event, container.node());
          tooltip
            .html(`<strong>${d.year}</strong><br/>${formatValue(d.value)} ${yAxisLabel}`)
            .style("left", `${xPos + 15}px`)
            .style("top", `${yPos + 15}px`);
        })
        .on("mouseout", () => tooltip.transition().duration(200).style("opacity", 0));
    };

    renderChart();

    // Re-render on container resize
    const resizeObserver = new ResizeObserver(() => renderChart());
    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, [data, color, yAxisLabel]);

  return (
    <div ref={containerRef} className="relative w-full" style={{ minHeight: 320 }}>
      <h2 className="text-lg font-bold mb-2">
        {title} ({yAxisLabel})
      </h2>
      <div
        ref={tooltipRef}
        className="absolute pointer-events-none bg-white border border-gray-300 rounded px-2 py-1 text-sm shadow text-black opacity-0"
        style={{ transition: "opacity 0.2s ease" }}
      />
    </div>
  );
}
