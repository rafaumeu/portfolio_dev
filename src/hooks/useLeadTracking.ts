import { hasAnalyticsConsent } from "./useCookieConsent";

interface LeadTrackingData {
	leadSource: string;
	leadType: "contact" | "github" | "linkedin" | "fiverr";
	projectInterest?: string;
	timestamp: number;
}

interface AnalyticsEventData {
	eventName: string;
	source: string;
	metadata?: Record<string, unknown>;
	timestamp: number;
}

function sanitizeMetadata(metadata?: Record<string, unknown>): Record<string, unknown> | undefined {
	if (!metadata) return undefined;
	const sanitized: Record<string, unknown> = {};
	const piiKeys = ["email", "name", "message", "phone", "cpf", "endereco"];
	for (const [key, value] of Object.entries(metadata)) {
		if (piiKeys.some((p) => key.toLowerCase().includes(p))) continue;
		sanitized[key] = value;
	}
	return Object.keys(sanitized).length > 0 ? sanitized : undefined;
}

export function useLeadTracking() {
	function trackLeadEvent(data: Omit<LeadTrackingData, "timestamp">): void {
		if (!hasAnalyticsConsent()) return;

		const leadEvent: LeadTrackingData = {
			...data,
			timestamp: Date.now(),
		};

		if (typeof window !== "undefined" && (window as any).gtag) {
			(window as any).gtag("event", "generate_lead", {
				event_category: "lead",
				event_label: data.leadType,
				lead_source: data.leadSource,
			});
		}

		try {
			const stored = localStorage.getItem("portfolio_leads") || "[]";
			const leads = JSON.parse(stored) as LeadTrackingData[];
			leads.push(leadEvent);
			localStorage.setItem("portfolio_leads", JSON.stringify(leads));
		} catch (error) {
			console.error("Failed to store lead event:", error);
		}
	}

	function trackEvent(
		eventName: string,
		metadata?: Record<string, unknown>,
	): void {
		if (!hasAnalyticsConsent()) return;

		const cleanMetadata = sanitizeMetadata(metadata);

		const event: AnalyticsEventData = {
			eventName,
			source: cleanMetadata?.source as string || "unknown",
			metadata: cleanMetadata,
			timestamp: Date.now(),
		};

		if (typeof window !== "undefined" && (window as any).gtag) {
			(window as any).gtag("event", eventName, {
				event_category: "engagement",
				...cleanMetadata,
			});
		}

		try {
			const stored = localStorage.getItem("portfolio_analytics") || "[]";
			const events = JSON.parse(stored) as AnalyticsEventData[];
			events.push(event);
			localStorage.setItem("portfolio_analytics", JSON.stringify(events));
		} catch (error) {
			console.error("Failed to store analytics event:", error);
		}
	}

	function getLeads(): LeadTrackingData[] {
		try {
			const stored = localStorage.getItem("portfolio_leads") || "[]";
			return JSON.parse(stored) as LeadTrackingData[];
		} catch (error) {
			console.error("Failed to retrieve lead events:", error);
			return [];
		}
	}

	function getAnalyticsEvents(): AnalyticsEventData[] {
		try {
			const stored = localStorage.getItem("portfolio_analytics") || "[]";
			return JSON.parse(stored) as AnalyticsEventData[];
		} catch (error) {
			console.error("Failed to retrieve analytics events:", error);
			return [];
		}
	}

	function clearLeads(): void {
		try {
			localStorage.removeItem("portfolio_leads");
		} catch (error) {
			console.error("Failed to clear lead events:", error);
		}
	}

	function clearAnalytics(): void {
		try {
			localStorage.removeItem("portfolio_analytics");
		} catch (error) {
			console.error("Failed to clear analytics events:", error);
		}
	}

	return {
		trackLeadEvent,
		trackEvent,
		getLeads,
		getAnalyticsEvents,
		clearLeads,
		clearAnalytics,
	};
}
