import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, CheckCircle, Video, Building2, Navigation } from 'lucide-react';
import GpsModal from './GpsModal';

export default function ContactSection() {
  const [gpsModalOpen, setGpsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    serviceType: 'presencial',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Format text for WhatsApp direct transmission if desired
    const text = `*Novo Contato via Site Fertivitro*%0A` +
      `*Nome:* ${encodeURIComponent(formData.name)}%0A` +
      `*Telefone:* ${encodeURIComponent(formData.phone)}%0A` +
      `*Email:* ${encodeURIComponent(formData.email)}%0A` +
      `*Cidade/UF:* ${encodeURIComponent(formData.city)}%0A` +
      `*Modalidade:* ${formData.serviceType === 'presencial' ? 'Consulta Presencial (Moema)' : 'Telemedicina (Virtual)'}%0A` +
      `*Mensagem:* ${encodeURIComponent(formData.message || 'Gostaria de agendar uma consulta.')}`;

    // Open WhatsApp in new tab
    const waUrl = `https://wa.me/5511995466272?text=${text}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-16 sm:py-28 bg-[#FAF9F5] relative overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full box-border">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#687e5a] bg-[#e8efe4] px-3.5 py-1 rounded-full">
            Agendamento & Localização
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
            Entre em Contato com a Fertivitro
          </h2>
          <p className="text-sm sm:text-lg text-slate-600 leading-relaxed">
            Estamos prontos para acolher você. Agende sua consulta presencial em nossa clínica em Moema ou através de Telemedicina com nossos especialistas.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 w-full">
          {/* Left Column: Form */}
          <div className="lg:col-span-6 bg-white p-5 sm:p-9 rounded-2xl sm:rounded-3xl shadow-lg border border-stone-200/80 box-border w-full">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
              Solicitar Agendamento
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Preencha os dados abaixo e nossa equipe entrará em contato para confirmar a melhor data e horário.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-emerald-900">Mensagem Encaminhada!</h4>
                <p className="text-sm text-emerald-700 leading-relaxed">
                  Obrigado! Sua solicitação foi aberta diretamente no WhatsApp da Fertivitro. Nossa equipe responderá em instantes durante o horário de atendimento.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Nome Completo <span className="text-emerald-700">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome e sobrenome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#839A74] focus:bg-white transition-all"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Telefone / WhatsApp <span className="text-emerald-700">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(11) 90000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#839A74] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email <span className="text-emerald-700">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#839A74] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Cidade / Estado
                    </label>
                    <input
                      type="text"
                      placeholder="São Paulo - SP"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#839A74] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Modalidade da Consulta
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#839A74] focus:bg-white transition-all"
                    >
                      <option value="presencial">Presencial (Moema, SP)</option>
                      <option value="telemedicina">Telemedicina (Online / Vídeo)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Como podemos ajudar? (Opcional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Conte resumidamente seu caso, se já realizou tratamentos anteriores ou exames..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#839A74] focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-3 rounded-xl bg-[#839A74] hover:bg-[#687e5a] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 transform active:scale-[0.99] text-center"
                >
                  <Send className="w-4 h-4 shrink-0" />
                  <span>Solicitar Agendamento de Consulta</span>
                </button>

                <p className="text-[11px] text-center text-slate-400 mt-2">
                  Seus dados estão protegidos conforme a LGPD e o sigilo médico do CFM.
                </p>
              </form>
            )}
          </div>

          {/* Right Column: Address, Hours & Map */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6 w-full box-border">
            <div className="bg-white p-5 sm:p-7 rounded-2xl sm:rounded-3xl shadow-xs border border-stone-200/80 space-y-5 box-border w-full">
              <h4 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#839A74] shrink-0" />
                <span>Fertivitro Moema</span>
              </h4>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#839A74] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Endereço:</strong>
                    <span className="break-words">Av. Indianópolis, 529 - Moema, São Paulo - SP, CEP 04063-001</span>
                    <span className="block text-xs text-slate-500 mt-0.5">Estacionamento com manobrista na clínica</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#839A74] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Telefones:</strong>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-0.5">
                      <a href="tel:+551150819600" className="hover:text-[#687e5a] font-semibold">(11) 5081-9600</a>
                      <span>•</span>
                      <a href="tel:+551143281367" className="hover:text-[#687e5a] font-semibold">(11) 4328-1367</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">WhatsApp Oficial:</strong>
                    <a 
                      href="https://wa.me/5511995466272" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-emerald-700 font-bold hover:underline"
                    >
                      (11) 99546-6272
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-stone-100">
                  <Clock className="w-4 h-4 text-[#839A74] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Horários de Funcionamento:</strong>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Recepção: Seg a Sex das 7h às 19h | Sáb das 8h às 12h<br />
                      Consultas: Seg a Sex das 14h às 18h | Telemedicina até 19h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed & Route CTA */}
            <div className="space-y-3 w-full box-border">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs border border-stone-200/80 aspect-[16/9] min-h-[200px] sm:min-h-[220px] w-full">
                <iframe
                  title="Localização Fertivitro Moema"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.029092403214!2d-46.657098324599815!3d-23.603289563134176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a1666d711dd%3A0x85caad9c0e7d1a61!2sFertivitro!5e0!3m2!1spt-BR!2sbr!4v1747316478090!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <button
                onClick={() => setGpsModalOpen(true)}
                type="button"
                className="w-full flex items-center justify-center gap-2 py-3 px-3 rounded-2xl bg-white hover:bg-stone-50 border border-stone-200 text-slate-800 font-bold text-xs sm:text-sm shadow-xs hover:shadow-md transition-all cursor-pointer text-center"
              >
                <Navigation className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Traçar Rota (Google Maps ou Waze)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <GpsModal
        isOpen={gpsModalOpen}
        onClose={() => setGpsModalOpen(false)}
      />
    </section>
  );
}
