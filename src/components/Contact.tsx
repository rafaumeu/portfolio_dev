'use client';

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiEnvelope } from 'react-icons/hi2';
import '@/styles/contact.css';

const SOCIAL_LINKS = [
  {
    href: 'https://github.com/rafaumeu',
    icon: FaGithub,
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/rafael-dias-zendron-528290132/',
    icon: FaLinkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://twitter.com/rafaumeu',
    icon: FaTwitter,
    label: 'Twitter',
  },
  {
    href: 'mailto:rafael.zendron22@gmail.com',
    icon: HiEnvelope,
    label: 'Email',
  },
];

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2>Let&apos;s Work Together</h2>
      <p className="contact-subtitle">
        I&apos;m currently open to new opportunities. Whether you have a
        question or just want to say hi, feel free to reach out!
      </p>
      <div className="contact-links">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="contact-link"
            target={link.href.startsWith('mailto') ? undefined : '_blank'}
            rel={
              link.href.startsWith('mailto')
                ? undefined
                : 'noopener noreferrer'
            }
            aria-label={link.label}
          >
            <link.icon />
          </a>
        ))}
      </div>
      <hr className="contact-divider" />
    </section>
  );
}
