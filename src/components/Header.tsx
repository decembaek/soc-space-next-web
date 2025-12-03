'use client';

import Link from 'next/link';
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import { NavLinks } from '@/components/NavLinks';
import { useLanguage, type Language } from '@/contexts/LanguageContext';

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronUpIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GlobeIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function ChevronDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 9l6 6 6-6"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MobileNavLink(
  props: Omit<
    React.ComponentPropsWithoutRef<typeof PopoverButton<typeof Link>>,
    'as' | 'className'
  >
) {
  return (
    <PopoverButton
      as={Link}
      className="block text-base/7 tracking-tight text-gray-700"
      {...props}
    />
  );
}

const languages: Array<{ code: Language; name: string; flag: string }> = [
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
];

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const selectedLanguage =
    languages.find((lang) => lang.code === language) || languages[0];

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between py-8">
          <div className="relative z-10 flex items-center gap-16">
            <Link href="/" aria-label={t('common.home')}>
              <Logo />
            </Link>
            <div className="hidden lg:flex lg:gap-10">
              <NavLinks />
            </div>
          </div>
          <div className="flex items-center gap-6">
            {/* Language Selector */}
            <Popover className="relative">
              {({ open }) => (
                <>
                  <PopoverButton className="relative z-10 -m-2 inline-flex items-center gap-2 rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 focus:not-data-focus:outline-hidden active:stroke-gray-900">
                    <GlobeIcon className="h-5 w-5" />
                    <span className="hidden sm:inline text-sm font-medium text-gray-700">
                      {selectedLanguage.flag}{' '}
                      {selectedLanguage.code.toUpperCase()}
                    </span>
                    <ChevronDownIcon
                      className={`h-4 w-4 transition-transform ${
                        open ? 'rotate-180' : ''
                      }`}
                    />
                  </PopoverButton>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <PopoverBackdrop
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0"
                        />
                        <PopoverPanel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          className="absolute right-0 top-full z-20 mt-2 w-48 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black/5"
                        >
                          <div className="p-2">
                            {languages.map((lang) => (
                              <button
                                key={lang.code}
                                onClick={() => handleLanguageChange(lang.code)}
                                className={`w-full flex items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                                  selectedLanguage.code === lang.code
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700 hover:bg-gray-50'
                                }`}
                              >
                                <span className="text-lg">{lang.flag}</span>
                                <span className="font-medium">{lang.name}</span>
                                {selectedLanguage.code === lang.code && (
                                  <svg
                                    className="ml-auto h-4 w-4 text-gray-900"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                )}
                              </button>
                            ))}
                          </div>
                        </PopoverPanel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <PopoverButton
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 focus:not-data-focus:outline-hidden active:stroke-gray-900"
                    aria-label={t('common.features')}
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-6 w-6" />
                      ) : (
                        <MenuIcon className="h-6 w-6" />
                      )
                    }
                  </PopoverButton>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <PopoverBackdrop
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur-sm"
                        />
                        <PopoverPanel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pt-32 pb-6 shadow-2xl shadow-gray-900/20"
                        >
                          <div className="space-y-4">
                            <MobileNavLink href="/#features">
                              {t('common.features')}
                            </MobileNavLink>
                            <MobileNavLink href="/#reviews">
                              {t('common.reviews')}
                            </MobileNavLink>
                            <MobileNavLink href="/#faqs">
                              {t('common.faqs')}
                            </MobileNavLink>
                          </div>
                          <div className="mt-8 flex flex-col gap-4">
                            <Button href="#">{t('common.download')}</Button>
                          </div>
                        </PopoverPanel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
            <div className="flex items-center gap-6 max-lg:hidden">
              {/* <Button href="/login" variant="outline">
                {t('common.login')}
              </Button> */}
              <Button href="#">{t('common.download')}</Button>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
}
