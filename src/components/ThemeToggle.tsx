'use client';

import { HiSun, HiMoon } from 'react-icons/hi2';
import { useTheme } from './ThemeProvider';
import { useTranslation } from '@/i18n';
import '@/styles/themes.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  const label =
    theme === 'dark'
      ? t('theme.switchToLight')
      : t('theme.switchToDark');

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={label}
      title={label}
    >
      {theme === 'dark' ? <HiSun size={20} /> : <HiMoon size={20} />}
    </button>
  );
}
