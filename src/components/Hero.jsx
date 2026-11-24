import { COMPANY, STATS, IMG } from '../data/content'
import { Icon } from './Icons'

const TRUST = [
  { icon: 'award', text: 'Certified seed & inputs' },
  { icon: 'activity', text: 'NABL-partner soil lab' },
  { icon: 'truck', text: 'Free delivery within 25 km' },
  { icon: 'users', text: 'Agronomist on call' },
]

export default function Hero({ onNavigate }) {
  return (
    <section className="hero" id="home">
      <div className="hero__bg">
        <img
          src={IMG.hero}
          alt="Golden hour over a ripening crop field"
          fetchPriority="high"
        />
      </div>

      <div className="wrap hero__inner">
        <div>
          <span className="hero__badge">
            <span className="hero__badge-dot" aria-hidden="true" />
            Serving farmers since {COMPANY.established}
          </span>

          <h1>
            Everything your farm needs, <em>from seed to harvest</em>
          </h1>

          <p className="hero__lead">
            Certified seeds, organic nutrients, irrigation systems and honest agronomy advice —
            backed by soil testing and field visits. We work with you through the whole season,
            not just at the counter.
          </p>

          <div className="hero__cta">
            <button className="btn btn--gold btn--lg" onClick={() => onNavigate('products')}>
              Browse products
              <Icon.chevronRight size={18} />
            </button>
            <a
              className="btn btn--light btn--lg"
              href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
                'Hello AgriVista, I would like advice about my crop.',
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon.whatsapp size={18} />
              Ask an agronomist
            </a>
          </div>

          <div className="hero__trust">
            {TRUST.map((t) => {
              const I = Icon[t.icon]
              return (
                <span className="hero__trust-item" key={t.text}>
                  <I size={17} />
                  {t.text}
                </span>
              )
            })}
          </div>
        </div>

        <aside className="hero__card">
          <h2 className="hero__card-title">Trusted across the district</h2>
          <p className="hero__card-sub">
            Sixteen seasons of working alongside small and marginal farms.
          </p>

          <div className="hero__stats">
            {STATS.map((s) => (
              <div className="hero__stat" key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>

          <p className="hero__card-note">
            <Icon.checkCircle size={17} />
            <span>
              Free soil sampling visit for orders above ₹5,000. Subsidy paperwork handled for drip
              irrigation.
            </span>
          </p>
        </aside>
      </div>
    </section>
  )
}
