'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Locale, defaultLocale, getDirection } from '@/lib/i18n';
import { translations, TranslationKey } from '@/lib/translations';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey) => string;
  direction: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const direction = getDirection(locale);

  const t = (key: TranslationKey): string => {
    return translations[locale][key] || translations[defaultLocale][key] || key;
  };

  useEffect(() => {
    // Update document direction
    document.documentElement.dir = direction;
    document.documentElement.lang = locale;
  }, [locale, direction]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, direction }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}