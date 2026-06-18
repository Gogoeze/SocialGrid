import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarDays, Pencil, Sparkles } from 'lucide-react';
import PlatformCard from '../../components/ui/platformCard';
import BarChart from './Components/BarGraph';

// color: #834f32''

const platforms = [
  { name: 'Instagram', icon: 'instagram.svg', color: '#E1306C', connected: true, lastPost: '2 days ago' },
  { name: 'LinkedIn', icon: 'linkedin.svg', color: '#0A66C2', connected: true, lastPost: '5 days ago' },
  { name: 'TikTok', icon: 'tiktok.svg', color: '#000000', connected: false, lastPost: 'Not connected' },
  { name: 'X', icon: 'x.svg', color: '#000000', connected: false, lastPost: 'Not connected' },
  { name: 'Facebook', icon: 'facebook.svg', color: '#1877F2', connected: true, lastPost: '1 week ago' },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f5f0eb]">
      <main className="px-10 pb-10">
        
        {/* Header (Spans full width across the top) */}
        <div className="py-10">
          <h2 className="text-4xl font-semibold text-primary">Good morning, Niyah!</h2>
          <p className="text-tertiary mt-1">
            Your organic reach is up 12% this week. Here is the overview of your connected channels.
          </p>
        </div>

        {/* Master Columns Container */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* LEFT SIDE COLUMN: Cards + Graph */}
          <div className="flex-2 w-full space-y-8">
            
            {/* Platform Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {platforms.map((platform) => (
                <PlatformCard
                  key={platform.name}
                  name={platform.name}
                  icon={platform.icon}
                  lastPost={platform.lastPost}
                  connected={platform.connected}
                  brandColor={platform.color}
                  onQuickPost={() => console.log(`Quick post to ${platform.name}`)}
                  onManage={() => console.log(`Manage ${platform.name}`)}
                  onConnect={() => console.log(`Connect ${platform.name}`)}
                />
              ))}
            </div>

            {/* Graph Container */}
            <div className="bg-white rounded-lg shadow-md p-6 min-h-[500px]">
              <BarChart />
            </div>

          </div>

          {/* RIGHT SIDE COLUMN: Info Panel */}
          <div className="flex-1 w-full lg:w-[350px] xl:w-[400px] bg-white rounded-lg shadow-md p-6 min-h-screen">
            <div className='justify-between'>
              <h3 className="text-xl font-semibold text-primary mb-4">Scheduled</h3>
              <CalendarDays size={20} />
            </div>
            <div className='bg-[#f5f0eb] rounded-lg p-4 mt-2'>
              <p className="text-md text-primary pb-2">TODAY . 4:00 pm</p>
              <p className="text-md text-secondary pd-1">Product Launch Teaser</p>
              <p className="text-sm font-light text-secondary mt-1">Counting down the days until we unveil what weve been building. Stay tuned...</p>
              <hr className="border-t border-[#e0d8c9] my-4" />
              <div className='justify-between'>
                <Pencil size={14} />
                <div className=''>
                  <Sparkles size={14} />
               <p className='text-primary font-light text-left'>AI Enhanced</p></div>
              </div>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
 }


// import React from 'react';
// // Import the icons from the library
// import { CalendarDays, Pencil, Sparkles } from 'lucide-react';

// export default function ScheduledCard() {
//   return (
//     <div className="p-6 bg-[#f5f0eb] min-h-screen">
      
//       {/* Top Section Header */}
//       <div className="flex items-center justify-between max-w-sm mb-6">
//         <h3 className="text-xl font-bold text-[#3a3330]">Scheduled</h3>
//         {/* Calendar Icon Wrapper */}
//         <div className="p-2 bg-white rounded-full shadow-sm cursor-pointer text-[#834F32]">
//           <CalendarDays size={20} />
//         </div>
//       </div>

//       {/* Card Container */}
//       <div className="max-w-sm p-4 bg-white border border-[#ede8e3] rounded-xl shadow-sm">
        
//         {/* Card Header */}
//         <div className="flex items-center justify-between text-xs font-semibold text-[#9a8f8a]">
//           <span>TODAY • 4:00 PM</span>
//           <div className="flex gap-1">
//             {/* Target platform badges go here */}
//           </div>
//         </div>

//         {/* Content */}
//         <div className="my-3">
//           <h4 className="font-semibold text-[#3a3330]">Product Launch Teaser</h4>
//           <p className="text-sm text-[#9a8f8a] mt-1 line-clamp-2">
//             Counting down the days until we unveil what we've been building. Stay tuned...
//           </p>
//         </div>

//         <hr className="border-[#ede8e3] my-3" />

//         {/* Card Footer Actions */}
//         <div className="flex items-center justify-between text-xs text-[#9a8f8a]">
//           <button className="hover:text-[#3a3330] transition">
//             <Pencil size={14} />
//           </button>
          
//           <div className="flex items-center gap-1 text-[#834F32] font-medium">
//             <Sparkles size={14} className="animate-pulse" />
//             <span>AI Enhanced</span>
//           </div>
//         </div>

//       </div>

//     </div>
//   );
// }
