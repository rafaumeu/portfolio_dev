"use client";

import { useTranslation } from "@/i18n";
import ClientProviders from "@/components/ClientProviders";
import "@/styles/legal.css";

function PrivacyContent() {
	const { t } = useTranslation();

	return (
		<article className="legal-page">
			<h1>{t("privacy.title")}</h1>
			<p className="legal-updated">{t("privacy.lastUpdated")}</p>

			<p>{t("privacy.intro")}</p>

			<h2>{t("privacy.controllerTitle")}</h2>
			<p>{t("privacy.controllerText")}</p>

			<h2>{t("privacy.dpoTitle")}</h2>
			<p>{t("privacy.dpoText")}</p>

			<h2>{t("privacy.dataTitle")}</h2>
			<p>{t("privacy.dataText")}</p>
			<ul>
				<li>{t("privacy.dataName")}</li>
				<li>{t("privacy.dataEmail")}</li>
				<li>{t("privacy.dataMessage")}</li>
				<li>{t("privacy.dataCookies")}</li>
			</ul>

			<h2>{t("privacy.purposeTitle")}</h2>
			<ul>
				<li>{t("privacy.purposeContact")}</li>
				<li>{t("privacy.purposeAnalytics")}</li>
				<li>{t("privacy.purposeImprove")}</li>
			</ul>

			<h2>{t("privacy.legalBasisTitle")}</h2>
			<ul>
				<li>{t("privacy.legalBasisConsent")}</li>
				<li>{t("privacy.legalBasisExecution")}</li>
				<li>{t("privacy.legalBasisInterest")}</li>
			</ul>

			<h2>{t("privacy.sharingTitle")}</h2>
			<p>{t("privacy.sharingText")}</p>
			<ul>
				<li>{t("privacy.sharingWeb3Forms")}</li>
				<li>{t("privacy.sharingVercel")}</li>
			</ul>

			<h2>{t("privacy.retentionTitle")}</h2>
			<ul>
				<li>{t("privacy.retentionContact")}</li>
				<li>{t("privacy.retentionCookies")}</li>
				<li>{t("privacy.retentionLogs")}</li>
			</ul>

			<h2>{t("privacy.rightsTitle")}</h2>
			<p>{t("privacy.rightsText")}</p>
			<ul>
				<li>{t("privacy.rightsConfirm")}</li>
				<li>{t("privacy.rightsAccess")}</li>
				<li>{t("privacy.rightsCorrection")}</li>
				<li>{t("privacy.rightsAnonymization")}</li>
				<li>{t("privacy.rightsPortability")}</li>
				<li>{t("privacy.rightsDeletion")}</li>
				<li>{t("privacy.rightsRevocation")}</li>
			</ul>

			<h2>{t("privacy.securityTitle")}</h2>
			<p>{t("privacy.securityText")}</p>

			<h2>{t("privacy.changesTitle")}</h2>
			<p>{t("privacy.changesText")}</p>

			<h2>{t("privacy.contactTitle")}</h2>
			<p>{t("privacy.contactText")}</p>
		</article>
	);
}

export default function PoliticaPrivacidade() {
	return (
		<ClientProviders>
			<PrivacyContent />
		</ClientProviders>
	);
}
