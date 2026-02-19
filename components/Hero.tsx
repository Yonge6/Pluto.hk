
import React from 'react';

interface HeroProps {
  onStartExperiment: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartExperiment }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          alt="Pluto Icy Terrain" 
          className="absolute bottom-0 left-0 w-full h-full object-cover object-bottom scale-105" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDa15OxDKSDLCeP6dM1fRFhR4XcAGdmjWV4myRKVGNWTAayZ0sSmOUqJ_3JBoKHVYGs4lwd-eklGbXzghzUuIW8QVr_y4fEJjIPbkDIGJLiT1BRuOks3BMxJL1vlAq_ApdvDnn7y_PVcio8UffMGVyoEHCVDsPvD790qjKfztShncGWCryU94g3ocFlUqb_1AARAlnNzSj9oBVnkxaGR8xHRde_g3tVUTb6LbUTfiB-aV1losMsp1YjdYWnEKPsq27B43zdnjBn6t0"
        />
        <div className="absolute inset-0 pluto-vista-overlay"></div>
        <div className="absolute inset-0 atmospheric-glow"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center pt-20">
        <div className="mb-12 inline-block">
          <div className="relative">
            <div className="absolute inset-0 animate-pulse bg-primary/20 rounded-full blur-3xl"></div>
            <span className="material-symbols-outlined text-7xl md:text-8xl text-white/80 relative z-10" style={{ fontVariationSettings: "'FILL' 0, 'wght' 100" }}>
              local_florist
            </span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-2xl">
              AI 的算力，我们的解药。<br/>
              从设计像素，到设计<span className="glow-text-gold italic">慈悲</span>。
            </h1>
            <p className="text-2xl md:text-3xl tracking-wide max-w-3xl mx-auto drop-shadow-lg opacity-80 font-light">
              AI for Power, <span className="glow-text-gold">Compassion</span> for Soul. <br className="hidden md:block"/> 
              From Designing Pixels to Designing <span className="glow-text-purple">Awakening</span>.
            </p>
          </div>

          <div className="space-y-2 pt-6">
            <p className="text-lg md:text-xl text-slate-300 font-light italic">
              在这场极致效率的荒原里，陪你种下一朵觉醒的小花。
            </p>
            <p className="text-base font-light tracking-wide opacity-70">
              Planting a flower of awareness in the wasteland of hyper-efficiency.
            </p>
          </div>

          <div className="pt-12">
            <button 
              onClick={onStartExperiment}
              className="bg-primary hover:bg-primary/80 text-white px-10 py-5 rounded-xl text-lg font-bold transition-all transform hover:scale-105 shadow-2xl shadow-primary/40 flex items-center gap-4 mx-auto border border-white/10"
            >
              <span>开启 21 天觉醒实验</span>
              <span className="text-sm font-normal opacity-70">| 21-Day Experiment</span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
        <span className="material-symbols-outlined text-3xl">expand_more</span>
      </div>
    </section>
  );
};

export default Hero;
