'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import koTranslations from '@/locales/ko.json';
import enTranslations from '@/locales/en.json';

export type Language = 'ko' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

type TranslationValue =
  | string
  | number
  | boolean
  | TranslationValue[]
  | { [key: string]: TranslationValue };

const translations: Record<Language, Record<string, TranslationValue>> = {
  ko: koTranslations,
  en: enTranslations,
};

function getNestedValue(obj: TranslationValue, path: string): string {
  const result = path
    .split('.')
    .reduce<TranslationValue | undefined>((current, key) => {
      if (current && typeof current === 'object' && !Array.isArray(current)) {
        return current[key];
      }
      return undefined;
    }, obj);
  return typeof result === 'string' ? result : path;
}

function replaceParams(
  text: string,
  params?: Record<string, string | number>
): string {
  if (!params) return text;
  return Object.entries(params).reduce(
    (acc, [key, value]) => acc.replace(`{${key}}`, String(value)),
    text
  );
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ko');

  useEffect(() => {
    // localStorage에서 언어 설정 불러오기
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language') as Language;
      const initialLanguage =
        savedLanguage && (savedLanguage === 'ko' || savedLanguage === 'en')
          ? savedLanguage
          : 'ko';

      setLanguageState(initialLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };

  const t = (key: string, params?: Record<string, string | number>): string => {
    const translationsData = translations[language];
    const text = getNestedValue(translationsData, key);
    return replaceParams(text, params);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
