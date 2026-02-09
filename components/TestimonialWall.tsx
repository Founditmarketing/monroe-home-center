
import React from 'react';
// Fixed: Added MapPin and Zap to the lucide-react imports
import { Quote, Star, CheckCircle, Play, Video, Users, Clock, MapPin, Zap } from 'lucide-react';

const testimonials = [
  {
    name: "Brittany Williams",
    location: "Baton Rouge, LA",
    quote: "Monroe Home Center made my dream a reality. I visited four other lots, but nothing compared to the 'Jackson Elite' they had in stock. The industrial kitchen and the wrap-around porch are absolute game changers. I'm living the lifestyle I always wanted.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    hasVideo: true,
    rating: 5
  },
  {
    name: "Marcus Thornton",
    location: "Monroe, LA",
    quote: "As a contractor, I know quality. These homes aren't just 'built'—they're engineered. The structural integrity and the high-end finishes are standard here, not upgrades. If you want the best in Louisiana, this is the only call to make.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    hasVideo: false,
    rating: 5
  },
  {
    name: "The Rodriguez Family",
    location: "Shreveport, LA",
    quote: "From financing to the final walk-through, the team at Monroe was incredible. We were moved into our custom multi-section home in just 22 days. The energy efficiency is saving us hundreds every month already!",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=200",
    hasVideo: true,
    rating: 5
  }
];

const TestimonialWall: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-red-600 font-black text-[10px] uppercase tracking-[0.5em] mb-6">
            <Users size={14} /> The Monroe Community
          </div>
          <h2 className="font-oswald text-6xl md:text-9xl font-black uppercase tracking-tighter text-white mb-8">
            THE <span className="text-red-600">VERDICT</span>
          </h2>
          <p className="text-white/40 text-2xl leading-relaxed font-light">
            Real families. Real luxury. Join the 850+ homeowners across Louisiana who refused to settle for ordinary.
          </p>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={32} className="text-red-600 fill-red-600 drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
            ))}
          </div>
          <span className="text-white font-black uppercase tracking-[0.3em] text-sm">99.2% CUSTOMER SATISFACTION</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {testimonials.map((t, i) => (
          <div key={i} className="glass-morphism group relative p-12 hover:bg-white/[0.03] transition-all duration-700 overflow-hidden border-t-4 border-t-transparent hover:border-t-red-600 translate-y-0 hover:-translate-y-4">
            <Quote className="absolute -top-6 -right-6 text-white/[0.015] group-hover:text-red-600/10 transition-colors" size={160} />
            
            <div className="relative z-10">
              <div className="flex items-center gap-6 mb-12">
                <div className="relative">
                  <div className="absolute inset-0 bg-red-600 rotate-45 scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img src={t.image} alt={t.name} className="relative z-10 w-24 h-24 rounded-none object-cover border-4 border-white/5 group-hover:border-white/20 transition-all" />
                  {t.hasVideo && (
                    <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-red-600 flex items-center justify-center rounded-none shadow-2xl z-20">
                      <Play size={14} className="text-white fill-white" />
                    </div>
                  )}
                </div>
                <div>
                  <div className="text-white font-black uppercase text-2xl tracking-tighter leading-none mb-2">{t.name}</div>
                  <div className="text-red-600 text-[10px] font-black uppercase tracking-[0.3em]">{t.location}</div>
                </div>
              </div>

              <p className="text-white/70 italic text-xl leading-relaxed mb-12 min-h-[140px]">
                "{t.quote}"
              </p>

              <div className="flex items-center justify-between border-t border-white/5 pt-8">
                <div className="flex items-center gap-2 text-green-500 text-[10px] font-black uppercase tracking-[0.3em]">
                  <CheckCircle size={16} className="animate-pulse" />
                  Verified Buyer
                </div>
                {t.hasVideo && (
                  <button className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-[10px] font-black uppercase tracking-[0.3em] group/btn">
                    <Video size={16} className="group-hover/btn:text-red-600" />
                    Story Clip
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Social Proof Analytics */}
      <div className="mt-40 grid grid-cols-2 lg:grid-cols-4 gap-12 py-20 border-y border-white/5">
        {[
          { label: "HOMES DELIVERED", value: "2,842", icon: <Users /> },
          { label: "LOUISIANA COUNTIES", value: "64/64", icon: <MapPin /> },
          { label: "YEARS OF LEGACY", value: "26+", icon: <Clock /> },
          { label: "READY FOR PICKUP", value: "14", icon: <Zap /> }
        ].map((stat, i) => (
          <div key={i} className="text-center group cursor-default">
            <div className="flex justify-center mb-6 text-red-600/50 group-hover:text-red-600 transition-colors">
              {React.cloneElement(stat.icon as React.ReactElement, { size: 32 })}
            </div>
            <div className="font-oswald text-6xl font-black text-white mb-2 tracking-tighter group-hover:scale-110 transition-transform">{stat.value}</div>
            <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em]">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-40 p-1 bg-gradient-to-r from-transparent via-red-600 to-transparent">
        <div className="bg-[#050505] p-24 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-red-600/10 blur-[150px] translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <h3 className="text-5xl md:text-7xl font-oswald font-black text-white mb-10 uppercase tracking-tighter italic relative z-10">
            JOIN THE <span className="text-red-600 underline decoration-4 underline-offset-8">MONROE ELITE</span>
          </h3>
          <p className="max-w-2xl mx-auto text-white/50 text-xl mb-16 relative z-10 leading-relaxed font-light">
            Our private tour slots are extremely limited. Secure your priority viewing of the current inventory and speak with a master design consultant today.
          </p>
          <button className="relative z-10 px-20 py-8 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-[0.4em] text-xl transition-all shadow-[0_0_50px_rgba(220,38,38,0.4)] animate-neon-pulse rounded-none">
            RESERVE YOUR PRIVATE TOUR
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialWall;
