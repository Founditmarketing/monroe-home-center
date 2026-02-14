import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const WelcomeSection: React.FC = () => {
    return (
        <section className="bg-black py-24 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-[#0a0a0a] to-black z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                {/* Image Side */}
                <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-red-900 rounded-xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
                    <div className="relative h-[500px] w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                        <img
                            src="https://monroehomecenter.com/wp-content/uploads/sites/57/2021/07/MD-4132_Liv-Kit_2459-1.jpg"
                            alt="Monroe Home Center Interior"
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                        <div className="absolute bottom-8 left-8">
                            <div className="text-white font-oswald text-4xl font-bold uppercase tracking-wide">
                                The Newest Retailer <br />
                                <span className="text-red-500">In Louisiana</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text Side */}
                <div className="space-y-8">
                    <div className="inline-block">
                        <span className="px-3 py-1 bg-red-600/10 border border-red-600/20 rounded text-red-500 font-bold uppercase tracking-widest text-xs">
                            Welcome to Monroe Home Center
                        </span>
                    </div>

                    <h2 className="font-oswald text-5xl md:text-6xl font-black text-white uppercase leading-[0.9]">
                        We Can Help You Find Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                            New Mobile Home!
                        </span>
                    </h2>

                    <p className="text-gray-400 text-lg leading-relaxed border-l-4 border-red-600 pl-6">
                        Welcome to the newest manufactured home retailer in Louisiana, Monroe Home Center! We're open, and we carry the largest selection of Jessup homes in the region.
                    </p>

                    <p className="text-gray-400 leading-relaxed">
                        Our experienced sales staff will ensure that you have the best home buying experience imaginable for you and your family. Message us today to learn more about the beautiful new manufactured homes we have for sale here in Monroe, LA.
                    </p>

                    <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            "Largest Selection of Jessup Homes",
                            "Experienced Sales Staff",
                            "Best Home Buying Experience",
                            "Beautiful New Models"
                        ].map((feature, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <CheckCircle2 className="text-red-600 w-5 h-5 flex-shrink-0" />
                                <span className="text-white/80 font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div className="pt-8">
                        <a href="/contact" className="inline-flex h-14 items-center justify-center bg-white hover:bg-red-600 text-black hover:text-white font-black uppercase tracking-[0.2em] px-10 transition-all duration-300">
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WelcomeSection;
