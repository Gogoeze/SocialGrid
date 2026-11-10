import type { IconType } from "react-icons";
import { FaInstagram, FaLinkedinIn, FaTiktok, FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { Plus, Settings2, Link2 } from "lucide-react";

type Props = {
  name: string;
  icon?: string; // no longer needed, kept so existing usage doesn't break
  lastPost: string;
  connected: boolean;
  brandColor: string;
  onQuickPost: () => void;
  onManage: () => void;
  onConnect: () => void;
};

const ICONS: Record<string, IconType> = {
  Instagram: FaInstagram,
  LinkedIn: FaLinkedinIn,
  TikTok: FaTiktok,
  X: FaXTwitter,
  Facebook: FaFacebookF,
};

const INSTAGRAM_GRADIENT = "linear-gradient(45deg,#f9a03f,#e1306c,#8a3ab9)";

export default function PlatformCard({ name, lastPost, connected, brandColor, onQuickPost, onManage, onConnect }: Props) {
  const Icon = ICONS[name];

  return (
    <div className="sg-card sg-row p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span
          className="grid h-12 w-12 place-items-center rounded-2xl text-white shadow-sm"
          style={{ background: name === "Instagram" ? INSTAGRAM_GRADIENT : brandColor }}
        >
          {Icon && <Icon size={20} />}
        </span>
        <span
          className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold"
          style={connected ? { background: "var(--sg-accent-soft)", color: "var(--sg-accent-2)" } : { background: "#f1ece6", color: "var(--sg-muted)" }}
        >
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: connected ? "#16a34a" : "#b8aa9c" }} />
          {connected ? "Connected" : "Not connected"}
        </span>
      </div>

      <div>
        <h3 className="font-display text-lg font-semibold">{name}</h3>
        <p className="text-xs" style={{ color: "var(--sg-muted)" }}>
          {connected ? `Last post: ${lastPost}` : `Connect to post to ${name}`}
        </p>
      </div>

      {connected ? (
        <div className="flex items-center gap-2">
          <button type="button" onClick={onQuickPost} className="sg-btn sg-btn-primary flex-1 py-2.5 text-xs">
            <Plus size={14} /> Quick Post
          </button>
          <button
            type="button"
            aria-label={`Manage ${name}`}
            onClick={onManage}
            className="sg-icon-btn border bg-white"
            style={{ borderColor: "var(--sg-line)" }}
          >
            <Settings2 size={16} />
          </button>
        </div>
      ) : (
        <button type="button" onClick={onConnect} className="sg-btn sg-btn-dark w-full py-2.5 text-xs">
          <Link2 size={14} /> Connect
        </button>
      )}
    </div>
  );
}