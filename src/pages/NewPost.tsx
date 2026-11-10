import { useRef, useState } from "react";
import { FaInstagram, FaLinkedinIn, FaXTwitter, FaTiktok } from "react-icons/fa6";
import {
  Mic, Square, UploadCloud, X, Check, Sparkles, ArrowRight,
  Rocket, Megaphone, Tag, Camera, Lightbulb, Trophy, Presentation, PartyPopper, Pencil,
} from "lucide-react";

const PLATFORMS = [
  { id: "instagram", label: "Instagram", Icon: FaInstagram, color: "linear-gradient(45deg,#f9a03f,#e1306c,#8a3ab9)" },
  { id: "linkedin", label: "LinkedIn", Icon: FaLinkedinIn, color: "#0a66c2" },
  { id: "x", label: "X (Twitter)", Icon: FaXTwitter, color: "#111111" },
  { id: "tiktok", label: "TikTok", Icon: FaTiktok, color: "#111111" },
];

const EVENTS = [
  { id: "launch", label: "Product Launch", Icon: Rocket },
  { id: "announcement", label: "Announcement", Icon: Megaphone },
  { id: "promo", label: "Promo / Sale", Icon: Tag },
  { id: "bts", label: "Behind the Scenes", Icon: Camera },
  { id: "tips", label: "Tips & How-to", Icon: Lightbulb },
  { id: "milestone", label: "Milestone", Icon: Trophy },
  { id: "event", label: "Event", Icon: Presentation },
  { id: "celebration", label: "Celebration", Icon: PartyPopper },
  { id: "custom", label: "Custom", Icon: Pencil },
];

