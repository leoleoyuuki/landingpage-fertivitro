import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, X, ChevronLeft, ChevronRight, Camera, MapPin } from 'lucide-react';

const TOUR_PHOTOS = [
  {
    src: '/assets/facade.jpg',
    title: 'Fachada da Clínica Fertivitro',
    category: 'Localização',
    desc: 'Arquitetura moderna e privativa localizada na Av. Indianópolis, 529 - Moema, São Paulo.'
  },
  {
    src: '/assets/reception-main.jpg',
    title: 'Lounge e Recepção Principal',
    category: 'Acolhimento',
    desc: 'Espaço planejado com iluminação aconchegante, acabamentos em madeira e total conforto para os pacientes.'
  },
  {
    src: '/assets/reception-desk.jpg',
    title: 'Área de Atendimento ao Paciente',
    category: 'Recepção',
    desc: 'Balcão de acolhimento com equipe treinada para atendimento empático, humanizado e pontual.'
  },
  {
    src: '/assets/lab-overview.jpg',
    title: 'Laboratório de FIV Próprio',
    category: 'Laboratório',
    desc: 'Cabines de fluxo laminar IVFtech e incubadoras com atmosfera controlada para desenvolvimento embrionário.'
  },
  {
    src: '/assets/lab-microscope.jpg',
    title: 'Estação de Micromanipulação',
    category: 'Tecnologia',
    desc: 'Microscópios Nikon de alta resolução para procedimentos de ICSI e biópsia de blastocistos.'
  },
  {
    src: '/assets/fertibank-cryotanks.jpg',
    title: 'Banco de Óvulos & Criopreservação',
    category: 'Fertibank',
    desc: 'Tanques criogênicos MVE com nitrogênio líquido a -196°C para vitrificação de oócitos e embriões.'
  },
  {
    src: '/assets/procedure-room.jpg',
    title: 'Sala de Procedimentos Cirúrgicos',
    category: 'Centro Cirúrgico',
    desc: 'Sala equipada para punção oocitária e transferência de embriões acoplada diretamente ao laboratório.'
  },
  {
    src: '/assets/procedure-action.jpg',
    title: 'Equipe em Procedimento Clínico',
    category: 'Corpo Clínico',
    desc: 'Dr. Luiz Eduardo Albuquerque e equipe médica durante procedimento guiado por ultrassonografia.'
  }
];

export default function ClinicTour() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const openLightbox = (index) => setSelectedPhotoIndex(index);
  const closeLightbox = () => setSelectedPhotoIndex(null);

  const nextPhoto = (e) => {
    e.stopPropagation();
    setSelectedPhotoIndex((prev) => (prev + 1) % TOUR_PHOTOS.length);
  };

  const prevPhoto = (e) => {
    e.stopPropagation();
    setSelectedPhotoIndex((prev) => (prev - 1 + TOUR_PHOTOS.length) % TOUR_PHOTOS.length);
  };

  return (
    <section id="tour" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#687e5a] bg-[#e8efe4] px-3.5 py-1 rounded-full">
            Tour pelas Instalações
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
            Conheça a Nossa Estrutura em Moema
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Ambientes planejados para aliar o máximo rigor científico de reprodução assistida ao carinho, acolhimento e privacidade que você merece.
          </p>
        </div>

        {/* Masonry / Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {TOUR_PHOTOS.map((photo, idx) => (
            <motion.div
              key={photo.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden shadow-xs hover:shadow-xl cursor-pointer aspect-square sm:aspect-[4/3] bg-stone-100 border border-stone-200/80 transition-all duration-300"
            >
              <img 
                src={photo.src} 
                alt={photo.title} 
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

              {/* Hover overlay icon */}
              <div className="absolute top-3 right-3 p-2 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4" />
              </div>

              {/* Bottom labels */}
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-300 block mb-0.5">
                  {photo.category}
                </span>
                <h4 className="text-xs sm:text-sm font-bold truncate leading-snug">
                  {photo.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Address callout */}
        <div className="mt-10 p-4 rounded-2xl bg-[#FAF9F5] border border-stone-200/80 flex flex-wrap items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#839A74]/20 flex items-center justify-center text-[#4e6143]">
              <MapPin className="w-5 h-5 text-[#839A74]" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-800">Venha nos visitar em Moema:</span>
              <p className="text-xs text-slate-600">Av. Indianópolis, 529 - Moema, São Paulo - SP (Estacionamento com manobrista no local)</p>
            </div>
          </div>

          <a 
            href="#contato" 
            className="px-5 py-2 rounded-full bg-white hover:bg-stone-50 border border-stone-300 text-slate-700 text-xs font-bold shadow-xs transition-colors"
          >
            Ver Mapa & Horários
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <div className="relative max-w-5xl w-full flex flex-col items-center">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
                aria-label="Fechar galeria"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Prev / Next Buttons */}
              <button
                onClick={prevPhoto}
                className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-colors"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextPhoto}
                className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-colors"
                aria-label="Próxima foto"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Main Photo */}
              <motion.div
                key={selectedPhotoIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className="rounded-2xl overflow-hidden shadow-2xl max-h-[75vh] w-auto max-w-full"
              >
                <img 
                  src={TOUR_PHOTOS[selectedPhotoIndex].src} 
                  alt={TOUR_PHOTOS[selectedPhotoIndex].title}
                  className="max-h-[75vh] w-auto object-contain mx-auto rounded-2xl" 
                />
              </motion.div>

              {/* Photo Caption */}
              <div 
                onClick={(e) => e.stopPropagation()} 
                className="mt-4 text-center text-white max-w-xl"
              >
                <span className="text-xs uppercase font-bold tracking-wider text-emerald-400">
                  {TOUR_PHOTOS[selectedPhotoIndex].category}
                </span>
                <h3 className="text-lg font-bold mt-0.5">
                  {TOUR_PHOTOS[selectedPhotoIndex].title}
                </h3>
                <p className="text-xs text-white/80 mt-1">
                  {TOUR_PHOTOS[selectedPhotoIndex].desc}
                </p>
                <div className="text-[11px] text-white/50 mt-2">
                  {selectedPhotoIndex + 1} de {TOUR_PHOTOS.length} fotos
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
