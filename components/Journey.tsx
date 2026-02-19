
import React from 'react';

interface JourneyProps {
  onStartExperiment: () => void;
}

const Journey: React.FC<JourneyProps> = ({ onStartExperiment }) => {
  const cards = [
    {
      icon: "movie_filter",
      title: "灵魂震撼内容",
      description: "Soul-Stirring Content: Immersive cinematic experiences and curated meditations designed to bridge the gap between AI and human emotion."
    },
    {
      icon: "featured_seasonal_and_gifts",
      title: "触手可及的温暖",
      description: "Tangible Warmth: Physical companion cards and artisan plush companions that bring the digital Awakening into your physical space."
    },
    {
      icon: "auto_awesome",
      title: "AI 原生陪伴 (豆豆龙)",
      description: "AI-Native Companionship (Doudoulong): Nurturing your Inner Child and connecting with your Higher Self through advanced neural empathy."
    }
  ];

  return (
    <section className="py-40 relative bg-background-dark/80 z-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-24 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">我们的旅程 | Our Journey</h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full shadow-lg shadow-primary/50"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="glass-card p-12 rounded-2xl hover:border-primary/60 transition-all group relative flex flex-col h-full"
            >
              <div className="absolute -top-6 left-12 bg-background-dark p-3 rounded-xl border border-white/5 text-primary group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {card.icon}
                </span>
              </div>
              <div className="flex-grow">
                <h4 className="text-2xl font-bold mb-6 mt-4">{card.title}</h4>
                <p className="text-base font-light leading-relaxed opacity-80 mb-8">
                  {card.description}
                </p>
              </div>
              <button 
                onClick={onStartExperiment}
                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-white transition-colors group/btn w-fit"
              >
                <span>即刻开启 | Start Now</span>
                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
