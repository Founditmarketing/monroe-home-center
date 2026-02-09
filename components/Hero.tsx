
import React from 'react';
import { ChevronRight, Key, FileText, Star, Trophy, Zap, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[950px] flex items-center justify-center overflow-hidden bg-black">
      {/* High-Octane Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[25s] scale-110 ease-out brightness-[0.4] contrast-[1.2]"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2400")',
        }}
      />

      {/* Cinematic Lighting Masks */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/20 via-transparent to-red-950/20 mix-blend-color-dodge" />

      {/* 3D Floating Elements - Depth Layer */}
      <div className="absolute top-[20%] left-[10%] opacity-40 animate-float-hero pointer-events-none hidden xl:block">
        <Key size={120} className="text-yellow-600/60 -rotate-45 blur-[1px]" />
      </div>
      <div className="absolute bottom-[25%] right-[12%] opacity-30 animate-float-hero [animation-delay:3s] pointer-events-none hidden xl:block">
        <FileText size={180} className="text-white/20 rotate-12 blur-[2px]" />
      </div>
      <div className="absolute top-[45%] right-[5%] opacity-10 animate-float-hero [animation-delay:5s] pointer-events-none hidden lg:block">
        <div className="w-64 h-64 border-[1px] border-red-600/40 rotate-[35deg] mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-none bg-red-600 text-white shadow-[0_0_30px_rgba(220,38,38,0.5)] mb-12">
          <Trophy size={16} className="fill-white" />
          <span className="text-[10px] uppercase font-black tracking-[0.4em]">Louisiana's #1 Destination For Luxury Living</span>
        </div>

        <h1 className="font-oswald text-5xl md:text-9xl lg:text-[14rem] font-black leading-[0.75] tracking-tighter mb-6 md:mb-12 select-none">
          <span className="block text-white opacity-95">LOUISIANA</span>
          <span className="block text-shatter" data-text="LUXURY">LUXURY</span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg md:text-2xl text-white/50 mb-10 md:mb-16 font-light leading-relaxed tracking-wide">
          Standard homes exist. <span className="text-white font-bold">Monroe Luxury</span> is built.
          Experience the intersection of high-octane engineering and uncompromising Southern comfort.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
          <button className="w-full sm:w-auto group relative px-8 sm:px-12 py-5 sm:py-7 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-[0.3em] text-lg sm:text-xl transition-all animate-neon-pulse flex items-center justify-center gap-4 overflow-hidden">
            <span className="relative z-10">UNLEASH YOUR LIFESTYLE</span>
            <ChevronRight className="relative z-10 group-hover:translate-x-2 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
          <button className="w-full sm:w-auto px-8 sm:px-12 py-5 sm:py-7 bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/20 text-white font-black uppercase tracking-[0.3em] text-lg sm:text-xl transition-all flex items-center justify-center gap-3 group">
            <Zap size={20} className="text-red-600 group-hover:scale-125 transition-transform" />
            VIEW INVENTORY
          </button>
        </div>


      </div>
    </div>
  );
};

export default Hero;
