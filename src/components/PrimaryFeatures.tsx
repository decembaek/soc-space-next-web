'use client';

import Image from 'next/image';
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid';
import { Container } from '@/components/Container';
import { useLanguage } from '@/contexts/LanguageContext';

function getFeatures(t: (key: string) => string) {
  return [
    {
      name: t('primaryFeatures.features.inviteFriends.name'),
      description: t('primaryFeatures.features.inviteFriends.description'),
      icon: CloudArrowUpIcon,
    },
    {
      name: t('primaryFeatures.features.notifications.name'),
      description: t('primaryFeatures.features.notifications.description'),
      icon: LockClosedIcon,
    },
    {
      name: t('primaryFeatures.features.investAnyAmount.name'),
      description: t('primaryFeatures.features.investAnyAmount.description'),
      icon: ArrowPathIcon,
    },
    // {
    //   name: t('primaryFeatures.features.advancedSecurity.name'),
    //   description: t('primaryFeatures.features.advancedSecurity.description'),
    //   icon: FingerPrintIcon,
    // },
    // {
    //   name: t('primaryFeatures.features.powerfulApi.name'),
    //   description: t('primaryFeatures.features.powerfulApi.description'),
    //   icon: Cog6ToothIcon,
    // },
    // {
    //   name: t('primaryFeatures.features.databaseBackups.name'),
    //   description: t('primaryFeatures.features.databaseBackups.description'),
    //   icon: ServerIcon,
    // },
  ];
}

export function PrimaryFeatures() {
  const { t } = useLanguage();
  const features = getFeatures(t);

  return (
    <section
      id="features"
      aria-label="Features"
      className="bg-white py-24 sm:py-32 dark:bg-gray-900"
    >
      <Container>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
              {t('primaryFeatures.subtitle')}
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl sm:text-balance dark:text-white">
              {t('primaryFeatures.title')}
            </p>
            <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
              {t('primaryFeatures.description')}
            </p>
          </div>
        </div>
      </Container>
      <div className="relative overflow-hidden pt-16">
        <Container>
          <Image
            alt="App screenshot"
            src="images/all-space-black.png"
            width={1800}
            height={1000}
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10 dark:hidden dark:ring-white/10"
            unoptimized
          />
          <Image
            alt="App screenshot"
            src="images/all-space-black.png"
            width={1800}
            height={1000}
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10 not-dark:hidden dark:ring-white/10"
            unoptimized
          />
          <div aria-hidden="true" className="relative">
            <div className="absolute -inset-x-20 bottom-0 bg-linear-to-t from-white pt-[7%] dark:from-gray-900" />
          </div>
        </Container>
      </div>
      <Container>
        <dl className="mx-auto mt-16 max-w-2xl grid grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16 sm:mt-20 md:mt-24 dark:text-gray-400">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900 dark:text-white">
                <feature.icon
                  aria-hidden="true"
                  className="absolute top-1 left-1 size-5 text-indigo-600 dark:text-indigo-400"
                />
                {feature.name}
              </dt>{' '}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
