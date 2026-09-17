import Logo from './Logo';
import LocalTime from './LocalTime';
import { contact, nav, services } from '../content/site';

export default function Footer() {
  return (
    <footer className="site-footer" data-tone="dark">
      <div className="shell site-footer__grid">
        <div className="site-footer__col">
          <p className="site-footer__heading">Sitemap</p>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="site-footer__col">
          <p className="site-footer__heading">Services</p>
          <ul>
            {services.map((service) => (
              <li key={service.title}>
                <a href="#services">{service.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="site-footer__col">
          <p className="site-footer__heading">Studio</p>
          <ul>
            <li>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>{contact.city}</li>
            <li>
              Local time <LocalTime />
            </li>
          </ul>
        </div>
        <div className="site-footer__col site-footer__col--end">
          <a href="#top" className="text-link">
            Back to top
          </a>
          <p>© {new Date().getFullYear()} FlasTech Inc.</p>
        </div>
      </div>

      <div className="site-footer__mark" aria-hidden="true">
        <Logo variant="compact" fill="iris" title="" />
      </div>
    </footer>
  );
}
