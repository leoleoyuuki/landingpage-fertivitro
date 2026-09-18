import React from 'react';
import { motion } from 'framer-motion';
import { Snowflake, ShieldCheck, CheckCircle2, ArrowRight, Dna, Database, Sparkles } from 'lucide-react';

export default function FertibankSection({ onOpenAppointmentModal }) {
  return (
    <section id="fertibank" className="py-20 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & Features */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-bold uppercase tracking-wider text-[#687e5a] bg-[#e8efe4] px-3.5 py-1 rounded-full">
                Fertibank • Banco de Óvulos
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-5 leading-tight">
                O banco de óvulos que aproxima você do seu maior sonho.
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
                A Fertivitro desenvolveu o <strong>Fertibank</strong>, nosso banco de óvulos próprio estruturado para oferecer total transparência, compatibilidade fenotípica e rigor genético para mulheres e casais que necessitam de óvulos doados.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                Além do banco de doadoras, nossa central criogênica é referência na <strong>Preservação da Fertilidade</strong>: técnica de vitrificação ultrarrápida que permite a mulheres congelarem seus próprios óvulos no ápice de sua qualidade reprodutiva.
              </p>

              {/* Differentiators */}
              <div className="space-y-3.5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#839A74]/15 flex items-center justify-center text-[#526347] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#839A74]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">Triagem Médica e Genética Rigorosa</h4>
                    <p className="text-xs text-slate-500">Exames sorológicos, cariótipo e compatibilidade fenotípica detalhada.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#839A74]/15 flex items-center justify-center text-[#526347] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#839A74]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">Tanques Criogênicos MVE com Monitoramento 24h</h4>
                    <p className="text-xs text-slate-500">Armazenamento em nitrogênio líquido a -196°C com sensores contínuos de temperatura.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#839A74]/15 flex items-center justify-center text-[#526347] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#839A74]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">Altas Taxas de Sobrevivência Pós-Descongelamento</h4>
                    <p className="text-xs text-slate-500">Protocolos modernos de vitrificação com mais de 90% de integridade oocitária.</p>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenAppointmentModal}
                  className="px-6 py-3 rounded-full bg-[#839A74] hover:bg-[#687e5a] text-white font-bold text-sm shadow hover:shadow-md transition-all flex items-center gap-2"
                >
                  <Snowflake className="w-4 h-4" />
                  <span>Saber Mais sobre o Fertibank</span>
                </button>

                <a
                  href="#congelamento"
                  className="text-sm font-semibold text-[#526347] hover:text-[#839A74] transition-colors"
                >
                  Desejo congelar meus óvulos →
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Real Tank Photo */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/3.2]">
                <img 
                  src="/assets/fertibank-cryotanks.jpg" 
                  alt="Tanques Criogênicos de Nitrogênio Líquido para Oócitos no Fertibank da Fertivitro" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md text-slate-800 shadow-md">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#526347] mb-0.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#839A74]" />
                    <span>Central de Criopreservação Fertivitro</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Botijões criogênicos MVE dedicados a oócitos e embriões vitrificados a -196°C.
                  </p>
                </div>
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -top-5 -right-4 sm:-right-6 bg-white p-3.5 rounded-2xl shadow-xl border border-stone-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700">
                  <Dna className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Segurança Genética</div>
                  <div className="text-[11px] text-slate-500">Rastreabilidade Total</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
