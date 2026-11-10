import { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink, useNavigate } from "react-router-dom";
import { LayoutGrid, Plus, Menu, X } from "lucide-react";
import Dashboard from "./pages/Dashboard";
import NewPost from "./pages/NewPost";
import Draft from "./pages/Draft";
import History from "./pages/History";
import Settings from "./pages/Settings";

const LINKS = [
  { to: "/", label: "Dashboard", end: true },
  { to: "/new-post", label: "New Post" },
  { to: "/draft", label: "Drafts" },
  { to: "/history", label: "History" },
  { to: "/settings", label: "Settings" },
];

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `sg-navlink ${isActive ? "sg-navlink-active" : ""}`;

  return (
    <nav className="sg-nav">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10 py-3">
        <button type="button" onClick={() => navigate("/")} className="flex items-center gap-2.5">
          <span className="sg-btn sg-btn-primary h-9 w-9 !rounded-xl">
            <LayoutGrid size={18} />
          </span>
          <span className="font-display text-xl font-semibold">SocialGrid</span>
        </button>

        {/* desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => navigate("/new-post")}
            className="sg-btn sg-btn-primary hidden sm:inline-flex px-5 py-2 text-sm"
          >
            <Plus size={16} /> New Post
          </button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="sg-icon-btn md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden border-t px-6 pb-4 pt-2 flex flex-col gap-1" style={{ borderColor: "var(--sg-line)" }}>
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass} onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}
          <button
            type="button"
            onClick={() => { setOpen(false); navigate("/new-post"); }}
            className="sg-btn sg-btn-primary mt-2 px-5 py-2.5 text-sm sm:hidden"
          >
            <Plus size={16} /> New Post
          </button>
        </div>
      )}
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/new-post" element={<NewPost />} />
        <Route path="/draft" element={<Draft />} />
        <Route path="/history" element={<History />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;