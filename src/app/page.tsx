'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Fitur', href: '#fitur' },
  { label: 'AI Scan', href: '#ai' },
  { label: 'Harga', href: '#harga' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Hapus Akun', href: '/delete-account' },
]

const FEATURES = [
  { icon: '📊', title: 'Dashboard Cerdas', desc: 'Visualisasi saldo, pemasukan, dan pengeluaran secara real-time dalam satu tampilan yang intuitif.' },
  { icon: '🤖', title: 'AI Scan Struk', desc: 'Foto struk belanja, AI langsung membaca dan mencatat transaksi otomatis. Mendukung Gemini, OpenAI, Groq, dan OpenRouter.' },
  { icon: '🏦', title: 'Multi Rekening', desc: 'Kelola semua rekening bank dan e-wallet dalam satu aplikasi. BCA, Mandiri, DANA, GoPay, dan lainnya.' },
  { icon: '📈', title: 'Analisis Keuangan', desc: 'Grafik pengeluaran per kategori, tren bulanan, dan insight cerdas untuk membantu keputusan keuanganmu.' },
  { icon: '☁️', title: 'Sync Google Drive', desc: 'Backup otomatis ke Google Drive. Data keuangan aman dan bisa diakses kapan saja.' },
  { icon: '🔒', title: 'Privasi Terjaga', desc: 'Data tersimpan lokal di HP kamu. Tidak ada server yang menyimpan data pribadi keuanganmu.' },
]

const AI_MODELS = [
  { provider: 'Google Gemini', icon: '✨', color: '#4285F4', models: ['Gemini Flash Latest', 'Gemini 2.0 Flash', 'Gemini 1.5 Flash', 'Gemini 2.5 Preview'] },
  { provider: 'OpenAI', icon: '🧠', color: '#10A37F', models: ['GPT-4o', 'GPT-4o Mini', 'GPT-4 Turbo'] },
  { provider: 'Groq', icon: '⚡', color: '#F55036', models: ['Llama 4 Scout 17B', 'Llama 3.2 90B Vision', 'Llama 3.2 11B'] },
  { provider: 'OpenRouter', icon: '🔀', color: '#8B5CF6', models: ['Claude 3.5 Haiku', 'Qwen 2.5 VL 72B', 'Llama 3.2 11B Vision'] },
]

const PRICING = [
  {
    plan: 'Free', price: 'Gratis', period: 'Selamanya', color: '#64748B',
    features: ['10 transaksi per hari', 'Maks 3 rekening', 'Dashboard & histori', 'Dark mode'],
    cta: 'Download Gratis', highlight: false,
  },
  {
    plan: 'Premium', price: 'Rp 15.000', period: '/bulan', color: '#3B82F6',
    features: ['50 transaksi per hari', 'Rekening tidak terbatas', 'AI Scan Struk', 'Sync Google Drive', 'Analisis keuangan AI', 'Prioritas support'],
    cta: 'Mulai Premium', highlight: true,
  },
]

