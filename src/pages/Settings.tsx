import { useState } from "react";
import type { IconType } from "react-icons";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { RefreshCw, Target, Hash, ShieldCheck, Globe, Briefcase, Coffee, Zap, Lightbulb, Check } from "lucide-react";

type AutomationKey = "linkedin" | "instagram" | "x" | "commons";

type Prefs = {
  automation: Record<AutomationKey, boolean>;
  tone: string;
  hashtagLimit: number;
  guardrails: string;
};

const DEFAULTS: Prefs = {
  automation: { linkedin: true, instagram: false, x: true, commons: false },
  tone: "Professional",
  hashtagLimit: 12,
  guardrails: "",
};

const CHANNELS: { key: AutomationKey; label: string; Icon: IconType | typeof Globe; bg: string }[] = [
  { key: "linkedin", label: "LinkedIn", Icon: FaLinkedinIn, bg: "#0a66c2" },
  { key: "instagram", label: "Instagram", Icon: FaInstagram, bg: "linear-gradient(45deg,#f9a03f,#e1306c,#8a3ab9)" },
  { key: "x", label: "X (Twitter)", Icon: FaXTwitter, bg: "#111111" },
  { key: "commons", label: "Commons", Icon: Globe, bg: "#0d9488" },
];

const TONES = [
  { name: "Professional", Icon: Briefcase },
  { name: "Casual", Icon: Coffee },
  { name: "Hype", Icon: Zap },
  { name: "Witty", Icon: Lightbulb },
];

function SectionTitle({ Icon, title, right }: { Icon: typeof Globe; title: string; right?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between mb-1">
      <div className="flex items-center gap-3">
        <span className="sg-tile-icon !h-9 !w-9 !rounded-xl"><Icon size={16} /></span>
        <h2 className="font-display text-lg font-semibold">{title}</h2>
      </div>
      {right}
    </div>
  );
}

