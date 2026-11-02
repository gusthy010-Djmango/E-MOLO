/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LogoPemkabNagekeo, LogoEmolo } from './Logos';
import { OperatingStatus } from '../utils/operatingHours';
import {
  MapPin,
  Clock,
  Mail,
  Phone,
  Globe,
  ShieldCheck,
  HeartHandshake
} from 'lucide-react';

interface FooterProps {
  status: OperatingStatus;
}

export function Footer({ status }: FooterProps) {
  return (
    <footer id="kontak-kantor" className="bg-[#0B192C] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <LogoPemkabNagekeo className="w-10 h-10 shrink-0" />
              <LogoEmolo className="w-10 h-10 shrink-0" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white tracking-tight">E-MOLO Nagekeo</h4>
              <p className="text-xs text-amber-400 font-medium">Media Obrolan & Layanan Online</p>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Inovasi pelayanan publik Bagian Pengadaan Barang dan Jasa (UKPBJ), Sekretariat Daerah Kabupaten Nagekeo untuk konsultasi dan pengaduan PBJ yang cepat, transparan, dan terintegrasi.
            </p>
          </div>

          {/* Col 2: Alamat Kantor */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Alamat Kantor
            </h5>
            <div className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Bagian Pengadaan Barang dan Jasa (UKPBJ)</p>
                <p>Sekretariat Daerah Kabupaten Nagekeo</p>
                <p>Kompleks Kantor Bupati Nagekeo, Jl. Civic Center, Kelurahan Lape, Mbay</p>
                <p>Kabupaten Nagekeo, Nusa Tenggara Timur 86472</p>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10 space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span className="font-mono text-[11px]">ukpbj@nagekeokab.go.id</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span className="font-mono text-[11px]">+62 812-3900-2026 (Helpdesk)</span>
              </div>
            </div>
          </div>

          {/* Col 3: Jam Operasional */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Jam Operasional Layanan
            </h5>
            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <div className="flex items-center justify-between text-white font-semibold">
                  <span>Senin - Jumat:</span>
                  <span className="font-mono text-emerald-400">08.00 - 15.00 WITA</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Istirahat: 12.00 - 13.00 WITA (Jumat: 11.30 - 13.30 WITA)
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-[11px]">
                <span className="text-slate-400">Sabtu - Minggu:</span>
                <span className="text-amber-400 font-semibold">Libur Pelayanan</span>
              </div>

              {/* Status Realtime */}
              <div className="pt-1">
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border ${
                  status.isOpen
                    ? 'bg-emerald-950/70 border-emerald-500/40 text-emerald-300'
                    : 'bg-amber-950/70 border-amber-500/40 text-amber-300'
                }`}>
                  <Clock className="w-3.5 h-3.5" />
                  <span>{status.statusBadge}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Col 4: Tautan Penting & Maklumat */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Portal Terkait
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://nagekeokab.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Globe className="w-3.5 h-3.5 text-slate-400" />
                  <span>Portal Resmi Pemkab Nagekeo</span>
                </a>
              </li>
              <li>
                <a
                  href="https://spse.nagekeokab.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Globe className="w-3.5 h-3.5 text-slate-400" />
                  <span>SPSE Kabupaten Nagekeo</span>
                </a>
              </li>
              <li>
                <a
                  href="https://lkpp.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Globe className="w-3.5 h-3.5 text-slate-400" />
                  <span>Lembaga Kebijakan Pengadaan (LKPP)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://inaproc.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Globe className="w-3.5 h-3.5 text-slate-400" />
                  <span>Portal Nasional INAPROC</span>
                </a>
              </li>
            </ul>

            <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-[11px] text-emerald-400">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Zona Integritas Bebas Pungli & Korupsi</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            Hak Cipta & Hak Milik: <strong className="text-white">UKPBJ Kabupaten Nagekeo © 2026</strong>. Seluruh Hak Dilindungi.
          </p>
          <p className="text-[11px] text-slate-500">
            Pemerintah Kabupaten Nagekeo, Provinsi Nusa Tenggara Timur
          </p>
        </div>
      </div>
    </footer>
  );
}
