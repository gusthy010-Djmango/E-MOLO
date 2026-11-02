/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { GOOGLE_FORM_PENGADUAN_URL } from '../data/emoloData';
import {
  X,
  AlertCircle,
  ExternalLink,
  ShieldAlert,
  Send,
  Lock,
  CheckCircle2,
  FileCheck
} from 'lucide-react';

interface ComplaintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ComplaintModal({ isOpen, onClose }: ComplaintModalProps) {
  if (!isOpen) return null;

  const [category, setCategory] = useState('Dugaan Penyimpangan Tender / Seleksi');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [nama, setNama] = useState('');
  const [kontak, setKontak] = useState('');
  const [namaPaket, setNamaPaket] = useState('');
  const [uraian, setUraian] = useState('');
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!uraian.trim()) return;

    // Generate local receipt ticket
    const ticket = `WBS-NGK-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedTicket(ticket);
  };

  const handleOpenGoogleForm = () => {
    window.open(GOOGLE_FORM_PENGADUAN_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-[#0B192C] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/20 text-amber-400 rounded-xl border border-amber-500/30">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg">Formulir Pengaduan & Aspirasi</h3>
              <p className="text-xs text-slate-300">Layanan Whistleblowing UKPBJ Kabupaten Nagekeo</p>
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

        {/* Content */}
        <div className="p-5 overflow-y-auto">
          {submittedTicket ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[#0B192C]">Pengaduan Berhasil Tercatat</h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Laporan Anda telah diterima oleh Tim Pengawasan Internal UKPBJ Kabupaten Nagekeo dengan nomor registrasi:
              </p>
              <div className="p-3 bg-slate-100 rounded-xl font-mono text-base font-bold text-blue-900 tracking-wider">
                {submittedTicket}
              </div>
              <p className="text-[11px] text-slate-500">
                Simpan nomor registrasi di atas untuk konfirmasi tindak lanjut laporan Anda.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-2 justify-center">
                <button
                  onClick={() => setSubmittedTicket(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl"
                >
                  Kirim Laporan Baru
                </button>
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#0B192C] hover:bg-slate-800 rounded-xl"
                >
                  Selesai
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Official Google Form Banner */}
              <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200 flex items-center justify-between gap-3">
                <div className="text-xs text-amber-900">
                  <p className="font-bold">Ingin melampirkan berkas bukti dokumen?</p>
                  <p className="text-[11px] text-amber-700 mt-0.5">
                    Gunakan Google Form resmi UKPBJ dengan upload file dokumen PDF/foto.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleOpenGoogleForm}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-semibold shadow-xs shrink-0"
                >
                  <span>Google Form</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Anonymous Checkbox */}
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-emerald-600" />
                  <div>
                    <p className="text-xs font-bold text-slate-800">Lapor Secara Anonim (WBS)</p>
                    <p className="text-[11px] text-slate-500">Identitas pelapor dirahasiakan penuh</p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  id="anonymous-toggle"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500"
                />
              </div>

              {/* Kategori Pengaduan */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Kategori Laporan:
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="Dugaan Penyimpangan Tender / Seleksi">Dugaan Penyimpangan Tender / Seleksi</option>
                  <option value="Kendala Teknis Layanan SPSE / Katalog">Kendala Teknis Layanan SPSE / Katalog</option>
                  <option value="Sanggahan / Permohonan Klarifikasi">Sanggahan / Permohonan Klarifikasi</option>
                  <option value="Aspirasi & Masukan Perbaikan PBJ">Aspirasi & Masukan Perbaikan PBJ</option>
                  <option value="Dugaan Pelanggaran Kode Etik / Pungli">Dugaan Pelanggaran Kode Etik / Pungli</option>
                </select>
              </div>

              {/* Nama & Kontak if not anonymous */}
              {!isAnonymous && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Nama Pelapor</label>
                    <input
                      type="text"
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                      placeholder="Nama Lengkap"
                      className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">No. WhatsApp / Email</label>
                    <input
                      type="text"
                      value={kontak}
                      onChange={(e) => setKontak(e.target.value)}
                      placeholder="0812xxxx / email@..."
                      className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>
              )}

              {/* Nama Paket PBJ */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nama Paket Pengadaan / Kegiatan Terkait (Jika Ada)
                </label>
                <input
                  type="text"
                  value={namaPaket}
                  onChange={(e) => setNamaPaket(e.target.value)}
                  placeholder="Contoh: Pembangunan Jembatan / Pengadaan ATK Dinas..."
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {/* Uraian Laporan */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Uraian Kejadian / Kendala / Saran *
                </label>
                <textarea
                  rows={4}
                  required
                  value={uraian}
                  onChange={(e) => setUraian(e.target.value)}
                  placeholder="Jelaskan secara kronologis fakta kejadian, pihak yang dilaporkan, dan harapan penyelesaian..."
                  className="w-full p-3 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-800"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-semibold shadow-sm transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Kirim Laporan Pengaduan</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
