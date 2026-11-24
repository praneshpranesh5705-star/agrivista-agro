import { useMemo, useState } from 'react'
import { CATEGORIES, PRODUCTS } from '../data/content'
import { Icon, Stars } from './Icons'
import { Reveal } from '../hooks/useReveal'

const inr = (n) => `₹${n.toLocaleString('en-IN')}`

export default function Products({ onOpen }) {
  const [filter, setFilter] = useState('all')

  const list = useMemo(
    () => (filter === 'all' ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <section className="section section--cream" id="products">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Our catalogue</span>
          <h2>Field-tested inputs, honest pricing</h2>
          <p>
            Every price below is the counter price — no hidden dealer margin. Bulk and season
            bookings get a written quotation.
          </p>
        </Reveal>

        <div className="filters" role="tablist" aria-label="Filter products by category">
          <button
            className={`chip ${filter === 'all' ? 'chip--active' : ''}`}
            onClick={() => setFilter('all')}
            role="tab"
            aria-selected={filter === 'all'}
          >
            All products
          </button>
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              className={`chip ${filter === c.id ? 'chip--active' : ''}`}
              onClick={() => setFilter(c.id)}
              role="tab"
              aria-selected={filter === c.id}
            >
              {c.name}
            </button>
          ))}
        </div>

        <div className="prod-grid">
          {list.map((p, i) => (
            <Reveal key={p.id} delay={i * 60} className="prod-card">
              <div className="prod-card__media">
                <img src={p.image} alt={p.name} loading="lazy" />
                {p.badge && <span className="prod-card__badge">{p.badge}</span>}
              </div>
              <div className="prod-card__body">
                <span className="prod-card__cat">{p.categoryLabel}</span>
                <h3>{p.name}</h3>
                <p className="prod-card__short">{p.short}</p>

                <div className="prod-card__rating">
                  <Stars value={p.rating} />
                  <span>
                    {p.rating} · {p.reviews} reviews
                  </span>
                </div>

                <div className="prod-card__foot">
                  <div>
                    <span className="prod-card__price">{inr(p.price)}</span>
                    <span className="prod-card__unit">{p.unit}</span>
                  </div>
                  <button className="prod-card__btn" onClick={() => onOpen(p)}>
                    Details
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal style={{ marginTop: 40, textAlign: 'center' }}>
          <p style={{ color: 'var(--ink-mute)', fontSize: '0.95rem' }}>
            Looking for something not listed? We stock over 240 lines in store.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
