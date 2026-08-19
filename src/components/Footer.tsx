"use client";

import { useTranslation } from "@/i18n";
import "@/styles/footer.css";

export default function Footer() {
	const { t } = useTranslation();
	const year = new Date().getFullYear();

	return (
		<footer className="footer-section" role="contentinfo">
			<div className="footer-links">
				<a
					href="https://github.com/rafaumeu"
					target="_blank"
					rel="noopener noreferrer me"
				>
					GitHub
				</a>
				<span className="footer-separator">·</span>
				<a
					href="https://www.linkedin.com/in/rafael-dias-zendron-528290132/"
					target="_blank"
					rel="noopener noreferrer"
				>
					LinkedIn
				</a>
				<span className="footer-separator">·</span>
				<a
					href="https://br.fiverr.com/rafaelzendron"
					target="_blank"
					rel="noopener noreferrer"
					className="footer-fiverr"
				>
					Fiverr
				</a>
			</div>
			<div className="footer-links">
				<a href="/politica-de-privacidade">{t("footer.privacy")}</a>
				<span className="footer-separator">·</span>
				<a href="/termos-de-uso">{t("footer.terms")}</a>
				<span className="footer-separator">·</span>
				<a href="mailto:rafael.zendron22@gmail.com">DPO: rafael.zendron22@gmail.com</a>
			</div>
			<p>{t("footer.copyright", { year })}</p>
			<p>{t("footer.builtWith")}</p>
		</footer>
	);
}
