
import React from 'react';
import { Zap, MapPin, Truck, ShieldCheck, Trophy } from 'lucide-react';

const QuickShipTicker: React.FC = () => {
  const items = [
    { text: "14 HOMES READY FOR IMMEDIATE DELIVERY", icon: <Truck size={16} /> },
    { text: "NEW ARRIVAL: THE MONROE ELITE", icon: <Zap size={16} /> },
    { text: "LOUISIANA'S #1 RATED EXPERIENCE", icon: <Trophy size={16} /> },
    { text: "SECURE FINANCING AVAILABLE NOW", icon: <ShieldCheck size={16} /> },
    { text: "CUSTOM BUILD SLOTS FOR Q3 OPENING", icon: <MapPin size={16} /> },
  ];

  return (
    <div className="bg-red-600 overflow-hidden py-6 border-y-[6px] border-black/30 relative shadow-[0_0_50px_rgba(220,38,38,0.3)]">
      <div className="flex animate-marquee-fast whitespace-nowrap">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex items-center gap-16 mx-16">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-5 text-white">
                <span className="opacity-80">{item.icon}</span>
                <span className="font-oswald font-black text-2xl uppercase italic tracking-widest leading-none">
                  {item.text}
                </span>
                <span className="w-3 h-3 bg-white/40 rotate-45 ml-10" />
              </div>
            ))}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee-fast {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-fast {
          animation: marquee-fast 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default QuickShipTicker;
