import { useState, useCallback } from "react";

export function useExternalLink() {
	const [loading, setLoading] = useState(false);

	const handleClick = useCallback((url: string) => {
		setLoading(true);
		setTimeout(() => {
			window.open(url, "_blank", "noopener,noreferrer");
			setLoading(false);
		}, 300);
	}, []);

	return { loading, handleClick };
}