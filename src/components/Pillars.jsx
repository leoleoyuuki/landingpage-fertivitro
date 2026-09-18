import React from 'react';
import { motion } from 'framer-motion';
import { Users, HeartHandshake, UserCheck, Snowflake, ArrowRight } from 'lucide-react';

const PILLARS_DATA = [
  {
    icon: Users,
    title: 'Infertilidade Conjugal',
    desc: 'Casais que estão há mais de um ano tentando engravidar naturalmente sem uso de métodos contraceptivos. Avaliamos causas femininas e masculinas simultaneamente.',
    tag: 'Investigação Completa',
    link: '#tratamentos'
  },
  {
    icon: HeartHandshake,
    title: 'Casais Homoafetivos',
    desc: 'Casais femininos (método ROPA, inseminação ou FIV com sêmen de doador) e masculinos (ovodoação e útero de substituição/solidário) para formar sua família.',
    tag: 'Novas Configurações Familiares',
    link: '#tratamentos'
  },
  {
    icon: UserCheck,
    title: 'Produção Independente',
    desc: 'Mulheres e homens que decidem realizar o sonho da maternidade ou paternidade solo com apoio de bancos de sêmen ou óvulos rigorosamente selecionados.',
    tag: 'Maternidade e Paternidade Solo',
    link: '#tratamentos'
  },
  {
    icon: Snowflake,
    title: 'Preservação da Fertilidade',
    desc: 'Congelamento preventivo de óvulos para adiar a gestação com tranquilidade, ou preservação oncológica antes de tratamentos que comprometam a fertilidade.',
    tag: 'Vitrificação de Óvulos',
    link: '#congelamento'
  }
];

export default function Pillars({ onSelectPillar }) {
  return (
    <section className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold uppercase tracking-wider text-[#687e5a] bg-[#e8efe4] px-3.5 py-1 rounded-full">
              Caminhos para a sua família
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
              Qual é o seu momento?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Cada história é única. Oferecemos protocolos personalizados para acolher suas necessidades com o máximo de precisão científica e carinho humano.
            </p>
          </motion.div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS_DATA.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-[#FAF9F5] hover:bg-white rounded-2xl p-7 border border-stone-200/80 hover:border-[#839A74]/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1"
              >
                <div>
                  <div className="w-13 h-13 rounded-2xl bg-white group-hover:bg-[#839A74] border border-stone-200 group-hover:border-[#839A74] flex items-center justify-center text-[#526347] group-hover:text-white transition-all duration-300 mb-5 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-bold text-[#687e5a] uppercase tracking-wider block mb-2">
                    {pillar.tag}
                  </span>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#4e6143] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {pillar.desc}
                  </p>
                </div>

                <a
                  href={pillar.link}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#526347] group-hover:text-[#839A74] transition-colors pt-4 border-t border-stone-200/60"
                >
                  <span>Saiba mais</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
