"use client";

import { type FormEvent, useState, useRef, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiEnvelope } from "react-icons/hi2";
import { SiFiverr } from "react-icons/si";
import { useTranslation } from "@/i18n";
import { useLeadTracking } from "@/hooks/useLeadTracking";
import "@/styles/contact.css";

const SOCIAL_LINKS = [
	{
		href: "https://github.com/rafaumeu",
		icon: FaGithub,
		labelKey: "GitHub",
	},
	{
		href: "https://www.linkedin.com/in/rafael-dias-zendron-528290132/",
		icon: FaLinkedin,
		labelKey: "LinkedIn",
	},
	{
		href: "https://br.fiverr.com/rafaelzendron",
		icon: SiFiverr,
		labelKey: "Fiverr",
	},
	{
		href: "mailto:rafael.zendron22@gmail.com",
		icon: HiEnvelope,
		labelKey: "Email",
	},
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
	const [submitted, setSubmitted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [formError, setFormError] = useState("");
	const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
	const formRef = useRef<HTMLFormElement>(null);
	const { t } = useTranslation();
	const { trackEvent } = useLeadTracking();

	// Auto-clear errors on input change
	useEffect(() => {
		if (formError) {
			const timer = setTimeout(() => setFormError(""), 5000);
			return () => clearTimeout(timer);
		}
	}, [formError]);

	const validateField = (name: string, value: string) => {
		switch (name) {
			case "name":
				if (!value.trim()) {
					return t("contact.errors.nameRequired");
				}
				if (value.trim().length < 2) {
					return t("contact.errors.nameTooShort");
				}
				return "";
			case "email":
				if (!value.trim()) {
					return t("contact.errors.emailRequired");
				}
				if (!EMAIL_REGEX.test(value)) {
					return t("contact.errors.emailInvalid");
				}
				return "";
			case "message":
				if (!value.trim()) {
					return t("contact.errors.messageRequired");
				}
				if (value.trim().length < 10) {
					return t("contact.errors.messageTooShort");
				}
				return "";
			default:
				return "";
		}
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		const error = validateField(name, value);
		setErrors((prev) => ({ ...prev, [name]: error }));
	};

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setIsSubmitting(true);
		setFormError("");
		setErrors({});

		const form = e.currentTarget;
		const formData = new FormData(form);

		// Validate all fields
		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const message = formData.get("message") as string;

		const nameError = validateField("name", name);
		const emailError = validateField("email", email);
		const messageError = validateField("message", message);

		const newErrors = {
			name: nameError,
			email: emailError,
			message: messageError,
		};

		if (nameError || emailError || messageError) {
			setErrors(newErrors);
			setIsSubmitting(false);
			return;
		}

		// Track form submission attempt
		trackEvent("contact_form_submitted", {
			source: "contact_page",
		});

		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "",
					name,
					email,
					message,
					subject: "Portfolio Contact Form Message",
					from_name: name,
					reply_to: email,
					cc: "rafael.zendron22@gmail.com", // CC to your email
				}),
			});

			const data = await response.json();

			if (data.success) {
				setSubmitted(true);
				// Track successful submission
				trackEvent("contact_form_success", {
					source: "contact_page",
				});
				formRef.current?.reset();
			} else {
				setFormError(data.message || t("contact.errorMessage"));
				// Track failed submission
				trackEvent("contact_form_failed", {
					source: "contact_page",
					error: data.message,
				});
			}
		} catch (error) {
			setFormError(t("contact.errorMessage"));
			// Track error
			trackEvent("contact_form_error", {
				source: "contact_page",
				error: error instanceof Error ? error.message : "Unknown error",
			});
		} finally {
			setIsSubmitting(false);
		}
	}

	const hasErrors = Object.values(errors).some(Boolean);

	return (
		<section className="contact-section" id="contact">
			<h2>{t("contact.title")}</h2>
			<p className="contact-subtitle">{t("contact.subtitle")}</p>

			<div className="contact-layout">
				<div className="contact-social-col">
					<h3>{t("contact.findMeOn")}</h3>
					<div className="contact-links">
						{SOCIAL_LINKS.map((link) => (
							<a
								key={link.labelKey}
								href={link.href}
								className="contact-link"
								target={link.href.startsWith("mailto") ? undefined : "_blank"}
								rel={
									link.href.startsWith("mailto")
										? undefined
										: "noopener noreferrer"
								}
								aria-label={link.labelKey}
							>
								<link.icon />
								<span>{link.labelKey}</span>
							</a>
						))}
					</div>
				</div>

				<div className="contact-form-col">
					{submitted ? (
						<div
							className="contact-success"
							role="status"
							aria-live="polite"
						>
							<span
								className="contact-success-icon"
								aria-hidden="true"
							>
								✓
							</span>
							<p>{t("contact.successMessage")}</p>
						</div>
					) : (
						<form
							className="contact-form"
							onSubmit={handleSubmit}
							ref={formRef}
							noValidate
						>
							{formError && (
								<div
									className="contact-form-error"
									role="alert"
								>
									<p>{formError}</p>
								</div>
							)}

							<div className="form-group">
								<label htmlFor="name">{t("contact.name")}</label>
								<input
									type="text"
									id="name"
									name="name"
									placeholder={t("contact.namePlaceholder")}
									required
									aria-invalid={!!errors.name}
									aria-describedby={errors.name ? "name-error" : undefined}
									onChange={handleInputChange}
								/>
								{errors.name && (
									<span
										id="name-error"
										className="form-error"
										role="alert"
									>
										{errors.name}
									</span>
								)}
							</div>

							<div className="form-group">
								<label htmlFor="email">{t("contact.email")}</label>
								<input
									type="email"
									id="email"
									name="email"
									placeholder={t("contact.emailPlaceholder")}
									required
									aria-invalid={!!errors.email}
									aria-describedby={errors.email ? "email-error" : undefined}
									onChange={handleInputChange}
								/>
								{errors.email && (
									<span
										id="email-error"
										className="form-error"
										role="alert"
									>
										{errors.email}
									</span>
								)}
							</div>

							<div className="form-group">
								<label htmlFor="message">{t("contact.message")}</label>
								<textarea
									id="message"
									name="message"
									placeholder={t("contact.messagePlaceholder")}
									rows={5}
									required
									aria-invalid={!!errors.message}
									aria-describedby={
										errors.message ? "message-error" : undefined
									}
									onChange={handleInputChange}
								/>
								{errors.message && (
									<span
										id="message-error"
										className="form-error"
										role="alert"
									>
										{errors.message}
									</span>
								)}
							</div>

							<button
								type="submit"
								className="contact-submit"
								disabled={isSubmitting || hasErrors}
							>
								{isSubmitting ? t("contact.sending") : t("contact.send")}
							</button>
						</form>
					)}
				</div>
			</div>

			<hr className="contact-divider" />
		</section>
	);
}