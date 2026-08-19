"use client";

import { useTranslation } from "@/i18n";
import ClientProviders from "@/components/ClientProviders";
import "@/styles/legal.css";

function TermsContent() {
	const { t } = useTranslation();

	return (
		<article className="legal-page">
			<h1>{t("terms.title")}</h1>
			<p className="legal-updated">{t("terms.lastUpdated")}</p>

			<p>{t("terms.intro")}</p>

			<h2>{t("terms.useTitle")}</h2>
			<p>{t("terms.useText")}</p>

			<h2>{t("terms.ipTitle")}</h2>
			<p>{t("terms.ipText")}</p>

			<h2>{t("terms.contactTitle")}</h2>
			<p>{t("terms.contactText")}</p>

			<h2>{t("terms.cookiesTitle")}</h2>
			<p>{t("terms.cookiesText")}</p>

			<h2>{t("terms.liabilityTitle")}</h2>
			<p>{t("terms.liabilityText")}</p>

			<h2>{t("terms.linksTitle")}</h2>
			<p>{t("terms.linksText")}</p>

			<h2>{t("terms.changesTitle")}</h2>
			<p>{t("terms.changesText")}</p>

			<h2>{t("terms.lawTitle")}</h2>
			<p>{t("terms.lawText")}</p>

			<h2>{t("terms.contactInfoTitle")}</h2>
			<p>{t("terms.contactInfoText")}</p>
		</article>
	);
}

export default function TermosDeUso() {
	return (
		<ClientProviders>
			<TermsContent />
		</ClientProviders>
	);
}
