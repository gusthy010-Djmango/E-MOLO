/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { REGULATIONS, GOOGLE_DRIVE_REGULASI_URL } from '../data/emoloData';
import {
  X,
  FolderDown,
  Search,
  ExternalLink,
  FileText,
  Download,
  BookOpen,
  FolderOpen
} from 'lucide-react';

interface RegulationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RegulationModal({ isOpen, onClose }: RegulationModalProps) {
  if (!isOpen) return null;

  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState('Semua');

  const categories = ['Semua', 'Perpres', 'Peraturan LKPP', 'SOP & Keputusan', 'Standar Dokumen (SDP)', 'Surat Edaran'];

  const filtered = REGULATIONS.filter((r) => {
    const matchCat = selectedCat === 'Semua' || r.category === selectedCat;
    if (!matchCat) return false;
    if (!search.trim()) return true;

    const query = search.toLowerCase();
    return (
      r.title.toLowerCase().includes(query) ||
      r.number.toLowerCase().includes(query) ||
      r.description.toLowerCase().includes(query)
    );
  });

  const handleOpenDrive = () => {
    window.open(GOOGLE_DRIVE_REGULASI_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-[#0B192C] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/20 text-blue-400 rounded-xl border border-blue-500/30">
              <FolderDown className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg">Repository Regulasi PBJ</h3>
              <p className="text-xs text-slate-300">Pusat Unduhan Resmi Bagian PBJ Setda Kabupaten Nagekeo</p>
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
        <div className="p-5 overflow-y-auto space-y-4">
          {/* Direct Google Drive Banner */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-blue-900 to-indigo-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
            <div className="flex items-center gap-3">
              <FolderOpen className="w-8 h-8 text-amber-400 shrink-0" />
              <div>
                <h4 className="font-bold text-sm sm:text-base text-white">Google Drive Terpusat UKPBJ</h4>
                <p className="text-xs text-slate-300">
                  Folder cloud resmi berisi arsip Perpres, Perlem, SOP, dan SDP update 2026.
                </p>
              </div>
            </div>
            <button
              onClick={handleOpenDrive}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow-xs transition-colors shrink-0"
            >
              <span>Buka Google Drive</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Search bar & Category filters */}
          <div className="space-y-2">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari regulasi... (contoh: Perpres 16, SOP, SDP Konstruksi, Katalog)"
                className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedCat(c)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                    selectedCat === c
                      ? 'bg-[#0B192C] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Regulations List */}
          <div className="space-y-2.5">
            {filtered.length === 0 ? (
              <p className="text-center py-6 text-xs text-slate-500">
                Tidak ada regulasi yang sesuai dengan pencarian Anda.
              </p>
            ) : (
              filtered.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-xl border border-slate-200 hover:border-blue-300 bg-white hover:bg-blue-50/20 transition-all flex items-start justify-between gap-3"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-50 text-blue-700 rounded-lg shrink-0 mt-0.5">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-100 text-blue-800">
                          {item.category}
                        </span>
                        <span className="text-[11px] font-mono text-slate-500">{item.year}</span>
                      </div>
                      <h5 className="font-bold text-xs sm:text-sm text-[#0B192C] leading-snug">
                        {item.title}
                      </h5>
                      <p className="text-[11px] font-mono text-slate-500 mt-0.5">{item.number}</p>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-600 text-slate-700 hover:text-white text-xs font-semibold shrink-0 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Unduh</span>
                  </a>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Menampilkan {filtered.length} dari {REGULATIONS.length} dokumen
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold text-xs rounded-xl transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
