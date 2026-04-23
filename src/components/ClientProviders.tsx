'use client';

import { ReactNode } from 'react';
import ThemeProvider from './ThemeProvider';
import ThemeScript from './ThemeScript';

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <ThemeScript />
      {children}
    </ThemeProvider>
  );
}
