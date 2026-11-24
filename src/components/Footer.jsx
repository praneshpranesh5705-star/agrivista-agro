import { COMPANY, NAV_LINKS, CATEGORIES } from '../data/content'
import { Icon } from './Icons'

export default function Footer({ onNavigate }) {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div className="footer__brand">
            <span className="brand">
              <span className="brand__mark" aria-hidden="true">
                <Icon.leaf size={22} />
              </span>
              <span className="brand__text">
                <span className="brand__name">AgriVista</span>
                <span className="brand__sub">Agro Solutions</span>
              </span>
            </span>
            <p className="footer__about">
              Certified inputs, soil testing and field advisory for farms across Namakkal, Erode
              and Salem. Family-run since {COMPANY.established}.
            </p>
            <div className="footer__social">
              <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <Icon.whatsapp size={17} />
              </a>
              <a href="#home" aria-label="Facebook">
                <Icon.facebook size={16} />
              </a>
              <a href="#home" aria-label="Instagram">
                <Icon.instagram size={16} />
              </a>
              <a href="#home" aria-label="YouTube">
                <Icon.youtube size={17} />
              </a>
              <a href="#home" aria-label="LinkedIn">
                <Icon.linkedin size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4>Explore</h4>
            <div className="footer__links">
              {NAV_LINKS.map((l) => (
                <button key={l.id} onClick={() => onNavigate(l.id)}>
                  {l.label}
                </button>
              ))}
              <button onClick={() => onNavigate('faq')}>FAQs</button>
            </div>
          </div>

          <div>
            <h4>Categories</h4>
            <div className="footer__links">
              {CATEGORIES.map((c) => (
                <button key={c.id} onClick={() => onNavigate('products')}>
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4>Reach us</h4>
            <div className="footer__contact">
              <div>
                <Icon.pin size={16} />
                <span>{COMPANY.address}</span>
              </div>
              <div>
                <Icon.phone size={16} />
                <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
              </div>
              <div>
                <Icon.mail size={16} />
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </div>
              <div>
                <Icon.clock size={16} />
                <span>{COMPANY.hours}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {year} {COMPANY.name}. All rights reserved. GSTIN {COMPANY.gst}
          </span>
          <div className="footer__bottom-links">
            <a href="#home">Privacy policy</a>
            <a href="#home">Terms of supply</a>
            <a href="#home">Return &amp; replacement</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
