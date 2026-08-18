"use client";

import type { Locale } from "@/i18n";
import { useTranslation } from "@/i18n";

const LOCALE_LABELS: Record<Locale, string> = {
	"pt-BR": "🇧🇷 PT",
	"en-US": "🇺🇸 EN",
	"es-ES": "🇪🇸 ES",
};

const LOCALE_TITLES: Record<Locale, string> = {
	"pt-BR": "Mudar para Português",
	"en-US": "Switch to English",
	"es-ES": "Cambiar a Español",
};

export default function LanguageToggle() {
	const { locale, setLocale } = useTranslation();

	const locales = Object.keys(LOCALE_LABELS) as Locale[];

	return (
		<div className="language-toggle" role="group" aria-label="Language selector">
			{locales.map((l, i) => (
				<span key={l}>
					{i > 0 && <span className="lang-separator">|</span>}
					<button
						onClick={() => setLocale(l)}
						className={l === locale ? "lang-active" : "lang-inactive"}
						title={LOCALE_TITLES[l]}
						type="button"
						aria-pressed={l === locale}
					>
						{LOCALE_LABELS[l]}
					</button>
				</span>
			))}
		</div>
	);
}
