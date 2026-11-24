'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'fr' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'fr',
  setLang: () => {},
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('fr');

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang');
      if (urlLang === 'en' || urlLang === 'fr') {
        setLangState(urlLang);
        localStorage.setItem('portfolio_lang', urlLang);
        document.documentElement.lang = urlLang;
        return;
      }

      const saved = localStorage.getItem('portfolio_lang');
      if (saved === 'en' || saved === 'fr') {
        setLangState(saved);
        document.documentElement.lang = saved;
        return;
      }

      if (navigator.language && !navigator.language.toLowerCase().startsWith('fr')) {
        setLangState('en');
        document.documentElement.lang = 'en';
      }
    } catch {
      // Ignore storage errors in restricted environments
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem('portfolio_lang', newLang);
      document.documentElement.lang = newLang;
    } catch {
      // Ignore storage errors
    }
  };

  const toggleLang = () => {
    setLang(lang === 'fr' ? 'en' : 'fr');
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
