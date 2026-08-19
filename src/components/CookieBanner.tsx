"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "@/i18n";
import { getConsentStatus, setConsent } from "@/hooks/useCookieConsent";
import { FaShieldAlt, FaTimes, FaCookieBite } from "react-icons/fa";
import "@/styles/cookie-banner.css";

export default function CookieBanner() {
	const [visible, setVisible] = useState(false);
	const { t } = useTranslation();

	useEffect(() => {
		if (!getConsentStatus()) {
			setVisible(true);
		}
	}, []);

	function handleAccept() {
		setConsent("accepted");
		setVisible(false);
		window.dispatchEvent(new CustomEvent("cookie_consent_change", { detail: { consent: "accepted" } }));
	}

	function handleDecline() {
		setConsent("declined");
		setVisible(false);
	}

	if (!visible) return null;

	return (
		<div className="cookie-banner" role="dialog" aria-label={t("cookieBanner.title")}>
			<div className="cookie-banner-inner">
				<div className="cookie-banner-text">
					<div className="cookie-banner-icon">
						<FaCookieBite />
					</div>
					<div>
						<p className="cookie-banner-heading">{t("cookieBanner.title")}</p>
						<p className="cookie-banner-desc">
							{t("cookieBanner.description")}{" "}
							<Link href="/politica-de-privacidade" className="cookie-banner-link">
								{t("cookieBanner.privacyLink")}
							</Link>
							. <strong>{t("cookieBanner.law")}</strong>.
						</p>
					</div>
				</div>
				<div className="cookie-banner-actions">
					<button onClick={handleDecline} className="cookie-btn cookie-btn-decline">
						{t("cookieBanner.decline")}
					</button>
					<button onClick={handleAccept} className="cookie-btn cookie-btn-accept">
						<FaShieldAlt className="cookie-btn-icon" />
						{t("cookieBanner.accept")}
					</button>
					<button onClick={handleDecline} className="cookie-btn cookie-btn-close" aria-label={t("cookieBanner.close")}>
						<FaTimes />
					</button>
				</div>
			</div>
		</div>
	);
}
