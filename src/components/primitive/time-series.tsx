// src/components/primitive/time-series.tsx
"use client";
import {
    CategoryScale,
    ChartData,
    Chart as ChartJS,
    ChartOptions,
    Filler,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from "chart.js";
import { format } from "date-fns";
import React, { useMemo } from "react"; // Remove useState
import { Line } from "react-chartjs-2";
import { cn } from "../../lib/cn";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export interface TimeSeriesData {
  timestamp: Date;
  value: number;
}

export interface TimeSeriesProps {
  data: TimeSeriesData[] | TimeSeriesData[][];
  labels?: string[];
  title?: string;
  height?: number;
  variant?: "default" | "terminal";
  showLegend?: boolean;
  fill?: boolean;
  realtime?: boolean;
  maxDataPoints?: number;
  yAxisLabel?: string;
  className?: string;
}

export const TimeSeries = React.forwardRef<HTMLDivElement, TimeSeriesProps>(
  (
    {
      data,
      labels = ["Value"],
      title,
      height = 300,
      variant = "default",
      showLegend = true,
      fill = false,
      realtime = false,
      maxDataPoints = 50,
      yAxisLabel,
      className,
    },
    ref
  ) => {
    // Process data into chart format using useMemo
    const chartData: ChartData<"line", number[], string> = useMemo(() => {
      const isMultiSeries = Array.isArray(data[0]);
      const series = isMultiSeries
        ? (data as TimeSeriesData[][])
        : [data as TimeSeriesData[]];

      return {
        labels: series[0].map((point) => format(point.timestamp, "HH:mm:ss")),
        datasets: series.map((seriesData, index) => ({
          label: labels[index] || `Series ${index + 1}`,
          data: seriesData.map((point) => point.value),
          borderColor:
            variant === "terminal"
              ? `hsl(${(index * 60) % 360}, 100%, 50%)`
              : `hsl(${(index * 120) % 360}, 70%, 50%)`,
          backgroundColor:
            variant === "terminal"
              ? `hsla(${(index * 60) % 360}, 100%, 50%, 0.1)`
              : `hsla(${(index * 120) % 360}, 70%, 50%, 0.1)`,
          tension: 0.4,
          fill: fill,
        })),
      };
    }, [data, labels, variant, fill]);

    // Chart options
    const options: ChartOptions<"line"> = useMemo(
      () => ({
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: realtime ? 0 : 750,
        },
        plugins: {
          legend: {
            display: showLegend,
            position: "top" as const,
            labels: {
              color: variant === "terminal" ? "#10B981" : undefined,
              font: {
                family:
                  "Menlo, Monaco, Consolas, 'Liberation Mono', monospace",
              },
            },
          },
          title: {
            display: !!title,
            text: title,
            color: variant === "terminal" ? "#10B981" : undefined,
            font: {
              family:
                "Menlo, Monaco, Consolas, 'Liberation Mono', monospace",
              size: 14,
            },
          },
          tooltip: {
            backgroundColor: variant === "terminal" ? "#000" : undefined,
            borderColor: variant === "terminal" ? "#10B981" : undefined,
            borderWidth: variant === "terminal" ? 1 : 0,
            titleColor: variant === "terminal" ? "#10B981" : undefined,
            bodyColor: variant === "terminal" ? "#10B981" : undefined,
            bodyFont: {
              family:
                "Menlo, Monaco, Consolas, 'Liberation Mono', monospace",
            },
            titleFont: {
              family:
                "Menlo, Monaco, Consolas, 'Liberation Mono', monospace",
            },
          },
        },
        scales: {
          x: {
            grid: {
              color:
                variant === "terminal"
                  ? "rgba(16, 185, 129, 0.1)"
                  : "rgba(0, 0, 0, 0.1)",
            },
            ticks: {
              color: variant === "terminal" ? "#10B981" : undefined,
              font: {
                family:
                  "Menlo, Monaco, Consolas, 'Liberation Mono', monospace",
              },
            },
          },
          y: {
            grid: {
              color:
                variant === "terminal"
                  ? "rgba(16, 185, 129, 0.1)"
                  : "rgba(0, 0, 0, 0.1)",
            },
            ticks: {
              color: variant === "terminal" ? "#10B981" : undefined,
              font: {
                family:
                  "Menlo, Monaco, Consolas, 'Liberation Mono', monospace",
              },
            },
            title: {
              display: !!yAxisLabel,
              text: yAxisLabel,
              color: variant === "terminal" ? "#10B981" : undefined,
              font: {
                family:
                  "Menlo, Monaco, Consolas, 'Liberation Mono', monospace",
              },
            },
          },
        },
      }),
      [
        realtime,
        showLegend,
        variant,
        title,
        yAxisLabel,
      ]
    );

    return (
      <div
        ref={ref}
        className={cn(
          "w-full rounded",
          variant === "default" && "border border-gray-200 bg-white p-4",
          variant === "terminal" && "border border-green-500 bg-black p-4",
          className
        )}
        style={{ height }}
      >
        <Line data={chartData} options={options} />
      </div>
    );
  }
);

TimeSeries.displayName = "TimeSeries";
