import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Calendar, ArrowRight, Award, Heart, CheckCircle2, Sparkles, Building2 } from 'lucide-react';

const HERO_SLIDES = [
  {
    id: 'reproducao',
    tag: 'Reprodução Humana Assistida',
    title: 'A possibilidade de tornar o que era impossível, possível.',
    subtitle: 'Tratamentos de ponta para infertilidade, doenças genéticas, casais homoafetivos e produção independente, com acolhimento em cada etapa.',
    image: '/assets/reception-main.jpg',
    badge: 'Mais de 20 anos de tradição e pioneirismo',
    ctaText: 'Conhecer Tratamentos',
    ctaLink: '#tratamentos'
  },
  {
    id: 'preservacao',
    tag: 'Preservação da Fertilidade',
    title: 'A liberdade e segurança de planejar seu momento de ser mãe.',
    subtitle: 'Tecnologia avançada de vitrificação e congelamento de óvulos, sêmen e embriões. O tempo a favor dos seus sonhos.',
    image: '/assets/fertibank-cryotanks.jpg',
    badge: 'Laboratório próprio com tanques criogênicos de ponta',
    ctaText: 'Saber sobre Congelamento',
    ctaLink: '#congelamento'
  },
  {
    id: 'fertibank',
    tag: 'Fertibank • Banco de Óvulos',
    title: 'O banco de óvulos que aproxima você do sonho da maternidade.',
    subtitle: 'Segurança genética, triagem rigorosa e doadoras selecionadas com excelência para procedimentos com ovodoação.',
    image: '/assets/lab-overview.jpg',
    badge: 'Certificação de Biossegurança REDLARA',
    ctaText: 'Conheça o Fertibank',
    ctaLink: '#fertibank'
  },
  {
    id: 'consulta',
    tag: 'Acolhimento & Telemedicina',
    title: 'O primeiro passo para realizar o sonho de formar sua família.',
    subtitle: 'Atendimento humanizado na clínica em Moema ou por Telemedicina com especialistas renomados para pacientes do Brasil e do exterior.',
    image: '/assets/facade.jpg',
    badge: 'Av. Indianópolis, 529 - Moema, São Paulo',
    ctaText: 'Agendar Consulta',
    ctaLink: '#contato'
  }
];

export default function Hero({ onOpenAppointmentModal }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-[#F5F8F3] to-[#FAF9F5] pt-6 pb-16 lg:py-20">
      {/* Decorative ambient background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#839A74]/10 rounded-full blur-3xl pointer-events-none -mr-40 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#d2e0cb]/20 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#d2e0cb] shadow-xs text-xs font-semibold text-[#4e6143]">
            <Award className="w-3.5 h-3.5 text-[#839A74]" />
            <span>Centro Acreditado REDLARA • SBRA • SBRH</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-stone-200 text-xs font-medium text-slate-600">
            <Building2 className="w-3.5 h-3.5 text-stone-500" />
            <span>Moema, São Paulo & Telemedicina</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                <div className="inline-block text-xs uppercase tracking-wider font-bold text-[#526347] bg-[#e8efe4] px-3 py-1 rounded-md mb-4">
                  {slide.tag}
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5">
                  {slide.title}
                </h1>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
                  {slide.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onOpenAppointmentModal}
                className="px-7 py-3.5 rounded-full bg-[#839A74] hover:bg-[#687e5a] text-white font-bold text-base shadow-md hover:shadow-lg transition-all flex items-center gap-2.5 group transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar className="w-5 h-5 text-emerald-100" />
                <span>Agendar Avaliação</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={slide.ctaLink}
                className="px-6 py-3.5 rounded-full bg-white hover:bg-stone-50 border border-stone-200 text-slate-700 font-semibold text-base shadow-xs hover:shadow transition-all flex items-center gap-2"
              >
                <span>{slide.ctaText}</span>
              </a>
            </div>

            {/* Pillar Selector Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-stone-200/80">
              {HERO_SLIDES.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`text-left p-2.5 rounded-lg transition-all text-xs font-semibold ${
                    currentSlide === idx 
                      ? 'bg-white shadow-sm border border-[#b3cca8] text-[#4e6143]' 
                      : 'text-slate-500 hover:text-slate-800 hover:bg-white/60'
                  }`}
                >
                  <span className="block text-[10px] uppercase font-bold tracking-wider opacity-60">0{idx + 1}</span>
                  <span className="truncate block">{item.tag.split('•')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Visual Image Card with Real Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer frame with subtle warm glow */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-stone-900 border-4 border-white aspect-[4/4.5] sm:aspect-[4/3.8] lg:aspect-[4/4.6]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={slide.image}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="w-full h-full relative"
                  >
                    <img 
                      src={slide.image} 
                      alt={slide.title}
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    {/* Bottom floating caption */}
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 text-slate-800 shadow-lg">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#526347] mb-1">
                        <Sparkles className="w-3.5 h-3.5 text-[#839A74]" />
                        <span>Foto Real das Instalações Fertivitro</span>
                      </div>
                      <p className="text-xs text-slate-700 font-medium">
                        {slide.badge}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Trust Badge overlay */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute -top-4 -left-4 sm:-left-6 bg-white p-3.5 rounded-2xl shadow-xl border border-stone-100 flex items-center gap-3 hidden sm:flex"
              >
                <div className="w-10 h-10 rounded-xl bg-[#839A74]/15 flex items-center justify-center text-[#526347]">
                  <Heart className="w-5 h-5 fill-[#839A74]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">+20 Anos</div>
                  <div className="text-[11px] text-slate-500">Realizando Sonhos</div>
                </div>
              </motion.div>

              {/* Lab Badge overlay */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-4 -right-4 sm:-right-6 bg-white p-3.5 rounded-2xl shadow-xl border border-stone-100 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Laboratório Próprio</div>
                  <div className="text-[11px] text-slate-500">Tecnologia Avançada</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* 4 Bottom Key Metrics */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-stone-200">
          <div className="bg-white p-5 rounded-2xl shadow-xs border border-stone-100">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#4e6143]">+20</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-800 mt-1">Anos de Experiência</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Pioneirismo em fertilidade humana</div>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-xs border border-stone-100">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#4e6143]">100%</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-800 mt-1">Laboratório Próprio</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Equipamentos IVFtech de última geração</div>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-xs border border-stone-100">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#4e6143]">REDLARA</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-800 mt-1">Centro Acreditado</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Padrões internacionais de excelência</div>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-xs border border-stone-100">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#4e6143]">Brasil & Mundo</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-800 mt-1">Presencial & Telemedicina</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Atendimento individualizado e humano</div>
          </div>
        </div>
      </div>
    </section>
  );
}
