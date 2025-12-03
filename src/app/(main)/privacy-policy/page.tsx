'use client';

import { Container } from '@/components/Container';
import { useLanguage } from '@/contexts/LanguageContext';

export default function PrivacyPolicyPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-white py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {t('privacyPolicy.title')}
          </h1>
          <p className="mt-4 text-sm text-gray-500">
            {t('privacyPolicy.lastUpdated')}
          </p>

          <div className="mt-12 space-y-12">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900">
                {t('privacyPolicy.sections.collection.title')}
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-600">
                {t('privacyPolicy.sections.collection.content')}
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900">
                {t('privacyPolicy.sections.fileAccess.title')}
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-600">
                {t('privacyPolicy.sections.fileAccess.content')}
              </p>
              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {t('privacyPolicy.sections.fileAccess.purpose.title')}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    {t('privacyPolicy.sections.fileAccess.purpose.content')}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {t('privacyPolicy.sections.fileAccess.method.title')}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    {t('privacyPolicy.sections.fileAccess.method.content')}
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900">
                {t('privacyPolicy.sections.permissions.title')}
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-600">
                {t('privacyPolicy.sections.permissions.content')}
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900">
                {t('privacyPolicy.sections.thirdParty.title')}
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-600">
                {t('privacyPolicy.sections.thirdParty.content')}
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900">
                {t('privacyPolicy.sections.children.title')}
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-600">
                {t('privacyPolicy.sections.children.content')}
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900">
                {t('privacyPolicy.sections.contact.title')}
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-600">
                {t('privacyPolicy.sections.contact.content')}
              </p>
              <p className="mt-4 text-base leading-7 text-gray-600">
                {t('privacyPolicy.sections.contact.email')}
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
