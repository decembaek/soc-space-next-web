'use client';

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

export function Faqs() {
  const { language, t } = useLanguage();
  const faqs = getFaqs(language);
  const description = t('faqs.description');
  const reachOutText = t('faqs.reachOut');

  // {link}를 실제 링크로 교체
  const descriptionWithLink = description.replace(
    '{link}',
    `<a href="mailto:tmdrbpp123@anybaek.com" className="text-gray-900 underline">${reachOutText}</a>`
  );

  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            {t('faqs.title')}
          </h2>
          <p
            className="mt-2 text-lg text-gray-600"
            dangerouslySetInnerHTML={{ __html: descriptionWithLink }}
          />
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg/6 font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
