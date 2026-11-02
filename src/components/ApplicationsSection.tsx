/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PBJ_APPS, PbjApp } from '../data/emoloData';
import { ExternalLink, Layers, ArrowUpRight, ShieldCheck, Check } from 'lucide-react';

export function ApplicationsSection() {
  return (
    <section id="aplikasi-pbj" className="py-12 sm:py-16 bg-slate-100/70 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
              <Layers className="w-4 h-4" />
              <span>Ekosistem Digital PBJ</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B192C] tracking-tight">
              Aplikasi Pengadaan Barang & Jasa
            </h2>
            <p className="mt-1.5 text-sm text-slate-600 max-w-2xl">
              Portal resmi LKPP dan LPSE Pemerintah Kabupaten Nagekeo untuk transaksi e-purchasing, tender digital, dan perencanaan pengadaan.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shrink-0">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Terhubung ke Server LKPP RI</span>
          </div>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {PBJ_APPS.map((app) => (
            <a
              key={app.id}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-200"
            >
              <div>
                {/* Top Badge & Code */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200/60">
                    {app.badge}
                  </span>
                  <div className="flex items-center text-xs font-medium text-slate-400 group-hover:text-blue-600 transition-colors">
                    <span className="text-[11px]">Buka Portal</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-[#0B192C] group-hover:text-blue-900 transition-colors flex items-center gap-1.5">
                  {app.name}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {app.description}
                </p>
              </div>

              {/* Bottom URL hint */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span className="truncate max-w-[200px]">{app.url.replace('https://', '')}</span>
                <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-blue-600 shrink-0" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
