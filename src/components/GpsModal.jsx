import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Navigation, Copy, Check, ExternalLink, MapPin } from 'lucide-react';
import { GoogleMapsIcon, WazeIcon } from './SocialIcons';

export default function GpsModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const destinationAddress = 'Av. Indian?polis, 529 - Moema, S?o Paulo - SP, 04063-001';
  const googleMapsUrl = 'https://www.google.com/maps/dir/?api=1&destination=Fertivitro+-+Av.+Indian%C3%B3polis,+529+-+Moema,+S%C3%A3o+Paulo&destination_place_id=ChIJ3RHXZhZa5pQRyRreDpytyoU';
  const wazeUrl = 'https://waze.com/ul?ll=-23.603368,-46.654475&navigate=yes';

  const handleCopyAddress = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(destinationAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleOpenWaze = () => {
    const isMobile = typeof navigator !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = 'waze://?ll=-23.603368,-46.654475&navigate=yes';
      setTimeout(() => {
        window.open(wazeUrl, '_blank');
      }, 600);
      onClose();
    } else {
      window.open(wazeUrl, '_blank');
      onClose();
    }
  };

  const handleOpenGoogleMaps = () => {
    window.open(googleMapsUrl, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        />

        {/* Modal / Bottom Sheet */}
        <motion.div
          initial={{ y: '100%', opacity: 0.5 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 28, stiffness: 320 }}
          className="relative w-full max-w-md bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl p-6 z-10 overflow-hidden border-t sm:border border-stone-200"
        >
          {/* Mobile Drag Indicator Handle */}
          <div className="w-12 h-1.5 bg-stone-300 rounded-full mx-auto mb-4 sm:hidden" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="text-center sm:text-left mb-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold mb-2">
              <Navigation className="w-3.5 h-3.5 text-blue-600" />
              <span>Navega??o & Rotas</span>
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
              Como deseja ir at? a Fertivitro?
            </h3>
            <p className="text-xs text-slate-500 mt-1 flex items-center justify-center sm:justify-start gap-1">
              <MapPin className="w-3 h-3 text-[#839A74] shrink-0" />
              <span className="line-clamp-1">Av. Indian?polis, 529 - Moema, S?o Paulo</span>
            </p>
          </div>

          {/* Navigation App Options Stack */}
          <div className="space-y-3 mb-4">
            {/* 1. Google Maps */}
            <button
              onClick={handleOpenGoogleMaps}
              type="button"
              className="w-full flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-stone-50 hover:bg-emerald-50/40 border border-stone-200/90 hover:border-emerald-300 active:scale-[0.99] transition-all duration-200 group text-left shadow-xs cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-stone-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <GoogleMapsIcon className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-emerald-800">
                      Google Maps
                    </span>
                    <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-1.5 py-0.5 rounded">
                      App Nativo
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Abrir no aplicativo Google Maps
                  </p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-emerald-700 transition-colors" />
            </button>

            {/* 2. Waze */}
            <button
              onClick={handleOpenWaze}
              type="button"
              className="w-full flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-stone-50 hover:bg-sky-50/50 border border-stone-200/90 hover:border-sky-300 active:scale-[0.99] transition-all duration-200 group text-left shadow-xs cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-stone-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <WazeIcon className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-sky-800">
                      Waze
                    </span>
                    <span className="text-[10px] bg-sky-100 text-sky-800 font-bold px-1.5 py-0.5 rounded">
                      Tr?nsito ao vivo
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Navegar com alertas de tr?fego e rotas
                  </p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-sky-600 transition-colors" />
            </button>
          </div>

          {/* Copy Address Alternative */}
          <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-3">
            <button
              onClick={handleCopyAddress}
              type="button"
              className="w-full py-2.5 px-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-slate-700 font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">Endere?o Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>Copiar Endere?o Completo</span>
                </>
              )}
            </button>
          </div>

          {/* Cancel button (Native ActionSheet style) */}
          <button
            onClick={onClose}
            type="button"
            className="w-full mt-2 py-2.5 rounded-xl text-slate-500 hover:text-slate-800 font-medium text-xs transition-colors text-center cursor-pointer"
          >
            Cancelar
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
