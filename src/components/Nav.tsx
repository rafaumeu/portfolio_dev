const NAV_ITEMS = [
  { label: 'Home', href: '#' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  return (
    <nav className="nav">
      <a href="#" className="nav__logo">Rafael Meu</a>
      <ul className="nav__links">
        {NAV_ITEMS.map(({ label, href }) => (
          <li key={label}>
            <a href={href} className="nav__link">{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}