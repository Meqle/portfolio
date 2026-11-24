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
      <body className="bg-zinc-950 text-zinc-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
