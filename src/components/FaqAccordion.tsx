/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FAQS } from '../data/emoloData';
import { filterFaqs, FaqItem } from '../utils/operatingHours';
import {
  HelpCircle,
  Search,
  ChevronDown,
  MessageSquare,
  Tag,
  CheckCircle,
  X
} from 'lucide-react';

interface FaqAccordionProps {
  onOpenConsultation: () => void;
}

export function FaqAccordion({ onOpenConsultation }: FaqAccordionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-sirup-1': true, // Keep the first item open by default
  });

  const categories = ['Semua', 'SiRUP', 'SPSE', 'e-Katalog', 'Regulasi & Prosedur', 'Umum'];

  const filtered = filterFaqs(FAQS, searchQuery, selectedCategory);

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const all: Record<string, boolean> = {};
    filtered.forEach((f) => {
      all[f.id] = true;
    });
    setOpenIds(all);
  };

  const collapseAll = () => {
    setOpenIds({});
  };

  return (
    <section id="faq-section" className="py-12 sm:py-16 bg-white border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Pusat Tanya Jawab Pengadaan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B192C] tracking-tight">
            FAQ Pengadaan Barang & Jasa
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Pertanyaan dan solusi praktis seputar aplikasi SiRUP, SPSE v4.5, E-Katalog V.6, serta prosedur regulasi PBJ.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari pertanyaan... (contoh: swakelola, revisi RUP, etalase lokal, error sesi)"
            className="w-full pl-10 pr-10 py-3 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all shadow-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              aria-label="Bersihkan pencarian"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center justify-between flex-wrap gap-2 mb-6">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#0B192C] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
            <span>{filtered.length} Pertanyaan</span>
            <span className="text-slate-300">|</span>
            <button
              onClick={expandAll}
              className="hover:text-blue-700 underline underline-offset-2"
            >
              Buka Semua
            </button>
            <span className="text-slate-300">·</span>
            <button
              onClick={collapseAll}
              className="hover:text-blue-700 underline underline-offset-2"
            >
              Tutup Semua
            </button>
          </div>
        </div>

        {/* Accordion List */}
        {filtered.length === 0 ? (
          <div className="text-center py-10 bg-slate-50 rounded-xl border border-dashed border-slate-300 p-6">
            <p className="text-sm font-semibold text-slate-700">Tidak ada pertanyaan yang cocok</p>
            <p className="text-xs text-slate-500 mt-1">
              Coba kata kunci lain atau ajukan pertanyaan Anda langsung kepada Tim Helpdesk E-MOLO.
            </p>
            <button
              onClick={onOpenConsultation}
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-semibold hover:bg-emerald-700 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Tanyakan via WhatsApp</span>
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((faq) => {
              const isOpen = !!openIds[faq.id];
              return (
                <div
                  key={faq.id}
                  className="rounded-xl border border-slate-200 bg-white overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-start justify-between gap-4 p-4 text-left hover:bg-slate-50/70 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 px-2 py-0.5 text-[10px] font-bold uppercase rounded bg-slate-100 text-slate-700 shrink-0">
                        {faq.category}
                      </span>
                      <span className="font-bold text-sm sm:text-base text-[#0B192C] leading-snug">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 mt-1 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/30">
                      <p className="whitespace-pre-line">{faq.answer}</p>
                      
                      {faq.tags.length > 0 && (
                        <div className="mt-3 pt-2 border-t border-slate-100 flex items-center gap-1.5 flex-wrap">
                          <Tag className="w-3 h-3 text-slate-400" />
                          <span className="text-[11px] text-slate-400 font-mono">Kata kunci:</span>
                          {faq.tags.map((t) => (
                            <span
                              key={t}
                              className="text-[11px] text-slate-500 font-mono bg-slate-100 px-1.5 py-0.5 rounded"
                            >
                              #{t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Helpdesk Banner */}
        <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-[#0B192C] to-[#1E3E62] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-base text-white">Punya pertanyaan spesifik atau kendala teknis?</h3>
            <p className="text-xs text-slate-300 mt-0.5">
              Tim Advokasi & Helpdesk UKPBJ Nagekeo siap memberikan solusi cepat.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-semibold shadow-sm transition-colors whitespace-nowrap shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chat Helpdesk WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
}
