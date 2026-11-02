/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  MessageSquare,
  AlertCircle,
  FolderDown,
  Globe,
  HelpCircle,
  ArrowRight,
  Shield,
  FileCheck,
  CheckCircle2
} from 'lucide-react';

interface ServiceGridProps {
  onOpenConsultation: () => void;
  onOpenComplaint: () => void;
  onOpenRegulations: () => void;
  onScrollToApps: () => void;
  onScrollToFaq: () => void;
}

export function ServiceGrid({
  onOpenConsultation,
  onOpenComplaint,
  onOpenRegulations,
  onScrollToApps,
  onScrollToFaq,
}: ServiceGridProps) {
  const cards = [
    {
      id: 'consultation',
      title: 'Konsultasi Online PBJ',
      subtitle: 'Helpdesk WhatsApp & Pendampingan Teknis',
      badge: 'Respon Cepat',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      description: 'Layanan konsultasi langsung bersama Tim Pokja Pemilihan, Admin LPSE/SPSE, Admin SiRUP, dan Pengelola E-Katalog Nagekeo.',
      icon: MessageSquare,
      iconBg: 'bg-emerald-50 text-emerald-600 border border-emerald-200',
      actionText: 'Chat Admin / Tim Teknis',
      onClick: onOpenConsultation,
      accentBorder: 'hover:border-emerald-500 hover:ring-1 hover:ring-emerald-500/20',
      highlights: ['Bimbingan Input SiRUP', 'Panduan Verifikasi LPSE', 'Pendaftaran Etalase Lokal'],
    },
    {
      id: 'complaint',
      title: 'Formulir Pengaduan & Aspirasi',
      subtitle: 'Saluran Pengaduan Resmi & Whistleblowing',
      badge: 'Kerahasiaan Terjamin',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      description: 'Sampaikan laporan kendala pengadaan, aspirasi perbaikan layanan, atau dugaan penyimpangan secara aman, transparan, dan akuntabel.',
      icon: AlertCircle,
      iconBg: 'bg-amber-50 text-amber-600 border border-amber-200',
      actionText: 'Buka Formulir Pengaduan',
      onClick: onOpenComplaint,
      accentBorder: 'hover:border-amber-500 hover:ring-1 hover:ring-amber-500/20',
      highlights: ['Terhubung Google Form Resmi', 'Dukungan WBS Rahasia', 'Tindak Lanjut Tercatat'],
    },
    {
      id: 'regulations',
      title: 'Repository & Regulasi PBJ',
      subtitle: 'Pusat Unduhan & Dokumen Standar',
      badge: 'Google Drive Terverifikasi',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      description: 'Akses instan kumpulan Perpres No. 16/2018 jo 12/2021, Peraturan LKPP, SOP UKPBJ Nagekeo, dan Standar Dokumen Pemilihan (SDP).',
      icon: FolderDown,
      iconBg: 'bg-blue-50 text-blue-600 border border-blue-200',
      actionText: 'Unduh Dokumen Regulasi',
      onClick: onOpenRegulations,
      accentBorder: 'hover:border-blue-500 hover:ring-1 hover:ring-blue-500/20',
      highlights: ['Perpres & Perlem Lengkap', 'Format Dokumen Pemilihan', 'SOP UKPBJ Nagekeo'],
    },
    {
      id: 'apps',
      title: 'Aplikasi PBJ Terintegrasi',
      subtitle: 'Portal Pengadaan Nasional & Daerah',
      badge: 'Sistem Terintegrasi',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      description: 'Pintu gerbang langsung menuju SPSE Pemkab Nagekeo, Katalog Elektronik V.6, INAPROC Nasional, SiRUP LKPP, dan SIKaP.',
      icon: Globe,
      iconBg: 'bg-indigo-50 text-indigo-600 border border-indigo-200',
      actionText: 'Buka Daftar Aplikasi PBJ',
      onClick: onScrollToApps,
      accentBorder: 'hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500/20',
      highlights: ['SPSE v4.5 Nagekeo', 'E-Katalog V.6 Nasional & Lokal', 'Portal INAPROC & SiRUP'],
    },
    {
      id: 'faq',
      title: 'FAQ Pengadaan Barang/Jasa',
      subtitle: 'Tanya Jawab & Panduan Solutif',
      badge: 'Panduan Praktis',
      badgeColor: 'bg-slate-100 text-slate-700 border-slate-200',
      description: 'Temukan jawaban cepat atas kendala yang paling sering ditanyakan oleh OPD, PPK, Pejabat Pengadaan, dan Penyedia Jasa/UMKM.',
      icon: HelpCircle,
      iconBg: 'bg-slate-100 text-slate-700 border border-slate-200',
      actionText: 'Baca Tanya Jawab Umum',
      onClick: onScrollToFaq,
      accentBorder: 'hover:border-slate-500 hover:ring-1 hover:ring-slate-500/20',
      highlights: ['Kendala Akun SPSE', 'Revisi & Tayang RUP', 'Syarat Etalase Lokal'],
    },
  ];

  return (
    <section id="layanan-utama" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="max-w-3xl mb-8 sm:mb-12">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">
          <Shield className="w-4 h-4" />
          <span>Akses Layanan Utama E-MOLO</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B192C] tracking-tight">
          Layanan Pengadaan Terpadu Satu Pintu
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-600">
          Pilih kanal layanan yang Anda butuhkan untuk konsultasi teknis, pengaduan, pengunduhan regulasi, atau akses sistem PBJ.
        </p>
      </div>

      {/* Main Grid: 2 Marquee Cards on Top + 3 Cards Below */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {cards.map((card, index) => {
          const Icon = card.icon;
          // Make first two cards span nicely or stand out
          const isTopMarquee = index < 2;

          return (
            <div
              key={card.id}
              className={`group flex flex-col justify-between bg-white rounded-xl border border-slate-200/80 p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-200 ${card.accentBorder} ${
                index === 0 ? 'md:col-span-1 lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Header Row: Icon & Tag */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className={`p-3 rounded-xl ${card.iconBg} group-hover:scale-105 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${card.badgeColor}`}>
                    {card.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-lg sm:text-xl font-bold text-[#0B192C] group-hover:text-blue-900 transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs font-medium text-slate-500 mt-0.5">
                  {card.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  {card.description}
                </p>

                {/* Highlights list */}
                <ul className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-500">
                  {card.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-2">
                <button
                  onClick={card.onClick}
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors ${
                    card.id === 'consultation'
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm'
                      : card.id === 'complaint'
                      ? 'bg-amber-600 hover:bg-amber-700 text-white shadow-sm'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                  }`}
                >
                  <span>{card.actionText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
