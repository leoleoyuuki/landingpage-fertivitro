import React, { useState, useEffect } from 'react';
import { X, Shield } from 'lucide-react';

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('fertivitro_cookie_accepted');
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('fertivitro_cookie_accepted', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-3 right-3 sm:left-4 sm:right-auto z-40 max-w-full sm:max-w-sm bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-stone-200 text-xs text-slate-700 animate-in fade-in slide-in-from-bottom-3 duration-300 box-border">
      <div className="flex items-start gap-3">
        <Shield className="w-5 h-5 text-[#839A74] shrink-0 mt-0.5" />
        <div className="space-y-2">
          <p className="leading-relaxed">
            Usamos cookies para melhorar sua experiência e oferecer navegação segura de acordo com a nossa{' '}
            <a 
              href="https://fertivitro.com.br/politica-de-privacidade/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#526347] font-bold underline"
            >
              Política de Privacidade
            </a>.
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={acceptCookies}
              className="px-3.5 py-1.5 rounded-lg bg-[#839A74] hover:bg-[#687e5a] text-white font-bold text-xs transition-colors"
            >
              Concordar e Continuar
            </button>
            <button
              onClick={() => setVisible(false)}
              className="text-slate-400 hover:text-slate-600 p-1"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
