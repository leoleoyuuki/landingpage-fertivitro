import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight, Activity, Zap, Sparkles, HeartHandshake, Shield, HelpCircle, ArrowRight } from 'lucide-react';

const CATEGORIES = [
  { id: 'alta', label: 'Alta Complexidade (FIV & ICSI)' },
  { id: 'baixa', label: 'Baixa Complexidade' },
  { id: 'complementares', label: 'Técnicas Complementares' },
  { id: 'social', label: 'Programa Bebê em Casa' }
];

const PROCEDURES_MAP = {
  alta: [
    {
      id: 'fiv',
      title: 'Fertilização in vitro (FIV Clássica)',
      desc: 'Os óvulos coletados e os espermatozoides selecionados são colocados juntos em meio de cultivo em nosso laboratório próprio, para que a fecundação ocorra de forma espontânea e controlada.',
      indicacao: 'Obstrução tubária, endometriose moderada a grave, idade materna avançada, fator masculino leve ou falhas anteriores.',
      tag: 'Mais realizada no mundo'
    },
    {
      id: 'icsi',
      title: 'Injeção Intracitoplasmática de Espermatozoide (ICSI)',
      desc: 'Um único espermatozoide saudável e morfologicamente ideal é injetado diretamente dentro do óvulo através de micromanipuladores de alta precisão no microscópio.',
      indicacao: 'Fator masculino severo (baixa contagem ou motilidade), congelamento prévio de óvulos ou tentativas prévias com falha de fertilização.',
      tag: 'Máxima precisão biológica'
    }
  ],
  baixa: [
    {
      id: 'coito',
      title: 'Coito Programado com Indução de Ovulação',
      desc: 'Acompanhamento do ciclo menstrual por ultrassonografias seriadas, com estímulo medicamentoso brando para determinar o momento exato da ovulação e orientar a relação sexual.',
      indicacao: 'Mulheres com alterações ovulatórias leves (ex: ovários policísticos), trompas pérvias e espermograma normal do parceiro.',
      tag: 'Tratamento natural monitorado'
    },
    {
      id: 'inseminacao',
      title: 'Inseminação Intrauterina (IIU)',
      desc: 'O sêmen é processado e capacitado em laboratório para selecionar os melhores espermatozoides, sendo introduzidos na cavidade uterina no momento da ovulação.',
      indicacao: 'Infertilidade sem causa aparente (ISCA), alterações leves do sêmen, fatores cervicais ou uso de sêmen de doador.',
      tag: 'Menor complexidade'
    }
  ],
  complementares: [
    {
      id: 'congelamento',
      title: 'Congelamento de Óvulos e Embriões (Vitrificação)',
      desc: 'Técnica de congelamento ultrarrápido que evita a formação de cristais de gelo, mantendo a viabilidade celular por tempo indeterminado em botijões de nitrogênio a -196°C.',
      indicacao: 'Mulheres que desejam postergar a gravidez, pacientes oncológicas antes de quimioterapia/radioterapia e preservação de embriões excedentes.',
      tag: 'Liberdade reprodutiva'
    },
    {
      id: 'ovodoacao',
      title: 'Ovodoação e Recepção de Óvulos',
      desc: 'Utilização de óvulos de doadoras jovens e saudáveis (por meio do Fertibank ou bancos parceiros certificados) para mulheres que não produzem óvulos viáveis.',
      indicacao: 'Falência ovariana precoce (menopausa precoce), idade materna avançada, histórico de quimioterapia ou falhas repetidas.',
      tag: 'Fertibank integrado'
    },
    {
      id: 'pgt',
      title: 'Diagnóstico Genético Pré-Implantacional (PGT)',
      desc: 'Biópsia celular de embriões em estágio de blastocisto para analisar anomalias cromossômicas (aneuploidias) ou doenças monogênicas hereditárias antes da transferência.',
      indicacao: 'Idade materna superior a 38 anos, abortamentos de repetição ou portadores de alterações cromossômicas familiares.',
      tag: 'Prevenção genética'
    }
  ],
  social: [
    {
      id: 'bebeemcasa',
      title: 'Programa Bebê em Casa',
      desc: 'A infertilidade é uma doença que não escolhe classe social. Criamos o Programa Bebê em Casa para oferecer acesso facilitado com custos assistenciais reduzidos aos casais que precisam de reprodução assistida para realizar seu sonho.',
      indicacao: 'Casais com indicação médica de reprodução assistida que atendam aos critérios socioeconômicos do programa assistencial.',
      tag: 'Responsabilidade Social Fertivitro'
    }
  ]
};

export default function ProceduresSection({ onOpenAppointmentModal }) {
  const [activeCategory, setActiveCategory] = useState('alta');

  return (
    <section id="tratamentos" className="py-20 sm:py-28 bg-[#FAF9F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#687e5a] bg-[#e8efe4] px-3.5 py-1 rounded-full">
            Medicina Reprodutiva Avançada
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
            Tratamentos e Procedimentos
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Do diagnóstico preciso até as técnicas mais sofisticadas de fertilização, desenhamos o caminho terapêutico ideal para cada família.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#839A74] text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Procedures List */}
          <div className="lg:col-span-7 space-y-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-5"
              >
                {PROCEDURES_MAP[activeCategory].map((item) => (
                  <div
                    key={item.id}
                    id={item.id}
                    className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/80 shadow-xs hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-bold text-[#526347] bg-[#f4f7f2] px-3 py-1 rounded-full">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2.5">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {item.desc}
                    </p>

                    <div className="bg-[#FAF9F5] p-3.5 rounded-xl border border-stone-100 text-xs text-slate-700">
                      <strong className="text-[#4e6143] block mb-1">Indicação Clínica:</strong>
                      {item.indicacao}
                    </div>

                    <div className="mt-4 pt-3 border-t border-stone-100 flex justify-end">
                      <button
                        onClick={onOpenAppointmentModal}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#526347] hover:text-[#839A74] transition-colors"
                      >
                        <span>Avaliar indicação para o seu caso</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Procedure Visual Anchor (Real Procedure Suite Photo) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-white rounded-3xl p-5 shadow-lg border border-stone-200/80 overflow-hidden">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-900 mb-4">
                <img 
                  src="/assets/procedure-room.jpg" 
                  alt="Sala de Procedimentos e Transferência Embrionária da Fertivitro" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs">
                  <span className="font-bold block text-emerald-300">Sala de Punção e Transferência</span>
                  <span className="text-[11px] text-white/80">Ambiente cirúrgico acoplado diretamente ao laboratório</span>
                </div>
              </div>

              <div className="space-y-3 px-1">
                <div className="flex items-center gap-3 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#839A74] shrink-0" />
                  <span>Ambiente estéril com controle microbiológico constante</span>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#839A74] shrink-0" />
                  <span>Ultrassonografia de alta definição para guiagem em tempo real</span>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#839A74] shrink-0" />
                  <span>Comunicação direta por visor com os embriologistas</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-stone-100">
                <button
                  onClick={onOpenAppointmentModal}
                  className="w-full py-3 rounded-xl bg-[#839A74] hover:bg-[#687e5a] text-white font-bold text-xs shadow-sm transition-all"
                >
                  Agendar Consulta com Especialista
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
