import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Dashboard from './pages/Home/Dashboard'
import NewPost from './pages/NewPost'
import Draft from './pages/Draft'
import History from './pages/History'
import Settings from './pages/Settings'

function Navbar() {
  const navigate = useNavigate()

  return (
    <nav className="w-full bg-[#f4f4ef] shadow-xs px-10 border-b border-border py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold text-primary tracking-tight">SocialGrid</h1>

      <div className="flex gap-8 text-sm font-bold text-secondary">
        <button onClick={() => navigate('/')} className="hover:text-primary hover:underline transition">Dashboard</button>
        <button onClick={() => navigate('/new-post')} className="hover:text-primary hover:underline transition">New Post</button>
        <button onClick={() => navigate('/draft')} className="hover:text-primary hover:underline transition">Drafts</button>
        <button onClick={() => navigate('/history')} className="hover:text-primary hover:underline transition">History</button>
        <button onClick={() => navigate('/settings')} className="hover:text-primary hover:underline transition">Settings</button>
      </div>

      <button
        onClick={() => navigate('/new-post')}
        className="bg-[#c4a882] text-white text-sm px-5 py-2 rounded-full hover:bg-[#b8976e] transition"
      >
        + New Post
      </button>
    </nav>
  )
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
  )
}

export default App