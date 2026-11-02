/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { generateStandaloneHtml } from '../utils/generateStandaloneHtml';
import { X, Copy, Check, Download, Code2, Sparkles } from 'lucide-react';

interface StandaloneHtmlModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function StandaloneHtmlModal({ isOpen, onClose }: StandaloneHtmlModalProps) {
  if (!isOpen) return null;

  const [copied, setCopied] = useState(false);
  const htmlContent = generateStandaloneHtml();

  const handleCopy = () => {
    navigator.clipboard.writeText(htmlContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'e-molo-ukpbj-nagekeo.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-[#0B192C] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/20 text-amber-400 rounded-xl border border-amber-500/30">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg">Skrip HTML & Tailwind CSS Standalone</h3>
              <p className="text-xs text-slate-300">
                Single-file HTML siap pakai dengan Tailwind CSS via CDN
              </p>
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

        {/* Info & Code View */}
        <div className="p-5 overflow-y-auto space-y-3">
          <p className="text-xs text-slate-600">
            Skrip di bawah ini dirancang sebagai berkas HTML tunggal (single-file HTML) lengkap dengan CDN Tailwind CSS dan Lucide Icons. Anda dapat mengunduh langsung atau menyalinnya untuk diunggah ke server web Pemkab Nagekeo.
          </p>

          <div className="relative">
            <pre className="p-4 rounded-xl bg-slate-900 text-slate-200 text-xs font-mono overflow-x-auto max-h-96 leading-relaxed">
              <code>{htmlContent}</code>
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-slate-500">
            Panjang: ~{Math.round(htmlContent.length / 1024)} KB
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 transition-colors shadow-xs"
            >
              <Download className="w-4 h-4 text-slate-600" />
              <span>Unduh .html</span>
            </button>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors shadow-xs"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Berhasil Disalin!' : 'Salin Kode HTML'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
