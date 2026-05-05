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
      <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', opacity: 0.7 }}>
        Built by{' '}
        <a href="https://github.com/rafaumeu" target="_blank" rel="noopener noreferrer me">
          Rafael Zendron
        </a>{' '}
        ·{' '}
        <a href="https://portfoliodev-blush-pi.vercel.app" target="_blank" rel="noopener noreferrer">
          Portfolio
        </a>
      </p>
    </footer>
  );
}
