
import React from 'react';

interface CTAProps {
  onStartExperiment: () => void;
}

const CTA: React.FC<CTAProps> = ({ onStartExperiment }) => {
  return (
    <section className="py-60 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          alt="Pluto Horizon" 
          className="absolute bottom-0 left-0 w-full h-full object-cover object-center scale-110 rotate-180 opacity-60" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgN0074BligLO0By-7uZMF7iH6iMMsWTQQ6cmA2nr1_n_fOlQ5SvEkx_HjeEfQBgRGo3K4TU3bNy-CqbuKe8-TwO2lFhJaTNGKCyfI7wZckPLmv9ImhMYScbPJouCsWY7WVaUZBMZ4j2ZkU_aDNbUpE8D1cCHS1Yur1WbuY0sqQKP4C4I6bn_Om6USR7L-IT4EBFrHypz5JCVSffiFs3J2rVRI1dFIxg8zN-Y8wP8xzUtN6gMCGU9bF8aFeYTyoJwlb2kHme3Y1lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/60 to-background-dark"></div>
        <div className="absolute inset-0 atmospheric-glow transform rotate-180 opacity-50"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="space-y-16">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">邀请你，和我一起，登陆冥王星。</h2>
            <p className="text-2xl md:text-3xl italic tracking-widest font-light opacity-80">
              You are invited to land on Pluto.
            </p>
          </div>

          <div className="flex flex-col items-center gap-8">
            <button 
              onClick={onStartExperiment}
              className="group relative px-12 py-6 bg-primary rounded-2xl overflow-hidden transition-all hover:shadow-[0_0_50px_rgba(115,23,207,0.4)] border border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-accent-gold opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="flex flex-col items-center gap-2 relative z-10">
                <span className="text-2xl font-bold text-white tracking-widest">开启 21 天觉醒实验</span>
                <span className="text-xs uppercase tracking-widest text-white/80 font-medium">Start the 21-Day Awakening Experiment</span>
              </div>
            </button>
            <div className="space-y-1">
              <p className="text-sm text-slate-400 tracking-[0.3em] uppercase">Limited intake for early explorers</p>
              <div className="w-12 h-px bg-primary/40 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
