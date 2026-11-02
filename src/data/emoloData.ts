/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FaqItem } from '../utils/operatingHours';

export interface PbjApp {
  id: string;
  name: string;
  shortName: string;
  description: string;
  url: string;
  badge: string;
  iconType: 'portal' | 'tender' | 'katalog' | 'sirup' | 'vendor' | 'toko';
}

export interface RegulationDoc {
  id: string;
  title: string;
  category: 'Perpres' | 'Peraturan LKPP' | 'SOP & Keputusan' | 'Standar Dokumen (SDP)' | 'Surat Edaran';
  number: string;
  year: string;
  description: string;
  fileSize: string;
  url: string;
}

export interface AnnouncementItem {
  id: string;
  title: string;
  tag: string;
  date: string;
  summary: string;
  steps?: { step: number; title: string; desc: string }[];
  highlightNotes?: string[];
  type: 'alur' | 'jadwal' | 'katalog' | 'integritas';
}

export interface HelpdeskAdmin {
  id: string;
  name: string;
  role: string;
  phone: string;
  whatsappNumber: string;
  focus: string;
  available: boolean;
}

export const PBJ_APPS: PbjApp[] = [
  {
    id: 'spse',
    name: 'SPSE Kab. Nagekeo',
    shortName: 'SPSE v4.5',
    description: 'Sistem Pengadaan Secara Elektronik untuk pelaksanaan Tender, Seleksi, dan Non-Tender Pemkab Nagekeo.',
    url: 'https://spse.nagekeokab.go.id/eproc4',
    badge: 'Layanan Utama',
    iconType: 'tender',
  },
  {
    id: 'ekatalog',
    name: 'E-Katalog V.6 Nasional & Lokal',
    shortName: 'E-Katalog V.6',
    description: 'Portal belanja elektronik pemerintah, komoditas etalase lokal Nagekeo, dan e-purchasing.',
    url: 'https://e-katalog.lkpp.go.id',
    badge: 'Katalog V.6',
    iconType: 'katalog',
  },
  {
    id: 'inaproc',
    name: 'INAPROC Portal Nasional',
    shortName: 'INAPROC',
    description: 'Pintu gerbang sistem informasi pengadaan barang/jasa publik nasional terintegrasi LKPP.',
    url: 'https://inaproc.id',
    badge: 'Portal Nasional',
    iconType: 'portal',
  },
  {
    id: 'sirup',
    name: 'SiRUP LKPP',
    shortName: 'SiRUP',
    description: 'Sistem Informasi Rencana Umum Pengadaan untuk pengumuman paket penyedia dan swakelola seluruh OPD.',
    url: 'https://sirup.lkpp.go.id',
    badge: 'Perencanaan',
    iconType: 'sirup',
  },
  {
    id: 'sikap',
    name: 'SIKaP LKPP',
    shortName: 'SIKaP',
    description: 'Sistem Informasi Kinerja Penyedia untuk kualifikasi data pelaku usaha terpusat nasional.',
    url: 'https://sikap.lkpp.go.id',
    badge: 'Profil Penyedia',
    iconType: 'vendor',
  },
  {
    id: 'bela',
    name: 'Bela Pengadaan / Toko Daring',
    shortName: 'Bela Pengadaan',
    description: 'Pemberdayaan UMK dan Koperasi lokal untuk belanja langsung kebutuhan dinas sampai dengan Rp50 juta.',
    url: 'https://tokodaring.lkpp.go.id',
    badge: 'UMKM & Toko Daring',
    iconType: 'toko',
  },
];

