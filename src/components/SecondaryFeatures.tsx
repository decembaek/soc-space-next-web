'use client';

import { useId } from 'react';

import { Container } from '@/components/Container';
import { useLanguage } from '@/contexts/LanguageContext';

function getFeatures(t: (key: string) => string) {
  return [
    {
      name: t('secondaryFeatures.features.investAnyAmount.name'),
      description: t('secondaryFeatures.features.investAnyAmount.description'),
      icon: DeviceArrowIcon,
    },
    {
      name: t('secondaryFeatures.features.balancedPortfolio.name'),
      description: t(
        'secondaryFeatures.features.balancedPortfolio.description'
      ),
      icon: DeviceCardsIcon,
    },
    {
      name: t('secondaryFeatures.features.realTimeTrade.name'),
      description: t('secondaryFeatures.features.realTimeTrade.description'),
      icon: DeviceClockIcon,
    },
    {
      name: t('secondaryFeatures.features.profitFromNetwork.name'),
      description: t(
        'secondaryFeatures.features.profitFromNetwork.description'
      ),
      icon: DeviceListIcon,
    },
    {
      name: t('secondaryFeatures.features.encrypted.name'),
      description: t('secondaryFeatures.features.encrypted.description'),
      icon: DeviceLockIcon,
    },
    {
      name: t('secondaryFeatures.features.portfolioTracking.name'),
      description: t(
        'secondaryFeatures.features.portfolioTracking.description'
      ),
      icon: DeviceChartIcon,
    },
  ];
}

function DeviceArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <rect
        x={4}
        y={6}
        width={24}
        height={16}
        rx={1}
        fill="#737373"
        fillOpacity={0.3}
      />
      <rect x={5} y={7} width={22} height={13} rx={0.5} fill="#171717" />
      <rect
        x={6}
        y={8}
        width={20}
        height={11}
        fill="#737373"
        fillOpacity={0.2}
      />
      <rect x={2} y={22} width={28} height={2} rx={1} fill="#737373" />
      <rect x={14} y={24} width={4} height={1} rx={0.5} fill="#171717" />
      <path
        d="M14 18l4-4m0 0h-3m3 0v3"
        stroke="#06b6d4"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}

function DeviceCardsIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  const id = useId();

  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <rect
        x={4}
        y={6}
        width={24}
        height={16}
        rx={1}
        fill="#737373"
        fillOpacity={0.3}
      />
      <rect x={5} y={7} width={22} height={13} rx={0.5} fill="#171717" />
      <rect
        x={6}
        y={8}
        width={20}
        height={11}
        fill="#737373"
        fillOpacity={0.2}
      />
      <rect x={2} y={22} width={28} height={2} rx={1} fill="#737373" />
      <rect x={14} y={24} width={4} height={1} rx={0.5} fill="#171717" />
      <rect
        x={8}
        y={11}
        width={6}
        height={4}
        rx={0.5}
        fill={`url(#${id}-gradient)`}
      />
      <rect
        x={8}
        y={16}
        width={6}
        height={4}
        rx={0.5}
        fill={`url(#${id}-gradient)`}
      />
      <rect
        x={18}
        y={11}
        width={6}
        height={4}
        rx={0.5}
        fill={`url(#${id}-gradient)`}
      />
      <defs>
        <linearGradient
          id={`${id}-gradient`}
          x1={16}
          y1={11}
          x2={16}
          y2={20}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#06b6d4" />
          <stop offset={1} stopColor="#06b6d4" stopOpacity={0.5} />
        </linearGradient>
      </defs>
    </svg>
  );
}

function DeviceClockIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <rect
        x={4}
        y={6}
        width={24}
        height={16}
        rx={1}
        fill="#737373"
        fillOpacity={0.3}
      />
      <rect x={5} y={7} width={22} height={13} rx={0.5} fill="#171717" />
      <rect
        x={6}
        y={8}
        width={20}
        height={11}
        fill="#737373"
        fillOpacity={0.2}
      />
      <rect x={2} y={22} width={28} height={2} rx={1} fill="#737373" />
      <rect x={14} y={24} width={4} height={1} rx={0.5} fill="#171717" />
      <circle
        cx={16}
        cy={13.5}
        r={4}
        stroke="#06b6d4"
        strokeWidth={1.5}
        fill="none"
      />
      <path
        d="M16 11.5v2l1.5 1.5"
        stroke="#06b6d4"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}

function DeviceListIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <rect
        x={4}
        y={6}
        width={24}
        height={16}
        rx={1}
        fill="#737373"
        fillOpacity={0.3}
      />
      <rect x={5} y={7} width={22} height={13} rx={0.5} fill="#171717" />
      <rect
        x={6}
        y={8}
        width={20}
        height={11}
        fill="#737373"
        fillOpacity={0.2}
      />
      <rect x={2} y={22} width={28} height={2} rx={1} fill="#737373" />
      <rect x={14} y={24} width={4} height={1} rx={0.5} fill="#171717" />
      <circle cx={10} cy={12} r={1.5} fill="#06b6d4" />
      <circle cx={10} cy={16} r={1.5} fill="#06b6d4" />
      <circle cx={10} cy={20} r={1.5} fill="#06b6d4" />
      <path
        d="M14 12h6M14 16h6M14 20h6"
        stroke="#06b6d4"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}

function DeviceLockIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <rect
        x={4}
        y={6}
        width={24}
        height={16}
        rx={1}
        fill="#737373"
        fillOpacity={0.3}
      />
      <rect x={5} y={7} width={22} height={13} rx={0.5} fill="#171717" />
      <rect
        x={6}
        y={8}
        width={20}
        height={11}
        fill="#737373"
        fillOpacity={0.2}
      />
      <rect x={2} y={22} width={28} height={2} rx={1} fill="#737373" />
      <rect x={14} y={24} width={4} height={1} rx={0.5} fill="#171717" />
      <rect
        x={12}
        y={12}
        width={8}
        height={6}
        rx={1}
        fill="#06b6d4"
        fillOpacity={0.3}
        stroke="#06b6d4"
        strokeWidth={1.5}
      />
      <path
        d="M14 12v-2a2 2 0 114 0v2"
        stroke="#06b6d4"
        strokeWidth={1.5}
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function DeviceChartIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <rect
        x={4}
        y={6}
        width={24}
        height={16}
        rx={1}
        fill="#737373"
        fillOpacity={0.3}
      />
      <rect x={5} y={7} width={22} height={13} rx={0.5} fill="#171717" />
      <rect
        x={6}
        y={8}
        width={20}
        height={11}
        fill="#737373"
        fillOpacity={0.2}
      />
      <rect x={2} y={22} width={28} height={2} rx={1} fill="#737373" />
      <rect x={14} y={24} width={4} height={1} rx={0.5} fill="#171717" />
      <path
        d="M9 17l3-2 3 4 4-3 4 2"
        stroke="#06b6d4"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx={9} cy={17} r={1} fill="#06b6d4" />
      <circle cx={12} cy={15} r={1} fill="#06b6d4" />
      <circle cx={15} cy={19} r={1} fill="#06b6d4" />
      <circle cx={19} cy={16} r={1} fill="#06b6d4" />
      <circle cx={23} cy={18} r={1} fill="#06b6d4" />
    </svg>
  );
}

export function SecondaryFeatures() {
  const { t } = useLanguage();
  const features = getFeatures(t);

  return (
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
            {t('secondaryFeatures.title')}
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            {t('secondaryFeatures.description')}
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {features.map((feature) => (
            <li
              key={feature.name}
              className="rounded-2xl border border-gray-200 p-8"
            >
              <feature.icon className="h-8 w-8" />
              <h3 className="mt-6 font-semibold text-gray-900">
                {feature.name}
              </h3>
              <p className="mt-2 text-gray-700">{feature.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
