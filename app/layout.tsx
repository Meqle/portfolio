import './globals.css'
import React from 'react'
import { LanguageProvider } from './context/LanguageContext'

export const metadata = {
  title: 'Côme Vermeulen — Développeur Full-Stack & Logiciel',
  description:
    'Portfolio de Côme Vermeulen, étudiant en troisième année de BUT Informatique. Architectures TypeScript, Node.js, temps réel, SaaS et Docker.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="dark">
      <body className="bg-[#0b1120] text-slate-100 antialiased selection:bg-sky-500/25 selection:text-sky-200">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
