"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "@/i18n";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import "@/styles/nav.css";

const NAV_KEYS = [
	{ labelKey: "nav.home", href: "#home" },
	{ labelKey: "nav.projects", href: "#projects" },
	{ labelKey: "nav.about", href: "#about" },
	{ labelKey: "nav.contact", href: "#contact" },
	{ labelKey: "nav.blog", href: "/blog" },
];

export default function Nav() {
	const navRef = useRef<HTMLElement>(null);
	const menuId = "mobile-menu";
	const { t } = useTranslation();

	return (
		<nav className="nav" ref={navRef}>
			<div className="nav-inner">
				<span className="nav-logo">Rafael Dias Zendron</span>
				<div className="nav-actions">
					<ThemeToggle />
					<LanguageToggle />
				</div>
				<ul className="nav-links" id={menuId}>
					{NAV_KEYS.map((link) => (
						<li key={link.href}>
							<a
								href={link.href}
								aria-current={link.href === "#home" ? "page" : undefined}
							>
								{t(link.labelKey)}
							</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}