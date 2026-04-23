'use client';

import { useTranslation } from '@/i18n';
import '@/styles/footer.css';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer-section" role="contentinfo">
      <p>{t('footer.copyright', { year })}</p>
      <p>{t('footer.builtWith')}</p>
    </footer>
  );
}
