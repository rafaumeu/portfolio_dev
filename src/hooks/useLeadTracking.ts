import { useState } from "react";

interface LeadTrackingData {
	leadSource: string;
	leadType: "contact" | "github" | "linkedin" | "fiverr";
	projectInterest?: string;
	timestamp: number;
}

export function useLeadTracking() {
	const [leadEvents] = useState<LeadTrackingData[]>([]);

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

	function getLeads(): LeadTrackingData[] {
		try {
			const stored = localStorage.getItem("portfolio_leads") || "[]";
			return JSON.parse(stored) as LeadTrackingData[];
		} catch (error) {
			console.error("Failed to retrieve lead events:", error);
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

	return {
		trackLeadEvent,
		getLeads,
		clearLeads,
	};
}