const STATS = [
  { value: '4+', label: 'Provider AI', icon: '🤖' },
  { value: '15+', label: 'Model AI tersedia', icon: '✨' },
  { value: '10+', label: 'Bank & E-Wallet', icon: '🏦' },
  { value: '100%', label: 'Data Lokal & Aman', icon: '🔒' },
]

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false)
  const [activeAI, setActiveAI] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const t = setInterval(() => setActiveAI(p => (p + 1) % AI_MODELS.length), 3000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="min-h-screen mesh-bg relative">

      {/* ── Navbar ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass border-b border-white/5 py-3' : 'py-5'}`}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-brand-600 flex items-center justify-center text-lg glow-blue">💰</div>
            <span className="font-bold text-xl text-white">SaldoTrack</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(l => (
              <Link key={l.href} href={l.href} className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
                {l.label}
              </Link>
            ))}
          </div>
          <a href="#download" className="bg-brand-600 hover:bg-brand-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 hover:scale-105 glow-blue">
            Download App
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">

        {/* Background blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-700/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-700/15 rounded-full blur-3xl animate-pulse-slow delay-500 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 glass-blue rounded-full px-4 py-2 text-sm text-brand-400 font-medium mb-6">
              <span className="animate-pulse">●</span> Kini tersedia di Android
            </div>
            <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-6">
              Kelola Keuangan<br />
              <span className="text-gradient">Lebih Cerdas</span><br />
              Dengan AI
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
              SaldoTrack hadir untuk membantu kamu tracking pengeluaran, scan struk belanja otomatis dengan AI, dan menganalisis pola keuangan pribadi secara mendalam.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#download"
                className="flex items-center gap-3 bg-white text-slate-900 font-bold px-6 py-4 rounded-2xl hover:scale-105 transition-all duration-200 shadow-2xl">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76c.3.17.64.24.98.18l13.2-7.62-2.82-2.82-11.36 10.26zM.54 1.26C.2 1.6 0 2.12 0 2.78v18.44c0 .66.2 1.18.54 1.52l.08.08 10.34-10.34v-.24L.62 1.18l-.08.08zM21.26 10.22l-2.86-1.66-3.16 3.16 3.16 3.16 2.88-1.66c.82-.48.82-1.52-.02-2zM4.16.24L17.36 7.86l-2.82 2.82L3.18.42C3.52-.1 3.86-.14 4.16.24z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-70 leading-none">Download di</div>
                  <div className="text-sm font-bold leading-tight">Google Play</div>
                </div>
              </a>
              <a href="#fitur" className="glass border border-white/10 text-white font-semibold px-6 py-4 rounded-2xl hover:scale-105 transition-all duration-200 hover:border-brand-500/50">
                Lihat Fitur →
              </a>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              {STATS.map((s, i) => (
                <div key={i} className="glass rounded-xl p-4 flex items-center gap-3">
                  <span className="text-2xl">{s.icon}</span>
                  <div>
                    <div className="text-xl font-black text-gradient-blue">{s.value}</div>
                    <div className="text-xs text-slate-500">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Phone Mockup */}
          <div className="flex justify-center lg:justify-end animate-float">
            <div className="relative">
              <div className="w-72 h-[580px] bg-slate-900 rounded-[44px] border-4 border-slate-700 overflow-hidden phone-shadow relative">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-slate-900 rounded-b-3xl z-10" />
                {/* Screen content */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
                  {/* Status bar */}
                  <div className="flex justify-between items-center px-6 pt-12 pb-3 text-xs text-slate-400">
                    <span>9:41</span><span>●●●</span>
                  </div>
                  {/* Header */}
                  <div className="px-5 pb-4">
                    <p className="text-slate-400 text-xs">Selamat datang 👋</p>
                    <p className="text-white font-bold text-lg">SaldoTrack</p>
                  </div>
                  {/* Balance card */}
                  <div className="mx-4 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-5 mb-4">
                    <p className="text-blue-200 text-xs mb-1">Total Saldo</p>
                    <p className="text-white text-2xl font-black">Rp 12.450.000</p>
                    <div className="flex gap-4 mt-3">
                      <div>
                        <p className="text-blue-200 text-xs">Masuk</p>
                        <p className="text-emerald-300 text-sm font-bold">+Rp 7jt</p>
                      </div>
                      <div>
                        <p className="text-blue-200 text-xs">Keluar</p>
                        <p className="text-red-300 text-sm font-bold">-Rp 3.6jt</p>
                      </div>
                    </div>
                  </div>
                  {/* Accounts */}
                  <div className="px-4 mb-3">
                    <p className="text-slate-400 text-xs mb-2">Rekening Saya</p>
                    <div className="flex gap-2 overflow-x-hidden">
                      {[['🏦','Mandiri','#3B82F6'],['💳','DANA','#06B6D4'],['🟢','GoPay','#10B981']].map(([icon,name,c],i) => (
                        <div key={i} className="flex-shrink-0 glass rounded-xl p-2.5 border-l-2" style={{borderLeftColor: c}}>
                          <span className="text-base">{icon}</span>
                          <p className="text-white text-xs font-semibold mt-1">{name}</p>
                          <p className="text-slate-400 text-xs">4.2jt</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Transactions */}
                  <div className="mx-4 glass rounded-xl overflow-hidden">
                    {[['🍽️','Makan siang','Mandiri','−Rp 45rb','#F97316'],['💼','Gaji','BCA','+Rp 7jt','#10B981'],['🛍️','Belanja','DANA','−Rp 230rb','#F43F5E']].map(([icon,desc,acc,amt,c],i) => (
                      <div key={i} className="flex items-center gap-3 p-3 border-b border-white/5 last:border-0">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm" style={{background: c+'20'}}>{icon}</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white text-xs font-semibold truncate">{desc}</p>
                          <p className="text-slate-500 text-xs">{acc}</p>
                        </div>
                        <p className="text-xs font-bold" style={{color: c}}>{amt}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -right-4 top-20 glass-blue rounded-2xl p-3 animate-float-delay">
                <div className="text-2xl mb-1">🤖</div>
                <p className="text-blue-300 text-xs font-bold">AI Scan</p>
                <p className="text-slate-400 text-xs">Aktif</p>
              </div>
              <div className="absolute -left-4 bottom-32 glass rounded-2xl p-3 animate-float">
                <div className="text-2xl mb-1">☁️</div>
                <p className="text-slate-300 text-xs font-bold">Synced</p>
                <p className="text-slate-500 text-xs">Drive</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="fitur" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-brand-400 text-sm font-semibold tracking-widest uppercase mb-3">Fitur Unggulan</p>
            <h2 className="text-4xl lg:text-5xl font-black mb-4">
              Semua yang kamu butuhkan<br /><span className="text-gradient">dalam satu app</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Dirancang untuk memudahkan pengelolaan keuangan pribadi sehari-hari.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <div key={i} className="feature-card glass rounded-2xl p-6 cursor-default">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI Section ── */}
      <section id="ai" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-900/10 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-brand-400 text-sm font-semibold tracking-widest uppercase mb-3">Powered by AI</p>
              <h2 className="text-4xl lg:text-5xl font-black mb-6">
                Scan struk,<br /><span className="text-gradient">AI yang kerja</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Cukup foto struk belanja kamu. AI akan membaca, menganalisis, dan langsung mencatat transaksi secara otomatis — termasuk nama merchant, total, dan kategorinya.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                Ke depannya, SaldoTrack akan menganalisis pola pengeluaran kamu dan memberikan rekomendasi cerdas untuk membantu kamu mencapai tujuan keuangan.
              </p>
              {/* AI provider selector */}
              <div className="space-y-3">
                <p className="text-slate-500 text-sm font-semibold">Pilih model AI favoritmu:</p>
                <div className="grid grid-cols-2 gap-3">
                  {AI_MODELS.map((ai, i) => (
                    <button key={i} onClick={() => setActiveAI(i)}
                      className={`glass rounded-xl p-4 text-left transition-all duration-300 ${activeAI === i ? 'border-opacity-100' : 'border-transparent hover:border-white/10'}`}
                      style={activeAI === i ? { borderColor: ai.color, background: ai.color + '12' } : {}}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">{ai.icon}</span>
                        <span className="font-bold text-sm text-white">{ai.provider}</span>
                      </div>
                      <div className="space-y-1">
                        {ai.models.slice(0, 2).map((m, j) => (
                          <p key={j} className="text-xs text-slate-500">{m}</p>
                        ))}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Demo Visual */}
            <div className="flex justify-center">
              <div className="relative w-80">
                {/* Main card */}
                <div className="glass rounded-3xl p-6" style={{ borderColor: AI_MODELS[activeAI].color + '40' }}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{background: AI_MODELS[activeAI].color + '25'}}>
                      {AI_MODELS[activeAI].icon}
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">{AI_MODELS[activeAI].provider}</p>
                      <p className="text-slate-500 text-xs">Menganalisis struk...</p>
                    </div>
                    <div className="ml-auto flex gap-1">
                      {[0,1,2].map(i => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full animate-pulse" style={{background: AI_MODELS[activeAI].color, animationDelay: i*0.2+'s'}} />
                      ))}
                    </div>
                  </div>

                  {/* Receipt scan visual */}
                  <div className="bg-slate-800/60 rounded-xl p-4 mb-4 border border-white/5">
                    <div className="text-center text-slate-600 text-xs mb-3">📸 struk.jpg</div>
                    <div className="space-y-2">
                      {[['Merchant', 'Indomaret Batam'],['Tanggal','2025-03-16'],['Kategori','Belanja 🛍️'],['Total','Rp 54.500']].map(([k,v],i) => (
                        <div key={i} className="flex justify-between">
                          <span className="text-slate-500 text-xs">{k}</span>
                          <span className="text-white text-xs font-semibold">{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="flex-1 py-2 rounded-xl text-center text-xs font-bold text-white" style={{background: AI_MODELS[activeAI].color}}>
                      💾 Simpan Transaksi
                    </div>
                    <div className="glass rounded-xl px-3 flex items-center text-xs text-slate-400 cursor-pointer hover:text-white">
                      📷
                    </div>
                  </div>
                </div>

                {/* Confidence badge */}
                <div className="absolute -top-3 -right-3 glass-blue rounded-xl px-3 py-2">
                  <p className="text-emerald-400 text-xs font-bold">✅ Akurat</p>
                  <p className="text-slate-500 text-xs">confidence: high</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="harga" className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-brand-400 text-sm font-semibold tracking-widest uppercase mb-3">Harga</p>
            <h2 className="text-4xl lg:text-5xl font-black mb-4">
              Mulai <span className="text-gradient">gratis</span>, upgrade kapan saja
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {PRICING.map((p, i) => (
              <div key={i} className={`relative rounded-3xl p-8 ${p.highlight ? 'bg-gradient-to-b from-brand-600/20 to-brand-900/20 border-2 border-brand-500/50 glow-blue' : 'glass'}`}>
                {p.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                    ⭐ Populer
                  </div>
                )}
                <div className="mb-6">
                  <p className="text-slate-400 font-semibold mb-2">{p.plan}</p>
                  <div className="flex items-end gap-1">
                    <span className={`text-4xl font-black ${p.highlight ? 'text-white' : 'text-slate-300'}`}>{p.price}</span>
                    <span className="text-slate-500 text-sm mb-1">{p.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-slate-300">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 ${p.highlight ? 'bg-brand-500 text-white' : 'bg-slate-700 text-slate-400'}`}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#download"
                  className={`block text-center py-3.5 rounded-2xl font-bold transition-all duration-200 hover:scale-105 ${p.highlight ? 'bg-brand-600 text-white hover:bg-brand-500' : 'glass text-slate-300 hover:text-white border border-white/10'}`}>
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Download CTA ── */}
      <section id="download" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/30 via-brand-700/20 to-purple-900/20 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="text-6xl mb-6">💰</div>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Mulai tracking keuanganmu<br /><span className="text-gradient">hari ini, gratis</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Download SaldoTrack sekarang dan kendalikan keuangan pribadimu dengan teknologi AI terdepan.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://play.google.com/store/apps/details?id=com.SaldoTrack.app" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white text-slate-900 font-bold px-8 py-4 rounded-2xl hover:scale-105 transition-all duration-200 shadow-2xl hover:shadow-brand-500/20 group">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.3.17.64.24.98.18l13.2-7.62-2.82-2.82-11.36 10.26zM.54 1.26C.2 1.6 0 2.12 0 2.78v18.44c0 .66.2 1.18.54 1.52l.08.08 10.34-10.34v-.24L.62 1.18l-.08.08zM21.26 10.22l-2.86-1.66-3.16 3.16 3.16 3.16 2.88-1.66c.82-.48.82-1.52-.02-2zM4.16.24L17.36 7.86l-2.82 2.82L3.18.42C3.52-.1 3.86-.14 4.16.24z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-60 leading-none">Tersedia di</div>
                <div className="text-xl leading-tight group-hover:text-brand-600 transition-colors">Google Play</div>
              </div>
            </a>
          </div>
          <p className="text-slate-600 text-sm mt-6">Android 8.0+  ·  Gratis  ·  Tanpa iklan</p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/5 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
            <div className="max-w-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-xl bg-brand-600 flex items-center justify-center text-base">💰</div>
                <span className="font-bold text-lg text-white">SaldoTrack</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Aplikasi tracking keuangan pribadi berbasis AI untuk Android. Catat, analisis, dan kendalikan keuanganmu.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-12">
              <div>
                <p className="text-white font-semibold text-sm mb-4">Aplikasi</p>
                <ul className="space-y-3">
                  {['Fitur', 'AI Scan', 'Harga', 'Download'].map(l => (
                    <li key={l}><a href={`#${l.toLowerCase()}`} className="text-slate-500 text-sm hover:text-white transition-colors">{l}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-4">Legal</p>
                <ul className="space-y-3">
                  {[['Privacy Policy', '/privacy-policy'], ['Hapus Akun', '/delete-account'], ['Syarat Penggunaan', '/terms']].map(([l, h]) => (
                    <li key={l}><Link href={h} className="text-slate-500 text-sm hover:text-white transition-colors">{l}</Link></li>
                  ))}
                </ul>
              </div>
            </div>  
          </div>
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-sm">© 2025 SaldoTrack. All rights reserved.</p>
            <p className="text-slate-600 text-sm">Dibuat dengan ❤️ di Indonesia 🇮🇩</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
