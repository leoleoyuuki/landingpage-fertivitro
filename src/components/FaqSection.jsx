import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

const FAQS = [
  {
    q: 'Quando um casal deve procurar um especialista em reprodução assistida?',
    a: 'Recomenda-se procurar auxílio quando o casal está há 12 meses tentando engravidar naturalmente sem sucesso (em mulheres com menos de 35 anos). Para mulheres com 35 anos ou mais, o prazo recomendado para iniciar a investigação reduz-se para 6 meses de tentativas, ou imediatamente caso haja histórico conhecido de endometriose, cirurgias ovarianas, ciclos muito irregulares ou alterações no espermograma.'
  },
  {
    q: 'Qual a principal diferença entre Inseminação Artificial (IIU) e Fertilização in vitro (FIV)?',
    a: 'Na Inseminação Intrauterina (baixa complexidade), o sêmen capacitado é introduzido diretamente no útero, e a fecundação do óvulo ocorre de forma natural dentro das trompas da mulher. Já na Fertilização in vitro (alta complexidade), os óvulos são coletados e fecundados em nosso laboratório próprio (por FIV convencional ou ICSI); os embriões formados são cultivados e posteriormente transferidos ao útero.'
  },
  {
    q: 'Até qual idade é ideal realizar o congelamento preventivo de óvulos?',
    a: 'O momento biologicamente ideal é antes dos 35 anos, quando a reserva ovariana e a qualidade genética dos óvulos são mais favoráveis. No entanto, mulheres entre 35 e 38 anos também podem e devem realizar o congelamento, mediante avaliação individualizada da reserva ovariana (por contagem de folículos antrais e hormônio antimülleriano).'
  },
  {
    q: 'Como funciona o Fertibank para casais ou mulheres que necessitam de óvulos doados?',
    a: 'O Fertibank é nosso banco de óvulos próprio que conta com doadoras jovens selecionadas através de rígidos critérios médicos, genéticos, sorológicos e psicológicos. A escolha da doadora é conduzida pela equipe médica respeitando a compatibilidade fenotípica (características físicas como cor dos olhos, pele, cabelos, estatura e tipo sanguíneo) conforme as normas do Conselho Federal de Medicina (CFM).'
  },
  {
    q: 'Como é realizado o atendimento por Telemedicina na Fertivitro?',
    a: 'Realizamos consultas online por vídeo para pacientes de todo o Brasil e do exterior. Na primeira consulta virtual, nossos médicos analisam todo o histórico clínico e exames prévios, solicitam investigações complementares e traçam o planejamento terapêutico. O paciente só precisa comparecer à clínica em Moema nas etapas pontuais de procedimentos que exigem presença física.'
  },
  {
    q: 'O que é o Programa Bebê em Casa?',
    a: 'O Programa Bebê em Casa é uma iniciativa social da Fertivitro para acolher famílias que necessitam de reprodução assistida e possuem limitações financeiras. O programa viabiliza tratamentos como IIU e FIV com tabelas de custos assistenciais reduzidas, garantindo a mesma qualidade e tecnologia do nosso laboratório.'
  }
];

export default function FaqSection({ onOpenAppointmentModal }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="duvidas" className="py-20 sm:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#687e5a] bg-[#e8efe4] px-3.5 py-1 rounded-full">
            Tire Suas Dúvidas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Respostas claras para as principais questões sobre fertilidade e os passos do tratamento.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className={`rounded-2xl border transition-all ${
                  isOpen 
                    ? 'border-[#839A74]/60 bg-[#FAF9F5] shadow-xs' 
                    : 'border-stone-200 bg-white hover:border-stone-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-5 sm:px-6 py-4.5 sm:py-5 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base"
                >
                  <span className="leading-snug">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#839A74] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-stone-200/50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Help callout */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#FAF9F5] border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-slate-900">Ainda tem alguma dúvida específica sobre o seu caso?</h4>
            <p className="text-xs text-slate-500 mt-0.5">Nossa equipe de atendimento está pronta para orientar você no WhatsApp.</p>
          </div>

          <a
            href="https://wa.me/5511995466272?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20sobre%20tratamentos%20na%20Fertivitro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-xs transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
