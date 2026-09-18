import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize2, ShieldCheck, Microscope, Sparkles, CheckCircle2, Award } from 'lucide-react';

export default function LabShowcase({ onOpenVideoModal }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="laboratorio" className="py-20 sm:py-28 bg-[#1B2317] text-white relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#839A74]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-emerald-900/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#b3cca8] bg-[#839A74]/25 px-4 py-1 rounded-full border border-[#839A74]/30">
              <Microscope className="w-3.5 h-3.5" />
              Tecnologia & Ciência Própria
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-5 leading-tight">
              Nosso Laboratório de Fertilização <i className="italic font-serif">in vitro</i>
            </h2>

            <p className="text-base sm:text-lg text-emerald-100/80 leading-relaxed">
              O coração da Fertivitro: uma estrutura laboratorial própria com equipamentos de última geração, pressão positiva de ar e controle estrito de atmosfera para oferecer as melhores taxas de desenvolvimento embrionário.
            </p>
          </motion.div>
        </div>

        {/* Video & Highlight Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Real Video Player */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[340px] sm:max-w-[380px] rounded-3xl overflow-hidden shadow-2xl border-4 border-emerald-500/20 bg-black group"
            >
              <video
                ref={videoRef}
                src="/assets/lab-video.mp4"
                poster="/assets/lab-overview.jpg"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-auto aspect-[9/16] object-cover"
              />

              {/* Video Overlay Controls */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 flex flex-col justify-between p-5 pointer-events-none">
                <div className="flex items-center justify-between pointer-events-auto">
                  <span className="bg-emerald-600/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    Laboratório Fertivitro em Ação
                  </span>

                  <button
                    onClick={toggleMute}
                    className="p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-colors"
                    title={isMuted ? 'Ativar som' : 'Desativar som'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>

                <div className="pointer-events-auto">
                  <div className="flex items-center justify-between mb-3">
                    <button
                      onClick={togglePlay}
                      className="p-3 rounded-full bg-[#839A74] hover:bg-[#91b383] text-white shadow-lg transition-transform hover:scale-105"
                      title={isPlaying ? 'Pausar' : 'Reproduzir'}
                    >
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                    </button>

                    <button
                      onClick={onOpenVideoModal}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white text-xs font-semibold backdrop-blur-md transition-colors"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Tela Cheia</span>
                    </button>
                  </div>

                  <p className="text-xs text-emerald-100/90 font-medium">
                    Embriologistas sêniores executando protocolos em cabine de fluxo laminar IVFtech.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Lab Features & Photo Grid */}
          <div className="lg:col-span-7 space-y-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Photo 1: Overview */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-white/10 group aspect-[4/3]">
                <img 
                  src="/assets/lab-overview.jpg" 
                  alt="Visão geral do Laboratório de FIV Fertivitro com incubadoras Thermo e cabines IVFtech" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-xs text-emerald-200 font-semibold">
                  Cabines de fluxo laminar e incubadoras
                </div>
              </div>

              {/* Photo 2: Microscope */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-white/10 group aspect-[4/3]">
                <img 
                  src="/assets/lab-microscope.jpg" 
                  alt="Embriologista no microscópio Nikon de precisão" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-xs text-emerald-200 font-semibold">
                  Microscopia Nikon de alta resolução
                </div>
              </div>
            </div>

            {/* Technical Pillars */}
            <div className="grid sm:grid-cols-2 gap-6 pt-2">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#839A74]/20 flex items-center justify-center text-[#b3cca8] mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-1.5">Biossegurança e Pureza do Ar</h4>
                <p className="text-xs text-emerald-100/70 leading-relaxed">
                  Sistema de ventilação com pressão positiva e filtros HEPA especiais que eliminam compostos orgânicos voláteis (VOCs), protegendo a viabilidade de gametas e embriões.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#839A74]/20 flex items-center justify-center text-[#b3cca8] mb-3">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-1.5">Acreditação REDLARA</h4>
                <p className="text-xs text-emerald-100/70 leading-relaxed">
                  Certificação contínua pela Rede Latino-Americana de Reprodução Assistida, atestando conformidade com os mais rigorosos padrões globais da medicina reprodutiva.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#839A74]/15 border border-[#839A74]/30 flex items-center gap-4">
              <div className="text-2xl font-black text-[#b3cca8]">FIV</div>
              <p className="text-xs text-emerald-100/90 leading-relaxed">
                Cada protocolo é conduzido internamente por nossa equipe de embriologistas, garantindo rastreabilidade, confidencialidade e acompanhamento contínuo aos pacientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