export const REGULATIONS: RegulationDoc[] = [
  {
    id: 'reg-1',
    category: 'Perpres',
    title: 'Pengadaan Barang/Jasa Pemerintah',
    number: 'Perpres No. 16 Tahun 2018 jo Perpres No. 12 Tahun 2021',
    year: '2021',
    description: 'Landasan hukum utama pengadaan barang/jasa pemerintah Republik Indonesia.',
    fileSize: '4.8 MB',
    url: 'https://drive.google.com/drive/folders/1-UKPBJ-Nagekeo-Regulasi-PBJ',
  },
  {
    id: 'reg-2',
    category: 'Peraturan LKPP',
    title: 'Pedoman Pelaksanaan Pengadaan Melalui Penyedia',
    number: 'Perlem LKPP No. 12 Tahun 2021',
    year: '2021',
    description: 'Petunjuk teknis pengadaan barang/jasa melalui tender, seleksi, e-purchasing, penunjukan langsung.',
    fileSize: '6.2 MB',
    url: 'https://drive.google.com/drive/folders/1-UKPBJ-Nagekeo-Regulasi-PBJ',
  },
  {
    id: 'reg-3',
    category: 'SOP & Keputusan',
    title: 'SOP Layanan Konsultasi & Pendampingan UKPBJ Kab. Nagekeo',
    number: 'SOP-UKPBJ-NGK/2024/01',
    year: '2024',
    description: 'Tata cara dan standar pelayanan konsultasi pengadaan barang/jasa pada UKPBJ Nagekeo.',
    fileSize: '1.4 MB',
    url: 'https://drive.google.com/drive/folders/1-UKPBJ-Nagekeo-Regulasi-PBJ',
  },
  {
    id: 'reg-4',
    category: 'Standar Dokumen (SDP)',
    title: 'Model Dokumen Pemilihan (MDP) Tender Pekerjaan Konstruksi & Konsultansi',
    number: 'Keputusan Deputi LKPP Terbaru',
    year: '2024',
    description: 'Standar dokumen pemilihan resmi untuk acuan Pokja dan Pejabat Pengadaan.',
    fileSize: '8.1 MB',
    url: 'https://drive.google.com/drive/folders/1-UKPBJ-Nagekeo-Regulasi-PBJ',
  },
  {
    id: 'reg-5',
    category: 'Peraturan LKPP',
    title: 'Penyelenggaraan Katalog Elektronik & Toko Daring',
    number: 'Perlem LKPP No. 9 Tahun 2021',
    year: '2021',
    description: 'Pedoman pengadaan barang/jasa melalui katalog elektronik nasional, sektoral, dan lokal.',
    fileSize: '3.1 MB',
    url: 'https://drive.google.com/drive/folders/1-UKPBJ-Nagekeo-Regulasi-PBJ',
  },
  {
    id: 'reg-6',
    category: 'Surat Edaran',
    title: 'Afirmasi Belanja Produk Dalam Negeri (PDN) & UMK-Koperasi Kabupaten Nagekeo',
    number: 'Surat Edaran Bupati Nagekeo No. 027/UKPBJ/2024',
    year: '2024',
    description: 'Kewajiban pengalokasian minimal 40% anggaran belanja pengadaan untuk produk lokal dan UMKM.',
    fileSize: '950 KB',
    url: 'https://drive.google.com/drive/folders/1-UKPBJ-Nagekeo-Regulasi-PBJ',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-sirup-1',
    category: 'SiRUP',
    question: 'Kapan batas akhir pengumuman RUP oleh Perangkat Daerah di Kabupaten Nagekeo?',
    answer: 'Pengumuman Rencana Umum Pengadaan (RUP) wajib dilakukan oleh Pengguna Anggaran (PA/KPA) paling lambat 31 Maret setiap tahun anggaran berjalan setelah penetapan APBD, serta dapat dilakukan perubahan (revisi RUP) sewaktu-waktu apabila terdapat perubahan anggaran atau DPA.',
    tags: ['sirup', 'batas waktu', 'pa/kpa', 'anggaran', 'apbd']
  },
  {
    id: 'faq-sirup-2',
    category: 'SiRUP',
    question: 'Bagaimana langkah revisi RUP jika terjadi pergeseran atau perubahan pagu paket?',
    answer: 'Admin RUP atau PPK dapat mengajukan Revisi Paket melalui akun SiRUP pada menu RUP -> Rencana Kerja -> Paket Terumumkan -> Klik ikon Batal/Revisi Paket. Pastikan alasan perubahan dijelaskan secara rinci sebelum disetujui oleh PA/KPA.',
    tags: ['revisi', 'perubahan pagu', 'batal paket', 'ppk']
  },
  {
    id: 'faq-spse-1',
    category: 'SPSE',
    question: 'Bagaimana prosedur pendaftaran atau verifikasi berkas bagi Penyedia baru di SPSE Kab. Nagekeo?',
    answer: 'Penyedia mendaftar secara mandiri melalui spse.nagekeokab.go.id -> Pendaftaran Penyedia. Setelah mengisi data dan verifikasi email, perwakilan perusahaan membawa dokumen fisik asli (KTP Direktur, Akta Pendirian, NIB, NPWP) ke Helpdesk LPSE/UKPBJ Kabupaten Nagekeo untuk proses verifikasi tatap muka atau konsultasi via E-MOLO.',
    tags: ['penyedia', 'daftar lpse', 'verifikasi berkas', 'dokumen']
  },
  {
    id: 'faq-spse-2',
    category: 'SPSE',
    question: 'Apa yang harus dilakukan jika muncul error "Sesi Berakhir" atau kendala upload dokumen penawaran di SPSE?',
    answer: 'Pastikan koneksi internet stabil dan gunakan browser modern (Chrome/Edge versi terkini) tanpa add-on pemblokir. Bersihkan cache browser (Ctrl + Shift + R). Jika kendala berlanjut pada masa sanggah atau batas penawaran, segera hubungi Helpdesk Teknis E-MOLO dengan menyertakan tangkapan layar (screenshot) error.',
    tags: ['error', 'upload penawaran', 'sesi', 'teknis']
  },
  {
    id: 'faq-katalog-1',
    category: 'e-Katalog',
    question: 'Apa saja syarat Pelaku Usaha Lokal (UMKM/Koperasi) untuk tayang di Katalog Elektronik Lokal Nagekeo?',
    answer: 'Syarat utama: 1) Memiliki NIB (Nomor Induk Berusaha) yang aktif dan KBLI yang relevan; 2) NPWP perusahaan/perorangan; 3) Akun SPSE yang sudah terverifikasi; 4) Memenuhi spesifikasi teknis etalase produk yang dibuka oleh Pemkab Nagekeo (makanan/minuman, alat tulis, seragam, jasa kebersihan, dll.). Tim E-MOLO siap memandu pendaftaran etalase dari awal.',
    tags: ['umkm', 'syarat etalase', 'nib', 'katalog lokal', 'pendaftaran']
  },
  {
    id: 'faq-katalog-2',
    category: 'e-Katalog',
    question: 'Bagaimana mekanisme Mini-Kompetisi pada E-Katalog V.6?',
    answer: 'Pada E-Katalog V.6, PPK/Pejabat Pengadaan dapat memanfaatkan fitur Mini-Kompetisi untuk mengundang 2 atau lebih penyedia yang memiliki produk sejenis agar memberikan penawaran harga terbaik dalam batas waktu yang ditentukan sistem.',
    tags: ['mini-kompetisi', 'katalog v6', 'ppk', 'harga terbaik']
  },
  {
    id: 'faq-reg-1',
    category: 'Regulasi & Prosedur',
    question: 'Apakah PPK wajib melakukan Reviu Dokumen Persiapan Pengadaan bersama Pokja Pemilihan?',
    answer: 'Ya, sesuai Perlem LKPP No. 12 Tahun 2021, sebelum proses pemilihan dimulai, Pokja Pemilihan bersama PPK wajib melaksanakan Reviu Dokumen Persiapan Pengadaan untuk memastikan kesesuaian HPS, Spesifikasi Teknis/KAK, Rancangan Kontrak, dan ketersediaan anggaran.',
    tags: ['reviu', 'ppk', 'pokja', 'hps', 'kak', 'kontrak']
  },
  {
    id: 'faq-reg-2',
    category: 'Regulasi & Prosedur',
    question: 'Bagaimana penanganan paket pekerjaan konstruksi yang mengalami keterlambatan?',
    answer: 'PPK bersama Konsultan Pengawas dan Penyedia wajib mengadakan Show Cause Meeting (SCM) tahap I, II, dan III sesuai klausul kontrak, membuat uji coba (test case), dan menerapkan sanksi denda keterlambatan 1/1000 per hari keterlambatan sesuai Perpres PBJ.',
    tags: ['konstruksi', 'scm', 'keterlambatan', 'denda', 'kontrak']
  },
  {
    id: 'faq-umum-1',
    category: 'Umum',
    question: 'Apakah konsultasi pengadaan barang/jasa melalui E-MOLO dipungut biaya?',
    answer: 'Seluruh layanan konsultasi, pendampingan teknis, dan verifikasi akun di UKPBJ Kabupaten Nagekeo melalui platform E-MOLO adalah 100% GRATIS (Bebas Pungutan Liar dan Gratifikasi). Jangan ragu melapor jika menemukan indikasi pungli.',
    tags: ['biaya', 'gratis', 'anti-pungli', 'integritas']
  },
];

