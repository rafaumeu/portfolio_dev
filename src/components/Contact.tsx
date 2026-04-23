'use client';

import { useState, FormEvent } from 'react';
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
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="contact-section" id="contact">
      <h2>Let&apos;s Work Together</h2>
      <p className="contact-subtitle">
        I&apos;m currently open to new opportunities. Whether you have a
        question or just want to say hi, feel free to reach out!
      </p>

      <div className="contact-layout">
        <div className="contact-social-col">
          <h3>Find me on</h3>
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
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="contact-form-col">
          {submitted ? (
            <div className="contact-success">
              <span className="contact-success-icon">✓</span>
              <p>Thanks for reaching out! I&apos;ll get back to you soon.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="What's on your mind?"
                  rows={5}
                  required
                />
              </div>
              <button type="submit" className="contact-submit">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      <hr className="contact-divider" />
    </section>
  );
}
