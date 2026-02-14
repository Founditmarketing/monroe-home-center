
import React from 'react';
import { ChevronRight, Key, FileText, Star, Trophy, Zap, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const containerRef = React.useRef<HTMLDivElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const [buttonOffset, setButtonOffset] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const { width, height, left, top } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / 25; // Sensitivity
      const y = (e.clientY - top - height / 2) / 25;
      setMousePosition({ x, y });
    }

    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const btnX = e.clientX - rect.left - rect.width / 2;
      const btnY = e.clientY - rect.top - rect.height / 2;

      // Magnetic range
      if (Math.abs(btnX) < 100 && Math.abs(btnY) < 50) {
        setButtonOffset({ x: btnX * 0.3, y: btnY * 0.3 });
      } else {
        setButtonOffset({ x: 0, y: 0 });
      }
    }
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
    setButtonOffset({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-screen min-h-[700px] md:min-h-[950px] flex items-center justify-center overflow-hidden bg-black perspective-1000"
    >
      {/* High-Octane Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-100 ease-out brightness-[0.4] contrast-[1.2]"
        style={{
          backgroundImage: 'url("https://monroehomecenter.com/wp-content/uploads/sites/57/2025/07/k.jpg")',
          transform: `scale(1.1) translate(${mousePosition.x * -1}px, ${mousePosition.y * -1}px)`,
        }}
      />

      {/* Film Grain Mesh */}
      <div className="bg-noise opacity-30 mix-blend-overlay pointer-events-none absolute inset-0 z-20" />

      {/* Cinematic Lighting Masks */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/20 via-transparent to-red-950/20 mix-blend-color-dodge z-10" />

      {/* 3D Floating Elements - Depth Layer (Parallax Opposite) */}
      <div
        className="absolute top-[20%] left-[10%] opacity-40 animate-float-hero pointer-events-none hidden xl:block z-10"
        style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) rotate(-45deg)` }}
      >
        <Key size={120} className="text-yellow-600/60 blur-[1px]" />
      </div>
      <div
        className="absolute bottom-[25%] right-[12%] opacity-30 animate-float-hero [animation-delay:3s] pointer-events-none hidden xl:block z-10"
        style={{ transform: `translate(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.8}px) rotate(12deg)` }}
      >
        <FileText size={180} className="text-white/20 blur-[2px]" />
      </div>
      <div
        className="absolute top-[45%] right-[5%] opacity-10 animate-float-hero [animation-delay:5s] pointer-events-none hidden lg:block z-10"
        style={{ transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px) rotate(35deg)` }}
      >
        <div className="w-64 h-64 border-[1px] border-red-600/40 mix-blend-screen" />
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-3 px-4 md:px-6 py-2 rounded-none bg-red-600/90 text-white shadow-[0_0_30px_rgba(220,38,38,0.5)] mb-8 md:mb-12 backdrop-blur-sm border border-red-500/30">
          <Trophy size={14} className="fill-white md:w-4 md:h-4" />
          <span className="text-[8px] md:text-[10px] uppercase font-black tracking-[0.4em]">Louisiana's #1 Destination For Luxury Living</span>
        </div>

        <h1 className="font-oswald text-5xl md:text-9xl lg:text-[14rem] font-black leading-[0.8] md:leading-[0.75] tracking-tighter mb-8 md:mb-12 select-none">
          <span className="block text-white opacity-95 drop-shadow-2xl">LOUISIANA</span>
          <span className="block text-shatter mix-blend-screen" data-text="LUXURY">LUXURY</span>
        </h1>

        <p className="max-w-2xl mx-auto text-sm md:text-2xl text-white/50 mb-10 md:mb-16 font-light leading-relaxed tracking-wide px-4">
          Standard homes exist. <span className="text-white font-bold">Monroe Luxury</span> is built.
          <span className="hidden md:inline"> Experience the intersection of high-octane engineering and uncompromising Southern comfort.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <button
            ref={buttonRef}
            style={{ transform: `translate(${buttonOffset.x}px, ${buttonOffset.y}px)` }}
            className="w-full sm:w-auto group relative px-8 sm:px-12 py-5 sm:py-7 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-[0.3em] text-base sm:text-xl transition-colors duration-200 animate-neon-pulse flex items-center justify-center gap-4 overflow-hidden magnetic-button"
          >
            <span className="relative z-10">UNLEASH LIFESTYLE</span>
            <ChevronRight className="relative z-10 group-hover:translate-x-2 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>

          <button className="w-full sm:w-auto px-8 sm:px-12 py-5 sm:py-7 bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/20 text-white font-black uppercase tracking-[0.3em] text-base sm:text-xl transition-all flex items-center justify-center gap-3 group hover:border-white/40">
            <Zap size={18} className="text-red-600 group-hover:scale-125 transition-transform md:w-5 md:h-5" />
            VIEW INVENTORY
          </button>
        </div>
      </div>

      {/* Kinetic Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce delay-1000 z-30">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-red-500 to-transparent" />
      </div>
    </div>
  );
};
export default Hero;
