// src/i18n/LanguageContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations, Language, TranslationDict } from './translations';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDict;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('id'); // Default to Indonesian

  const contextValue = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
