'use client';

import { useTranslation } from '@/i18n';
import type { Locale } from '@/i18n';

export default function LanguageToggle() {
  const { locale, setLocale, t } = useTranslation();

  const nextLocale: Locale = locale === 'pt-BR' ? 'en-US' : 'pt-BR';

  return (
    <button
      onClick={() => setLocale(nextLocale)}
      className="language-toggle"
      aria-label={
        locale === 'pt-BR'
          ? 'Switch to English'
          : 'Mudar para Português'
      }
      type="button"
    >
      <span className={locale === 'pt-BR' ? 'lang-active' : 'lang-inactive'}>
        {t('language.pt')}
      </span>
      <span className="lang-separator">|</span>
      <span className={locale === 'en-US' ? 'lang-active' : 'lang-inactive'}>
        {t('language.en')}
      </span>
    </button>
  );
}
