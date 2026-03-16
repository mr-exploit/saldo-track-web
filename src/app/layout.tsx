import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SaldoTrack — Kelola Keuangan Pribadi dengan AI',
  description: 'SaldoTrack adalah aplikasi tracking keuangan pribadi berbasis AI. Scan struk belanja otomatis, analisis pengeluaran cerdas, dan kelola multi rekening dengan mudah.',
  keywords: 'keuangan pribadi, tracking transaksi, AI scan struk, budgeting, saldo track',
  openGraph: {
    title: 'SaldoTrack — Kelola Keuangan Pribadi dengan AI',
    description: 'Tracking keuangan cerdas berbasis AI. Scan struk, analisis otomatis, kelola rekening.',
    type: 'website',
    url: 'https://saldotrack.app',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="noise">{children}</body>
    </html>
  )
}
