import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi2';
import '../styles/contact.css';

const socialLinks = [
  { href: 'https://github.com/rafaumeu', icon: FaGithub, label: 'GitHub' },
  { href: 'https://linkedin.com/in/rafaeldiaszendron', icon: FaLinkedin, label: 'LinkedIn' },
  { href: 'https://twitter.com/rafaumeu', icon: FaTwitter, label: 'Twitter' },
  { href: 'mailto:rafaelzendron@gmail.com', icon: HiMail, label: 'Email' },
];

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="contact__heading">Let's Work Together</h2>
      <p className="contact__subtitle">
        I'm currently open to new opportunities. Whether you have a question or
        just want to say hi, feel free to reach out!
      </p>
      <div className="contact__socials">
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            className="contact__social-link"
            target={label === 'Email' ? undefined : '_blank'}
            rel={label === 'Email' ? undefined : 'noopener noreferrer'}
            aria-label={label}
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
      <div className="contact__divider" />
    </section>
  );
}

export default Contact;
