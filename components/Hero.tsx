import React, { useEffect, useState } from 'react';
import { ChevronRight, Key, FileText, Star, Trophy, Zap, MapPin, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen w-full min-h-[700px] md:min-h-[950px] flex items-center justify-center overflow-hidden bg-black">
      {/* High-Octane Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[25s] scale-110 ease-out brightness-[0.4] contrast-[1.2]"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2400")',
        }}
      />

      {/* Cinematic Lighting Masks */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40" />
      {/* 3D Floating Elements - Depth Layer */}
      <div className="absolute top-[20%] left-[10%] opacity-40 animate-float-hero pointer-events-none hidden xl:block">
        <Key size={120} className="text-yellow-600/60 -rotate-45 blur-[1px]" />
      </div>
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background with Parallax */}
        <div
          className="absolute inset-0 z-0 select-none"
          style={{
            backgroundImage: 'url("https://monroehomecenter.com/wp-content/uploads/sites/57/2025/07/k.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${offset * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div
            className="inline-block mb-4 opacity-0 animate-[fadeIn_1s_ease-out_forwards]"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="px-4 py-1.5 border border-red-600/50 bg-red-600/10 backdrop-blur-md rounded-full text-red-500 font-oswald text-sm uppercase tracking-[0.2em]">
              Louisiana's #1 Home Retailer
            </span>
          </div>

          <h1 className="font-oswald text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter mb-8 opacity-0 animate-[slideUp_1s_ease-out_forwards]" style={{ animationDelay: '0.4s' }}>
            Your New Home <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50 text-shatter">
              Is Here
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-12 opacity-0 animate-[slideUp_1s_ease-out_forwards]" style={{ animationDelay: '0.6s' }}>
            Browse our expansive inventory of manufactured homes in Monroe, Louisiana. We're the newest retailer in the state, and we want to help you find the mobile home you're searching for.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 opacity-0 animate-[slideUp_1s_ease-out_forwards]" style={{ animationDelay: '0.8s' }}>
            <button className="group relative px-8 py-4 bg-red-600 text-white font-black uppercase tracking-[0.2em] overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(220,38,38,0.3)] hover:shadow-[0_0_50px_rgba(220,38,38,0.5)]">
              <span className="relative z-10 flex items-center gap-2">
                Find Your Home <ArrowRight size={18} />
              </span>
              <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>

            <button className="group px-8 py-4 border border-white/20 hover:border-white/50 bg-black/20 backdrop-blur-sm text-white font-black uppercase tracking-[0.2em] transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
