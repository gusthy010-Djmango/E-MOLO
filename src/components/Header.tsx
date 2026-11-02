/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LogoPemkabNagekeo, LogoEmolo } from './Logos';
import { OperatingStatus } from '../utils/operatingHours';
import { MessageSquare, Clock, ArrowRight, ShieldCheck, ExternalLink, Code2 } from 'lucide-react';

interface HeaderProps {
  status: OperatingStatus;
  onOpenConsultation: () => void;
  onOpenHtmlModal: () => void;
  onOpenRegulations: () => void;
}

export function Header({ status, onOpenConsultation, onOpenHtmlModal, onOpenRegulations }: HeaderProps) {
  return (
    <header className="relative bg-[#0B192C] text-white overflow-hidden border-b border-slate-800">
      {/* Background Image with Layered Gradient Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/emolo_hero_civic_1793616527967.jpg"
          alt="Layanan Pengadaan Barang dan Jasa Kabupaten Nagekeo"
          className="w-full h-full object-cover object-center opacity-25"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B192C]/90 via-[#0B192C]/95 to-[#0B192C]" />
        {/* Subtle decorative glow */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Top Bar Contract (1 Row, 3 Zones) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single Brand Wordmark with official logo */}
          <div className="flex items-center gap-2.5 shrink-0">
            <LogoPemkabNagekeo className="w-8 h-8 drop-shadow-sm" />
            <span className="font-bold text-lg sm:text-xl tracking-tight text-white flex items-center gap-2">
              <span className="text-amber-400 font-extrabold">E-MOLO</span>
              <span className="text-xs text-slate-300 font-normal hidden sm:inline">
                UKPBJ Kab. Nagekeo
              </span>
            </span>
          </div>

          {/* Zone 2: Clean single-line text nav links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#layanan-utama" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Layanan Utama
            </a>
            <a href="#aplikasi-pbj" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Aplikasi PBJ
            </a>
            <a href="#pengumuman" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Alur & Pengumuman
            </a>
            <a href="#faq-section" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              FAQ Pengadaan
            </a>
            <a href="#kontak-kantor" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Kontak
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={onOpenHtmlModal}
              title="Lihat Kode HTML Standalone"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              <Code2 className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Export HTML</span>
            </button>
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-lg transition-colors shadow-sm whitespace-nowrap shrink-0"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat Helpdesk</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Content Section */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 text-center">
        {/* Logos & Institutional Badges */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6">
          <div className="flex items-center gap-2 p-2 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm shadow-inner">
            <LogoPemkabNagekeo className="w-11 h-11 sm:w-14 sm:h-14 drop-shadow" />
            <div className="text-left pr-2 border-r border-white/10 hidden sm:block">
              <p className="text-[10px] uppercase font-bold tracking-wider text-amber-400">Pemerintah Kabupaten</p>
              <p className="text-xs font-semibold text-white">Nagekeo, NTT</p>
            </div>
            <LogoEmolo className="w-11 h-11 sm:w-14 sm:h-14 drop-shadow" />
            <div className="text-left pl-1 hidden sm:block">
              <p className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">Sekretariat Daerah</p>
              <p className="text-xs font-semibold text-white">Bagian PBJ / UKPBJ</p>
            </div>
          </div>
        </div>

        {/* Status Pill / Badge as requested: "Media Obrolan & Layanan Online" */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs text-slate-200 mb-4 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-amber-300">E-MOLO</span>
          <span className="text-slate-400">·</span>
          <span>Media Obrolan & Layanan Online</span>
        </div>

        {/* Main Title & Tagline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto text-balance">
          Pusat Layanan Konsultasi & Pengaduan Pengadaan Barang/Jasa
        </h1>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          "Layanan Konsultasi & Pengaduan Pengadaan Barang/Jasa yang Cepat, Transparan, dan Terintegrasi"
        </p>

        <p className="mt-2 text-xs sm:text-sm text-slate-400 font-medium">
          Bagian Pengadaan Barang dan Jasa (UKPBJ), Sekretariat Daerah Kabupaten Nagekeo
        </p>

        {/* Operational Status Pill */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border font-medium ${
            status.isOpen
              ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300'
              : 'bg-amber-950/60 border-amber-500/40 text-amber-300'
          }`}>
            <Clock className="w-3.5 h-3.5" />
            <span>{status.statusBadge}</span>
            <span className="text-white/40">·</span>
            <span className="tabular-nums font-mono text-white">{status.currentTimeWITA}</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Senin - Jumat, 08.00 - 15.00 WITA</span>
          </div>
        </div>

        {/* Fast Action Buttons in Hero */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 shadow-md hover:shadow-lg transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Mulai Konsultasi Online</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#aplikasi-pbj"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-slate-200 bg-white/10 hover:bg-white/15 border border-white/10 transition-colors"
          >
            <span>Akses Aplikasi PBJ</span>
          </a>

          <button
            onClick={onOpenRegulations}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm text-amber-300 hover:text-amber-200 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/20 transition-colors"
          >
            <span>Pusat Regulasi</span>
          </button>
        </div>
      </div>
    </header>
  );
}
