import { useState } from "react";
import type { IconType } from "react-icons";
import { FaInstagram, FaLinkedinIn, FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { Plus, Clock, Download, Check, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";


type HistoryItem = {
  id: number;
  platform: string;
  status: string;
  date: string;
  text: string;
  statValue: string;
  statType: string;
  url?: string; // add a real post URL here to enable the external-link button
};

const HISTORY_DATA: HistoryItem[] = [
  { id: 1, platform: "LinkedIn", status: "Published", date: "Oct 20, 2023", text: "The future of social media is organic. Here's why...", statValue: "1.2k", statType: "VIEWS" },
  { id: 2, platform: "Instagram", status: "Published", date: "Oct 18, 2023", text: "Mid-week inspiration: organic textures and warm tones.", statValue: "850", statType: "LIKES" },
  { id: 3, platform: "Twitter (X)", status: "Published", date: "Oct 15, 2023", text: "New feature update: AI caption generator now supports...", statValue: "2.4k", statType: "REACH" },
  { id: 4, platform: "Facebook", status: "Published", date: "Oct 12, 2023", text: "Behind the scenes: The making of SocialGrid.", statValue: "420", statType: "SHARES" },
  { id: 5, platform: "Instagram", status: "Published", date: "Oct 08, 2023", text: "Autumn palette explorations #minimalist #design", statValue: "1.1k", statType: "LIKES" },
];

const PLATFORM_META: Record<string, { Icon: IconType; bg: string }> = {
  LinkedIn: { Icon: FaLinkedinIn, bg: "#0a66c2" },
  Instagram: { Icon: FaInstagram, bg: "linear-gradient(45deg,#f9a03f,#e1306c,#8a3ab9)" },
  "Twitter (X)": { Icon: FaXTwitter, bg: "#111111" },
  Facebook: { Icon: FaFacebookF, bg: "#1877f2" },
};

function exportCsv(rows: HistoryItem[]) {
  const esc = (v: string) => `"${v.replace(/"/g, '""')}"`;
  const header = ["Platform", "Status", "Date", "Post", "Metric", "Value"];
  const lines = rows.map((r) =>
    [r.platform, r.status, r.date, r.text, r.statType, r.statValue].map(esc).join(",")
  );
  const blob = new Blob([[header.join(","), ...lines].join("\n")], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "socialgrid-post-history.csv";
  a.click();
  URL.revokeObjectURL(url);
}

export default function History() {
  const [filter, setFilter] = useState("All");

  const platforms = ["All", ...Array.from(new Set(HISTORY_DATA.map((d) => d.platform)))];
  const visible = filter === "All" ? HISTORY_DATA : HISTORY_DATA.filter((d) => d.platform === filter);

  return (
    <div className="sg-page px-6 md:px-10 py-10">
      <div className="mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div>
            <h1 className="font-display text-4xl md:text-5xl font-semibold mb-2">
              Post <span className="sg-gradient-text">History</span>
            </h1>
            <p className="text-sm lg:text-base font-medium max-w-[40rem]" style={{ color: "var(--sg-muted)" }}>
              Review your social journey and analyze performance across all platforms. Every post is a milestone in your brand's growth.
            </p>
          </div>
          + <button type="button" onClick={() => navigate("/new-post")} className="sg-btn sg-btn-primary px-6 py-3 text-sm self-start sm:self-auto whitespace-nowrap">
            <Plus size={16} /> Create New Post
          </button>
        </div>

        {/* TOOLBAR */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
          <div className="flex items-center gap-3">
            <span className="sg-tile-icon !h-9 !w-9 !rounded-xl"><Clock size={16} /></span>
            <h2 className="font-display text-lg font-semibold">Activity</h2>
            <span
              className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
              style={{ background: "var(--sg-accent-soft)", color: "var(--sg-accent-2)" }}
            >
              {visible.length} posts
            </span>
          </div>
          <button
            type="button"
            onClick={() => exportCsv(visible)}
            disabled={visible.length === 0}
            className="sg-btn sg-btn-dark px-5 py-2.5 text-xs self-start sm:self-auto"
          >
            <Download size={14} /> Export Report
          </button>
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap gap-2 mb-5">
          {platforms.map((p) => (
            <button
              key={p}
              type="button"
              aria-pressed={filter === p}
              onClick={() => setFilter(p)}
              className={`sg-chip ${filter === p ? "sg-chip-active" : ""}`}
            >
              {p}
            </button>
          ))}
        </div>

        {/* LIST */}
        <div className="space-y-3">
          {visible.map((item) => {
            const meta = PLATFORM_META[item.platform];
            const PIcon = meta?.Icon;
            return (
              <div key={item.id} className="sg-card sg-row group flex items-center justify-between gap-4 p-4">
                <div className="flex items-center gap-4 min-w-0 flex-1">
                  <span
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-white shadow-sm"
                    style={{ background: meta?.bg ?? "var(--sg-ink)" }}
                  >
                    {PIcon ? <PIcon size={18} /> : null}
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1 text-[11px] font-bold tracking-wide">
                      <span>{item.platform}</span>
                      <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5" style={{ background: "var(--sg-accent-soft)", color: "var(--sg-accent-2)" }}>
                        <Check size={10} strokeWidth={3} /> {item.status}
                      </span>
                    </div>
                    <p className="text-sm font-semibold truncate">{item.text}</p>
                    <span className="sm:hidden text-[11px] font-medium" style={{ color: "var(--sg-muted)" }}>
                      {item.date}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-6 shrink-0">
                  <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium" style={{ color: "var(--sg-muted)" }}>
                    <Clock size={12} /> {item.date}
                  </span>

                  <div className="text-right w-16">
                    <div className="font-display text-lg font-semibold leading-none">{item.statValue}</div>
                    <div className="text-[9px] font-extrabold tracking-wider mt-1" style={{ color: "var(--sg-muted)" }}>
                      {item.statType}
                    </div>
                  </div>

                  <button
                    type="button"
                    aria-label={`Open ${item.platform} post`}
                    disabled={!item.url}
                    onClick={() => item.url && window.open(item.url, "_blank", "noopener")}
                    className="sg-icon-btn disabled:opacity-30 disabled:pointer-events-none"
                  >
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            );
          })}

          {visible.length === 0 && (
            <div className="sg-card p-10 text-center">
              <span className="sg-tile-icon mx-auto mb-3"><Clock size={22} /></span>
              <p className="text-sm font-semibold">No posts for this platform yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}