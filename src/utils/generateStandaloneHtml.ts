/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function generateStandaloneHtml(): string {
  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>E-MOLO UKPBJ Kabupaten Nagekeo - Layanan Konsultasi & Pengaduan PBJ</title>
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Google Fonts: Plus Jakarta Sans -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <!-- Lucide Icons CDN -->
  <script src="https://unpkg.com/lucide@latest"></script>
  <style>
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      background-color: #f8fafc;
      color: #0f172a;
    }
  </style>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            brandNavy: '#0B192C',
            brandBlue: '#1E3E62',
            brandGreen: '#059669',
            brandGold: '#F59E0B',
          }
        }
      }
    }
  </script>
</head>
<body class="min-h-screen flex flex-col antialiased">

  <!-- TOP BAR & HERO SECTION -->
  <header class="relative bg-brandNavy text-white overflow-hidden border-b border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 border-b border-white/10">
        <div class="flex items-center gap-3">
          <span class="text-xl font-extrabold tracking-tight text-white flex items-center gap-2">
            <span class="text-amber-400">E-MOLO</span>
            <span class="text-xs text-slate-300 font-normal hidden sm:inline">UKPBJ Setda Kab. Nagekeo</span>
          </span>
        </div>
        <div class="flex items-center gap-3">
          <a href="https://wa.me/6281239002026?text=Halo%20Admin%20E-MOLO%20UKPBJ%20Nagekeo,%20saya%20ingin%20konsultasi%20PBJ" 
             target="_blank"
             class="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm transition-colors">
            <i data-lucide="message-square" class="w-4 h-4"></i>
            <span>Chat Helpdesk</span>
          </a>
        </div>
      </div>
    </div>

    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-xs text-slate-200 mb-4">
        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span class="font-bold text-amber-300">E-MOLO</span>
        <span class="text-slate-400">·</span>
        <span>Media Obrolan & Layanan Online</span>
      </div>

      <h1 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
        Layanan Konsultasi & Pengaduan Pengadaan Barang/Jasa
      </h1>
      <p class="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
        "Cepat, Transparan, dan Terintegrasi"
      </p>
      <p class="mt-1 text-xs sm:text-sm text-slate-400 font-medium">
        Bagian Pengadaan Barang dan Jasa (UKPBJ), Sekretariat Daerah Kabupaten Nagekeo
      </p>

      <div class="mt-6 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs">
        <i data-lucide="clock" class="w-3.5 h-3.5"></i>
        <span>Jam Kerja Layanan: Senin - Jumat, 08.00 - 15.00 WITA</span>
      </div>
    </div>
  </header>

  <!-- MAIN CTAs GRID -->
  <main class="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="mb-8">
      <h2 class="text-2xl font-extrabold text-brandNavy">Akses Layanan Utama E-MOLO</h2>
      <p class="text-sm text-slate-600 mt-1">Pilih saluran yang Anda perlukan untuk bantuan konsultasi, regulasi, dan aplikasi.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- 1. WhatsApp Helpdesk -->
      <div class="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
        <div>
          <div class="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-4">
            <i data-lucide="message-square" class="w-6 h-6"></i>
          </div>
          <h3 class="text-lg font-bold text-brandNavy">Konsultasi Online PBJ</h3>
          <p class="text-xs font-semibold text-emerald-600 mt-0.5">Helpdesk WhatsApp Resmi</p>
          <p class="text-sm text-slate-600 mt-2">Chat langsung dengan Tim Pokja Pemilihan, Admin SiRUP, LPSE SPSE, dan E-Katalog Nagekeo.</p>
        </div>
        <div class="mt-6">
          <a href="https://wa.me/6281239002026?text=Halo%20Admin%20E-MOLO%20UKPBJ%20Nagekeo,%20saya%20ingin%20berkonsultasi%20PBJ" 
             target="_blank"
             class="w-full inline-flex items-center justify-between px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold">
            <span>Chat Admin / Tim Teknis</span>
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </a>
        </div>
      </div>

      <!-- 2. Formulir Pengaduan -->
      <div class="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
        <div>
          <div class="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mb-4">
            <i data-lucide="alert-circle" class="w-6 h-6"></i>
          </div>
          <h3 class="text-lg font-bold text-brandNavy">Formulir Pengaduan & Aspirasi</h3>
          <p class="text-xs font-semibold text-amber-600 mt-0.5">Whistleblowing & Laporan PBJ</p>
          <p class="text-sm text-slate-600 mt-2">Sampaikan laporan kendala pemilihan, sanggahan, atau pengaduan secara transparan dan rahasia.</p>
        </div>
        <div class="mt-6">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSc_ExamplePengaduanUKPBJNagekeo/viewform" 
             target="_blank"
             class="w-full inline-flex items-center justify-between px-4 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-semibold">
            <span>Buka Google Form Pengaduan</span>
            <i data-lucide="external-link" class="w-4 h-4"></i>
          </a>
        </div>
      </div>

      <!-- 3. Repository Regulasi -->
      <div class="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
        <div>
          <div class="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mb-4">
            <i data-lucide="folder-down" class="w-6 h-6"></i>
          </div>
          <h3 class="text-lg font-bold text-brandNavy">Repository Regulasi PBJ</h3>
          <p class="text-xs font-semibold text-blue-600 mt-0.5">Google Drive Terpusat</p>
          <p class="text-sm text-slate-600 mt-2">Unduh Perpres No. 16/2018 jo 12/2021, Perlem LKPP, SOP UKPBJ, dan Standar Dokumen Pemilihan (SDP).</p>
        </div>
        <div class="mt-6">
          <a href="https://drive.google.com/drive/folders/1-UKPBJ-Nagekeo-Regulasi-PBJ" 
             target="_blank"
             class="w-full inline-flex items-center justify-between px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold">
            <span>Buka Google Drive Regulasi</span>
            <i data-lucide="external-link" class="w-4 h-4"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- APLIKASI PBJ SECTION -->
    <div class="mt-16">
      <div class="mb-6">
        <h2 class="text-2xl font-extrabold text-brandNavy">Aplikasi PBJ Terintegrasi</h2>
        <p class="text-sm text-slate-600 mt-1">Akses portal resmi pengadaan barang/jasa nasional dan daerah.</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <a href="https://inaproc.id" target="_blank" class="p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-400 shadow-xs flex items-center justify-between">
          <div>
            <h4 class="font-bold text-sm text-brandNavy">INAPROC Nasional</h4>
            <p class="text-xs text-slate-500">Portal Pengadaan Nasional LKPP</p>
          </div>
          <i data-lucide="external-link" class="w-4 h-4 text-slate-400"></i>
        </a>
        <a href="https://spse.nagekeokab.go.id/eproc4" target="_blank" class="p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-400 shadow-xs flex items-center justify-between">
          <div>
            <h4 class="font-bold text-sm text-brandNavy">SPSE Kab. Nagekeo</h4>
            <p class="text-xs text-slate-500">Tender & Seleksi Elektronik</p>
          </div>
          <i data-lucide="external-link" class="w-4 h-4 text-slate-400"></i>
        </a>
        <a href="https://e-katalog.lkpp.go.id" target="_blank" class="p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-400 shadow-xs flex items-center justify-between">
          <div>
            <h4 class="font-bold text-sm text-brandNavy">E-Katalog V.6</h4>
            <p class="text-xs text-slate-500">Katalog Nasional & Etalase Lokal</p>
          </div>
          <i data-lucide="external-link" class="w-4 h-4 text-slate-400"></i>
        </a>
      </div>
    </div>

    <!-- FAQ SECTION (Accordion) -->
    <div class="mt-16">
      <div class="mb-6">
        <h2 class="text-2xl font-extrabold text-brandNavy">FAQ Pengadaan Barang & Jasa</h2>
        <p class="text-sm text-slate-600 mt-1">Jawaban pertanyaan umum seputar SiRUP, SPSE, dan E-Katalog Lokal.</p>
      </div>

      <div class="space-y-3 max-w-4xl">
        <details class="bg-white rounded-xl border border-slate-200 p-4 cursor-pointer">
          <summary class="font-bold text-sm text-brandNavy">Kapan batas akhir pengumuman RUP oleh Perangkat Daerah?</summary>
          <p class="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed pl-2 border-l-2 border-blue-500">
            Pengumuman RUP wajib dilakukan oleh PA/KPA paling lambat 31 Maret setiap tahun anggaran berjalan setelah penetapan APBD.
          </p>
        </details>

        <details class="bg-white rounded-xl border border-slate-200 p-4 cursor-pointer">
          <summary class="font-bold text-sm text-brandNavy">Syarat Pelaku Usaha Lokal tayang di E-Katalog Lokal Nagekeo?</summary>
          <p class="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed pl-2 border-l-2 border-blue-500">
            Memiliki NIB aktif, KBLI relevan, NPWP, dan akun SPSE yang telah terverifikasi. Tim E-MOLO siap mendampingi proses pendaftaran produk.
          </p>
        </details>

        <details class="bg-white rounded-xl border border-slate-200 p-4 cursor-pointer">
          <summary class="font-bold text-sm text-brandNavy">Apakah layanan konsultasi E-MOLO dipungut biaya?</summary>
          <p class="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed pl-2 border-l-2 border-emerald-500">
            Seluruh layanan konsultasi dan pendampingan PBJ melalui E-MOLO adalah 100% GRATIS dan bebas dari segala bentuk pungutan liar atau gratifikasi.
          </p>
        </details>
      </div>
    </div>
  </main>

  <!-- FOOTER -->
  <footer class="bg-brandNavy text-slate-300 py-10 border-t border-slate-800 text-xs">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center sm:text-left sm:flex sm:items-center sm:justify-between">
      <div>
        <p class="font-bold text-white text-sm">Bagian Pengadaan Barang dan Jasa (UKPBJ)</p>
        <p>Sekretariat Daerah Kabupaten Nagekeo, Kompleks Kantor Bupati, Mbay, NTT</p>
        <p class="text-slate-400 mt-1">Jam Operasional: Senin - Jumat, 08.00 - 15.00 WITA</p>
      </div>
      <div>
        <p>Hak Cipta: UKPBJ Kabupaten Nagekeo © 2026</p>
      </div>
    </div>
  </footer>

  <script>
    lucide.createIcons();
  </script>
</body>
</html>`;
}
