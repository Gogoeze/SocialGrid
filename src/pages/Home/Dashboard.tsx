import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarDays, Pencil, Sparkles } from 'lucide-react';
import PlatformCard from '../../components/ui/platformCard';
import BarChart from './Components/BarGraph';

// color: #f5e8dc''

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
    <div className="min-h-screen bg-[var(--color-background)]">
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
            {/* <div className="bg-[#f5f0eb] rounded-lg shadow-md p-6 min-h-[400px]"> */}
              <BarChart  />
            {/* </div> */}

          </div>

          {/* RIGHT SIDE COLUMN: Info Panel */}
          <div>
          <div className="flex-1 w-full lg:max-w-[450px] xl:max-w-[500px] bg-white rounded-lg shadow-md p-6 min-h-screen">
            <div className='flex items-center justify-between'>
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

          <div className="mt-10 flex-1 w-full h-70 bg-primary rounded-lg shadow-md p-6">
            
           
          </div>

              </div>

        </div>

      </main>
    </div>
  );
 }

