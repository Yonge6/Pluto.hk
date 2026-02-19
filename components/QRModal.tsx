
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
      <div className="glass-card max-w-sm w-full p-10 rounded-3xl relative animate-in zoom-in duration-300 border-primary/30 shadow-[0_0_50px_rgba(115,23,207,0.2)]">
        <button 
          className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors bg-white/5 p-1 rounded-full" 
          onClick={onClose}
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        
        <div className="text-center space-y-8">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold tracking-tight">开启觉醒实验</h3>
            <p className="text-sm text-slate-400 font-light tracking-widest uppercase">Start the Experiment</p>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full group-hover:bg-primary/40 transition-all"></div>
            <div className="bg-white p-5 rounded-2xl relative z-10 inline-block shadow-2xl overflow-hidden">
              {/* 这里使用了您提供的二维码类似的清晰版本 */}
              <img 
                alt="Pluto Awakening QR Code" 
                className="w-56 h-56 md:w-64 md:h-64 object-contain" 
                src="https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://pluto.hk&margin=10&format=png"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="text-base text-slate-200 font-medium">扫描二维码，登陆冥王星</p>
            <p className="text-xs text-slate-500 italic">Scan to land on Pluto and begin your journey.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRModal;
