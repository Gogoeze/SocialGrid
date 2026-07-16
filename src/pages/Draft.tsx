// // export default function Draft() {
// //   return (
// //     <div>
// //       <h1>Draft</h1>
// //     </div>
// //   )
// // }




// const DRAFTS_DATA = [
//   {
//     id: 1,
//     title: 'Visual Storytelling in 2024',
//     description: 'Exploring the shift from high-production video to authentic, raw storytelling across platforms...',
//     lastEdited: '2h ago',
//     image: 'https://unsplash.com'
//   },
//   {
//     id: 2,
//     title: 'Quick Tip: Grid Alignment',
//     description: 'How to use our new AI-assisted grid tools to ensure your feed looks balanced at a glance.',
//     lastEdited: 'Oct 24',
//     image: 'https://unsplash.com'
//   },
//   {
//     id: 3,
//     title: 'Community Announcement',
//     description: '"We\'re so excited to finally reveal what we\'ve been working on behind the scenes for the last six months. It\'s been a journey of organic growth and..."',
//     lastEdited: 'Oct 22',
//     image: 'https://unsplash.com'
//   }
// ];

// const HISTORY_DATA = [
//   {
//     id: 1,
//     platform: 'LinkedIn • Published',
//     date: 'Posted on Oct 20, 2023',
//     text: 'The future of social media is organic. Here\'s ...',
//     stat: '1.2k',
//     statType: 'VIEWS'
//   },
//   {
//     id: 2,
//     platform: 'Instagram • Published',
//     date: 'Posted on Oct 18, 2023',
//     text: 'Mid-week Inspiration: organic textures and wa...',
//     stat: '850',
//     statType: 'LIKES'
//   },
//   {
//     id: 3,
//     platform: 'Twitter (X) • Published',
//     date: 'Posted on Oct 15, 2023',
//     text: 'New feature update: AI caption generator no...',
//     stat: '2.4k',
//     statType: 'REACH'
//   },
//   {
//     id: 4,
//     platform: 'Facebook • Published',
//     date: 'Posted on Oct 12, 2023',
//     text: 'Behind the scenes: The making of SocialGrid.',
//     stat: '420',
//     statType: 'SHARES'
//   },
//   {
//     id: 5,
//     platform: 'Instagram • Published',
//     date: 'Posted on Oct 08, 2023',
//     text: 'Autumn palette explorations #minima...',
//     stat: '1.1k',
//     statType: 'LIKES'
//   }
// ];

// export default function Draft() {
//   return (
//     <div className="w-full bg-[#fdfcf7] py-12 font-sans antialiased text-gray-800">
      
//       {/* Header Container */}
//       <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-12 px-10 pb-10 mx-auto w-full">
//         <div>
//           <h1 className="text-4xl font-bold tracking-tight text-gray-950 mb-3">Content Hub</h1>
//           <p className="text-sm leading-relaxed text-gray-500 font-medium">
//             Refine your ideas or review your social journey. Every post is a grid piece in your visual story.
//           </p>
//         </div>
//         <button className="self-start bg-[#c4a882] text-white text-xs font-semibold px-6 py-2.5 rounded shadow-sm hover:bg-[#b59973] transition-colors whitespace-nowrap">
//           Create New Post
//         </button>
//       </div>

//       {/* Primary Responsive Split Grid */}
//       {/* <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto w-full items-start"> */}
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 px-10 pb-10 mx-auto w-full items-start">

        
//         {/* Left Column: Drafts Container (Take up 5 out of 12 columns) */}
//         <div className="lg:col-span-5 w-full">
//           <div className="flex items-center justify-between mb-8 pb-2 border-b border-gray-100">
//             <div className="flex items-center gap-2">
//               {/* Fallback geometric icon representation instead of broken font script */}
//               <div className="w-4 h-4 border-2 border-gray-600 rounded flex flex-col justify-between p-0.5">
//                 <div className="h-0.5 w-full bg-gray-600"></div>
//                 <div className="h-0.5 w-2/3 bg-gray-600"></div>
//               </div>
//               <h2 className="text-sm font-bold uppercase tracking-wider text-gray-700">Drafts</h2>
//             </div>
//             <span className="bg-[#fcf5ec] text-[#c4a882] text-xs font-bold px-2.5 py-0.5 rounded-full border border-[#f5ebdd]">
//               3 Pending
//             </span>
//           </div>

//           <div className="flex flex-col gap-6">
//             {DRAFTS_DATA.map((draft) => (
//               <div key={draft.id} className="flex gap-4 items-start group">
//                 <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0 shadow-sm">
//                   <img src={draft.image} alt="" className="w-full h-full object-cover" />
//                 </div>
//                 <div className="flex-1 min-w-0">
//                   <div className="flex items-baseline justify-between gap-4 mb-1">
//                     <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#c4a882] transition-colors truncate">
//                       {draft.title}
//                     </h3>
//                     <span className="text-[11px] text-gray-400 font-medium whitespace-nowrap">
//                       Last edited: {draft.lastEdited}
//                     </span>
//                   </div>
//                   <p className="text-xs text-gray-500 leading-normal line-clamp-2">
//                     {draft.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Column: Post History Container (Take up 7 out of 12 columns) */}
//         <div className="lg:col-span-7 w-full lg:border-l lg:border-gray-200 lg:pl-12">
//           <div className="flex items-center justify-between mb-8 pb-2 border-b border-gray-100">
//             <div className="flex items-center gap-2">
//               <div className="w-4 h-4 rounded-full border-2 border-gray-600 border-t-transparent animate-none rotate-45"></div>
//               <h2 className="text-sm font-bold uppercase tracking-wider text-gray-700">Post History</h2>
//             </div>
//             <button className="text-xs font-bold text-gray-400 hover:text-gray-600 transition-colors">
//               Export Report
//             </button>
//           </div>

