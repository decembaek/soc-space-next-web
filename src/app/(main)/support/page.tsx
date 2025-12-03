'use client';

import Link from 'next/link';
import { Container } from '@/components/Container';
import { useLanguage } from '@/contexts/LanguageContext';
import koTranslations from '@/locales/ko.json';
import enTranslations from '@/locales/en.json';

interface FaqItem {
  question: string;
  answer: string;
}

type FaqColumn = FaqItem[];

function getFaqs(language: 'ko' | 'en'): FaqColumn[] {
  const translations = language === 'ko' ? koTranslations : enTranslations;
  const faqsData = translations as { faqs?: { columns?: FaqColumn[] } };
  return faqsData.faqs?.columns || [];
}

interface SupportTranslations {
  support?: {
    setupGuide?: {
      steps?: string[];
    };
  };
}

export default function SupportPage() {
  const { language, t } = useLanguage();
  const faqs = getFaqs(language);
  const translations = (
    language === 'ko' ? koTranslations : enTranslations
  ) as SupportTranslations;
  const setupSteps = translations.support?.setupGuide?.steps || [];

  return (
    <div className="bg-white py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {t('support.title')}
            </h1>
            <h2 className="mt-6 text-2xl font-semibold text-gray-900">
              {t('support.subtitle')}
            </h2>
            <p className="mt-4 text-lg leading-7 text-gray-600">
              {t('support.description')}
            </p>
          </div>

          <div className="mt-16 space-y-16">
            {/* Contact Section */}
            <section className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
              <h2 className="text-2xl font-semibold text-gray-900">
                {t('support.contact.title')}
              </h2>
              <div className="mt-6 space-y-4">
                <p className="text-base leading-7 text-gray-600">
                  <Link
                    href="mailto:tmdrbpp123@anybaek.com"
                    className="font-medium text-cyan-600 hover:text-cyan-700"
                  >
                    {t('support.contact.email')}
                  </Link>
                </p>
                <p className="text-base leading-7 text-gray-600">
                  {t('support.contact.responseTime')}
                </p>
              </div>
            </section>

            {/* Setup Guide Section */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900">
                {t('support.setupGuide.title')}
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-600">
                {t('support.setupGuide.description')}
              </p>
              <ol className="mt-6 space-y-4">
                {setupSteps.map((step: string, index: number) => (
                  <li key={index} className="flex gap-4">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500 text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <p className="text-base leading-7 text-gray-600">{step}</p>
                  </li>
                ))}
              </ol>
            </section>

            {/* FAQ Section */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900">
                {t('support.faq.title')}
              </h2>
              <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {faqs.map((column, columnIndex) => (
                  <div key={columnIndex} className="space-y-8">
                    {column.map((faq, faqIndex) => (
                      <div key={faqIndex}>
                        <h3 className="text-lg font-semibold text-gray-900">
                          Q: {faq.question}
                        </h3>
                        <p className="mt-2 text-base leading-7 text-gray-600">
                          A: {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