export const ANNOUNCEMENTS: AnnouncementItem[] = [
  {
    id: 'ann-1',
    title: 'Alur Resmi Layanan Konsultasi Online E-MOLO',
    tag: 'Standar Pelayanan',
    date: 'Tahun Anggaran 2026',
    summary: 'Konsultasi cepat, terdokumentasi, dan transparan bagi seluruh Perangkat Daerah dan Penyedia Barang/Jasa.',
    type: 'alur',
    steps: [
      { step: 1, title: 'Pilih Saluran & Topik', desc: 'Tentukan kebutuhan: SiRUP, LPSE SPSE, E-Katalog Lokal, atau Telaah Regulasi.' },
      { step: 2, title: 'Kirim Identitas & Pertanyaan', desc: 'Sertakan nama, instansi/badan usaha, dan uraian kendala melalui formulir cepat WhatsApp.' },
      { step: 3, title: 'Pembahasan dengan Tim Teknis', desc: 'Admin atau Jabatan Fungsional PBJ UKPBJ Nagekeo memverifikasi dan memberikan telaah teknis.' },
      { step: 4, title: 'Solusi & Rekomendasi Tertulis', desc: 'Pemohon menerima rekomendasi prosedural yang sesuai dengan regulasi PBJ yang berlaku.' },
    ],
  },
  {
    id: 'ann-2',
    title: 'Jam Kerja & Standar Respons Pelayanan E-MOLO',
    tag: 'Jam Operasional',
    date: 'Senin - Jumat | 08.00 - 15.00 WITA',
    summary: 'Layanan konsultasi interaktif aktif setiap hari kerja. Pesan di luar jam kerja tetap tersimpan dan dijawab pada hari kerja berikutnya.',
    type: 'jadwal',
    highlightNotes: [
      'Senin s/d Kamis: 08.00 - 12.00 WITA (Sesi Pagi) & 13.00 - 15.00 WITA (Sesi Siang)',
      'Jumat: 08.00 - 11.30 WITA & 13.30 - 15.00 WITA',
      'Sabtu, Minggu & Hari Libur Nasional: Layanan Helpdesk Offline (Antrean Terjadwal)',
      'Saluran Pengaduan Whistleblowing tetap dapat diakses 24 jam nonstop',
    ],
  },
  {
    id: 'ann-3',
    title: 'Pemberdayaan Pelaku Usaha Lokal dalam E-Katalog V.6',
    tag: 'Afirmasi UMKM',
    date: 'Prioritas Pemkab Nagekeo',
    summary: 'UKPBJ Nagekeo membuka pendampingan pendaftaran etalase lokal untuk UMKM, Koperasi, dan Penyedia Jasa Kabupaten Nagekeo.',
    type: 'katalog',
    highlightNotes: [
      'Etalase Makanan & Minuman Rapat Dinas Pemkab Nagekeo',
      'Etalase Alat Tulis Kantor (ATK) & Percetakan',
      'Etalase Jasa Tenaga Keamanan & Kebersihan',
      'Etalase Bahan Material Konstruksi & Pemeliharaan Jalan',
    ],
  },
  {
    id: 'ann-4',
    title: 'Maklumat Pelayanan & Komitmen Zona Integritas UKPBJ',
    tag: 'Anti Gratifikasi',
    date: 'Komitmen Bersama',
    summary: 'UKPBJ Kabupaten Nagekeo berkomitmen mewujudkan Wilayah Bebas dari Korupsi (WBK) dengan pelayanan berintegritas.',
    type: 'integritas',
    highlightNotes: [
      'Tidak menerima imbalan, hadiah, atau bentuk gratifikasi apa pun',
      'Objektif, transparan, dan akuntabel dalam setiap proses pemilihan penyedia',
      'Kerahasiaan data penawaran dan dokumen rahasia terjamin sesuai regulasi',
    ],
  },
];

