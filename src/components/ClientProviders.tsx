"use client";

import type { ReactNode } from "react";
import { I18nProvider } from "@/i18n";
import ThemeProvider from "./ThemeProvider";
import ThemeScript from "./ThemeScript";

export default function ClientProviders({
	children,
}: {
	readonly children: ReactNode;
}) {
	return (
		<I18nProvider>
			<ThemeProvider>
				<ThemeScript />
				{children}
			</ThemeProvider>
		</I18nProvider>
	);
}
