'use client';

import { useState, FormEvent } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiEnvelope } from 'react-icons/hi2';
import { useTranslation } from '@/i18n';
import '@/styles/contact.css';

const SOCIAL_LINKS = [
  {
    href: 'https://github.com/rafaumeu',
    icon: FaGithub,
    labelKey: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/rafael-dias-zendron-528290132/',
    icon: FaLinkedin,
    labelKey: 'LinkedIn',
  },
  {
    href: 'https://twitter.com/rafaumeu',
    icon: FaTwitter,
    labelKey: 'Twitter',
  },
  {
    href: 'mailto:rafael.zendron22@gmail.com',
    icon: HiEnvelope,
    labelKey: 'Email',
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useTranslation();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="contact-section" id="contact">
      <h2>{t('contact.title')}</h2>
      <p className="contact-subtitle">
        {t('contact.subtitle')}
      </p>

      <div className="contact-layout">
        <div className="contact-social-col">
          <h3>{t('contact.findMeOn')}</h3>
          <div className="contact-links">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.labelKey}
                href={link.href}
                className="contact-link"
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={
                  link.href.startsWith('mailto')
                    ? undefined
                    : 'noopener noreferrer'
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
            <div className="contact-success" role="status" aria-live="polite">
              <span className="contact-success-icon" aria-hidden="true">✓</span>
              <p>{t('contact.successMessage')}</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t('contact.name')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t('contact.namePlaceholder')}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">{t('contact.email')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t('contact.emailPlaceholder')}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">{t('contact.message')}</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder={t('contact.messagePlaceholder')}
                  rows={5}
                  required
                />
              </div>
              <button type="submit" className="contact-submit">
                {t('contact.send')}
              </button>
            </form>
          )}
        </div>
      </div>

      <hr className="contact-divider" />
    </section>
  );
}
