"use client";

import { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

interface DataPoint {
  year: number;
  value: number;
}

interface RegressionLine {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

interface Props {
  data: DataPoint[];
  strokeColor?: string;
  fillColor?: string;
  yAxisLabel: string;
  title: string;
  showGrid?: boolean;
  showTrendLine?: boolean;
  animationDuration?: number;
}

export default function ScatterGraph({
  data,
  strokeColor = "#3b82f6",
  fillColor = "#3b82f6",
  yAxisLabel,
  title,
  showGrid = true,
  showTrendLine = true,
  animationDuration = 800,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [hasAnimated, setHasAnimated] = useState(false);
  const intersectionObserverRef = useRef<IntersectionObserver | null>(null);

  const sortedData = [...data].sort((a, b) => a.year - b.year);

  const calculateLinearRegression = (data: DataPoint[]): RegressionLine => {
    const n = data.length;
    const sumX = data.reduce((s, d) => s + d.year, 0);
    const sumY = data.reduce((s, d) => s + d.value, 0);
    const sumXY = data.reduce((s, d) => s + d.year * d.value, 0);
    const sumXX = data.reduce((s, d) => s + d.year * d.year, 0);

    const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;

    const xMin = Math.min(...data.map((d) => d.year));
    const xMax = Math.max(...data.map((d) => d.year));

    return {
      x1: xMin,
      y1: slope * xMin + intercept,
      x2: xMax,
      y2: slope * xMax + intercept,
    };
  };

  useEffect(() => {
    if (!containerRef.current || !sortedData.length) return;

    setLoading(true);
    setHasAnimated(false);

    const container = d3.select(containerRef.current);
    const containerWidth = containerRef.current.clientWidth || 800;
    const containerHeight = 400;
    const margin = { top: 50, right: 40, bottom: 60, left: 80 };
    const width = containerWidth - margin.left - margin.right;
    const height = containerHeight - margin.top - margin.bottom;

    // Clear previous content
    container.selectAll("*").remove();

    const svg = container
      .append("svg")
      .attr("viewBox", `0 0 ${containerWidth} ${containerHeight}`)
      .style("background", "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)")
      .style("box-shadow", "0 4px 20px rgba(0, 0, 0, 0.1)")
      .style("border-radius", "12px");

    const chartGroup = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Title
    svg
      .append("text")
      .attr("x", containerWidth / 2)
      .attr("y", 30)
      .attr("text-anchor", "middle")
      .style("font-size", "18px")
      .style("font-weight", "600")
      .style("fill", "#1e293b")
      .text(title);

    // Scales
    const xScale = d3
      .scaleLinear()
      .domain(d3.extent(sortedData, (d) => d.year) as [number, number])
      .range([0, width]);

    const yExtent = d3.extent(sortedData, (d) => d.value) as [number, number];
    const yPaddingTop = yExtent[1] * 0.5;

    const yScale = d3
      .scaleLinear()
      .domain([0, yExtent[1] + yPaddingTop])
      .range([height, 0]);

    // Grid
    if (showGrid) {
      const gridGroup = chartGroup.append("g").attr("class", "grid");

      gridGroup
        .selectAll(".grid-line-horizontal")
        .data(yScale.ticks(6))
        .enter()
        .append("line")
        .attr("x1", 0)
        .attr("x2", width)
        .attr("y1", (d) => yScale(d))
        .attr("y2", (d) => yScale(d))
        .style("stroke", "#e2e8f0")
        .style("stroke-width", 1)
        .style("opacity", 0.5);

      gridGroup
        .selectAll(".grid-line-vertical")
        .data(xScale.ticks(Math.min(8, sortedData.length)))
        .enter()
        .append("line")
        .attr("x1", (d) => xScale(d))
        .attr("x2", (d) => xScale(d))
        .attr("y1", 0)
        .attr("y2", height)
        .style("stroke", "#e2e8f0")
        .style("stroke-width", 1)
        .style("opacity", 0.5);
    }

    // Axes
    chartGroup
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${height})`)
      .call(
        d3
          .axisBottom(xScale)
          .tickValues(sortedData.map((d) => d.year))
          .tickFormat((d) => String(d.valueOf()))
          .tickSize(-10),
      )
      .selectAll("text")
      .style("font-size", "12px")
      .style("fill", "#374151");

    chartGroup
      .append("g")
      .attr("class", "y-axis")
      .call(
        d3
          .axisLeft(yScale)
          .tickSize(-10)
          .tickFormat((d) => (+d === 0 ? "" : d3.format("~s")(d))),
      )
      .selectAll("text")
      .style("font-size", "12px")
      .style("fill", "#374151");

    // Style axis lines
    chartGroup.selectAll(".domain").style("stroke", "#d1d5db");
    chartGroup.selectAll(".tick line").style("stroke", "#d1d5db");

    // Axis labels
    chartGroup
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x", 0 - height / 2)
      .attr("dy", "2.5em")
      .style("text-anchor", "middle")
      .style("font-size", "14px")
      .style("font-weight", "600")
      .style("fill", "#1f2937")
      .text(yAxisLabel);

    chartGroup
      .append("text")
      .attr("transform", `translate(${width / 2}, ${height + 45})`)
      .style("text-anchor", "middle")
      .style("font-size", "14px")
      .style("font-weight", "600")
      .style("fill", "#1f2937")
      .text("Year");

    // Trend line (drawn first to appear behind data)
    let trendLine: d3.Selection<
      SVGLineElement,
      unknown,
      null,
      undefined
    > | null = null;
    if (showTrendLine && sortedData.length > 1) {
      const regression = calculateLinearRegression(sortedData);
      trendLine = chartGroup
        .append("line")
        .attr("x1", xScale(regression.x1))
        .attr("y1", yScale(regression.y1))
        .attr("x2", xScale(regression.x1)) // collapsed start
        .attr("y2", yScale(regression.y1))
        .style("stroke", "#8b5cf6")
        .style("stroke-width", 3)
        .style("stroke-dasharray", "20,5")
        .style("opacity", 0);
    }

    // Tooltip
    const tooltip = container
      .append("div")
      .style("opacity", 0)
      .style("position", "absolute")
      .style("background", "rgba(255, 255, 255, 0.95)")
      .style("backdrop-filter", "blur(10px)")
      .style("border", "1px solid #e2e8f0")
      .style("border-radius", "8px")
      .style("padding", "12px")
      .style("pointer-events", "none")
      .style("font-size", "13px")
      .style("font-weight", "500")
      .style("box-shadow", "0 4px 20px rgba(0, 0, 0, 0.15)")
      .style("z-index", "1000");

    // Line
    const line = d3
      .line<DataPoint>()
      .x((d) => xScale(d.year))
      .y((d) => yScale(d.value))
      .curve(d3.curveMonotoneX);

    const path = chartGroup
      .append("path")
      .datum(sortedData)
      .attr("fill", "none")
      .attr("stroke", strokeColor)
      .attr("stroke-width", 3)
      .attr("d", line)
      .style("filter", "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))")
      .style("opacity", 0);

    // Circles
    const circles = chartGroup
      .append("g")
      .selectAll("circle")
      .data(sortedData)
      .enter()
      .append("circle")
      .attr("cx", (d) => xScale(d.year))
      .attr("cy", (d) => yScale(d.value))
      .attr("r", 0)
      .attr("fill", fillColor)
      .style("cursor", "pointer")
      .style("opacity", 0)
      .style("filter", "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))")
      .on("mouseover", function () {
        tooltip.style("opacity", 1);
        d3.select(this).transition().duration(200).attr("r", 8);
      })
      .on("mousemove", (event, d) => {
        const [x, y] = d3.pointer(event, container.node());
        const containerWidth = containerRef.current?.clientWidth || 500;
        const tooltipEstimatedWidth = 150;
        const tooltipOffset = 15;
        const tooltipEdgeBuffer = 30;

        const shouldLeftAlign =
          x + tooltipEstimatedWidth > containerWidth - tooltipEdgeBuffer;

        tooltip
          .html(
            `<div><strong>Year:</strong> ${d.year}</div><div><strong>${yAxisLabel}:</strong> ${d3.format(".2s")(d.value)}</div>`,
          )
          .style(
            "left",
            shouldLeftAlign
              ? `${x - tooltipEstimatedWidth - tooltipOffset}px`
              : `${x + tooltipOffset}px`,
          )
          .style("top", `${y - tooltipOffset}px`);
      })
      .on("mouseout", function () {
        tooltip.style("opacity", 0);
        d3.select(this).transition().duration(200).attr("r", 6);
      });

    setLoading(false);

    // Animation function
    const animateChart = () => {
      if (hasAnimated) return;

      // Animate trend line
      if (trendLine) {
        const regression = calculateLinearRegression(sortedData);
        trendLine
          .style("opacity", 0.7)
          .transition()
          .duration(animationDuration)
          .delay(animationDuration * 0.2)
          .ease(d3.easeQuadOut)
          .attr("x2", xScale(regression.x2))
          .attr("y2", yScale(regression.y2));
      }

      // Animate line
      const totalLength =
        (path.node() as SVGPathElement)?.getTotalLength() || 0;
      path
        .attr("stroke-dasharray", `${totalLength} ${totalLength}`)
        .attr("stroke-dashoffset", totalLength)
        .style("opacity", 1)
        .transition()
        .duration(animationDuration)
        .ease(d3.easeLinear)
        .attr("stroke-dashoffset", 0);

      // Animate circles
      circles
        .style("opacity", 1)
        .transition()
        .duration(animationDuration)
        .delay((d, i) => i * 100)
        .attr("r", 6)
        .ease(d3.easeBackOut);

      // setHasAnimated(true);
    };

    animateChart();
    // Intersection Observer for animation
    const threshold = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // if (entry.isIntersecting && !hasAnimated && entry.intersectionRatio >= threshold) {
          // }
        });
      },
      { threshold },
    );

    if (containerRef.current) {
      // observer.observe(containerRef.current);
      // intersectionObserverRef.current = observer;
    }

    // Re-render on container resize
    // const resizeObserver = new ResizeObserver(() => {
    //   // Reset animation state on resize
    //   setHasAnimated(false);
    // });
    // resizeObserver.observe(containerRef.current);

    return () => {
      // observer.disconnect();
      // resizeObserver.disconnect();
    };
  }, [
    data,
    strokeColor,
    fillColor,
    yAxisLabel,
    title,
    showGrid,
    showTrendLine,
    animationDuration,
    hasAnimated,
    sortedData,
  ]);

  return (
    <div className="relative w-full max-w-5xl mx-auto p-4">
      {/* {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 rounded-xl z-10">
          <div className="w-10 h-10 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )} */}
      <div
        ref={containerRef}
        className="w-full min-h-[400px] relative"
        style={{
          background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      />
    </div>
  );
}

// Demo component to show the enhanced scatter graph
function ScatterGraphDemo() {
  const sampleData = [
    { year: 2018, value: 120000 },
    { year: 2019, value: 150000 },
    { year: 2020, value: 180000 },
    { year: 2021, value: 220000 },
    { year: 2022, value: 280000 },
    { year: 2023, value: 320000 },
    { year: 2024, value: 380000 },
  ];

  return (
    <div className="p-8 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Enhanced Scatter Graph
        </h1>
        <p className="text-gray-600">
          Fully animated scatter plot with trend line and interactive tooltips
        </p>
      </div>

      <ScatterGraph
        data={sampleData}
        strokeColor="#3b82f6"
        fillColor="#1d4ed8"
        yAxisLabel="Revenue"
        title="Company Growth Over Time"
        showGrid={true}
        showTrendLine={true}
        animationDuration={1000}
      />

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <ScatterGraph
          data={sampleData.map((d) => ({ ...d, value: d.value * 0.6 }))}
          strokeColor="#10b981"
          fillColor="#059669"
          yAxisLabel="Profit"
          title="Profit Analysis"
          showGrid={true}
          showTrendLine={false}
          animationDuration={800}
        />

        <ScatterGraph
          data={[
            { year: 2020, value: 45000 },
            { year: 2021, value: 52000 },
            { year: 2022, value: 48000 },
            { year: 2023, value: 58000 },
            { year: 2024, value: 62000 },
          ]}
          strokeColor="#f59e0b"
          fillColor="#d97706"
          yAxisLabel="Users"
          title="User Growth"
          showGrid={false}
          showTrendLine={true}
          animationDuration={600}
        />
      </div>
    </div>
  );
}
