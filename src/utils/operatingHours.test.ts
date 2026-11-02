import test from 'node:test';
import assert from 'node:assert/strict';
import { getWitaStatus, buildWhatsAppUrl, filterFaqs, FaqItem } from './operatingHours.ts';

test('operating hours: detects open status during weekday work hours', () => {
  // Monday 2026-11-02 at 09:30 WITA (UTC+8 -> 01:30 UTC)
  const mondayMorningUTC = new Date('2026-11-02T01:30:00Z');
  const status = getWitaStatus(mondayMorningUTC);
  assert.equal(status.isOpen, true);
  assert.equal(status.currentDayName, 'Senin');
  assert.equal(status.currentTimeWITA, '09:30 WITA');
  assert.match(status.statusBadge, /Layanan Sedang Buka/);
});

test('operating hours: detects closed status after work hours on weekday', () => {
  // Wednesday 2026-11-04 at 16:15 WITA (UTC+8 -> 08:15 UTC)
  const wedAfternoonUTC = new Date('2026-11-04T08:15:00Z');
  const status = getWitaStatus(wedAfternoonUTC);
  assert.equal(status.isOpen, false);
  assert.equal(status.currentDayName, 'Rabu');
  assert.equal(status.currentTimeWITA, '16:15 WITA');
  assert.match(status.statusBadge, /Layanan Tutup/);
});

test('operating hours: detects weekend closed status', () => {
  // Sunday 2026-11-08 at 10:00 WITA (UTC+8 -> 02:00 UTC)
  const sundayUTC = new Date('2026-11-08T02:00:00Z');
  const status = getWitaStatus(sundayUTC);
  assert.equal(status.isOpen, false);
  assert.equal(status.currentDayName, 'Minggu');
  assert.match(status.statusBadge, /Akhir Pekan/);
});

test('buildWhatsAppUrl: generates clean prefilled wa.me link with encoded params', () => {
  const url = buildWhatsAppUrl('6281234567890', 'SiRUP', 'Budi Santoso', 'Dinas PUPR', 'Mohon reset akun PPK');
  assert.match(url, /^https:\/\/wa\.me\/6281234567890\?text=/);
  assert.ok(url.includes(encodeURIComponent('Budi Santoso')));
  assert.ok(url.includes(encodeURIComponent('Dinas PUPR')));
  assert.ok(url.includes(encodeURIComponent('SiRUP')));
});

test('filterFaqs: filters by category and search term correctly', () => {
  const mockFaqs: FaqItem[] = [
    {
      id: '1',
      category: 'SiRUP',
      question: 'Bagaimana cara input RUP Swakelola?',
      answer: 'Masuk ke sirup.lkpp.go.id dengan akun PA/KPA...',
      tags: ['swakelola', 'kpa', 'rup']
    },
    {
      id: '2',
      category: 'SPSE',
      question: 'Bagaimana cara ganti password akun Pokja?',
      answer: 'Gunakan fitur lupa password atau hubungi Helpdesk LPSE...',
      tags: ['password', 'lpse', 'pokja']
    },
    {
      id: '3',
      category: 'e-Katalog',
      question: 'Syarat pendaftaran etalase Katalog Elektronik Lokal Nagekeo?',
      answer: 'Pelaku usaha harus memiliki NIB dan KBLI sesuai...',
      tags: ['umkm', 'etalase', 'katalog']
    }
  ];

  // Test search query
  const queryResult = filterFaqs(mockFaqs, 'swakelola', 'Semua');
  assert.equal(queryResult.length, 1);
  assert.equal(queryResult[0].id, '1');

  // Test category filter
  const catResult = filterFaqs(mockFaqs, '', 'e-Katalog');
  assert.equal(catResult.length, 1);
  assert.equal(catResult[0].id, '3');

  // Test no match
  const none = filterFaqs(mockFaqs, 'xyz999', 'Semua');
  assert.equal(none.length, 0);
});
