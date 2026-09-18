import React from 'react';
import { Phone, MessageCircle, FileText, MapPin, Link2 } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon, LinkedinIcon } from './SocialIcons';

export default function TopBar({ onOpenLinkTree }) {
  return (
    <div className="bg-[#2D3828] text-emerald-50/90 text-xs py-2 px-4 border-b border-[#3d4a36] hidden md:block">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
        {/* Contact info */}
        <div className="flex items-center gap-6">
          <a 
            href="tel:+551150819600" 
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#91b383]" />
            <span className="font-medium">(11) 5081-9600</span>
          </a>
          <span className="text-emerald-300/30">|</span>
          <a 
            href="https://wa.me/5511995466272?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20consultas%20na%20Fertivitro" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1.5 hover:text-white transition-colors group"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span className="font-medium">(11) 99546-6272</span>
            <span className="bg-[#25D366]/20 text-[#25D366] text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider ml-1">WhatsApp</span>
          </a>
          <span className="text-emerald-300/30">|</span>
          <div className="flex items-center gap-1 text-emerald-100/70">
            <MapPin className="w-3.5 h-3.5 text-[#91b383]" />
            <span>Av. Indianópolis, 529 - Moema, SP</span>
          </div>
        </div>

        {/* Socials & English Guide */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3">
            <a 
              href="https://www.instagram.com/fertivitro/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram Fertivitro"
              className="hover:text-white hover:scale-110 transition-all text-emerald-100/80"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
            <a 
              href="https://www.facebook.com/Fertivitro" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook Fertivitro"
              className="hover:text-white hover:scale-110 transition-all text-emerald-100/80"
            >
              <FacebookIcon className="w-3.5 h-3.5" />
            </a>
            <a 
              href="https://www.youtube.com/c/FertivitroCentrodeReproduçãoHumana" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="YouTube Fertivitro"
              className="hover:text-white hover:scale-110 transition-all text-emerald-100/80"
            >
              <YoutubeIcon className="w-3.5 h-3.5" />
            </a>
            <a 
              href="https://www.linkedin.com/company/fertivitro-centro-de-reproducao-humana" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn Fertivitro"
              className="hover:text-white hover:scale-110 transition-all text-emerald-100/80"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
          </div>

          <span className="text-emerald-300/30">|</span>

          {onOpenLinkTree && (
            <button
              onClick={onOpenLinkTree}
              className="flex items-center gap-1.5 font-semibold text-emerald-200 hover:text-white transition-colors bg-white/10 hover:bg-white/20 px-2 py-0.5 rounded-full"
              title="Abrir página estilo Linktree com links rápidos"
            >
              <Link2 className="w-3 h-3 text-[#91b383]" />
              <span>Bio / Links Rápidos</span>
            </button>
          )}

          <span className="text-emerald-300/30">|</span>

          <a 
            href="https://fertivitro.com.br/wp-content/uploads/2022/12/Fertivitro_PDF_English-2022.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-semibold text-[#b3cca8] hover:text-white transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>English PDF Guide</span>
          </a>
        </div>
      </div>
    </div>
  );
}