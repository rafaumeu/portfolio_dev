const CONSENT_KEY = 'cookie_consent';

export type ConsentStatus = 'accepted' | 'declined' | null;

export function getConsentStatus(): ConsentStatus {
	if (typeof window === 'undefined') return null;
	const value = localStorage.getItem(CONSENT_KEY);
	if (value === 'accepted' || value === 'declined') return value;
	return null;
}

export function hasAnalyticsConsent(): boolean {
	return getConsentStatus() === 'accepted';
}

export function setConsent(consent: 'accepted' | 'declined'): void {
	localStorage.setItem(CONSENT_KEY, consent);
}
