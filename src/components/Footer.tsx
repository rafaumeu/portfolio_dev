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
      <div className="footer-links">
        <a href="https://github.com/rafaumeu" target="_blank" rel="noopener noreferrer me">
          GitHub
        </a>
        <span className="footer-separator">·</span>
        <a href="https://www.linkedin.com/in/rafael-dias-zendron-528290132/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <span className="footer-separator">·</span>
        <a href="https://br.fiverr.com/rafaelzendron" target="_blank" rel="noopener noreferrer" className="footer-fiverr">
          Fiverr
        </a>
        <span className="footer-separator">·</span>
        <a href="https://portfoliodev-blush-pi.vercel.app" target="_blank" rel="noopener noreferrer">
          Portfolio
        </a>
      </div>
    </footer>
  );
}
