/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ANNOUNCEMENTS, AnnouncementItem } from '../data/emoloData';
import {
  Bell,
  CheckCircle2,
  Clock,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Info
} from 'lucide-react';

export function AnnouncementSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = ANNOUNCEMENTS[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + ANNOUNCEMENTS.length) % ANNOUNCEMENTS.length);
  };

  return (
    <section id="pengumuman" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">
            <Bell className="w-4 h-4" />
            <span>Pusat Informasi & Panduan Pelayanan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B192C] tracking-tight">
            Pengumuman & Infografis PBJ
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Pelajari alur konsultasi, jam operasional, dan pedoman belanja produk lokal di Kabupaten Nagekeo.
          </p>
        </div>

        {/* Slide Controls */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={handlePrev}
            aria-label="Pengumuman sebelumnya"
            className="p-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 shadow-sm transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-xs font-mono font-medium text-slate-500 px-2 tabular-nums">
            {activeIndex + 1} / {ANNOUNCEMENTS.length}
          </span>
          <button
            onClick={handleNext}
            aria-label="Pengumuman berikutnya"
            className="p-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 shadow-sm transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Tabs Selector */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 scrollbar-none">
        {ANNOUNCEMENTS.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => setActiveIndex(idx)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors shrink-0 ${
              activeIndex === idx
                ? 'bg-[#0B192C] text-white shadow-sm'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            {item.tag}
          </button>
        ))}
      </div>

      {/* Active Card Body */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-slate-100 pb-5 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                {current.tag}
              </span>
              <span className="text-xs text-slate-400 font-medium">·</span>
              <span className="text-xs text-slate-500 font-medium">{current.date}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B192C]">
              {current.title}
            </h3>
            <p className="mt-1 text-sm text-slate-600 max-w-3xl">
              {current.summary}
            </p>
          </div>
        </div>

        {/* Content based on type */}
        {current.type === 'alur' && current.steps && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {current.steps.map((st) => (
              <div
                key={st.step}
                className="relative bg-slate-50 rounded-xl p-4 border border-slate-200/80 hover:bg-white hover:shadow-sm transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shadow-sm">
                    {st.step}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">Tahap {st.step}</span>
                </div>
                <h4 className="font-bold text-sm text-[#0B192C] mb-1">{st.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        )}

        {current.type === 'jadwal' && current.highlightNotes && (
          <div className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {current.highlightNotes.map((note, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700"
                >
                  <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{note}</span>
                </div>
              ))}
            </div>
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/70 text-xs text-amber-800 flex items-center gap-2">
              <Info className="w-4 h-4 shrink-0 text-amber-600" />
              <span>Petugas teknis akan menghubungi balik segera pada awal jam dinas jika pesan diterima di luar jam kerja.</span>
            </div>
          </div>
        )}

        {current.type === 'katalog' && current.highlightNotes && (
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Etalase Terbuka untuk UMKM Kabupaten Nagekeo:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {current.highlightNotes.map((note, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-800 font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{note}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500">
              Konsultasikan syarat NIB dan upload produk ke Helpdesk E-Katalog E-MOLO untuk pendampingan teknis gratis.
            </p>
          </div>
        )}

        {current.type === 'integritas' && current.highlightNotes && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {current.highlightNotes.map((note, i) => (
                <div
                  key={i}
                  className="flex flex-col justify-between p-4 rounded-xl bg-emerald-50/50 border border-emerald-200/80 text-xs text-emerald-950 font-medium"
                >
                  <div className="flex items-center gap-2 mb-2 text-emerald-700 font-bold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Prinsip Integritas #{i + 1}</span>
                  </div>
                  <p className="text-xs leading-relaxed text-slate-700">{note}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
