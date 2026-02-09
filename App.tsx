
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickShipTicker from './components/QuickShipTicker';
import InventorySection from './components/InventorySection';
import TestimonialWall from './components/TestimonialWall';
import PaymentCalculator from './components/PaymentCalculator';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-red-600 selection:text-white">
      <Navbar scrolled={scrolled} />
      
      <main>
        <Hero />
        
        <div className="relative z-10 -mt-10">
          <QuickShipTicker />
        </div>

        <section id="inventory" className="py-24 bg-[#0a0a0a]">
          <InventorySection />
        </section>

        <section id="calculator" className="py-24 bg-[#0f0f0f] border-y border-white/5">
          <PaymentCalculator />
        </section>

        <section id="testimonials" className="py-24 bg-[#0a0a0a]">
          <TestimonialWall />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
