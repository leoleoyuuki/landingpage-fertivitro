import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-40 flex items-center gap-3">
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white shadow-xl border border-stone-200 text-xs font-semibold text-slate-800 animate-in fade-in slide-in-from-right-4 duration-300">
          <span>Olá! Posso tirar suas dúvidas sobre tratamentos?</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5"
            aria-label="Fechar mensagem"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <a
        href="https://wa.me/5511995466272?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20consultas%20e%20tratamentos%20na%20Fertivitro."
        target="_blank"
        rel="noopener noreferrer"
        className="relative group p-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl hover:shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all flex items-center justify-center"
        aria-label="Falar no WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400"></span>
        </span>
        <MessageCircle className="w-7 h-7 fill-white text-transparent" />
      </a>
    </div>
  );
}
