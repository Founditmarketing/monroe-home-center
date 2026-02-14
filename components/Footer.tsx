
import React from 'react';
import { Facebook, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-red-600 rounded-sm rotate-45 flex items-center justify-center -mr-1">
                <span className="text-white font-black text-sm -rotate-45">M</span>
              </div>
              <span className="font-oswald text-xl tracking-tighter uppercase font-bold text-white pl-4">Monroe Home Center</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              Redefining the American Dream with high-octane engineering and southern luxury. Since 1998, we've been Louisiana's premier choice for custom manufactured housing.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-red-600 flex items-center justify-center rounded transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-red-600 flex items-center justify-center rounded transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-red-600 flex items-center justify-center rounded transition-all"><Youtube size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black uppercase text-xs tracking-[0.3em] mb-8">Inventory</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><a href="#" className="hover:text-red-500 transition-colors">The Jackson Series</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">The Royal Estate</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Single Wide Solutions</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Multi-Section Homes</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Quick-Ship Ready</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase text-xs tracking-[0.3em] mb-8">Company</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><a href="#" className="hover:text-red-500 transition-colors">About Our Legacy</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Financing Programs</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Warranty & Service</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Contact Expert</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase text-xs tracking-[0.3em] mb-8">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <MapPin size={18} className="text-red-600 shrink-0" />
                <span className="text-sm text-white/50">3499 US-165,<br />Monroe, LA 71202</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={18} className="text-red-600 shrink-0" />
                <span className="text-sm text-white/50 font-bold">(318) 248-8875</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={18} className="text-red-600 shrink-0" />
                <span className="text-sm text-white/50">sales@monroehomecenter.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[10px] text-white/20 uppercase font-black tracking-widest">
            © 2024 MONROE HOME CENTER. ENGINEERED FOR EXCELLENCE.
          </div>
          <div className="flex gap-8">
            <img src="https://monroehomecenter.com/wp-content/uploads/2021/05/logo-jessup.png" className="h-8 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" alt="Jessup Housing" />
            <img src="https://monroehomecenter.com/wp-content/uploads/2021/05/logo-franklin.png" className="h-8 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" alt="Franklin Homes" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
