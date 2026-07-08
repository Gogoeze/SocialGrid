const HISTORY_DATA = [
  {
    id: 1,
    platform: 'LinkedIn',
    status: 'Published',
    date: 'Posted on Oct 20, 2023',
    text: "The future of social media is organic. Here's why...",
    statValue: '1.2k',
    statType: 'VIEWS',
    platformColor: 'text-blue-600 bg-blue-50'
  },
  {
    id: 2,
    platform: 'Instagram',
    status: 'Published',
    date: 'Posted on Oct 18, 2023',
    text: 'Mid-week inspiration: organic textures and warm tones.',
    statValue: '850',
    statType: 'LIKES',
    platformColor: 'text-pink-600 bg-pink-50'
  },
  {
    id: 3,
    platform: 'Twitter (X)',
    status: 'Published',
    date: 'Posted on Oct 15, 2023',
    text: 'New feature update: AI caption generator now supports...',
    statValue: '2.4k',
    statType: 'REACH',
    platformColor: 'text-gray-900 bg-gray-100'
  },
  {
    id: 4,
    platform: 'Facebook',
    status: 'Published',
    date: 'Posted on Oct 12, 2023',
    text: 'Behind the scenes: The making of SocialGrid.',
    statValue: '420',
    statType: 'SHARES',
    platformColor: 'text-blue-700 bg-blue-50'
  },
  {
    id: 5,
    platform: 'Instagram',
    status: 'Published',
    date: 'Posted on Oct 08, 2023',
    text: 'Autumn palette explorations #minimalist #design',
    statValue: '1.1k',
    statType: 'LIKES',
    platformColor: 'text-pink-600 bg-pink-50'
  }
];

export default function History() {
  return (
    <div className="w-full min-h-screen bg-[var(--color-background)] px-6 md:px-10 py-12 font-sans antialiased text-[#222222]">
      <div className="mx-auto w-full">
        
        {/* Top Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Post History</h1>
            <p className="text-sm leading-relaxed text-gray-400 font-medium">
              Review your social journey and analyze performance across all platforms. Every post is a milestone in your brand's growth.
            </p>
          </div>
          <button className="self-start bg-[#c4a882] text-white text-xs font-semibold px-6 py-2.5 rounded hover:bg-[#b59973] transition-colors whitespace-nowrap">
            Create New Post
          </button>
        </div>

        {/* Action Header Label Segment */}
        <div className="flex items-center justify-between mb-6 pb-2 border-b border-gray-100">
          <div className="flex items-center gap-2 text-gray-700">
            {/* Clock History Tracking Icon */}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-xs font-bold uppercase tracking-wider">Post History</h2>
          </div>
          
          <button className="text-xs font-bold text-gray-400 hover:text-gray-600 transition-colors tracking-wide">
            Export Report
          </button>
        </div>

        {/* Clean Line List Elements Block Container */}
        <div className="divide-y divide-gray-100/70">
          {HISTORY_DATA.map((item) => (
            <div 
              key={item.id} 
              className="flex items-center justify-between gap-6 py-5 group hover:bg-[#fafafa]/40 px-2 rounded-xl transition-all"
            >
              {/* Left Side Content Segment */}
              <div className="flex items-start gap-4 min-w-0 flex-1">
                {/* Checkmark Status Indicator Circle */}
                <div className="mt-1 w-5 h-5 rounded-full bg-[#fcf6ee] border border-[#f5ebdd] flex items-center justify-center flex-shrink-0 text-[#c4a882]">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <div className="min-w-0 flex-1">
                  {/* Platform & Status Row Tags */}
                  <div className="flex items-center gap-2 mb-1.5 text-[11px] font-bold tracking-wide">
                    <span className="text-gray-800">{item.platform}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-[#c4a882]">{item.status}</span>
                  </div>
                  
                  {/* Core Snippet Post Copy Text */}
                  <p className="text-sm font-semibold text-gray-800 truncate pr-4">
                    {item.text}
                  </p>
                </div>
              </div>

              {/* Right Side Stats & Timeline Metadata Panels Row */}
              <div className="flex items-center gap-8 flex-shrink-0">
                
                {/* Timeline Segment */}
                <span className="text-xs text-gray-400 font-medium hidden sm:inline-block">
                  {item.date}
                </span>

                {/* Quantitative Analytics Breakdown Element */}
                <div className="text-right w-16">
                  <div className="text-sm font-black text-gray-900 leading-none">{item.statValue}</div>
                  <div className="text-[9px] font-extrabold text-gray-400 tracking-wider mt-1">{item.statType}</div>
                </div>

                {/* External Target Platform Anchor Action Icon Toggle */}
                <button className="text-gray-300 hover:text-gray-500 p-1.5 rounded-md hover:bg-gray-50 transition-all">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
