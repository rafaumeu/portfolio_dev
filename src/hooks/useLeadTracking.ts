import { useState } from "react";

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

export function useLeadTracking() {
	const [leadEvents] = useState<LeadTrackingData[]>([]);
	const [analyticsEvents] = useState<AnalyticsEventData[]>([]);

	function trackLeadEvent(data: Omit<LeadTrackingData, "timestamp">): void {
		const leadEvent: LeadTrackingData = {
			...data,
			timestamp: Date.now(),
		};

		leadEvents.push(leadEvent);

		// Send to analytics service (example: Google Analytics, Vercel Analytics)
		if (typeof window !== "undefined" && (window as any).gtag) {
			(window as any).gtag("event", "generate_lead", {
				event_category: "lead",
				event_label: data.leadType,
				lead_source: data.leadSource,
			});
		}

		// Store in localStorage for persistence
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
		const event: AnalyticsEventData = {
			eventName,
			source: metadata?.source as string || "unknown",
			metadata,
			timestamp: Date.now(),
		};

		analyticsEvents.push(event);

		// Send to analytics service
		if (typeof window !== "undefined" && (window as any).gtag) {
			(window as any).gtag("event", eventName, {
				event_category: "engagement",
				...metadata,
			});
		}

		// Store in localStorage for debugging
		try {
			const stored =
				localStorage.getItem("portfolio_analytics") || "[]";
			const events = JSON.parse(stored) as AnalyticsEventData[];
			events.push(event);
			localStorage.setItem(
				"portfolio_analytics",
				JSON.stringify(events),
			);
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
			const stored =
				localStorage.getItem("portfolio_analytics") || "[]";
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