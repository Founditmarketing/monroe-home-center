
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Navigation, Search, MapPin } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'py-4 bg-black/90 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' : 'py-6 md:py-10 bg-transparent'}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
          <div className="flex items-center gap-4 group cursor-pointer z-50 relative">
            <div className={`relative transition-transform duration-700 ${isMobileMenuOpen ? 'rotate-[225deg]' : ''}`}>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-red-600 rounded-none rotate-45 flex items-center justify-center -mr-2 shadow-lg shadow-red-600/30 group-hover:rotate-[225deg] transition-transform duration-700">
                <span className={`text-white font-black text-xl md:text-2xl -rotate-45 group-hover:rotate-[135deg] transition-transform duration-700 ${isMobileMenuOpen ? 'rotate-[135deg]' : ''}`}>M</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-oswald text-2xl md:text-3xl tracking-tighter uppercase font-black text-white leading-none">Monroe</span>
              <span className="text-[8px] md:text-[10px] font-black text-red-600 uppercase tracking-[0.5em] mt-1">Home Center</span>
            </div>
          </div>

          <div className="hidden xl:flex items-center gap-16 text-[11px] font-black uppercase tracking-[0.4em] text-white/60">
            <a href="#inventory" className="hover:text-red-600 transition-colors relative group py-2">
              Inventory
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#calculator" className="hover:text-red-600 transition-colors relative group py-2">
              Finance
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#testimonials" className="hover:text-red-600 transition-colors relative group py-2">
              Testimonials
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#" className="hover:text-red-600 transition-colors relative group py-2">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300" />
            </a>
          </div>

          <div className="flex items-center gap-4 md:gap-10">
            <div className="hidden md:flex flex-col items-end">
              <div className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">Direct Sales</div>
              <a href="tel:3182488875" className="text-white font-oswald text-lg font-bold hover:text-red-600 transition-colors leading-none tracking-wider">
                (318) 248-8875
              </a>
            </div>

            <button className="hidden md:block group relative px-8 py-4 bg-white hover:bg-red-600 transition-all rounded-none overflow-hidden">
              <span className="relative z-10 text-black group-hover:text-white font-black text-xs uppercase tracking-widest">Connect with Expert</span>
              <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>

            <button
              className="xl:hidden p-2 text-white hover:text-red-600 transition-colors z-50 relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#050505] z-40 transition-all duration-700 xl:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-full'}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-red-600/10 via-transparent to-transparent opacity-50" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />

        <div className="flex flex-col items-center justify-center h-full gap-4 p-4 relative z-10">
          <div className="flex flex-col items-center gap-4 w-full max-w-xs md:gap-6">
            {[
              { label: 'Inventory', href: '#inventory' },
              { label: 'Finance', href: '#calculator' },
              { label: 'Testimonials', href: '#testimonials' },
              { label: 'About', href: '#' }
            ].map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl font-oswald font-black text-white hover:text-red-600 transition-all uppercase tracking-widest italic flex items-center gap-4 group ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="text-red-600 text-[10px] not-italic">0{i + 1}</span>
                {link.label}
              </a>
            ))}

            <div className={`w-full h-px bg-white/10 my-1 transition-all duration-700 delay-500 ${isMobileMenuOpen ? 'scale-x-100' : 'scale-x-0'}`} />

            <div className={`flex flex-col items-center gap-3 transition-all duration-700 delay-600 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <a href="tel:3185550199" className="flex items-center gap-2 text-base font-bold text-white hover:text-red-600 transition-colors">
                <Phone size={16} className="text-red-600" />
                (318) 555-0199
              </a>

              <button className="group relative w-full px-6 py-3 bg-red-600 text-white font-black text-[10px] uppercase tracking-[0.2em] overflow-hidden">
                <span className="relative z-10">Connect with Expert</span>
                <div className="absolute inset-0 bg-white translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                <span className="absolute inset-0 flex items-center justify-center text-black font-black translate-x-full group-hover:translate-x-0 transition-transform duration-500 z-20">
                  LET'S TALK
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
