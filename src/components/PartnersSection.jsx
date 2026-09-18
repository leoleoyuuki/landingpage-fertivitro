import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award } from 'lucide-react';

const PARTNERS = [
  {
    name: 'REDLARA Centro Acreditado',
    logo: '/assets/logo-redlara-cert.jpeg',
    desc: 'Rede Latino-Americana de Reprodução Assistida'
  },
  {
    name: 'REDLARA',
    logo: '/assets/logo-redlara.png',
    desc: 'Membro Efetivo'
  },
  {
    name: 'SBRA',
    logo: '/assets/logo-sbra.png',
    desc: 'Sociedade Brasileira de Reprodução Assistida'
  },
  {
    name: 'SBRH',
    logo: '/assets/logo-sbrh.png',
    desc: 'Sociedade Brasileira de Reprodução Humana'
  },
  {
    name: 'ASRM',
    logo: '/assets/logo-asrm.jpg',
    desc: 'American Society for Reproductive Medicine'
  },
  {
    name: 'GEIC',
    logo: '/assets/logo-geic.jpeg',
    desc: 'Grupo de Estudos em Infertilidade Conjugal'
  },
  {
    name: 'WeBank Donors',
    logo: '/assets/logo-webank.jpg',
    desc: 'Banco Internacional de Óvulos Parceiro'
  }
];

export default function PartnersSection() {
  return (
    <section className="py-16 sm:py-20 bg-white border-t border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#687e5a] bg-[#e8efe4] px-3.5 py-1 rounded-full">
            Reconhecimento & Rigor Científico
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 mb-3">
            Acreditações e Sociedades Médicas
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            A Fertivitro e seu corpo clínico integram as mais prestigiadas entidades mundiais de medicina reprodutiva.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6 items-center justify-center">
          {PARTNERS.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-4 rounded-2xl bg-[#FAF9F5] border border-stone-200/60 hover:border-[#839A74]/50 flex flex-col items-center justify-center text-center transition-all hover:shadow-sm aspect-square"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="max-h-12 sm:max-h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <span className="text-[11px] font-bold text-slate-800 mt-2 line-clamp-1">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
