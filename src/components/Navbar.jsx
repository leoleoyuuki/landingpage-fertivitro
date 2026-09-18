import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Calendar, Phone, MessageCircle, Clock, ShieldCheck, Link2 } from 'lucide-react';

export default function Navbar({ onOpenAppointmentModal, onOpenLinkTree }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [treatmentsDropdown, setTreatmentsDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-stone-200/80' 
        : 'bg-white py-4 shadow-none'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img 
            src="/assets/logo.png" 
            alt="Fertivitro Centro de Reprodução Humana" 
            className="h-12 md:h-14 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            onError={(e) => {
              // Fallback if logo fails
              e.target.onerror = null;
              e.target.src = "/assets/logo-icon.png";
            }}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-[14.5px] font-medium text-slate-700">
          <a href="#inicio" className="text-[#637b54] font-semibold hover:text-[#4e6143] transition-colors">
            Início
          </a>

          <a href="#sobre" className="hover:text-[#637b54] transition-colors">
            A Clínica
          </a>

          <a href="#laboratorio" className="hover:text-[#637b54] transition-colors flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Laboratório FIV
          </a>

          <a href="#fertibank" className="hover:text-[#637b54] transition-colors font-semibold text-emerald-800 flex items-center gap-1">
            Fertibank
            <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded-full font-bold">Banco de Óvulos</span>
          </a>

          {/* Treatments Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setTreatmentsDropdown(true)}
            onMouseLeave={() => setTreatmentsDropdown(false)}
          >
            <a 
              href="#tratamentos" 
              className="flex items-center gap-1 hover:text-[#637b54] transition-colors py-2"
            >
              <span>Tratamentos</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${treatmentsDropdown ? 'rotate-180 text-[#637b54]' : ''}`} />
            </a>

            {treatmentsDropdown && (
              <div className="absolute top-full -left-4 w-72 bg-white rounded-xl shadow-xl border border-stone-100 p-2 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <a 
                  href="#fiv" 
                  className="block px-3 py-2 text-sm rounded-lg hover:bg-[#FAF9F5] hover:text-[#637b54] transition-colors"
                >
                  <span className="font-semibold block text-slate-800">Fertilização in Vitro (FIV)</span>
                  <span className="text-xs text-slate-500">Alta complexidade e precisão laboratorial</span>
                </a>
                <a 
                  href="#icsi" 
                  className="block px-3 py-2 text-sm rounded-lg hover:bg-[#FAF9F5] hover:text-[#637b54] transition-colors"
                >
                  <span className="font-semibold block text-slate-800">Injeção Intracitoplasmática (ICSI)</span>
                  <span className="text-xs text-slate-500">Micromanipulação de espermatozoide</span>
                </a>
                <a 
                  href="#inseminacao" 
                  className="block px-3 py-2 text-sm rounded-lg hover:bg-[#FAF9F5] hover:text-[#637b54] transition-colors"
                >
                  <span className="font-semibold block text-slate-800">Inseminação Intrauterina (IIU)</span>
                  <span className="text-xs text-slate-500">Tratamento de baixa complexidade</span>
                </a>
                <a 
                  href="#congelamento" 
                  className="block px-3 py-2 text-sm rounded-lg hover:bg-[#FAF9F5] hover:text-[#637b54] transition-colors"
                >
                  <span className="font-semibold block text-slate-800">Preservação da Fertilidade</span>
                  <span className="text-xs text-slate-500">Congelamento de óvulos e sêmen</span>
                </a>
                <div className="my-1 border-t border-stone-100"></div>
                <a 
                  href="#bebe-em-casa" 
                  className="block px-3 py-2 text-sm rounded-lg bg-emerald-50/70 text-emerald-900 hover:bg-emerald-100/70 transition-colors"
                >
                  <span className="font-bold flex items-center justify-between text-emerald-800">
                    Programa Bebê em Casa
                    <span className="text-[10px] bg-emerald-600 text-white px-1.5 py-0.5 rounded">Social</span>
                  </span>
                  <span className="text-xs text-emerald-700">Acesso facilitado à reprodução assistida</span>
                </a>
              </div>
            )}
          </div>

          <a href="#tour" className="hover:text-[#637b54] transition-colors">
            Estrutura
          </a>

          <a href="#duvidas" className="hover:text-[#637b54] transition-colors">
            Dúvidas
          </a>

          <a href="#contato" className="hover:text-[#637b54] transition-colors">
            Contato
          </a>
        </nav>

        {/* CTA Button & Mobile Trigger */}
        <div className="flex items-center gap-3">
          {onOpenLinkTree && (
            <button
              onClick={onOpenLinkTree}
              className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-stone-200 hover:border-[#839A74] hover:bg-[#FAF9F5] text-slate-700 hover:text-[#4e6143] font-semibold text-xs transition-all shadow-2xs"
              title="Abrir página com links rápidos de contato, avaliação no Google e rotas"
            >
              <Link2 className="w-3.5 h-3.5 text-[#839A74]" />
              <span>Links da Bio</span>
            </button>
          )}

          <button
            onClick={onOpenAppointmentModal}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#839A74] hover:bg-[#687e5a] text-white font-bold text-sm shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Calendar className="w-4 h-4" />
            <span>Agendar Consulta</span>
          </button>

          <a
            href="https://wa.me/5511995466272?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20consultas%20na%20Fertivitro"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden p-2.5 rounded-full bg-[#25D366] text-white shadow-sm"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-stone-100 transition-colors"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200 shadow-xl">
          <div className="flex flex-col space-y-3 text-base font-medium text-slate-800">
            <a 
              href="#inicio" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-100 text-[#637b54] font-semibold"
            >
              Início
            </a>
            <a 
              href="#sobre" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-100"
            >
              A Clínica & Equipe
            </a>
            <a 
              href="#laboratorio" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-100 flex items-center justify-between"
            >
              <span>Laboratório de FIV</span>
              <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">Tecnologia Própria</span>
            </a>
            <a 
              href="#fertibank" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-100 flex items-center justify-between text-emerald-800 font-semibold"
            >
              <span>Fertibank</span>
              <span className="text-xs bg-emerald-600 text-white px-2 py-0.5 rounded-full font-bold">Banco de Óvulos</span>
            </a>
            <a 
              href="#tratamentos" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-100"
            >
              Tratamentos & Procedimentos
            </a>
            <a 
              href="#tour" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-100"
            >
              Tour pelas Instalações
            </a>
            <a 
              href="#duvidas" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-100"
            >
              Dúvidas Frequentes
            </a>
            <a 
              href="#contato" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-100"
            >
              Localização & Contato
            </a>

            {onOpenLinkTree && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLinkTree();
                }}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-emerald-50/70 hover:bg-emerald-100/70 text-emerald-900 font-semibold text-left transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Link2 className="w-4 h-4 text-[#839A74]" />
                  <span>Links da Bio / Linktree</span>
                </div>
                <span className="text-[10px] bg-[#839A74] text-white px-2 py-0.5 rounded-full">Rotas & Contato</span>
              </button>
            )}
          </div>

          <div className="pt-3 border-t border-stone-100 space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointmentModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#839A74] text-white font-bold shadow"
            >
              <Calendar className="w-5 h-5" />
              <span>Agendar Consulta</span>
            </button>

            <a
              href="https://wa.me/5511995466272?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20consultas%20na%20Fertivitro"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-emerald-500 text-emerald-700 hover:bg-emerald-50 font-semibold text-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Falar no WhatsApp (11) 99546-6272</span>
            </a>

            <div className="text-center text-xs text-slate-500 pt-2 flex items-center justify-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>Presencial e Telemedicina para todo o Brasil</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
