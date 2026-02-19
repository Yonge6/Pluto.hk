
import React from 'react';

interface HeaderProps {
  onStartExperiment: () => void;
}

const Header: React.FC<HeaderProps> = ({ onStartExperiment }) => {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-background-dark/40 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={onStartExperiment}>
          <div className="text-primary">
            <span className="material-symbols-outlined text-4xl">flare</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight">Pluto.hk</h2>
        </div>
        
        <nav className="hidden md:flex items-center gap-10">
          <button onClick={onStartExperiment} className="text-sm font-medium hover:text-primary transition-colors">Mission</button>
          <button onClick={onStartExperiment} className="text-sm font-medium hover:text-primary transition-colors">Roadmap</button>
          <button onClick={onStartExperiment} className="text-sm font-medium hover:text-primary transition-colors">Community</button>
          <button 
            onClick={onStartExperiment}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20"
          >
            Start Experiment
          </button>
        </nav>
        
        <button onClick={onStartExperiment} className="md:hidden text-slate-100 p-2">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
