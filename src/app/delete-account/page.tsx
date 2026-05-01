import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hapus Akun — SaldoTrack',
  description: 'Panduan resmi untuk menghapus akun SaldoTrack, data yang dihapus, dan periode retensi data.',
}

const OPTIONS = [
  {
    title: 'Opsi 1 — Buat halaman web pendukung (Paling umum)',
    items: [
      'Buat halaman sederhana di website/landing page yang menjelaskan langkah hapus akun lewat aplikasi.',
      'Jelaskan data apa saja yang dihapus.',
      'Cantumkan periode retensi data setelah penghapusan.',
    ],
  },
  {
    title: 'Opsi 2 — Gunakan Google Form / Typeform',
    items: [
      'Buat form request penghapusan akun bagi user yang tidak bisa akses app.',
      'Gunakan URL form tersebut di Play Console.',
    ],
  },
  {
    title: 'Opsi 3 — Gunakan halaman gratis (GitHub Pages / Notion / Carrd)',
    items: [
      'Jika belum punya website, gunakan halaman gratis seperti GitHub Pages atau Notion.',
      'Pastikan halaman dapat diakses publik.',
    ],
  },
]

const REQUIRED_INFO = [
  'Nama app/developer tertera dan sesuai Play Store',
  'Langkah-langkah hapus akun (via in-app)',
  'Data apa yang dihapus (misal: profil, email, riwayat)',
  'Periode retensi data (misal: dihapus dalam 30 hari)',
]

const IN_APP_STEPS = [
  'Buka aplikasi SaldoTrack',
  'Masuk ke Pengaturan → Hapus Akun',
  'Konfirmasi penghapusan akun',
]

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen mesh-bg">
      <nav className="glass border-b border-white/5 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-xl bg-brand-600 flex items-center justify-center text-base">💰</div>
            <span className="font-bold text-white">SaldoTrack</span>
          </Link>
          <Link href="/" className="text-slate-400 hover:text-white text-sm transition-colors">
            ← Kembali ke Beranda
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 pt-16 pb-10">
        <div className="inline-flex items-center gap-2 glass-blue rounded-full px-4 py-2 text-sm text-brand-400 font-medium mb-6">
          🧾 Account Deletion
        </div>
        <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
          Penghapusan Akun SaldoTrack
        </h1>
        <p className="text-slate-400 text-lg mb-4">
          Google Play tetap mewajibkan URL halaman penghapusan akun meskipun fitur delete account tersedia di aplikasi.
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-slate-500">
          <span>📅 Terakhir diperbarui: 01 Mei 2026</span>
          <span>·</span>
          <span>🏢 SaldoTrack App</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-24 space-y-8">
        <div className="glass-blue rounded-2xl p-6 border border-brand-500/20">
          <div className="flex gap-4">
            <span className="text-2xl flex-shrink-0">⚠️</span>
            <div>
              <p className="text-white font-bold mb-2">Penting</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Google tidak menerima kolom URL yang kosong. Fitur hapus akun boleh ada di dalam app,
                tapi tetap harus ada URL halaman web yang menjelaskan prosesnya.
              </p>
            </div>
          </div>
        </div>

        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-black text-white mb-6 pb-3 border-b border-white/5">
            Cara Hapus Akun di Aplikasi
          </h2>
          <ul className="space-y-2.5">
            {IN_APP_STEPS.map((step, i) => (
              <li key={i} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                <span className="text-brand-500 flex-shrink-0 mt-0.5">•</span>
                {step}
              </li>
            ))}
          </ul>
        </div>

        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-black text-white mb-6 pb-3 border-b border-white/5">
            Opsi yang Bisa Dipilih
          </h2>
          <div className="space-y-6">
            {OPTIONS.map((option, i) => (
              <div key={i}>
                <h3 className="text-brand-400 font-semibold text-sm mb-3">{option.title}</h3>
                <ul className="space-y-2.5">
                  {option.items.map((item, j) => (
                    <li key={j} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                      <span className="text-brand-500 flex-shrink-0 mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-black text-white mb-6 pb-3 border-b border-white/5">
            Informasi yang Harus Ada di Halaman
          </h2>
          <ul className="space-y-2.5">
            {REQUIRED_INFO.map((item, i) => (
              <li key={i} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                <span className="text-brand-500 flex-shrink-0 mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-black text-white mb-6 pb-3 border-b border-white/5">
            Template Teks (Contoh)
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            &quot;Untuk menghapus akun, buka aplikasi → Pengaturan → Hapus Akun. Semua data akan dihapus permanen
            dalam 30 hari. Data yang dihapus mencakup profil, email, dan riwayat transaksi.&quot;
          </p>
        </div>

        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-black text-white mb-6 pb-3 border-b border-white/5">
            Data yang Dihapus & Retensi
          </h2>
          <ul className="space-y-2.5">
            <li className="flex gap-3 text-slate-300 text-sm leading-relaxed">
              <span className="text-brand-500 flex-shrink-0 mt-0.5">•</span>
              Profil akun (nama, email) dihapus permanen
            </li>
            <li className="flex gap-3 text-slate-300 text-sm leading-relaxed">
              <span className="text-brand-500 flex-shrink-0 mt-0.5">•</span>
              Data transaksi dan preferensi dihapus dari perangkat
            </li>
            <li className="flex gap-3 text-slate-300 text-sm leading-relaxed">
              <span className="text-brand-500 flex-shrink-0 mt-0.5">•</span>
              Retensi data maksimal 30 hari setelah permintaan
            </li>
          </ul>
        </div>
      </div>

      <footer className="border-t border-white/5 py-8">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">© 2025 SaldoTrack. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/" className="text-slate-600 hover:text-slate-400 text-sm transition-colors">Beranda</Link>
            <Link href="/privacy-policy" className="text-slate-600 hover:text-slate-400 text-sm transition-colors">Privacy Policy</Link>
            <Link href="/delete-account" className="text-brand-400 text-sm">Hapus Akun</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}