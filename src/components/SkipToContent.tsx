"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "@/i18n";

export default function SkipToContent() {
	const [isFocused, setIsFocused] = useState(false);
	const { t } = useTranslation();

	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				document.getElementById("main-content")?.focus();
			}
		};

		window.addEventListener("keydown", handleEsc);
		return () => window.removeEventListener("keydown", handleEsc);
	}, []);

	return (
		<a
			href="#main-content"
			className={`skip-to-content ${isFocused ? "focused" : ""}`}
			onFocus={() => setIsFocused(true)}
			onBlur={() => setIsFocused(false)}
		>
			{t("skipToContent")}
		</a>
	);
}