
import React from 'react';
import { HomeInventory } from '../types';
// Fixed: Added MapPin to the lucide-react imports
import { Ruler, BedDouble, Bath, ArrowUpRight, Filter, ChevronRight, Zap, MapPin } from 'lucide-react';

const mockInventory: HomeInventory[] = [
  {
    id: '1',
    name: 'The Jackson Elite',
    price: 184900,
    beds: 3,
    baths: 2,
    sqft: 2400,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    tag: 'Industrial Modern',
    inStock: true
  },
  {
    id: '2',
    name: 'The Royal Sovereign',
    price: 269000,
    beds: 4,
    baths: 3,
    sqft: 3200,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    tag: 'Southern Estate',
    inStock: true
  },
  {
    id: '3',
    name: 'The Patriot Ultra',
    price: 159900,
    beds: 3,
    baths: 2,
    sqft: 1800,
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=1200',
    tag: 'Classic Industrial',
    inStock: false
  },
  {
    id: '4',
    name: 'The Bayou King',
    price: 319000,
    beds: 5,
    baths: 3,
    sqft: 4000,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200',
    tag: 'Grand Sovereign',
    inStock: true
  }
];

const InventorySection: React.FC = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-10">
      <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-16 md:mb-32 gap-16">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-5 py-1.5 bg-red-600/10 border border-red-600/40 text-red-500 text-[10px] font-black tracking-[0.5em] uppercase mb-8">
            <Zap size={14} className="fill-red-600" /> LIVE INVENTORY FEED
          </div>
          <h2 className="font-oswald text-5xl md:text-9xl font-black uppercase tracking-tighter text-white mb-8">
            CURATED <span className="text-red-600 italic">POWER</span>
          </h2>
          <p className="text-white/40 text-2xl leading-relaxed font-light max-w-2xl">
            Every structure in our collection is stress-tested against the Louisiana elements.
            Built for velocity, finished for prestige.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <button className="group flex items-center gap-4 px-10 py-5 bg-white/5 border border-white/10 hover:border-red-600/50 hover:bg-white/10 transition-all uppercase font-black text-xs tracking-[0.3em] text-white">
            <Filter size={20} className="text-red-600 group-hover:rotate-180 transition-transform duration-700" />
            Refine Specs
          </button>
          <button className="group flex items-center gap-4 px-10 py-5 bg-red-600 text-white uppercase font-black text-xs tracking-[0.3em] hover:bg-red-700 transition-all shadow-[0_15px_30px_rgba(220,38,38,0.3)]">
            Full Catalog
            <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24">
        {mockInventory.map((home) => (
          <div key={home.id} className="group flex flex-col inventory-card">
            <div className="relative overflow-hidden aspect-[16/10] bg-zinc-900 border border-white/5 shadow-2xl transition-all duration-700 hover:border-red-600/50">
              <img
                src={home.image}
                alt={home.name}
                className="card-img w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-transform duration-[2s] ease-out"
              />

              {/* Overlay Gradients */}
              <div className="card-overlay absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay duration-700" />

              {home.inStock && (
                <div className="absolute top-6 left-6 md:top-10 md:left-10 flex items-center gap-4 px-4 md:px-6 py-2 md:py-2.5 bg-green-500 shadow-[0_0_30px_rgba(34,197,94,0.4)]">
                  <div className="w-2 md:w-2.5 h-2 md:h-2.5 bg-white rounded-full animate-ping" />
                  <span className="text-[9px] md:text-[11px] font-black text-white uppercase tracking-[0.3em]">IN-STOCK NOW</span>
                </div>
              )}

              <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:right-12 flex flex-col md:flex-row items-start md:items-end justify-between translate-y-4 md:translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                <div className="max-w-full md:max-w-[70%] mb-4 md:mb-0">
                  <div className="inline-block px-4 md:px-5 py-1 md:py-1.5 bg-red-600 text-[9px] md:text-[10px] text-white font-black uppercase tracking-[0.2em] mb-4 md:mb-6">
                    {home.tag}
                  </div>
                  <h3 className="font-oswald text-2xl md:text-6xl font-black text-white uppercase leading-none tracking-tighter mb-2">
                    {home.name}
                  </h3>
                  <div className="flex items-center gap-2 text-white/50 text-[10px] md:text-xs font-bold tracking-widest uppercase">
                    <MapPin size={10} className="text-red-600" /> Louisiana Certified Structure
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end">
                  <div className="text-white/40 text-[9px] md:text-[10px] uppercase font-black tracking-[0.4em] mb-1 md:mb-2 italic">MSRP STARTING AT</div>
                  <div className="text-white font-oswald text-3xl md:text-5xl font-black italic group-hover:text-red-500 transition-colors">
                    ${home.price.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Hover Explosion Action - The "Wow" Center */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none group-hover:pointer-events-auto">
                <button className="w-20 h-20 md:w-24 md:h-24 bg-red-600 text-white flex items-center justify-center shadow-[0_0_60px_rgba(220,38,38,0.6)] scale-50 group-hover:scale-110 transition-transform duration-700 border-4 border-white/20">
                  <ArrowUpRight size={32} />
                </button>
              </div>
            </div>

            <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 py-8 md:py-10 border-y border-white/10 relative overflow-hidden">
              <div className="hidden md:block absolute inset-y-0 left-1/3 w-px bg-white/5" />
              <div className="hidden md:block absolute inset-y-0 left-2/3 w-px bg-white/5" />

              <div className="flex flex-col gap-2 md:gap-3">
                <div className="flex items-center gap-3 text-white/30">
                  <BedDouble size={16} />
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em]">Living Capacity</span>
                </div>
                <span className="text-xl md:text-2xl font-black text-white tracking-tighter">{home.beds} BEDROOMS</span>
              </div>
              <div className="flex flex-col gap-3 text-center lg:text-left">
                <div className="flex items-center gap-3 text-white/30 justify-center lg:justify-start">
                  <Bath size={18} />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">Sanitary Specs</span>
                </div>
                <span className="text-2xl font-black text-white tracking-tighter">{home.baths} BATHROOMS</span>
              </div>
              <div className="flex flex-col gap-3 text-right">
                <div className="flex items-center gap-3 text-white/30 justify-end">
                  <Ruler size={18} />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">Total Footprint</span>
                </div>
                <span className="text-2xl font-black text-white tracking-tighter italic">{home.sqft.toLocaleString()} SQFT</span>
              </div>
            </div>

            <div className="mt-10 flex justify-between items-center group/footer">
              <button className="text-[11px] font-black text-white/40 hover:text-red-600 uppercase tracking-[0.5em] transition-all flex items-center gap-3">
                TECH SPECS & GALLERY <ChevronRight size={16} />
              </button>
              <div className="h-[2px] flex-grow mx-10 bg-white/5 group-hover/footer:bg-red-600/30 transition-colors" />
              <button className="text-[11px] font-black text-red-600 uppercase tracking-[0.5em] hover:text-white transition-all underline decoration-2 underline-offset-8">
                CONFIGURE LIFESTYLE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventorySection;
