
import React from 'react';

const Mission: React.FC = () => {
  return (
    <section className="py-40 relative bg-background-dark z-20">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-16">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            三十多次手术重塑了我的面孔，<br/>
            接下来的十年，我想重塑灵魂。
          </h2>
          <p className="text-xl md:text-2xl italic font-light opacity-80">
            30 surgeries reshaped my face. Now, I’m spending the next decade reshaping the soul.
          </p>
        </div>
        
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto"></div>
        
        <div className="space-y-8">
          <h3 className="text-2xl md:text-4xl font-medium text-slate-300">
            我不再只设计屏幕上的美，我要开始设计<span className="glow-text-gold">慈悲</span>。
          </h3>
          <p className="text-lg md:text-xl font-light opacity-80">
            I’ve stopped designing beauty for screens. I’ve started designing <span className="glow-text-gold">compassion</span> for humanity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
