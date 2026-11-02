/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HELPDESK_ADMINS, DEFAULT_WHATSAPP_NUMBER } from '../data/emoloData';
import { buildWhatsAppUrl } from '../utils/operatingHours';
import {
  X,
  MessageSquare,
  User,
  Building2,
  FileText,
  Send,
  Phone,
  Copy,
  Check,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  if (!isOpen) return null;

  const [selectedAdminId, setSelectedAdminId] = useState<string>(HELPDESK_ADMINS[0].id);
  const [topic, setTopic] = useState<string>('Konsultasi SiRUP & RUP');
  const [nama, setNama] = useState<string>('');
  const [instansi, setInstansi] = useState<string>('');
  const [pesan, setPesan] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const selectedAdmin = HELPDESK_ADMINS.find((a) => a.id === selectedAdminId) || HELPDESK_ADMINS[0];

  const waUrl = buildWhatsAppUrl(
    selectedAdmin.whatsappNumber || DEFAULT_WHATSAPP_NUMBER,
    topic,
    nama,
    instansi,
    pesan
  );

  const topics = [
    'Konsultasi SiRUP & RUP',
    'Kendala SPSE & Tender Online',
    'Pendaftaran & Verifikasi Akun LPSE',
    'Pendaftaran Etalase E-Katalog V.6',
    'Penyusunan HPS & Dokumen Pemilihan',
    'Konsultasi Regulasi PBJ Lainnya',
  ];

  const handleCopy = () => {
    const text = `Konsultasi PBJ E-MOLO Nagekeo\nNama: ${nama || '-'}\nInstansi: ${instansi || '-'}\nTopik: ${topic}\nPesan: ${pesan || '-'}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSend = () => {
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-[#0B192C] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-xl border border-emerald-500/30">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg">Konsultasi Online PBJ</h3>
              <p className="text-xs text-slate-300">Helpdesk WhatsApp E-MOLO Nagekeo</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup modal"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body with Form */}
        <div className="p-5 overflow-y-auto space-y-4">
          {/* Target Helpdesk Personil Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Pilih Tim Teknis / Saluran:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {HELPDESK_ADMINS.map((adm) => (
                <button
                  type="button"
                  key={adm.id}
                  onClick={() => setSelectedAdminId(adm.id)}
                  className={`p-2.5 rounded-xl text-left border text-xs transition-all ${
                    selectedAdminId === adm.id
                      ? 'bg-emerald-50/80 border-emerald-600 text-emerald-950 font-semibold shadow-xs ring-1 ring-emerald-600/30'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <p className="font-bold truncate">{adm.name}</p>
                  <p className="text-[11px] text-slate-500 truncate mt-0.5">{adm.focus}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Topik Konsultasi */}
          <div>
            <label htmlFor="topic-select" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Topik Pengadaan:
            </label>
            <select
              id="topic-select"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
            >
              {topics.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Form Inputs: Nama & Instansi */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="nama-input" className="block text-xs font-semibold text-slate-700 mb-1">
                Nama Lengkap
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  id="nama-input"
                  type="text"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  placeholder="Nama Pemohon"
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>
            </div>

            <div>
              <label htmlFor="instansi-input" className="block text-xs font-semibold text-slate-700 mb-1">
                Instansi / Badan Usaha
              </label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  id="instansi-input"
                  type="text"
                  value={instansi}
                  onChange={(e) => setInstansi(e.target.value)}
                  placeholder="Dinas PUPR / PT / CV"
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>
            </div>
          </div>

          {/* Deskripsi Pertanyaan */}
          <div>
            <label htmlFor="pesan-input" className="block text-xs font-semibold text-slate-700 mb-1">
              Uraian Pertanyaan atau Kendala
            </label>
            <textarea
              id="pesan-input"
              rows={3}
              value={pesan}
              onChange={(e) => setPesan(e.target.value)}
              placeholder="Contoh: Mengalami kendala persetujuan akun PPK pada SiRUP tahun anggaran 2026..."
              className="w-full p-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>

          {/* Security Notice */}
          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Layanan E-MOLO resmi Bagian PBJ Setda Nagekeo. 100% Bebas Biaya & Pungli.</span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Tersalin' : 'Salin Teks'}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3.5 py-2 text-xs font-medium text-slate-600 hover:text-slate-800"
            >
              Batal
            </button>
            <button
              type="button"
              onClick={handleSend}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-xs rounded-xl shadow-sm transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Buka Chat WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