export const HELPDESK_ADMINS: HelpdeskAdmin[] = [
  {
    id: 'admin-1',
    name: 'Helpdesk SiRUP & Perencanaan',
    role: 'Pengelolaan Akun PA/KPA/PPK & Input RUP',
    phone: '0812-3900-2026',
    whatsappNumber: '6281239002026',
    focus: 'SiRUP, DPA Perubahan, Akun Admin OPD',
    available: true,
  },
  {
    id: 'admin-2',
    name: 'Helpdesk LPSE & SPSE Nagekeo',
    role: 'Verifikasi Berkas Penyedia & Kendala Sistem',
    phone: '0812-3900-2027',
    whatsappNumber: '6281239002027',
    focus: 'Registrasi Akun, Reset Password, Tender SPSE',
    available: true,
  },
  {
    id: 'admin-3',
    name: 'Helpdesk E-Katalog & Toko Daring',
    role: 'Pendampingan Etalase Lokal & E-Purchasing',
    phone: '0812-3900-2028',
    whatsappNumber: '6281239002028',
    focus: 'E-Katalog V.6, Mini-Kompetisi, Pendaftaran UMKM',
    available: true,
  },
  {
    id: 'admin-4',
    name: 'Helpdesk Advokasi & Layanan Pengaduan',
    role: 'Konsultasi Hukum PBJ & Saluran Aspirasi',
    phone: '0812-3900-2029',
    whatsappNumber: '6281239002029',
    focus: 'Telaah Kontrak, Pengaduan, Prosedur Sanggah',
    available: true,
  },
];

export const GOOGLE_FORM_PENGADUAN_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSc_ExamplePengaduanUKPBJNagekeo/viewform';
export const GOOGLE_DRIVE_REGULASI_URL = 'https://drive.google.com/drive/folders/1-UKPBJ-Nagekeo-Regulasi-PBJ';
export const DEFAULT_WHATSAPP_NUMBER = '6281239002026';
export const DEFAULT_HOTLINE_DISPLAY = '+62 812-3900-2026';
