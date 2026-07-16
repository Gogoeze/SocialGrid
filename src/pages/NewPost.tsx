export default function NewPost() {
  return (
    // <div className="min-h-screen bg-[#fcfaf7] p-4 md:p-8 lg:p-10 font-sans">
      <div className="bg-[var(--color-background)] font-sans">

      
      {/* HEADER SECTION */}
      {/* <div className="text-center max-w-2xl mx-auto mb-10 mt-6"> */}
            <div className="text-center mb-10 pt-6">

        <h1 className="text-4xl font-semibold text-primary">
          Craft Your Story
        </h1>
        <p className="text-[#7c6e62] mt-2 text-sm lg:text-base font-medium">
          Seamlessly schedule across all your platforms with AI-assisted creative <br></br> workflows. 
        </p>
      </div>

      {/*MAIN LAYOUT CONTAINER */}
      {/* <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 items-start"> */}
            <div className="mx-auto flex flex-col lg:flex-row px-10 pb-10 gap-8 items-start">

        
        {/*LEFT SIDEBAR COLUMN*/}
        <div className="w-full lg:w-1/4 space-y-6">
          
          {/* Creation Steps Tracker */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#f0eae1]">
            <h3 className="text-xs font-bold text-[#9c8e82] mb-4 uppercase tracking-wider">Creation Steps</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#dca876] text-xs font-bold text-white">1</span>
                <span className="text-sm font-semibold text-[#2d251e]">Target Channels</span>
              </div>
              <div className="flex items-center gap-3 opacity-40">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ebdcd0] text-xs font-bold text-[#2d251e]">2</span>
                <span className="text-sm font-semibold text-[#2d251e]">Media Assets</span>
              </div>
              <div className="flex items-center gap-3 opacity-40">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ebdcd0] text-xs font-bold text-[#2d251e]">3</span>
                <span className="text-sm font-semibold text-[#2d251e]">Content & Voice</span>
              </div>
            </div>
          </div>

          {/* Voice Capturing Prompt */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#f0eae1] text-center flex flex-col items-center justify-center py-8">
            <div className="w-12 h-12 rounded-full bg-[#fffbf7] border border-dashed border-[#dca876] flex items-center justify-center mb-3">
              {/* Mic Icon Placeholder */}
              <svg className="w-5 h-5 text-[#dca876]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <h4 className="text-sm font-bold text-[#2d251e] mb-1">Voice Capturing</h4>
            <p className="text-xs text-[#7c6e62] leading-relaxed px-2">
              Share the core point aloud, our AI will draft the copy and select tailored features.
            </p>
          </div>

        </div>

        {/*RIGHT WORKSPACE COLUMN*/}
        <div className="w-full lg:w-3/4 space-y-8">
          
          {/* Step 1: Select Platforms */}
          <div className="bg-white p-6 rounded-xl border border-[#ebdcd0]">
            <h2 className="text-sm font-bold text-[#2d251e] mb-3">1. Select Platforms</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {/* Instagram Active */}
              <button className="flex flex-col items-center justify-center p-4 rounded-xl border-2 border-[#dca876] bg-[#fffbf7] gap-2 transition-all">
                <span className="text-lg">📸</span>
                <span className="text-xs font-semibold text-[#2d251e]">Instagram</span>
              </button>
              {/* LinkedIn */}
              <button className="flex flex-col items-center justify-center p-4 rounded-xl border border-[#ebdcd0] hover:border-[#dca876] gap-2 transition-all">
                <span className="text-lg">💼</span>
                <span className="text-xs font-semibold text-[#7c6e62]">LinkedIn</span>
              </button>
              {/* X */}
              <button className="flex flex-col items-center justify-center p-4 rounded-xl border border-[#ebdcd0] hover:border-[#dca876] gap-2 transition-all">
                <span className="text-lg">𝕏</span>
                <span className="text-xs font-semibold text-[#7c6e62]">X (Twitter)</span>
              </button>
              {/* TikTok */}
              <button className="flex flex-col items-center justify-center p-4 rounded-xl border border-[#ebdcd0] hover:border-[#dca876] gap-2 transition-all">
                <span className="text-lg">🎵</span>
                <span className="text-xs font-semibold text-[#7c6e62]">TikTok</span>
              </button>
            </div>
          </div>

          {/*Upload Media */}
          <div className="bg-white p-6 rounded-xl border border-[#ebdcd0]">
            <h2 className="text-sm font-bold text-[#2d251e] mb-3">2. Upload Media</h2>
            <div className="border-2 border-dashed border-[#ebdcd0] rounded-xl p-8 text-center flex flex-col items-center justify-center bg-[#fcfaf7] hover:border-[#dca876] transition-colors cursor-pointer">
              <svg className="w-10 h-10 text-[#a39485] mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm font-semibold text-[#2d251e]">Drag and drop assets here</p>
              <p className="text-xs text-[#7c6e62] mt-0.5 mb-4">or select files manually</p>
              <button className="bg-[#2d251e] text-white px-5 py-2 rounded-lg text-xs font-semibold hover:bg-opacity-90 transition-all">
                Browse Files
              </button>
            </div>
          </div>

          {/* Define Event Type */}
          <div className="bg-white p-6 rounded-xl border border-[#ebdcd0]">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-sm font-bold text-[#2d251e]">3. Define Event Type</h2>
              <span className="text-[10px] bg-[#fff4eb] text-[#dca876] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">✨ AI Enhanced</span>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {/* Event Card 1 */}
              <div className="group relative rounded-xl overflow-hidden border border-[#ebdcd0] cursor-pointer aspect-[4/3]">
                <div className="w-full h-full bg-[#eae3d8]" /> {/* Replace with actual img tags */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-3">
                  <span className="text-xs font-semibold text-white">Birthday</span>
                </div>
              </div>
              {/* Event Card 2 */}
              <div className="group relative rounded-xl overflow-hidden border border-[#ebdcd0] cursor-pointer aspect-[4/3]">
                <div className="w-full h-full bg-[#decbb7]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-3">
                  <span className="text-xs font-semibold text-white">Graduation</span>
                </div>
              </div>
              {/* Event Card 3 */}
              <div className="group relative rounded-xl overflow-hidden border border-[#ebdcd0] cursor-pointer aspect-[4/3]">
                <div className="w-full h-full bg-[#cbd5e1]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-3">
                  <span className="text-xs font-semibold text-white">Conference</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              {/* Event Card 1 */}
              <div className="group relative rounded-xl overflow-hidden border border-[#ebdcd0] cursor-pointer aspect-[4/3]">
                <div className="w-full h-full bg-[#eae3d8]" /> {/* Replace with actual img tags */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-3">
                  <span className="text-xs font-semibold text-white">Birthday</span>
                </div>
              </div>
              {/* Event Card 2 */}
              <div className="group relative rounded-xl overflow-hidden border border-[#ebdcd0] cursor-pointer aspect-[4/3]">
                <div className="w-full h-full bg-[#decbb7]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-3">
                  <span className="text-xs font-semibold text-white">Graduation</span>
                </div>
              </div>
              {/* Event Card 3 */}
              <div className="group relative rounded-xl overflow-hidden border border-[#ebdcd0] cursor-pointer aspect-[4/3]">
                <div className="w-full h-full bg-[#cbd5e1]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-3">
                  <span className="text-xs font-semibold text-white">Conference</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
