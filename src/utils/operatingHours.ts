/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface OperatingStatus {
  isOpen: boolean;
  statusBadge: string;
  detail: string;
  currentTimeWITA: string;
  currentDayName: string;
}

export interface FaqItem {
  id: string;
  category: 'SiRUP' | 'SPSE' | 'e-Katalog' | 'Regulasi & Prosedur' | 'Umum';
  question: string;
  answer: string;
  tags: string[];
}

/**
 * Calculates current time in WITA (UTC+8) and checks if E-MOLO helpdesk is active
 * Operating hours: Senin - Jumat, 08:00 - 15:00 WITA
 */
export function getWitaStatus(testDate?: Date): OperatingStatus {
  const now = testDate || new Date();
  
  // Calculate WITA (UTC+8)
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const witaTime = new Date(utc + 3600000 * 8);

  const dayOfWeek = witaTime.getDay(); // 0 is Sunday, 1 is Monday, ..., 6 is Saturday
  const hours = witaTime.getHours();
  const minutes = witaTime.getMinutes();

  const dayNames = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const dayName = dayNames[dayOfWeek];

  const pad = (n: number) => n.toString().padStart(2, '0');
  const timeFormatted = `${pad(hours)}:${pad(minutes)} WITA`;

  const isWeekday = dayOfWeek >= 1 && dayOfWeek <= 5;
  const totalMinutes = hours * 60 + minutes;
  const openMinutes = 8 * 60; // 08:00
  const closeMinutes = 15 * 60; // 15:00

  const isOpen = isWeekday && totalMinutes >= openMinutes && totalMinutes < closeMinutes;

  let statusBadge = '';
  let detail = '';

  if (isOpen) {
    statusBadge = 'Layanan Sedang Buka';
    detail = `Petugas aktif melayani (Tutup pukul 15.00 WITA)`;
  } else if (!isWeekday) {
    statusBadge = 'Layanan Tutup (Akhir Pekan)';
    detail = 'Buka kembali Senin pukul 08.00 WITA. Pesan Anda tetap dapat dikirimkan dan akan direspons saat jam kerja.';
  } else if (totalMinutes < openMinutes) {
    statusBadge = 'Layanan Belum Buka';
    detail = 'Buka hari ini pukul 08.00 WITA.';
  } else {
    statusBadge = 'Layanan Tutup';
    detail = 'Buka kembali besok pukul 08.00 WITA. Pesan via WhatsApp tetap diterima untuk antrean besok.';
  }

  return {
    isOpen,
    statusBadge,
    detail,
    currentTimeWITA: timeFormatted,
    currentDayName: dayName,
  };
}

/**
 * Builds formatted WhatsApp deep-link with pre-filled message
 */
export function buildWhatsAppUrl(
  phone: string,
  topic: string,
  nama: string,
  instansi: string,
  pesan: string
): string {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const greeting = 'Halo Admin E-MOLO UKPBJ Kabupaten Nagekeo, saya ingin berkonsultasi mengenai Pengadaan Barang/Jasa:';
  
  const text = `${greeting}
  
*Nama:* ${nama || '-'}
*Instansi / Vendor:* ${instansi || '-'}
*Topik:* ${topic || 'Konsultasi Umum'}
*Pesan / Kendala:*
${pesan || '(Belum diisi)'}

Mohon arahan dan petunjuk teknis. Terima kasih.`;

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}

/**
 * Filters FAQ based on category and search query
 */
export function filterFaqs(faqs: FaqItem[], query: string, category: string): FaqItem[] {
  const normalizedQuery = query.trim().toLowerCase();
  
  return faqs.filter(faq => {
    const matchCategory = category === 'Semua' || faq.category === category;
    if (!matchCategory) return false;

    if (!normalizedQuery) return true;

    return (
      faq.question.toLowerCase().includes(normalizedQuery) ||
      faq.answer.toLowerCase().includes(normalizedQuery) ||
      faq.tags.some(tag => tag.toLowerCase().includes(normalizedQuery))
    );
  });
}
