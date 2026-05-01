import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — SaldoTrack',
  description: 'Kebijakan Privasi SaldoTrack. Pelajari bagaimana kami mengumpulkan, menggunakan, dan melindungi data kamu.',
}

const SECTIONS = [
  {
    title: '1. Informasi yang Kami Kumpulkan',
    content: [
      {
        subtitle: '1.1 Data yang Kamu Berikan',
        items: [
          'Nama dan alamat email saat login menggunakan Google atau Apple',
          'Nomor telepon (opsional, untuk profil)',
          'Data transaksi keuangan yang kamu masukkan secara manual',
          'Foto struk belanja yang kamu kirim untuk analisis AI',
          'Preferensi pengaturan aplikasi (dark mode, provider AI, dll)',
        ]
      },
      {
        subtitle: '1.2 Data yang Dikumpulkan Otomatis',
        items: [
          'Tidak ada data analitik yang dikumpulkan secara otomatis',
          'SaldoTrack tidak menggunakan cookies pihak ketiga',
          'Tidak ada pelacakan perilaku pengguna',
        ]
      }
    ]
  },
  {
    title: '2. Bagaimana Kami Menggunakan Data',
    content: [
      {
        subtitle: '2.1 Penyimpanan Lokal',
        items: [
          'Seluruh data keuangan (transaksi, rekening, kategori) disimpan HANYA di perangkat kamu menggunakan SQLite lokal',
          'Kami tidak memiliki akses ke data keuangan kamu',
          'Data tidak pernah dikirim ke server kami tanpa persetujuan eksplisit kamu',
        ]
      },
      {
        subtitle: '2.2 Sinkronisasi Google Drive (Opsional, Premium)',
        items: [
          'Jika kamu mengaktifkan fitur sync, backup akan diunggah ke akun Google Drive MILIKMU sendiri',
          'Kami tidak menyimpan salinan backup tersebut di server kami',
          'Kamu dapat menghapus file backup kapan saja langsung dari Google Drive',
        ]
      },
      {
        subtitle: '2.3 AI Scan Struk (Opsional, Premium)',
        items: [
          'Foto struk yang kamu kirim akan diteruskan ke provider AI pilihanmu (Google Gemini, OpenAI, Groq, atau OpenRouter)',
          'Foto dikompres dan dikirim langsung dari perangkat ke API provider tersebut',
          'Kami tidak menyimpan foto struk kamu di server kami',
          'Penggunaan data oleh provider AI tunduk pada kebijakan privasi masing-masing provider',
        ]
      }
    ]
  },
  {
    title: '3. Autentikasi Login',
    content: [
      {
        subtitle: '3.1 Google Sign-In',
        items: [
          'Kami menggunakan OAuth 2.0 Google yang aman',
          'SaldoTrack hanya meminta akses ke: profil dasar (nama, email, foto), dan Google Drive (khusus folder app untuk fitur sync)',
          'Kami tidak dapat mengakses Gmail, kontak, kalender, atau data Google lainnya',
          'Token akses Google hanya disimpan lokal di perangkat kamu',
        ]
      },
      {
        subtitle: '3.2 Apple Sign-In',
        items: [
          'Login Apple menggunakan sistem autentikasi resmi dari Apple',
          'Kamu dapat memilih untuk menyembunyikan alamat email asli dari kami',
          'Kami hanya menyimpan identifier unik yang diberikan Apple untuk mengenali akunmu',
        ]
      }
    ]
  },
  {
    title: '4. Berbagi Data dengan Pihak Ketiga',
    content: [
      {
        subtitle: '',
        items: [
          'SaldoTrack TIDAK menjual data kamu kepada siapapun',
          'SaldoTrack TIDAK berbagi data kamu dengan pengiklan',
          'Data hanya diteruskan ke provider AI yang kamu pilih secara aktif untuk fitur AI Scan',
          'Data dibagikan ke Google Drive hanya jika kamu mengaktifkan fitur sync',
          'Kami dapat mengungkapkan data jika diwajibkan oleh hukum yang berlaku',
        ]
      }
    ]
  },
  {
    title: '5. Keamanan Data',
    content: [
      {
        subtitle: '',
        items: [
          'Data keuangan disimpan di database SQLite yang terenkripsi di perangkatmu',
          'API Key provider AI disimpan secara aman di storage lokal perangkat',
          'Komunikasi dengan layanan eksternal menggunakan HTTPS/TLS',
          'Kami menerapkan praktik keamanan terbaik dalam pengembangan aplikasi',
          'Namun, tidak ada sistem yang 100% aman. Kami menyarankan kamu menggunakan kata sandi perangkat yang kuat',
        ]
      }
    ]
  },
  {
    title: '6. Hak Kamu atas Data',
    content: [
      {
        subtitle: '',
        items: [
          'Hak Akses: Kamu dapat melihat semua data melalui aplikasi kapan saja',
          'Hak Hapus: Logout dari aplikasi akan menghapus semua data lokal di perangkatmu',
          'Hak Ekspor: Gunakan fitur Sync Drive untuk mendapatkan salinan datamu dalam format JSON',
          'Hak Koreksi: Kamu dapat mengedit atau menghapus transaksi kapan saja',
          'Hak Portabilitas: Data tersimpan dalam format standar yang dapat diakses',
        ]
      }
    ]
  },
  {
    title: '7. Retensi Data',
    content: [
      {
        subtitle: '',
        items: [
          'Data lokal di perangkat: disimpan sampai kamu logout atau menghapus aplikasi',
          'Data di Google Drive: disimpan sampai kamu menghapusnya sendiri dari Drive',
          'Data akun (nama, email): dihapus dari perangkat saat logout',
          'Log analisis AI: tidak disimpan oleh kami (bergantung pada kebijakan provider AI)',
        ]
      }
    ]
  },
  {
    title: '8. Anak di Bawah Umur',
    content: [
      {
        subtitle: '',
        items: [
          'SaldoTrack tidak ditujukan untuk pengguna di bawah usia 13 tahun',
          'Kami tidak dengan sengaja mengumpulkan data dari anak di bawah umur',
          'Jika Anda adalah orang tua dan mengetahui anak Anda menggunakan aplikasi ini, silakan hubungi kami',
        ]
      }
    ]
  },
  {
    title: '9. Perubahan Kebijakan Privasi',
    content: [
      {
        subtitle: '',
        items: [
          'Kami dapat memperbarui kebijakan privasi ini sewaktu-waktu',
          'Perubahan signifikan akan dinotifikasikan melalui pembaruan aplikasi',
          'Tanggal "Terakhir diperbarui" di bagian atas dokumen ini akan selalu diperbarui',
          'Penggunaan berkelanjutan setelah perubahan berarti kamu menyetujui kebijakan baru',
        ]
      }
    ]
  },
  {
    title: '10. Hubungi Kami',
    content: [
      {
        subtitle: '',
        items: [
          'Jika kamu memiliki pertanyaan tentang kebijakan privasi ini, silakan hubungi kami:',
          'Email: privacy@saldotrack.app',
          'Website: https://saldotrack.app',
          'Kami berkomitmen untuk merespons pertanyaan dalam 3 hari kerja',
        ]
      }
    ]
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen mesh-bg">
      {/* Navbar */}
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

      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 pt-16 pb-10">
        <div className="inline-flex items-center gap-2 glass-blue rounded-full px-4 py-2 text-sm text-brand-400 font-medium mb-6">
          🔒 Legal Document
        </div>
        <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
          Kebijakan Privasi
        </h1>
        <p className="text-slate-400 text-lg mb-4">
          Kami berkomitmen untuk melindungi privasi dan keamanan data kamu.
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-slate-500">
          <span>📅 Terakhir diperbarui: 16 Maret 2025</span>
          <span>·</span>
          <span>🏢 SaldoTrack App</span>
          <span>·</span>
          <span>📱 Versi Aplikasi: 1.0.0</span>
        </div>
      </div>

      {/* Important notice */}
      <div className="max-w-4xl mx-auto px-6 mb-10">
        <div className="glass-blue rounded-2xl p-6 border border-brand-500/20">
          <div className="flex gap-4">
            <span className="text-2xl flex-shrink-0">💡</span>
            <div>
              <p className="text-white font-bold mb-2">Ringkasan Penting</p>
              <ul className="text-slate-300 text-sm space-y-1.5">
                <li>✅ Data keuanganmu tersimpan <strong>lokal di HP kamu</strong>, bukan di server kami</li>
                <li>✅ Kami <strong>tidak menjual data</strong> kamu ke siapapun</li>
                <li>✅ Foto struk dikirim langsung ke <strong>provider AI pilihanmu</strong>, bukan ke kami</li>
                <li>✅ Sync Drive menyimpan ke <strong>akun Drive milikmu sendiri</strong></li>
                <li>✅ Kamu bisa <strong>menghapus semua data</strong> dengan logout</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Table of contents */}
      <div className="max-w-4xl mx-auto px-6 mb-10">
        <div className="glass rounded-2xl p-6">
          <p className="text-white font-bold mb-4">Daftar Isi</p>
          <div className="grid md:grid-cols-2 gap-2">
            {SECTIONS.map((s, i) => (
              <a key={i} href={`#section-${i}`}
                className="text-slate-400 hover:text-brand-400 text-sm transition-colors py-1 flex items-center gap-2">
                <span className="text-brand-500 text-xs w-5 flex-shrink-0">{i + 1}.</span>
                {s.title.replace(/^\d+\.\s/, '')}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 pb-24">
        <div className="space-y-8">
          {SECTIONS.map((section, si) => (
            <div key={si} id={`section-${si}`} className="glass rounded-2xl p-8 scroll-mt-24">
              <h2 className="text-xl font-black text-white mb-6 pb-3 border-b border-white/5">
                {section.title}
              </h2>
              {section.content.map((block, bi) => (
                <div key={bi} className="mb-5 last:mb-0">
                  {block.subtitle && (
                    <h3 className="text-brand-400 font-semibold text-sm mb-3">{block.subtitle}</h3>
                  )}
                  <ul className="space-y-2.5">
                    {block.items.map((item, ii) => (
                      <li key={ii} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                        <span className="text-brand-500 flex-shrink-0 mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center glass rounded-2xl p-10">
          <div className="text-4xl mb-4">🔒</div>
          <h3 className="text-white text-2xl font-black mb-3">Privasi adalah Hak Kamu</h3>
          <p className="text-slate-400 mb-6 max-w-md mx-auto text-sm leading-relaxed">
            Kami membangun SaldoTrack dengan prinsip privacy-first. Data keuangan adalah hal yang sangat pribadi, dan kami menjaga kepercayaan kamu.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="bg-brand-600 hover:bg-brand-500 text-white font-bold px-6 py-3 rounded-xl transition-all hover:scale-105">
              Kembali ke Beranda
            </Link>
            <a href="mailto:privacy@saldotrack.app" className="glass border border-white/10 text-slate-300 hover:text-white font-semibold px-6 py-3 rounded-xl transition-all hover:scale-105">
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">© 2025 SaldoTrack. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/" className="text-slate-600 hover:text-slate-400 text-sm transition-colors">Beranda</Link>
            <Link href="/privacy-policy" className="text-brand-400 text-sm">Privacy Policy</Link>
            <Link href="/delete-account" className="text-slate-600 hover:text-slate-400 text-sm transition-colors">Hapus Akun</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
