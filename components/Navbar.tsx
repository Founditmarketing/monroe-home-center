
import React from 'react';
import { Menu, Phone, Navigation, Search, MapPin } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'py-4 bg-black/90 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' : 'py-10 bg-transparent'}`}>
      <div className="max-w-[1400px] mx-auto px-10 flex items-center justify-between">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="relative">
            <div className="w-12 h-12 bg-red-600 rounded-none rotate-45 flex items-center justify-center -mr-2 shadow-lg shadow-red-600/30 group-hover:rotate-[225deg] transition-transform duration-700">
              <span className="text-white font-black text-2xl -rotate-45 group-hover:rotate-[135deg] transition-transform duration-700">M</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-oswald text-3xl tracking-tighter uppercase font-black text-white leading-none">Monroe</span>
            <span className="text-[10px] font-black text-red-600 uppercase tracking-[0.5em] mt-1">Home Center</span>
          </div>
        </div>

        <div className="hidden xl:flex items-center gap-16 text-[11px] font-black uppercase tracking-[0.4em] text-white/60">
          <a id="nav-inventory" href="#inventory" className="hover:text-red-600 transition-colors relative group py-2">
            Inventory
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300" />
          </a>
          <a id="nav-finance" href="#calculator" className="hover:text-red-600 transition-colors relative group py-2">
            Finance
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300" />
          </a>
          <a id="nav-testimonials" href="#testimonials" className="hover:text-red-600 transition-colors relative group py-2">
            Testimonials
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300" />
          </a>
          <a id="nav-about" href="#" className="hover:text-red-600 transition-colors relative group py-2">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300" />
          </a>
        </div>

        <div className="flex items-center gap-10">
          <div className="hidden md:flex flex-col items-end">
            <div className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">Direct Sales</div>
            <a href="tel:3185550199" className="text-white font-oswald text-lg font-bold hover:text-red-600 transition-colors leading-none tracking-wider">
              (318) 555-0199
            </a>
          </div>
          
          <button id="nav-expert-btn" className="group relative px-8 py-4 bg-white hover:bg-red-600 transition-all rounded-none overflow-hidden">
            <span className="relative z-10 text-black group-hover:text-white font-black text-xs uppercase tracking-widest">Connect with Expert</span>
            <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          
          <button className="xl:hidden p-2 text-white hover:text-red-600 transition-colors">
            <Menu size={28} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
