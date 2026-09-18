import React from 'react';
import { Phone, MessageCircle, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon, LinkedinIcon } from './SocialIcons';

export default function Footer({ onOpenLinkTree }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#182115] text-emerald-100/80 pt-16 pb-12 border-t border-[#2d3a27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <img 
              src="/assets/logo.png" 
              alt="Fertivitro Centro de Reprodução Humana" 
              className="h-12 w-auto brightness-0 invert opacity-95"
            />
            <p className="text-xs sm:text-sm text-emerald-100/70 leading-relaxed max-w-sm">
              Centro de excelência em medicina reprodutiva, acolhimento humano e laboratório próprio de fertilização <i className="italic">in vitro</i> em São Paulo. Mais de 20 anos transformando sonhos em vidas.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.instagram.com/fertivitro/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#839A74] flex items-center justify-center text-white transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a 
                href="https://www.facebook.com/Fertivitro" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#839A74] flex items-center justify-center text-white transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a 
                href="https://www.youtube.com/c/FertivitroCentrodeReproduçãoHumana" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#839A74] flex items-center justify-center text-white transition-colors"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/company/fertivitro-centro-de-reproducao-humana" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#839A74] flex items-center justify-center text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Tratamentos */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Tratamentos
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#fiv" className="hover:text-white transition-colors">Fertilização in vitro (FIV)</a>
              </li>
              <li>
                <a href="#icsi" className="hover:text-white transition-colors">Injeção Intracitoplasmática (ICSI)</a>
              </li>
              <li>
                <a href="#inseminacao" className="hover:text-white transition-colors">Inseminação Intrauterina (IIU)</a>
              </li>
              <li>
                <a href="#congelamento" className="hover:text-white transition-colors">Preservação da Fertilidade</a>
              </li>
              <li>
                <a href="#fertibank" className="hover:text-white transition-colors">Fertibank (Banco de Óvulos)</a>
              </li>
              <li>
                <a href="#bebe-em-casa" className="hover:text-white transition-colors">Programa Bebê em Casa</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Navegação */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Institucional
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">A Fertivitro</a>
              </li>
              <li>
                <a href="#laboratorio" className="hover:text-white transition-colors">Laboratório FIV</a>
              </li>
              <li>
                <a href="#tour" className="hover:text-white transition-colors">Nossa Estrutura</a>
              </li>
              <li>
                <a href="#duvidas" className="hover:text-white transition-colors">Dúvidas Frequentes</a>
              </li>
              <li>
                <a href="https://fertivitro.com.br/blog/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Blog & Artigos</a>
              </li>
              <li>
                <a href="https://fertivitro.com.br/wp-content/uploads/2022/11/Fertivitro_PDF_Guia-do-Paciente-V1.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Guia do Paciente (PDF)</a>
              </li>
              {onOpenLinkTree && (
                <li>
                  <button 
                    onClick={onOpenLinkTree} 
                    className="hover:text-white transition-colors text-left text-emerald-300 font-semibold flex items-center gap-1"
                  >
                    <span>Bio / Links Rápidos</span>
                    <span className="text-[10px] bg-emerald-700/60 text-white px-1 rounded">Novo</span>
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Col 4: Endereço & Contato */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Atendimento & Moema
            </h4>
            <div className="space-y-2.5 text-xs text-emerald-100/70">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#839A74] shrink-0 mt-0.5" />
                <span>Av. Indianópolis, 529 - Moema<br />São Paulo - SP, 04063-001</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#839A74] shrink-0" />
                <span>(11) 5081-9600 • (11) 4328-1367</span>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a href="https://wa.me/5511995466272" target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-bold hover:underline">
                  (11) 99546-6272 (WhatsApp)
                </a>
              </p>
              <div className="pt-2 text-[11px] text-emerald-100/60 leading-tight">
                Segunda a Sexta: 7h às 19h<br />
                Sábado: 8h às 12h
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Responsabilidade Técnica & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-100/50">
          <div className="text-center sm:text-left space-y-0.5">
            <p className="font-semibold text-emerald-100/80">
              Fertivitro Centro de Reprodução Humana • Diretor Clínico: Dr. Luiz Eduardo Albuquerque (CRM-SP 61.351)
            </p>
            <p>
              © {new Date().getFullYear()} Fertivitro. Todos os direitos reservados.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-emerald-100/70 hover:text-white transition-colors"
            aria-label="Voltar ao topo"
          >
            <span>Topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}