export default function Settings() {
  const [saved, setSaved] = useState<Prefs>(DEFAULTS); // last saved state
  const [prefs, setPrefs] = useState<Prefs>(DEFAULTS); // working copy
  const [flash, setFlash] = useState(false);

  const dirty = JSON.stringify(prefs) !== JSON.stringify(saved);
  const fill = (prefs.hashtagLimit / 30) * 100;

  const toggle = (key: AutomationKey) =>
    setPrefs((p) => ({ ...p, automation: { ...p.automation, [key]: !p.automation[key] } }));

  const save = () => {
    // TODO: send `prefs` to the backend once the endpoint's schema is confirmed in Swagger
    setSaved(prefs);
    setFlash(true);
    setTimeout(() => setFlash(false), 2000);
  };

  const muted = { color: "var(--sg-muted)" };

  return (
    <div className="sg-page px-6 md:px-10 py-10">
      <div className="mx-auto ">
        {/* HEADER */}
        <header className="mb-8">
          <h1 className="font-display text-4xl md:text-5xl font-semibold mb-2">
            Settings & <span className="sg-gradient-text">Restrictions</span>
          </h1>
          <p className="text-sm lg:text-base font-medium" style={muted}>
            Configure your AI engine's behavior and cross-platform automation rules.
          </p>
        </header>

        <div className="space-y-6">
          {/* 1. Auto post automation */}
          <section className="sg-card p-6">
            <SectionTitle Icon={RefreshCw} title="Auto Post Automation" />
            <p className="text-xs mb-6" style={muted}>
              Enable instant publishing when content meets your AI confidence score threshold.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CHANNELS.map(({ key, label, Icon, bg }) => {
                const on = prefs.automation[key];
                return (
                  <div key={key} className="flex items-center justify-between rounded-2xl border bg-white px-4 py-3" style={{ borderColor: "var(--sg-line)" }}>
                    <div className="flex items-center gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-xl text-white" style={{ background: bg }}>
                        <Icon size={16} />
                      </span>
                      <span className="text-sm font-semibold">{label}</span>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={on}
                      aria-label={`Auto post to ${label}`}
                      onClick={() => toggle(key)}
                      className="sg-switch"
                    />
                  </div>
                );
              })}
            </div>
          </section>

          {/* 2. Tone */}
          <section className="sg-card p-6">
            <SectionTitle Icon={Target} title="AI Tone Preferences" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
              {TONES.map(({ name, Icon }) => {
                const active = prefs.tone === name;
                return (
                  <button
                    key={name}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setPrefs((p) => ({ ...p, tone: name }))}
                    className={`sg-tile ${active ? "sg-tile-active" : ""}`}
                  >
                    {active && <span className="sg-tile-check"><Check size={12} strokeWidth={3} /></span>}
                    <span
                      className="sg-tile-icon"
                      style={active ? { background: "linear-gradient(135deg,var(--sg-accent),var(--sg-accent-2))" } : undefined}
                    >
                      <Icon size={20} />
                    </span>
                    <span className="text-xs font-semibold">{name}</span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* 3. Hashtags */}
          <section className="sg-card p-6">
            <SectionTitle
              Icon={Hash}
              title="Hashtag Limits"
              right={
                <span className="font-display text-2xl font-semibold sg-gradient-text">{prefs.hashtagLimit}</span>
              }
            />
            <p className="text-xs mb-6" style={muted}>Set the maximum number of tags AI will suggest per post.</p>
            <input
              type="range"
              min={0}
              max={30}
              value={prefs.hashtagLimit}
              onChange={(e) => setPrefs((p) => ({ ...p, hashtagLimit: Number(e.target.value) }))}
              aria-label="Hashtag limit"
              className="sg-range"
              style={{
                background: `linear-gradient(to right, var(--sg-accent) 0%, var(--sg-accent-2) ${fill}%, #eadfd3 ${fill}%, #eadfd3 100%)`,
              }}
            />
            <div className="flex justify-between text-[10px] font-bold mt-2 px-0.5" style={muted}>
              <span>0</span>
              <span>30</span>
            </div>
          </section>

          {/* 4. Guardrails */}
          <section className="sg-card p-6">
            <SectionTitle Icon={ShieldCheck} title="AI Guardrails" />
            <p className="text-xs mb-4" style={muted}>What should the AI never do?</p>
            <textarea
              value={prefs.guardrails}
              maxLength={500}
              onChange={(e) => setPrefs((p) => ({ ...p, guardrails: e.target.value }))}
              placeholder="Example: Never use emojis on LinkedIn, avoid mentioning competitors, don't use slang in professional posts."
              className="w-full min-h-[110px] rounded-2xl border bg-white p-4 text-sm outline-none resize-none leading-relaxed transition-all focus:border-[var(--sg-accent)] focus:shadow-[0_0_0_4px_var(--sg-accent-soft)]"
              style={{ borderColor: "var(--sg-line)" }}
            />
            <div className="flex justify-between text-[11px] font-medium mt-2" style={muted}>
              <span>Separate instructions with periods or line breaks.</span>
              <span>{prefs.guardrails.length}/500</span>
            </div>
          </section>

          {/* Footer actions */}
          <div className="flex items-center justify-end gap-4 pt-2">
            <span
              className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-opacity ${flash ? "opacity-100" : "opacity-0"}`}
              style={{ color: "var(--sg-accent-2)" }}
              aria-live="polite"
            >
              <Check size={14} strokeWidth={3} /> Preferences saved
            </span>
            <button
              type="button"
              disabled={!dirty}
              onClick={() => setPrefs(saved)}
              className="sg-btn px-6 py-2.5 text-xs border bg-white"
              style={{ borderColor: "var(--sg-line)", color: "var(--sg-muted)" }}
            >
              Discard Changes
            </button>
            <button type="button" disabled={!dirty} onClick={save} className="sg-btn sg-btn-primary px-7 py-2.5 text-xs">
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}