export default function NewPost() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [platforms, setPlatforms] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [event, setEvent] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const [recording, setRecording] = useState(false);
  const [customEvent, setCustomEvent] = useState("");

  const togglePlatform = (id: string) =>
    setPlatforms((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  const addFiles = (list: FileList | null) => {
    if (list) setFiles((f) => [...f, ...Array.from(list)]);
  };

  const done = [
    platforms.length > 0,
    files.length > 0,
    event !== null && (event !== "custom" || customEvent.trim().length > 0),
  ];
  const current = done.findIndex((d) => !d); // -1 when everything is done
  const steps = ["Target Channels", "Media Assets", "Content & Voice"];

  return (
    <div className="sg-page">
      {/* HEADER */}
      <div className="text-center pt-10 pb-10 px-4">
        <h1 className="font-display text-4xl md:text-5xl font-semibold">
          Craft Your <span className="sg-gradient-text">Story</span>
        </h1>
        <p className="mt-3 text-sm lg:text-base font-medium mx-auto" style={{ color: "var(--sg-muted)" }}>
          Post to every platform at once, with AI-assisted creative workflows.
        </p>
      </div>

      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-8 items-start px-4 md:px-10 pb-16">
        {/* LEFT SIDEBAR */}
        <aside className="w-full lg:w-1/4 space-y-6 lg:sticky lg:top-6">
          <div className="sg-card p-5">
            <h3 className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: "var(--sg-muted)" }}>
              Creation Steps
            </h3>
            <ol className="space-y-4">
              {steps.map((label, i) => {
                const isDone = done[i];
                const isCurrent = i === current;
                return (
                  <li key={label} className={`flex items-center gap-3 transition-opacity ${isDone || isCurrent ? "" : "opacity-40"}`}>
                    <span
                      className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-all"
                      style={{
                        background: isDone ? "linear-gradient(135deg,var(--sg-accent),var(--sg-accent-2))" : isCurrent ? "var(--sg-accent-soft)" : "#f1e7dc",
                        color: isDone ? "#fff" : "var(--sg-ink)",
                        boxShadow: isCurrent ? "0 0 0 2px var(--sg-accent)" : undefined,
                      }}
                    >
                      {isDone ? <Check size={14} strokeWidth={3} /> : i + 1}
                    </span>
                    <span className="text-sm font-semibold">{label}</span>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="sg-card p-6 text-center flex flex-col items-center">
            <button
              type="button"
              onClick={() => setRecording((r) => !r)}
              aria-pressed={recording}
              className={`sg-btn h-14 w-14 mb-3 ${recording ? "sg-btn-primary animate-pulse" : "sg-btn-dark"}`}
            >
              {recording ? <Square size={18} fill="currentColor" /> : <Mic size={20} />}
            </button>
            <h4 className="text-sm font-bold mb-1">{recording ? "Listening…" : "Voice Capturing"}</h4>
            <p className="text-xs leading-relaxed px-2" style={{ color: "var(--sg-muted)" }}>
              {recording
                ? "Tap again to stop and let AI draft your copy."
                : "Share the core point aloud, our AI will draft the copy and select tailored features."}
            </p>
          </div>
        </aside>

        {/* RIGHT WORKSPACE */}
        <main className="w-full lg:w-3/4 space-y-6">
          {/* 1. Platforms */}
          <section className="sg-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display text-lg font-semibold">1. Select Platforms</h2>
              <span className="text-xs font-semibold" style={{ color: "var(--sg-muted)" }}>
                {platforms.length} selected
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {PLATFORMS.map(({ id, label, Icon, color }) => {
                const active = platforms.includes(id);
                return (
                  <button
                    key={id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => togglePlatform(id)}
                    className={`sg-tile ${active ? "sg-tile-active" : ""}`}
                  >
                    {active && (
                      <span className="sg-tile-check"><Check size={12} strokeWidth={3} /></span>
                    )}
                    <span className="sg-tile-icon" style={active ? { background: color } : undefined}>
                      <Icon size={20} />
                    </span>
                    <span className="text-xs font-semibold">{label}</span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* 2. Media */}
          <section className="sg-card p-6">
            <h2 className="font-display text-lg font-semibold mb-4">2. Upload Media</h2>
            <input
              ref={fileRef}
              type="file"
              multiple
              accept="image/*,video/*"
              hidden
              onChange={(e) => addFiles(e.target.files)}
            />
            <div
              onClick={() => fileRef.current?.click()}
              onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
              onDragLeave={() => setDragging(false)}
              onDrop={(e) => { e.preventDefault(); setDragging(false); addFiles(e.dataTransfer.files); }}
              className={`sg-drop p-8 text-center flex flex-col items-center cursor-pointer ${dragging ? "sg-drop-active" : ""}`}
            >
              <span className="sg-tile-icon mb-3"><UploadCloud size={22} /></span>
              <p className="text-sm font-semibold">{dragging ? "Drop to upload" : "Drag and drop assets here"}</p>
              <p className="text-xs mt-0.5 mb-4" style={{ color: "var(--sg-muted)" }}>or select files manually</p>
              <span className="sg-btn sg-btn-dark px-5 py-2 text-xs">Browse Files</span>
            </div>

            {files.length > 0 && (
              <ul className="flex flex-wrap gap-2 mt-4">
                {files.map((f, i) => (
                  <li key={`${f.name}-${i}`} className="flex items-center gap-2 rounded-full bg-white border px-3 py-1 text-xs font-medium" style={{ borderColor: "var(--sg-line)" }}>
                    <span className="max-w-[10rem] truncate">{f.name}</span>
                    <button type="button" aria-label={`Remove ${f.name}`} onClick={() => setFiles((all) => all.filter((_, idx) => idx !== i))}>
                      <X size={14} />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {/* 3. Event type */}
          <section className="sg-card p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-display text-lg font-semibold">3. What's this post about?</h2>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full" style={{ background: "var(--sg-accent-soft)", color: "var(--sg-accent-2)" }}>
                <Sparkles size={12} /> AI Enhanced
              </span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {EVENTS.map(({ id, label, Icon }) => {
                const sel = event === id;
                return (
                  <button
                    key={id}
                    type="button"
                    aria-pressed={sel}
                    onClick={() => setEvent(sel ? null : id)}
                    className={`sg-chip inline-flex items-center gap-2 !px-4 !py-2.5 !text-sm ${sel ? "sg-chip-active" : ""}`}
                  >
                    <Icon size={16} /> {label}
                  </button>
                );
              })}
            </div>

            {event === "custom" && (
              <input
                autoFocus
                value={customEvent}
                maxLength={60}
                onChange={(e) => setCustomEvent(e.target.value)}
                placeholder="e.g. Store reopening, Podcast episode, Hiring drive"
                className="mt-4 w-full rounded-2xl border bg-white px-4 py-3 text-sm outline-none transition-all focus:border-[var(--sg-accent)] focus:shadow-[0_0_0_4px_var(--sg-accent-soft)]"
                style={{ borderColor: "var(--sg-line)" }}
              />
            )}
          </section>

          {/* Action */}
          <div className="flex justify-end">
            <button type="button" disabled={platforms.length === 0} className="sg-btn sg-btn-primary px-6 py-3 text-sm">
              Continue{platforms.length > 0 && ` with ${platforms.length} platform${platforms.length > 1 ? "s" : ""}`}
              <ArrowRight size={16} />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}