//           <div className="flex flex-col gap-5">
//             {HISTORY_DATA.map((item) => (
//               <div key={item.id} className="flex items-center justify-between gap-4 py-2 border-b border-gray-50/60 last:border-0">
//                 <div className="min-w-0 flex-1">
//                   <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mb-1 text-[11px] font-semibold">
//                     <span className="text-blue-600 tracking-wide">{item.platform.split(' • ')[0]}</span>
//                     <span className="text-gray-300">•</span>
//                     <span className="text-gray-400">{item.platform.split(' • ')[1]}</span>
//                     <span className="text-gray-300 font-normal">|</span>
//                     <span className="text-gray-400 font-normal">{item.date}</span>
//                   </div>
//                   <p className="text-xs font-medium text-gray-800 truncate">
//                     {item.text}
//                   </p>
//                 </div>

//                 {/* Right Side Stats Panel Row Element */}
//                 <div className="flex items-center gap-6 flex-shrink-0">
//                   <div className="text-right">
//                     <div className="text-sm font-bold text-gray-900 leading-none">{item.stat}</div>
//                     <div className="text-[9px] font-bold text-gray-400 tracking-wider mt-0.5">{item.statType}</div>
//                   </div>
//                   <button className="text-gray-400 hover:text-gray-600 p-1 transition-colors">
//                     <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

const DRAFTS_DATA = [
  {
    id: 1,
    title: 'Visual Storytelling in 2024',
    description: 'Exploring the shift from high-production video to authentic, raw storytelling across platforms...',
    lastEdited: '2h ago',
    image: 'https://unsplash.com'
  },
  {
    id: 2,
    title: 'Quick Tip: Grid Alignment',
    description: 'How to use our new AI-assisted grid tools to ensure your feed looks balanced at a glance.',
    lastEdited: 'Oct 24',
    image: 'https://unsplash.com'
  },
  {
    id: 3,
    title: 'Community Announcement',
    description: '"We\'re so excited to finally reveal what we\'ve been working on behind the scenes for the last six months. It\'s been a journey of organic growth and..."',
    lastEdited: 'Oct 22',
    image: 'https://unsplash.com'
  }
];

export default function Draft() {
  return (
    <div className="w-full min-h-screen bg-[var(--color-background)] px-6 md:px-10 py-12 font-sans antialiased text-[#222222]">
      <div className="pb-10 w-full">
        
        {/* Top Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-semibold text-primary mb-2">Content Hub</h1>
            <p className="text-sm leading-relaxed text-gray-400 font-medium">
              Refine your ideas or review your social journey. Every post is a grid piece in your visual story.
            </p>
          </div>
          <button className="self-start bg-[#c4a882] text-white text-xs font-semibold px-6 py-2.5 rounded hover:bg-[#b59973] transition-colors whitespace-nowrap">
            Create New Post
          </button>
        </div>

        {/* Section Heading Container */}
        <div className="flex items-center justify-between mb-6 pb-2 border-b border-gray-100">
          <div className="flex items-center gap-2 text-gray-700">
            {/* Minimalist document line icon */}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h2 className="text-xs font-bold uppercase tracking-wider">Drafts</h2>
          </div>
          
          {/* Subtle Accent Pill Badge */}
          <span className="bg-[#fef4e8] text-[#c4a882] text-[10px] font-bold px-2 py-0.5 rounded border border-[#f7ecd9]">
            3 PENDING
          </span>
        </div>

        {/* Full Width Linear Draft Cards List */}
        <div className="space-y-4">
          {DRAFTS_DATA.map((draft) => (
            <div 
              key={draft.id} 
              className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl border border-gray-50 bg-[#fafafa]/50 hover:bg-[#fcfbf7] hover:border-[#f3eee0] transition-all"
            >
              {/* Left Side Info Blocks Group */}
              <div className="flex gap-4 items-center min-w-0 flex-1">
                {/* Media Image Square Block */}
                <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 border border-gray-100 shadow-sm">
                  <img src={draft.image} alt="" className="w-full h-full object-cover" />
                </div>
                
                {/* Meta Core Text Details Component Group */}
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#c4a882] transition-colors truncate mb-1">
                    {draft.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-medium line-clamp-1">
                    {draft.description}
                  </p>
                </div>
              </div>

              {/* Right Side Sync Timeline Timestamp */}
              <div className="flex-shrink-0 self-end sm:self-center text-right">
                <span className="text-[11px] text-gray-400 font-medium block">
                  Last edited: {draft.lastEdited}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

