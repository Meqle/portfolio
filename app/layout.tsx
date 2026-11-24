import './globals.css'
import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { LanguageProvider } from './context/LanguageContext'

export const metadata = {
  title: 'Portfolio — Côme Vermeulen | Full-Stack Developer (BUT 3)',
  description:
    'Portfolio de Côme Vermeulen, étudiant en BUT 3 Informatique (RACA) — Développeur Full-Stack & Backend (TypeScript, React, Next.js, Vue 3, Node.js, Docker, SQL/NoSQL). Recherche stage mars-juin 2027.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="bg-slate-900 antialiased flex flex-col min-h-screen">
        <LanguageProvider>
          <Navbar />

          <div className="pt-16 flex-grow flex flex-col">
            {children}
          </div>

          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
