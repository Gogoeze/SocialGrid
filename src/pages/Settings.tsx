import { useState } from 'react';
export default function Settings() {
  // State for toggles
  const [automation, setAutomation] = useState({
    linkedin: true,
    instagram: false,
    x: true,
    commons: false,
  });

  // State for AI Tone Selection
  const [selectedTone, setSelectedTone] = useState('Professional');

  // State for Hashtag Slider limit
  const [hashtagLimit, setHashtagLimit] = useState(12);

  // State for AI Guardrails Textarea
  const [guardrails, setGuardrails] = useState('');

  const tones = [
    { name: 'Professional', icon: '💼' },
    { name: 'Casual', icon: '☕' },
    { name: 'Hype', icon: '⚡' },
    { name: 'Witty', icon: '💡' },
  ];

  return (
    <div className="w-full min-h-screen bg-[var(--color-background)] px-6 md:px-12 py-10 font-sans antialiased text-[#222222]">
      <div className="mx-auto w-full">
        
        {/* Main Header */}
        <header className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 mb-1">Settings & Restrictions</h1>
          <p className="text-xs text-gray-500 font-medium">
            Configure your AI engine's behavior and cross-platform automation rules.
          </p>
        </header>

        {/* Form Container */}
        <div className="space-y-6">
          
          {/* Section 1: Auto Post Automation */}
          <section className="bg-white rounded-2xl p-6 border border-[#f2efe4] shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm">🔄</span>
              <h2 className="text-sm font-bold tracking-tight text-gray-800">Auto Post Automation</h2>
            </div>
            <p className="text-[11px] text-gray-400 mb-6 leading-normal">
              Enable instant publishing when content meets your AI confidence score threshold.
            </p>

            {/* Toggles Grid */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-4">
              {/* LinkedIn */}
              <div className="flex items-center justify-between py-1">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white">in</div>
                  <span className="text-xs font-semibold text-gray-700">LinkedIn</span>
                </div>
                <button 
                  onClick={() => setAutomation(prev => ({ ...prev, linkedin: !prev.linkedin }))}
                  className={`w-8 h-4 rounded-full transition-colors relative flex items-center ${automation.linkedin ? 'bg-[#c4a882]' : 'bg-gray-200'}`}
                >
                  <span className={`w-3 h-3 bg-white rounded-full absolute shadow-sm transition-transform ${automation.linkedin ? 'transform translate-x-[17px]' : 'transform translate-x-[3px]'}`} />
                </button>
              </div>

              {/* Instagram */}
              <div className="flex items-center justify-between py-1">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600 flex items-center justify-center text-[10px] text-white">📸</div>
                  <span className="text-xs font-semibold text-gray-700">Instagram</span>
                </div>
                <button 
                  onClick={() => setAutomation(prev => ({ ...prev, instagram: !prev.instagram }))}
                  className={`w-8 h-4 rounded-full transition-colors relative flex items-center ${automation.instagram ? 'bg-[#c4a882]' : 'bg-gray-200'}`}
                >
                  <span className={`w-3 h-3 bg-white rounded-full absolute shadow-sm transition-transform ${automation.instagram ? 'transform translate-x-[17px]' : 'transform translate-x-[3px]'}`} />
                </button>
              </div>

              {/* X / Twitter */}
              <div className="flex items-center justify-between py-1">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded bg-black flex items-center justify-center text-[10px] font-bold text-white">X</div>
                  <span className="text-xs font-semibold text-gray-700">X (Twitter)</span>
                </div>
                <button 
                  onClick={() => setAutomation(prev => ({ ...prev, x: !prev.x }))}
                  className={`w-8 h-4 rounded-full transition-colors relative flex items-center ${automation.x ? 'bg-[#c4a882]' : 'bg-gray-200'}`}
                >
                  <span className={`w-3 h-3 bg-white rounded-full absolute shadow-sm transition-transform ${automation.x ? 'transform translate-x-[17px]' : 'transform translate-x-[3px]'}`} />
                </button>
              </div>

              {/* Commons */}
              <div className="flex items-center justify-between py-1">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded bg-teal-600 flex items-center justify-center text-[10px] text-white">🌐</div>
                  <span className="text-xs font-semibold text-gray-700">Commons</span>
                </div>
                <button 
                  onClick={() => setAutomation(prev => ({ ...prev, commons: !prev.commons }))}
                  className={`w-8 h-4 rounded-full transition-colors relative flex items-center ${automation.commons ? 'bg-[#c4a882]' : 'bg-gray-200'}`}
                >
                  <span className={`w-3 h-3 bg-white rounded-full absolute shadow-sm transition-transform ${automation.commons ? 'transform translate-x-[17px]' : 'transform translate-x-[3px]'}`} />
                </button>
              </div>
            </div>
          </section>

          {/* Section 2: AI Tone Preferences */}
          <section className="bg-white rounded-2xl p-6 border border-[#f2efe4] shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm">🎯</span>
              <h2 className="text-sm font-bold tracking-tight text-gray-800">AI Tone Preferences</h2>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {tones.map((tone) => {
                const isActive = selectedTone === tone.name;
                return (
                  <button
                    key={tone.name}
                    onClick={() => setSelectedTone(tone.name)}
                    className={`flex flex-col items-center justify-center py-3 px-2 rounded-xl transition-all border ${
                      isActive 
                        ? 'bg-[#5c4a37] text-white border-[#5c4a37]' 
                        : 'bg-transparent text-gray-500 border-gray-100 hover:border-gray-300'
                    }`}
                  >
                    <span className="text-sm mb-1">{tone.icon}</span>
                    <span className="text-[10px] font-bold tracking-wide">{tone.name}</span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Section 3: Hashtag Limits */}
          <section className="bg-white rounded-2xl p-6 border border-[#f2efe4] shadow-sm">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span className="text-sm">#</span>
                <h2 className="text-sm font-bold tracking-tight text-gray-800">Hashtag Limits</h2>
              </div>
              <span className="text-xs font-bold text-gray-600">{hashtagLimit}</span>
            </div>
            <p className="text-[11px] text-gray-400 mb-6 leading-normal">
              Set the maximum number of tags AI will suggest per post.
            </p>

            {/* Horizontal Input Range Slider */}
            <div className="relative pt-1 flex flex-col">
              <input
                type="range"
                min="0"
                max="30"
                value={hashtagLimit}
                onChange={(e) => setHashtagLimit(Number(e.target.value))}
                className="w-full h-1 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#c4a882]"
              />
              <div className="flex justify-between text-[9px] text-gray-400 font-bold mt-2 px-0.5">
                <span>0</span>
                <span>30</span>
              </div>
            </div>
          </section>

          {/* Section 4: AI Guardrails */}
          <section className="bg-white rounded-2xl p-6 border border-[#f2efe4] shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm">🛡️</span>
              <h2 className="text-sm font-bold tracking-tight text-gray-800">AI Guardrails</h2>
            </div>
            <p className="text-[11px] text-gray-400 mb-4 leading-normal">
              What should the AI never do?
            </p>

            <textarea
              value={guardrails}
              onChange={(e) => setGuardrails(e.target.value)}
              placeholder="Example: Never use emojis on LinkedIn, avoid mentioning competitors, don't use slang in professional posts."
              className="w-full min-h-[90px] border border-gray-100 rounded-xl p-3 text-xs bg-[#fafaf6] placeholder-gray-400 text-gray-700 outline-none focus:border-[#c4a882] focus:bg-white transition-all resize-none leading-relaxed"
            />
            <span className="text-[9px] text-gray-300 font-medium block mt-2">
              Separate instructions with periods or line breaks.
            </span>
          </section>

          {/* Footer Save Row Container */}
          <div className="flex items-center justify-end gap-6 pt-4">
            <button 
              type="button"
              className="text-xs font-bold text-gray-400 hover:text-gray-600 transition-colors"
            >
              Discard Changes
            </button>
                      {/* 1. Footing submission container finishes */}
          </div> 

        {/* 2. Main content wrapper finishes */}
        </div>
      </div>
    </div>
  );
} // 3. The actual JavaScript block function finishes here.

