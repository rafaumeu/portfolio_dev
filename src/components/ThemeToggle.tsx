'use client';

import { HiSun, HiMoon } from 'react-icons/hi2';
import { useTheme } from './ThemeProvider';
import '@/styles/themes.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? <HiSun size={20} /> : <HiMoon size={20} />}
    </button>
  );
}
