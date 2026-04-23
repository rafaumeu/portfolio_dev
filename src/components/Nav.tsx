'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import '@/styles/nav.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuId = 'mobile-menu';

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
        return;
      }

      if (e.key === 'Tab' && navRef.current) {
        const focusable = navRef.current.querySelectorAll<HTMLElement>(
          'a, button, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    const firstLink = navRef.current?.querySelector<HTMLAnchorElement>('a');
    firstLink?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, close]);

  return (
    <nav className="nav" role="banner" ref={navRef}>
      <div className="nav-inner">
        <span className="nav-logo">Rafael Dias Zendron</span>
        <button
          className="nav-hamburger"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls={menuId}
          aria-label="Toggle navigation"
          type="button"
        >
          <span className={`nav-hamburger-line ${isOpen ? 'open' : ''}`} />
          <span className={`nav-hamburger-line ${isOpen ? 'open' : ''}`} />
          <span className={`nav-hamburger-line ${isOpen ? 'open' : ''}`} />
        </button>
        <ul
          className={`nav-links ${isOpen ? 'nav-links--open' : ''}`}
          id={menuId}
          role="list"
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={link.href === '#home' ? 'page' : undefined}
                onClick={close}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
