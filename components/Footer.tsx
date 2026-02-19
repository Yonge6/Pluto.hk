
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-background-dark border-t border-white/5 text-slate-500 relative z-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-3xl">flare</span>
          <span className="font-bold text-slate-200 text-lg tracking-tight">Pluto.hk</span>
        </div>
        
        <p className="text-sm font-light tracking-wide text-center">
          © 2024 Pluto.hk. Designed with <span className="text-primary/60">Compassion</span> for Humanity.
        </p>
        
        <div className="flex gap-8">
          <a className="hover:text-primary transition-colors transform hover:scale-110" href="#">
            <span className="material-symbols-outlined">public</span>
          </a>
          <a className="hover:text-primary transition-colors transform hover:scale-110" href="#">
            <span className="material-symbols-outlined">mail</span>
          </a>
          <a className="hover:text-primary transition-colors transform hover:scale-110" href="#">
            <span className="material-symbols-outlined">brand_awareness</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
