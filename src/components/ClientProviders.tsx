'use client';

import { ReactNode } from 'react';
import ThemeProvider from './ThemeProvider';
import ThemeScript from './ThemeScript';
import { I18nProvider } from '@/i18n';

export default function ClientProviders({ children }: { readonly children: ReactNode }) {
  return (
    <I18nProvider>
      <ThemeProvider>
        <ThemeScript />
        {children}
      </ThemeProvider>
    </I18nProvider>
  );
}
