'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  activeSection: number;
  onSelectSection: (index: number) => void;
  sections: { id: string; num: string; label: string }[];
}

export default function Navbar({ activeSection, onSelectSection, sections }: NavbarProps) {
  const { lang, setLang } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-8 flex items-center justify-between">
        {/* Identité */}
        <button
          type="button"
          onClick={() => onSelectSection(0)}
          className="text-left group flex items-center gap-3 focus:outline-none"
        >
          <span className="font-semibold text-sm tracking-tight text-zinc-100 group-hover:text-cyan-400 transition-colors">
            Côme Vermeulen
          </span>
          <span className="hidden sm:inline-block text-zinc-700">/</span>
          <span className="hidden sm:inline-block font-mono text-xs text-zinc-400">
            {lang === 'fr' ? 'Ingénierie Logicielle & Full-Stack' : 'Software & Full-Stack Engineering'}
          </span>
        </button>

        {/* Navigation centrale par chapitres */}
        <nav className="hidden lg:flex items-center gap-1">
          {sections.map((sec, idx) => {
            const isActive = activeSection === idx;
            return (
              <button
                key={sec.id}
                type="button"
                onClick={() => onSelectSection(idx)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-zinc-900 text-zinc-100 border border-zinc-800'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/40'
                }`}
              >
                <span className={`font-mono text-[10px] ${isActive ? 'text-cyan-400' : 'text-zinc-600'}`}>
                  {sec.num}
                </span>
                <span>{sec.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Langue & GitHub */}
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-md p-0.5 text-[11px] font-mono">
            <button
              type="button"
              onClick={() => setLang('fr')}
              className={`px-2 py-0.5 rounded transition-colors ${
                lang === 'fr' ? 'bg-zinc-100 text-zinc-950 font-semibold' : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              FR
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`px-2 py-0.5 rounded transition-colors ${
                lang === 'en' ? 'bg-zinc-100 text-zinc-950 font-semibold' : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              EN
            </button>
          </div>

          <a
            href="https://github.com/Meqle"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-zinc-100 border border-zinc-800 hover:border-zinc-700 bg-zinc-900/50 px-2.5 py-1 rounded-md transition-colors"
          >
            <span>GitHub</span>
            <span className="text-zinc-500">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}
