import React from 'react';
import { motion } from 'framer-motion';
import { Heart, UserCheck, Stethoscope, Sparkles, CheckCircle2, Award, Clock } from 'lucide-react';

export default function AboutSection({ onOpenAppointmentModal }) {
  return (
    <section id="sobre" className="py-16 sm:py-24 bg-[#FAF9F5] relative overflow-hidden">
      {/* Decorative floral/ambient background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Real Photos Collage */}
          <div className="lg:col-span-6 relative">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Main Reception Photo */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3]">
                <img 
                  src="/assets/reception-lounge.jpg" 
                  alt="Lounge de Recepção da Clínica Fertivitro em Moema" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                  <span className="font-bold flex items-center gap-1.5 text-emerald-300">
                    <Sparkles className="w-3.5 h-3.5" /> Recepção & Lounge Fertivitro
                  </span>
                  <p className="text-white/80 text-[11px] mt-0.5">Ambiente acolhedor projetado para o seu conforto emocional e privacidade</p>
                </div>
              </div>

              {/* Doctor Card Floating */}
              <div className="absolute -bottom-8 -right-4 sm:-right-6 w-60 sm:w-72 bg-white p-4 rounded-2xl shadow-2xl border border-stone-200/90 z-20">
                <div className="flex items-center gap-3.5">
                  <img 
                    src="/assets/dr-luiz-albuquerque.jpg" 
                    alt="Dr. Luiz Eduardo Albuquerque - Diretor Clínico Fertivitro" 
                    className="w-16 h-16 sm:w-18 sm:h-18 rounded-xl object-cover object-top border-2 border-[#839A74] shadow"
                  />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#687e5a]">Direção Clínica</div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-tight mt-0.5">Dr. Luiz Eduardo Albuquerque</h4>
                    <p className="text-xs text-slate-500 font-medium">CRM-SP 61.351</p>
                    <div className="flex items-center gap-1 text-[11px] text-[#4e6143] font-semibold mt-1">
                      <Award className="w-3 h-3 text-[#839A74]" />
                      <span>+25 anos em Reprodução</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Detail Floating Card */}
              <div className="absolute -top-5 -left-4 sm:-left-6 bg-white p-3 rounded-xl shadow-lg border border-stone-100 flex items-center gap-2.5 hidden sm:flex">
                <div className="w-8 h-8 rounded-lg bg-[#e8efe4] flex items-center justify-center text-[#4e6143]">
                  <Heart className="w-4 h-4 fill-[#839A74]" />
                </div>
                <div className="text-xs font-bold text-slate-800">Acolhimento Humanizado</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial & History */}
          <div className="lg:col-span-6 mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-wider text-[#687e5a] bg-[#e8efe4] px-3.5 py-1 rounded-full">
                Sobre a Fertivitro
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-5 leading-tight">
                Ciência de ponta guiada pelo amor à família.
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
                A <strong>Fertivitro Centro de Reprodução Humana</strong> acredita que a família é o bem mais precioso que você pode construir. Por isso, nosso propósito é acolher cada paciente com respeito incondicional, oferecendo todas as possibilidades científicas e humanas para a realização do <strong>sonho de ter filhos</strong>.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                Contamos com uma equipe multidisciplinar formada por especialistas renomados com mais de <strong>20 anos de experiência clínica</strong> em fertilidade e infertilidade humana, preparados para dar suporte integral — médico, laboratorial e emocional — durante cada etapa do tratamento.
              </p>

              {/* Key Highlights List */}
              <div className="grid sm:grid-cols-2 gap-3.5 mb-8">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#839A74] shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 font-medium">Laboratório de FIV próprio com tecnologia de ponta</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#839A74] shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 font-medium">Acreditação internacional REDLARA e SBRA</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#839A74] shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 font-medium">Equipe médica e embriologistas sêniores</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#839A74] shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 font-medium">Consultas presenciais e Telemedicina para todo o país</span>
                </div>
              </div>

              {/* CTA and badge */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenAppointmentModal}
                  className="px-6 py-3 rounded-full bg-[#839A74] hover:bg-[#687e5a] text-white font-bold text-sm shadow hover:shadow-md transition-all"
                >
                  Conhecer Nossa Equipe e Clínica
                </button>

                <a
                  href="#tour"
                  className="text-sm font-semibold text-[#526347] hover:text-[#839A74] transition-colors underline underline-offset-4"
                >
                  Fazer tour virtual pelas instalações
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
