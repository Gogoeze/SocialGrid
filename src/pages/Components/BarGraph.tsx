import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from "chart.js";
import type { ChartOptions, ScriptableContext } from "chart.js";
import { TrendingUp } from "lucide-react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);
ChartJS.defaults.font.family = '"Plus Jakarta Sans", system-ui, sans-serif';

const LABELS = ["Instagram", "LinkedIn", "TikTok", "X", "Facebook"];
const RANGES: Record<string, number[]> = {
  "7 days": [1200, 1900, 3000, 500, 2400],
  "30 days": [4800, 7200, 9100, 2100, 8300],
};

const options: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false,
  animation: { duration: 600 },
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: "#2a211b",
      titleColor: "#fdfcf7",
      bodyColor: "#fdfcf7",
      padding: 12,
      cornerRadius: 12,
      displayColors: false,
      callbacks: {
        label: (c) => ` ${(c.parsed.y ?? 0).toLocaleString()} interactions`,
      },
    },
  },
  scales: {
    x: { grid: { display: false }, border: { display: false }, ticks: { color: "#7c6e62", font: { size: 13, weight: 600 } } },
    y: { display: false, beginAtZero: true, grid: { display: false } },
  },
};

export default function BarChart() {
  const [range, setRange] = useState("7 days");
  const values = RANGES[range];
  const total = values.reduce((a, b) => a + b, 0);

  const data = {
    labels: LABELS,
    datasets: [
      {
        label: "Interactions",
        data: values,
        borderRadius: 12,
        borderSkipped: false as const,
        maxBarThickness: 56,
        hoverBackgroundColor: "#6e3f27",
        backgroundColor: (ctx: ScriptableContext<"bar">) => {
          const { chart } = ctx;
          const { ctx: c, chartArea } = chart;
          if (!chartArea) return "#a06748";
          const g = c.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          g.addColorStop(0, "#834f32");
          g.addColorStop(1, "#c48b63");
          return g;
        },
      },
    ],
  };

  return (
    <div className="sg-card p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h3 className="font-display text-xl font-semibold">Post Performance</h3>
          <p className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold" style={{ color: "var(--sg-accent-2)" }}>
            <TrendingUp size={14} /> {total.toLocaleString()} interactions in the last {range}
          </p>
        </div>
        <div className="flex gap-2">
          {Object.keys(RANGES).map((r) => (
            <button
              key={r}
              type="button"
              aria-pressed={range === r}
              onClick={() => setRange(r)}
              className={`sg-chip ${range === r ? "sg-chip-active" : ""}`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className="h-[320px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}