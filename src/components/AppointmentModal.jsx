import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Send, CheckCircle2, MessageCircle, MapPin, Video, Clock } from 'lucide-react';

export default function AppointmentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    type: 'presencial',
    period: 'tarde',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `*Solicitação de Agendamento - Fertivitro*%0A` +
      `*Nome:* ${encodeURIComponent(formData.name)}%0A` +
      `*WhatsApp:* ${encodeURIComponent(formData.phone)}%0A` +
      `*Email:* ${encodeURIComponent(formData.email)}%0A` +
      `*Cidade/UF:* ${encodeURIComponent(formData.city || 'Não informada')}%0A` +
      `*Modalidade:* ${formData.type === 'presencial' ? 'Consulta Presencial (Moema)' : 'Telemedicina (Virtual)'}%0A` +
      `*Período de preferência:* ${formData.period === 'tarde' ? 'Tarde' : 'Manhã'}%0A` +
      `*Observações:* ${encodeURIComponent(formData.notes || 'Gostaria de agendar minha consulta.')}`;

    const waUrl = `https://wa.me/5511995466272?text=${text}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-lg w-full bg-white rounded-3xl shadow-2xl border border-stone-200 p-6 sm:p-8 my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-stone-100 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#687e5a] bg-[#e8efe4] px-3 py-1 rounded-full w-fit mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Agendamento de Consulta</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
            Inicie sua jornada conosco
          </h3>

          <p className="text-xs sm:text-sm text-slate-500 mb-6">
            Escolha entre o atendimento acolhedor em nossa clínica em Moema ou por Telemedicina de onde você estiver.
          </p>

          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
              <h4 className="text-lg font-bold text-slate-900">Solicitação Iniciada no WhatsApp!</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                Nossa recepção já recebeu seus dados e dará continuidade imediata para reservar seu horário.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-[#839A74] hover:bg-[#687e5a] text-white font-bold text-xs transition-colors"
              >
                Concluir
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#839A74] focus:bg-white transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(11) 90000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#839A74] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#839A74] focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Consultation Type Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Modalidade de Atendimento
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, type: 'presencial' })}
                    className={`p-3 rounded-xl border text-left flex items-start gap-2.5 transition-all ${
                      formData.type === 'presencial'
                        ? 'border-[#839A74] bg-[#FAF9F5] shadow-xs ring-1 ring-[#839A74]'
                        : 'border-stone-200 hover:bg-stone-50'
                    }`}
                  >
                    <Building2 className={`w-4 h-4 mt-0.5 ${formData.type === 'presencial' ? 'text-[#839A74]' : 'text-slate-400'}`} />
                    <div>
                      <span className="block text-xs font-bold text-slate-800">Presencial</span>
                      <span className="block text-[11px] text-slate-500">Moema, São Paulo</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, type: 'telemedicina' })}
                    className={`p-3 rounded-xl border text-left flex items-start gap-2.5 transition-all ${
                      formData.type === 'telemedicina'
                        ? 'border-[#839A74] bg-[#FAF9F5] shadow-xs ring-1 ring-[#839A74]'
                        : 'border-stone-200 hover:bg-stone-50'
                    }`}
                  >
                    <Video className={`w-4 h-4 mt-0.5 ${formData.type === 'telemedicina' ? 'text-[#839A74]' : 'text-slate-400'}`} />
                    <div>
                      <span className="block text-xs font-bold text-slate-800">Telemedicina</span>
                      <span className="block text-[11px] text-slate-500">Online / Vídeo</span>
                    </div>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Observações ou Dúvidas
                </label>
                <textarea
                  rows={2}
                  placeholder="Primeira consulta, indicação de tratamento, exames anteriores..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#839A74] focus:bg-white transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#839A74] hover:bg-[#687e5a] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirmar via WhatsApp da Clínica</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Atendimento de Seg. a Sex. das 7h às 19h</span>
              </div>
            </form>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
