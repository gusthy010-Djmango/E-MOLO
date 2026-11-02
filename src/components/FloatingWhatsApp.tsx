/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HELPDESK_ADMINS, DEFAULT_WHATSAPP_NUMBER } from '../data/emoloData';
import { MessageSquare, X, Send, PhoneCall, ChevronUp, UserCheck, Sparkles } from 'lucide-react';

interface FloatingWhatsAppProps {
  onOpenFullModal: () => void;
}

export function FloatingWhatsApp({ onOpenFullModal }: FloatingWhatsAppProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleAdminClick = (waNumber: string, roleName: string) => {
    const text = encodeURIComponent(
      `Halo Tim ${roleName} E-MOLO UKPBJ Kabupaten Nagekeo, saya membutuhkan bantuan informasi/konsultasi PBJ. Mohon arahannya.`
    );
    window.open(`https://wa.me/${waNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-5 right-4 sm:right-6 z-40 flex flex-col items-end">
      {/* Expanded Quick Selector Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-3 duration-200">
          <div className="bg-[#0B192C] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <div>
                <h4 className="font-bold text-sm">Helpdesk E-MOLO Nagekeo</h4>
                <p className="text-[11px] text-slate-300">Siap melayani konsultasi PBJ</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Tutup menu helpdesk"
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-3 bg-slate-50 border-b border-slate-100 text-xs text-slate-600">
            Pilih petugas teknis yang sesuai dengan kebutuhan Anda:
          </div>

          <div className="p-3 space-y-2 max-h-64 overflow-y-auto">
            {HELPDESK_ADMINS.map((adm) => (
              <button
                key={adm.id}
                onClick={() => handleAdminClick(adm.whatsappNumber, adm.name)}
                className="w-full flex items-center justify-between p-2.5 rounded-xl border border-slate-200 bg-white hover:border-emerald-500 hover:bg-emerald-50/40 text-left transition-all group"
              >
                <div>
                  <p className="text-xs font-bold text-[#0B192C] group-hover:text-emerald-800">
                    {adm.name}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">{adm.focus}</p>
                </div>
                <div className="p-1.5 rounded-lg bg-emerald-100 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Send className="w-3.5 h-3.5" />
                </div>
              </button>
            ))}
          </div>

          <div className="p-3 bg-slate-50 border-t border-slate-200">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenFullModal();
              }}
              className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold shadow-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Formulir Pesan Konsultasi Lengkap</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Butuh Bantuan Instant WhatsApp"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white ring-4 ring-emerald-600/20"
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full border-2 border-emerald-600 animate-ping" />
        </div>
        <span className="text-xs sm:text-sm font-bold tracking-wide whitespace-nowrap">
          Butuh Bantuan Instant?
        </span>
      </button>
    </div>
  );
}
