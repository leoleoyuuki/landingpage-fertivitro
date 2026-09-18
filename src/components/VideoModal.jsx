import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      >
        <div 
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-2xl w-full bg-stone-950 rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col items-center"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-colors"
            aria-label="Fechar vídeo"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Video element */}
          <div className="w-full flex justify-center bg-black">
            <video
              src="/assets/lab-video.mp4"
              controls
              autoPlay
              playsInline
              className="max-h-[80vh] w-auto aspect-[9/16] object-cover rounded-2xl"
            />
          </div>

          {/* Caption */}
          <div className="w-full p-4 sm:p-5 bg-stone-900/90 text-white flex items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Laboratório de FIV Fertivitro</span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Rotina real da equipe de embriologia em cabine de fluxo laminar IVFtech.
              </p>
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors shrink-0"
            >
              Fechar
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
