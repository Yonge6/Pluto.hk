
import React from 'react';

interface QRModalProps {
  onClose: () => void;
}

const QRModal: React.FC<QRModalProps> = ({ onClose }) => {
  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background-dark/95 backdrop-blur-xl animate-in fade-in duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="glass-card max-w-md w-full p-12 rounded-3xl relative animate-in zoom-in duration-300 border-primary/30 shadow-[0_0_60px_rgba(115,23,207,0.3)]">
        <button 
          className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full" 
          onClick={onClose}
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>
        
        <div className="text-center space-y-10 py-4">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-full animate-pulse"></div>
            <span className="material-symbols-outlined text-7xl text-primary relative z-10" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200" }}>
              hourglass_empty
            </span>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-4xl font-bold tracking-[0.2em] glow-text-purple">敬请期待</h3>
              <p className="text-2xl font-light tracking-[0.1em] text-slate-300">COMING SOON</p>
            </div>
            
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto"></div>
            
            <div className="space-y-3">
              <p className="text-slate-400 font-light leading-relaxed">
                冥王星登陆计划正在紧张筹备中，<br/>
                感谢您的关注与耐心。
              </p>
              <p className="text-xs text-slate-500 italic uppercase tracking-wider">
                The Pluto landing mission is currently in preparation. <br/>
                Thank you for your patience and interest.
              </p>
            </div>
          </div>
          
          <button 
            onClick={onClose}
            className="w-full py-4 rounded-xl border border-primary/20 hover:bg-primary/10 transition-all text-sm font-bold tracking-widest text-primary uppercase"
          >
            返回 | Return
          </button>
        </div>
      </div>
    </div>
  );
};

export default QRModal;
