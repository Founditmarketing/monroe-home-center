import React from 'react';
import { MousePointer2 } from 'lucide-react';

const VirtualTour: React.FC = () => {
    return (
        <section className="py-24 bg-[#080808] border-y border-white/5 relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">

                {/* Text Content */}
                <div className="lg:col-span-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/60 text-[10px] uppercase tracking-[0.2em] mb-6">
                        <MousePointer2 size={12} /> Interactive Experience
                    </div>
                    <h2 className="font-oswald text-5xl font-black text-white uppercase leading-none mb-6">
                        Step Inside <br />
                        <span className="text-red-600">The Future</span>
                    </h2>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                        Don't just look at pictures. Walk through your potential new home from anywhere in the world. Experience the layout, finishes, and scale of our premium inventory.
                    </p>
                    <button className="px-8 py-4 bg-white hover:bg-red-600 text-black hover:text-white font-black uppercase tracking-[0.2em] transition-all duration-300">
                        View More Tours
                    </button>
                </div>

                {/* Tour Embed */}
                <div className="lg:col-span-2 relative">
                    <div className="absolute -inset-4 bg-red-600/20 blur-2xl opacity-50" />
                    <div className="relative aspect-video bg-zinc-900 border border-white/10 shadow-2xl overflow-hidden rounded-lg">
                        <iframe
                            src="https://my.matterport.com/show/?m=d49WmRhtQM4"
                            className="w-full h-full"
                            allowFullScreen
                            loading="lazy"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default VirtualTour;
