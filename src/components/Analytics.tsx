"use client";

import { useState, useEffect } from "react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { getConsentStatus } from "@/hooks/useCookieConsent";

export default function Analytics() {
	const [consented, setConsented] = useState(false);

	useEffect(() => {
		function check() {
			setConsented(getConsentStatus() === 'accepted');
		}
		check();
		window.addEventListener('cookie_consent_change', check);
		return () => window.removeEventListener('cookie_consent_change', check);
	}, []);

	if (!consented) return null;
	return <VercelAnalytics />;
}
