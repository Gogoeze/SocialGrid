import { useState } from "react";
import { FileText, Search, Plus, Pencil, Copy, Trash2, Clock, Image as ImageIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";


type DraftItem = {
  id: number;
  title: string;
  description: string;
  lastEdited: string;
  image?: string;
};

const INITIAL_DRAFTS: DraftItem[] = [
  {
    id: 1,
    title: "Visual Storytelling in 2024",
    description: "Exploring the shift from high-production video to authentic, raw storytelling across platforms...",
    lastEdited: "2h ago",
  },
  {
    id: 2,
    title: "Quick Tip: Grid Alignment",
    description: "How to use our new AI-assisted grid tools to ensure your feed looks balanced at a glance.",
    lastEdited: "Oct 24",
  },
  {
    id: 3,
    title: "Community Announcement",
    description:
      "We're so excited to finally reveal what we've been working on behind the scenes for the last six months. It's been a journey of organic growth and...",
    lastEdited: "Oct 22",
  },
];

const THUMB_GRADIENTS = [
  "linear-gradient(135deg,#e9c9ad,#a06748)",
  "linear-gradient(135deg,#f3dcc4,#c48b63)",
  "linear-gradient(135deg,#d9c3ae,#834f32)",
];

function Thumb({ src, index }: { src?: string; index: number }) {
  const [failed, setFailed] = useState(false);
  if (src && !failed) {
    return <img src={src} alt="" onError={() => setFailed(true)} className="h-full w-full object-cover" />;
  }
  return (
    <div
      className="h-full w-full grid place-items-center text-white/90"
      style={{ background: THUMB_GRADIENTS[index % THUMB_GRADIENTS.length] }}
    >
      <ImageIcon size={22} strokeWidth={1.6} />
    </div>
  );
}

export default function Draft() {
  const navigate = useNavigate();
  const [drafts, setDrafts] = useState<DraftItem[]>(INITIAL_DRAFTS);
  const [query, setQuery] = useState("");

  const visible = drafts.filter((d) =>
    `${d.title} ${d.description}`.toLowerCase().includes(query.trim().toLowerCase())
  );

  const remove = (id: number) => setDrafts((all) => all.filter((d) => d.id !== id));

  const duplicate = (id: number) =>
    setDrafts((all) => {
      const src = all.find((d) => d.id === id);
      if (!src) return all;
      return [{ ...src, id: Date.now(), title: `Copy of ${src.title}`, lastEdited: "Just now" }, ...all];
    });

  return (
    <div className="sg-page px-6 md:px-10 py-10">
      <div className="mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div>
            <h1 className="font-display text-4xl md:text-5xl font-semibold mb-2">
              Content <span className="sg-gradient-text">Hub</span>
            </h1>
            <p className="text-sm lg:text-base font-medium max-w-[36rem]" style={{ color: "var(--sg-muted)" }}>
              Refine your ideas or review your social journey. Every post is a grid piece in your visual story.
            </p>
          </div>
          {/* TODO: wire to your router, e.g. onClick={() => navigate("/new-post")} */}
          <button type="button" className="sg-btn sg-btn-primary px-6 py-3 text-sm self-start sm:self-auto whitespace-nowrap">
            <Plus size={16} /> Create New Post
          </button>
        </div>

        {/* TOOLBAR */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
          <div className="flex items-center gap-3">
            <span className="sg-tile-icon !h-9 !w-9 !rounded-xl"><FileText size={16} /></span>
            <h2 className="font-display text-lg font-semibold">Drafts</h2>
            <span
              className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
              style={{ background: "var(--sg-accent-soft)", color: "var(--sg-accent-2)" }}
            >
              {drafts.length} pending
            </span>
          </div>

          <label className="sg-card flex items-center gap-2 px-4 py-2 sm:w-72 !rounded-full">
            <Search size={16} style={{ color: "var(--sg-muted)" }} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search drafts"
              className="w-full bg-transparent text-sm outline-none placeholder:text-[#a39485]"
            />
          </label>
        </div>

        {/* LIST */}
        <div className="space-y-4">
          {visible.map((draft, i) => (
            <div
              key={draft.id}
              className="sg-card sg-row group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4"
            >
              <div className="flex gap-4 items-center min-w-0 flex-1">
                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-2xl shadow-sm">
                  <Thumb src={draft.image} index={i} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold truncate mb-1 transition-colors group-hover:text-[var(--sg-accent-2)]">
                    {draft.title}
                  </h3>
                  <p className="text-xs font-medium line-clamp-2 sm:line-clamp-1" style={{ color: "var(--sg-muted)" }}>
                    {draft.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-medium" style={{ color: "var(--sg-muted)" }}>
                  <Clock size={12} /> {draft.lastEdited}
                </span>
                <div className="flex items-center gap-1 sm:opacity-0 sm:group-hover:opacity-100 sm:focus-within:opacity-100 transition-opacity">
                  <button type="button" aria-label="Edit draft" className="sg-icon-btn"><Pencil size={16} /></button>
                  <button type="button" aria-label="Duplicate draft" onClick={() => duplicate(draft.id)} className="sg-icon-btn">
                    <Copy size={16} />
                  </button>
                  <button type="button" aria-label="Delete draft" onClick={() => remove(draft.id)} className="sg-icon-btn sg-icon-btn-danger">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {visible.length === 0 && (
            <div className="sg-card p-10 text-center">
              <span className="sg-tile-icon mx-auto mb-3"><FileText size={22} /></span>
              <p className="text-sm font-semibold">{drafts.length === 0 ? "No drafts yet" : "No drafts match your search"}</p>
              <p className="text-xs mt-1" style={{ color: "var(--sg-muted)" }}>
                {drafts.length === 0 ? "Start a new post and it will show up here." : "Try a different keyword."}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}