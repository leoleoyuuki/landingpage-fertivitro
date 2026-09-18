import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  UserPlus, 
  Navigation, 
  Globe, 
  MessageCircle, 
  MapPin, 
  Phone, 
  Check, 
  Copy, 
  ExternalLink, 
  Sparkles, 
  Award, 
  ShieldCheck, 
  ArrowLeft,
  ChevronRight,
  Compass
} from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon, LinkedinIcon, GoogleMapsIcon, WazeIcon } from './SocialIcons';
import GpsModal from './GpsModal';

export default function LinkTreePage({ onGoToLandingPage }) {
  const [copied, setCopied] = useState(false);
  const [vcardSaved, setVcardSaved] = useState(false);
  const [gpsModalOpen, setGpsModalOpen] = useState(false);

  // Harmonize safe-area, status bar, and HTML/Body background with page dark green #182215
  useEffect(() => {
    const prevHtmlBg = document.documentElement.style.backgroundColor;
    const prevBodyBg = document.body.style.backgroundColor;

    // Apply exact top gradient color to body and root HTML
    document.documentElement.style.backgroundColor = '#182215';
    document.body.style.backgroundColor = '#182215';

    // Update browser theme-color for mobile notch / status bar
    let themeMeta = document.querySelector('meta[name="theme-color"]');
    const prevThemeColor = themeMeta ? themeMeta.getAttribute('content') : '#FAF9F5';
    if (!themeMeta) {
      themeMeta = document.createElement('meta');
      themeMeta.name = 'theme-color';
      document.head.appendChild(themeMeta);
    }
    themeMeta.setAttribute('content', '#182215');

    return () => {
      document.documentElement.style.backgroundColor = prevHtmlBg || '#FAF9F5';
      document.body.style.backgroundColor = prevBodyBg || '#FAF9F5';
      if (themeMeta) {
        themeMeta.setAttribute('content', prevThemeColor || '#FAF9F5');
      }
    };
  }, []);

  // Generate and download .vcf vCard file
  const handleSaveContact = () => {
    const vcardData = `BEGIN:VCARD
VERSION:3.0
N:Fertivitro;Centro de Reprodução Humana;;;
FN:Fertivitro Centro de Reprodução Humana
ORG:Fertivitro Centro de Reprodução Humana
TITLE:Clínica de Reprodução Humana Assistida
TEL;TYPE=CELL,VOICE,WHATSAPP:+5511995466272
TEL;TYPE=WORK,VOICE:+551150819600
TEL;TYPE=WORK,VOICE:+551143281367
EMAIL;TYPE=WORK:contato@fertivitro.com.br
ADR;TYPE=WORK:;;Av. Indianópolis, 529 - Moema;São Paulo;SP;04063-001;Brasil
URL:https://fertivitro.com.br
NOTE:Diretor Clínico: Dr. Luiz Eduardo Albuquerque CRM-SP 61351. Centro Acreditado REDLARA.
END:VCARD`;

    const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Fertivitro-Contato.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setVcardSaved(true);
    setTimeout(() => setVcardSaved(false), 3500);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div 
      style={{ paddingTop: 'calc(env(safe-area-inset-top, 0px) + 1.25rem)' }}
      className="min-h-screen bg-gradient-to-b from-[#182215] via-[#243020] to-[#FAF9F5] text-slate-800 flex flex-col items-center px-4 pb-8 sm:pb-12 relative overflow-hidden font-sans"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#839A74]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-md mx-auto z-10 flex flex-col items-center">
        {/* Top bar with back to site button */}
        <div className="w-full flex items-center justify-between mb-6 text-white/80 text-xs">
          <button
            onClick={onGoToLandingPage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar ao Site</span>
          </button>

          <button
            onClick={handleCopyLink}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all font-medium"
            title="Compartilhar link"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300 font-semibold">Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Compartilhar</span>
              </>
            )}
          </button>
        </div>

        {/* Profile Card / Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-8"
        >
          {/* Avatar / Logo with pulsing glow */}
          <div className="relative mb-4">
            <div className="absolute inset-0 rounded-full bg-[#839A74]/40 blur-md animate-pulse"></div>
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white p-2.5 shadow-2xl border-2 border-[#839A74] flex items-center justify-center overflow-hidden">
              <img
                src="/assets/logo-icon.png"
                alt="Fertivitro"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/logo.png";
                }}
              />
            </div>
            {/* Verified badge */}
            <div 
              className="absolute bottom-0 right-1 p-1.5 rounded-full bg-[#839A74] text-white shadow-md border-2 border-white"
              title="Clínica Acreditada REDLARA"
            >
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>

          <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-tight mb-1 flex items-center gap-1.5">
            <span>Fertivitro</span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
              Oficial
            </span>
          </h1>

          <p className="text-xs sm:text-sm font-semibold text-emerald-100/90 mb-2">
            Centro de Reprodução Humana Assistida
          </p>

          <p className="text-xs text-white/70 max-w-xs leading-relaxed">
            Mais de 20 anos transformando sonhos em vidas com tecnologia própria e acolhimento humano.
          </p>

          <div className="flex items-center gap-2 mt-3 text-[11px] text-emerald-200/80 bg-white/10 px-3 py-1 rounded-full backdrop-blur-xs">
            <MapPin className="w-3 h-3 text-[#91b383]" />
            <span>Moema, São Paulo • Telemedicina para todo Brasil</span>
          </div>
        </motion.div>

        {/* Action Links Stack */}
        <div className="w-full space-y-3.5 mb-8">
          {/* 1. Avaliar no Google Meu Negócio */}
          <motion.a
            href="https://search.google.com/local/writereview?placeid=ChIJ3RHXZhZa5pQRyRreDpytyoU"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="group relative flex items-center justify-between p-4 rounded-2xl bg-white hover:bg-amber-50/50 border border-amber-200/80 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Star className="w-6 h-6 fill-amber-400 text-amber-500" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-amber-700 transition-colors">
                    Avaliar no Google
                  </span>
                  <span className="text-[10px] bg-amber-100 text-amber-800 font-extrabold px-1.5 py-0.5 rounded">
                    5 Estrelas
                  </span>
                </div>
                <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                  Deixe seu depoimento e carinho no Google Meu Negócio
                </p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
          </motion.a>

          {/* 2. Adicionar Contato (Salvar vCard) */}
          <motion.button
            onClick={handleSaveContact}
            type="button"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="w-full group relative flex items-center justify-between p-4 rounded-2xl bg-white hover:bg-emerald-50/50 border border-stone-200 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-[#839A74]/15 text-[#526347] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                {vcardSaved ? <Check className="w-6 h-6 text-emerald-600" /> : <UserPlus className="w-6 h-6 text-[#839A74]" />}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-[#4e6143] transition-colors">
                    {vcardSaved ? 'Contato Salvo!' : 'Adicionar Contato à Agenda'}
                  </span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">
                    1 Clique
                  </span>
                </div>
                <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                  Salva WhatsApp, telefones e endereço direto no celular
                </p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-[#839A74] group-hover:translate-x-1 transition-all" />
          </motion.button>

          {/* 3. Rotas até o Endereço (Google Maps ou Waze) */}
          <motion.button
            onClick={() => setGpsModalOpen(true)}
            type="button"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-full group relative flex items-center justify-between p-4 rounded-2xl bg-white hover:bg-blue-50/40 border border-stone-200 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-left cursor-pointer"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Navigation className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-blue-700 transition-colors">
                    Rotas até a Clínica
                  </span>
                  <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-1.5 py-0.5 rounded">
                    Maps / Waze
                  </span>
                </div>
                <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                  Av. Indianópolis, 529 • Escolher Google Maps ou Waze
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="hidden sm:flex items-center gap-1 opacity-75 group-hover:opacity-100 transition-opacity">
                <div className="w-5 h-5 rounded-full bg-white shadow-2xs border border-stone-100 flex items-center justify-center p-0.5">
                  <GoogleMapsIcon className="w-3.5 h-3.5" />
                </div>
                <div className="w-5 h-5 rounded-full bg-white shadow-2xs border border-stone-100 flex items-center justify-center p-0.5">
                  <WazeIcon className="w-3.5 h-3.5" />
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
            </div>
          </motion.button>

          {/* 4. Link para a Landing Page Oficial */}
          <motion.button
            onClick={onGoToLandingPage}
            type="button"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="w-full group relative flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-[#839A74] to-[#637b54] text-white shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-white/20 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform backdrop-blur-xs">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-white text-sm sm:text-base">
                    Acessar Landing Page Oficial
                  </span>
                  <span className="text-[10px] bg-white/25 text-white font-extrabold px-1.5 py-0.5 rounded">
                    Completo
                  </span>
                </div>
                <p className="text-xs text-white/80 line-clamp-1 mt-0.5">
                  Conheça a clínica, o laboratório de FIV, equipe e tratamentos
                </p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </motion.button>

          {/* 5. Link para o Instagram */}
          <motion.a
            href="https://www.instagram.com/fertivitro/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="group relative flex items-center justify-between p-4 rounded-2xl bg-white hover:bg-pink-50/40 border border-stone-200 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-xs">
                <InstagramIcon className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-rose-600 transition-colors">
                    Instagram @fertivitro
                  </span>
                  <span className="text-[10px] bg-rose-100 text-rose-800 font-bold px-1.5 py-0.5 rounded">
                    Diário
                  </span>
                </div>
                <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                  Vídeos de laboratório, rotina médica e dúvidas
                </p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-rose-500 group-hover:translate-x-1 transition-all" />
          </motion.a>

          {/* 6. WhatsApp Oficial da Clínica */}
          <motion.a
            href="https://wa.me/5511995466272?text=Ol%C3%A1!%20Encontrei%20o%20link%20da%20Fertivitro%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20consultas."
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="group relative flex items-center justify-between p-4 rounded-2xl bg-white hover:bg-emerald-50/50 border border-emerald-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-xs">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-emerald-700 transition-colors">
                    Falar no WhatsApp
                  </span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">
                    (11) 99546-6272
                  </span>
                </div>
                <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                  Atendimento ágil para agendamento de consultas
                </p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
          </motion.a>
        </div>

        {/* Social Icons Strip */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <a
            href="https://www.instagram.com/fertivitro/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white shadow-xs border border-stone-200 flex items-center justify-center text-slate-700 hover:text-white hover:bg-[#839A74] transition-all"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.facebook.com/Fertivitro"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white shadow-xs border border-stone-200 flex items-center justify-center text-slate-700 hover:text-white hover:bg-[#839A74] transition-all"
            aria-label="Facebook"
          >
            <FacebookIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.youtube.com/c/FertivitroCentrodeReproduçãoHumana"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white shadow-xs border border-stone-200 flex items-center justify-center text-slate-700 hover:text-white hover:bg-[#839A74] transition-all"
            aria-label="YouTube"
          >
            <YoutubeIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/company/fertivitro-centro-de-reproducao-humana"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white shadow-xs border border-stone-200 flex items-center justify-center text-slate-700 hover:text-white hover:bg-[#839A74] transition-all"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Card info footer */}
        <div className="w-full text-center space-y-2 pt-4 border-t border-stone-200 text-xs text-slate-500">
          <div className="font-semibold text-slate-700">
            Fertivitro Centro de Reprodução Humana
          </div>
          <div>
            Diretor Clínico: Dr. Luiz Eduardo Albuquerque (CRM-SP 61.351)
          </div>
          <div>
            Av. Indianópolis, 529 - Moema, São Paulo - SP
          </div>
          <div className="text-[11px] text-slate-400">
            Seg. a Sex. das 7h às 19h | Sábado das 8h às 12h
          </div>
        </div>
      </div>

      {/* GPS App Selection Bottom Sheet / Modal */}
      <GpsModal
        isOpen={gpsModalOpen}
        onClose={() => setGpsModalOpen(false)}
      />
    </div>
  );
}