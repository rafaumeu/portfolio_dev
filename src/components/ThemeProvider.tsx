"use client";

import {
	createContext,
	type ReactNode,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
	theme: Theme;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
	theme: "dark",
	toggleTheme: () => {},
});

export function useTheme() {
	return useContext(ThemeContext);
}

export default function ThemeProvider({
	children,
}: {
	readonly children: ReactNode;
}) {
	const [theme, setTheme] = useState<Theme>(() => {
		if (typeof window === "undefined") return "dark";
		const stored = localStorage.getItem("theme");
		if (stored === "light" || stored === "dark") return stored;
		return "dark";
	});

	useEffect(() => {
		document.documentElement.dataset.theme = theme;
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = useCallback(() => {
		setTheme((prev) => (prev === "dark" ? "light" : "dark"));
	}, []);

	const contextValue = useMemo(
		() => ({ theme, toggleTheme }),
		[theme, toggleTheme],
	);

	return (
		<ThemeContext.Provider value={contextValue}>
			{children}
		</ThemeContext.Provider>
	);
}
