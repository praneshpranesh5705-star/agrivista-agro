import { useState } from 'react'
import { COMPANY, NAV_LINKS } from '../data/content'
import { Icon } from './Icons'
import { useActiveSection, useScrolled, useScrollLock } from '../hooks/useReveal'

export default function Header({ onNavigate }) {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(30)
  const active = useActiveSection(NAV_LINKS.map((l) => l.id))
  useScrollLock(open)

  const go = (id) => {
    setOpen(false)
    onNavigate(id)
  }

  return (
    <>
      <header className={`header ${scrolled ? 'header--solid' : ''}`}>
        <div className="wrap header__inner">
          <button className="brand" onClick={() => go('home')} aria-label={`${COMPANY.name} — home`}>
            <span className="brand__mark" aria-hidden="true">
              <Icon.leaf size={22} />
            </span>
            <span className="brand__text">
              <span className="brand__name">AgriVista</span>
              <span className="brand__sub">Agro Solutions</span>
            </span>
          </button>

          <nav className="nav" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                className={`nav__link ${active === link.id ? 'nav__link--active' : ''}`}
                onClick={() => go(link.id)}
                aria-current={active === link.id ? 'page' : undefined}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="header__actions">
            <a className="header__phone" href={COMPANY.phoneHref}>
              <Icon.phone size={16} />
              {COMPANY.phone}
            </a>
            <button className="btn btn--primary" onClick={() => go('contact')}>
              Get a quote
            </button>
            <button
              className="burger"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Icon.menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`drawer ${open ? 'drawer--open' : ''}`} aria-hidden={!open}>
        <div className="drawer__scrim" onClick={() => setOpen(false)} />
        <div className="drawer__panel" role="dialog" aria-label="Menu" aria-modal="true">
          <div className="drawer__top">
            <span className="brand">
              <span className="brand__mark" aria-hidden="true">
                <Icon.leaf size={20} />
              </span>
              <span className="brand__text">
                <span className="brand__name">AgriVista</span>
                <span className="brand__sub">Agro Solutions</span>
              </span>
            </span>
            <button className="drawer__close" onClick={() => setOpen(false)} aria-label="Close menu">
              <Icon.close size={20} />
            </button>
          </div>

          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              className={`drawer__link ${active === link.id ? 'drawer__link--active' : ''}`}
              onClick={() => go(link.id)}
            >
              {link.label}
            </button>
          ))}

          <div className="drawer__foot">
            <a className="btn btn--primary btn--block" href={COMPANY.phoneHref}>
              <Icon.phone size={17} />
              Call {COMPANY.phone}
            </a>
            <a
              className="btn btn--ghost btn--block"
              href={`https://wa.me/${COMPANY.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon.whatsapp size={17} />
              WhatsApp us
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
