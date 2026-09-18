import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';

const BLOG_POSTS = [
  {
    title: 'Conheça o Fertibank: o banco de óvulos que aproxima você do seu sonho',
    excerpt: 'A Fertivitro tem uma novidade que transforma a jornada de muitas mulheres: apresentamos o Fertibank, nosso banco de óvulos próprio com triagem rigorosa.',
    date: '25 de Maio, 2026',
    image: '/assets/blog-fertibank.jpg',
    category: 'Banco de Óvulos',
    link: 'https://fertivitro.com.br/conheca-o-fertibank/'
  },
  {
    title: 'Trombose e gravidez: o que você precisa saber antes de engravidar',
    excerpt: 'Distúrbios de coagulação e trombofilias podem interferir na implantação embrionária e requerer acompanhamento preventivo durante o tratamento.',
    date: '29 de Novembro, 2022',
    image: '/assets/blog-trombose.jpg',
    category: 'Saúde Reprodutiva',
    link: 'https://fertivitro.com.br/trombose-e-gravidez/'
  },
  {
    title: 'Prostatite e fertilidade: entenda a saúde reprodutiva masculina',
    excerpt: 'A próstata é uma glândula fundamental para a composição do sêmen. Entenda como inflamações podem alterar a contagem e motilidade espermática.',
    date: '24 de Novembro, 2022',
    image: '/assets/blog-prostatite.jpg',
    category: 'Fator Masculino',
    link: 'https://fertivitro.com.br/prostatite-e-fertilidade/'
  }
];

export default function BlogSection() {
  return (
    <section className="py-20 sm:py-24 bg-[#FAF9F5] border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#687e5a] bg-[#e8efe4] px-3.5 py-1 rounded-full">
              Informação & Ciência
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
              Blog da Fertivitro
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-xl">
              Conteúdos preparados por nossos especialistas sobre saúde reprodutiva, tratamentos e avanços científicos.
            </p>
          </div>

          <a
            href="https://fertivitro.com.br/blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#526347] hover:text-[#839A74] transition-colors"
          >
            <span>Ver todos os artigos</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <a 
                href={post.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative overflow-hidden aspect-[16/9] block bg-stone-100"
              >
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/assets/reception-lounge.jpg";
                  }}
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-[#526347] text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                  {post.category}
                </span>
              </a>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#4e6143] transition-colors leading-snug mb-3">
                    <a href={post.link} target="_blank" rel="noopener noreferrer">
                      {post.title}
                    </a>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                </div>

                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#526347] group-hover:text-[#839A74] transition-colors pt-3 border-t border-stone-100"
                >
                  <span>Continuar lendo</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
