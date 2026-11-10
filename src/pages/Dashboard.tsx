import { useNavigate } from "react-router-dom";
import { CalendarDays, Pencil, Sparkles, ArrowRight, TrendingUp } from "lucide-react";
import PlatformCard from "../components/ui/platformCard";
import BarChart from "./Components/BarGraph";

const USER_NAME = "Niyah"; // TODO: replace with the logged-in user's name

const platforms = [
  { name: "Instagram", color: "#E1306C", connected: true, lastPost: "2 days ago" },
  { name: "LinkedIn", color: "#0A66C2", connected: true, lastPost: "5 days ago" },
  { name: "TikTok", color: "#000000", connected: false, lastPost: "Not connected" },
  { name: "X", color: "#000000", connected: false, lastPost: "Not connected" },
  { name: "Facebook", color: "#1877F2", connected: true, lastPost: "1 week ago" },
];

const scheduled = [
  { id: 1, when: "Today · 4:00 PM", title: "Product Launch Teaser", text: "Counting down the days until we unveil what we've been building. Stay tuned...", ai: true },
  { id: 2, when: "Tomorrow · 10:30 AM", title: "Behind the Scenes", text: "A quick look at how the team builds SocialGrid, one grid at a time.", ai: false },
  { id: 3, when: "Fri · 9:00 AM", title: "Weekly Roundup", text: "The best of this week across every channel, in one post.", ai: true },
];

function greeting() {
  const h = new Date().getHours();
  return h < 12 ? "Good morning" : h < 18 ? "Good afternoon" : "Good evening";
}

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="sg-page px-6 md:px-10 py-10">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-10">
          <h1 className="font-display text-4xl md:text-5xl font-semibold">
            {greeting()}, <span className="sg-gradient-text">{USER_NAME}!</span>
          </h1>
          <p className="mt-2 flex flex-wrap items-center gap-2 text-sm lg:text-base font-medium" style={{ color: "var(--sg-muted)" }}>
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold"
              style={{ background: "var(--sg-accent-soft)", color: "var(--sg-accent-2)" }}
            >
              <TrendingUp size={12} /> +12% reach
            </span>
            Your organic reach is up this week. Here is the overview of your connected channels.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* LEFT: cards + chart */}
          <div className="w-full min-w-0 flex-1 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {platforms.map((p) => (
                <PlatformCard
                  key={p.name}
                  name={p.name}
                  lastPost={p.lastPost}
                  connected={p.connected}
                  brandColor={p.color}
                  onQuickPost={() => navigate("/new-post")}
                  onManage={() => navigate("/settings")}
                  onConnect={() => console.log(`Connect ${p.name}`)} // TODO: start the OAuth flow
                />
              ))}
            </div>

            <BarChart />
          </div>

          {/* RIGHT: scheduled + CTA */}
          <aside className="w-full lg:w-[380px] shrink-0 space-y-6 lg:sticky lg:top-24">
            <div className="sg-card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="sg-tile-icon !h-9 !w-9 !rounded-xl"><CalendarDays size={16} /></span>
                  <h3 className="font-display text-lg font-semibold">Scheduled</h3>
                </div>
                <span
                  className="rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider"
                  style={{ background: "var(--sg-accent-soft)", color: "var(--sg-accent-2)" }}
                >
                  {scheduled.length} upcoming
                </span>
              </div>

              <div className="space-y-3">
                {scheduled.map((s) => (
                  <div key={s.id} className="sg-row rounded-2xl border bg-white p-4" style={{ borderColor: "var(--sg-line)" }}>
                    <p className="text-[11px] font-bold uppercase tracking-wide" style={{ color: "var(--sg-accent-2)" }}>
                      {s.when}
                    </p>
                    <p className="mt-1 text-sm font-bold">{s.title}</p>
                    <p className="mt-1 text-xs leading-relaxed line-clamp-2" style={{ color: "var(--sg-muted)" }}>
                      {s.text}
                    </p>
                    <div className="mt-3 flex items-center justify-between border-t pt-3" style={{ borderColor: "var(--sg-line)" }}>
                      {s.ai ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold" style={{ color: "var(--sg-accent-2)" }}>
                          <Sparkles size={12} /> AI Enhanced
                        </span>
                      ) : (
                        <span />
                      )}
                      <button type="button" aria-label={`Edit ${s.title}`} onClick={() => navigate("/new-post")} className="sg-icon-btn !h-8 !w-8">
                        <Pencil size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-[1.25rem] p-6 text-white"
              style={{ background: "linear-gradient(135deg,var(--sg-accent),var(--sg-accent-2))", boxShadow: "var(--sg-glow)" }}
            >
              <Sparkles size={22} />
              <h4 className="font-display mt-3 text-xl font-semibold">Post everywhere at once</h4>
              <p className="mt-1 text-sm opacity-90">Pick your channels, add media, and let AI draft the copy for each one.</p>
              <button
                type="button"
                onClick={() => navigate("/new-post")}
                className="sg-btn mt-5 bg-white px-5 py-2.5 text-xs"
                style={{ color: "var(--sg-accent-2)" }}
              >
                Create a post <ArrowRight size={14} />
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}