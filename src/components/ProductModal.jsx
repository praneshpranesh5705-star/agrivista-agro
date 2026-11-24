import { useEffect } from 'react'
import { COMPANY } from '../data/content'
import { Icon, Stars } from './Icons'
import { useScrollLock } from '../hooks/useReveal'

const inr = (n) => `₹${n.toLocaleString('en-IN')}`

export default function ProductModal({ product, onClose }) {
  useScrollLock(!!product)

  useEffect(() => {
    if (!product) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [product, onClose])

  if (!product) return null

  const waText = encodeURIComponent(
    `Hello AgriVista, I am interested in "${product.name}" (${inr(product.price)} ${product.unit}). Please share availability.`,
  )

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={product.name}>
      <div className="modal__scrim" onClick={onClose} />

      <div className="modal__panel">
        <button className="modal__close" onClick={onClose} aria-label="Close">
          <Icon.close size={19} />
        </button>

        <div className="modal__media">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="modal__body">
          <div className="modal__cat">{product.categoryLabel}</div>
          <h3>{product.name}</h3>

          <div className="prod-card__rating" style={{ marginBottom: 16 }}>
            <Stars value={product.rating} size={15} />
            <span>
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <p className="modal__short">{product.short}</p>

          <dl className="specs">
            {product.specs.map((s) => (
              <div className="specs__row" key={s.k}>
                <dt>{s.k}</dt>
                <dd>{s.v}</dd>
              </div>
            ))}
          </dl>

          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: 10,
              marginBottom: 22,
              flexWrap: 'wrap',
            }}
          >
            <span className="prod-card__price" style={{ fontSize: '1.9rem' }}>
              {inr(product.price)}
            </span>
            <span style={{ color: 'var(--ink-mute)', fontSize: '0.9rem' }}>{product.unit}</span>
          </div>

          <div className="modal__actions">
            <a
              className="btn btn--primary btn--lg"
              href={`https://wa.me/${COMPANY.whatsapp}?text=${waText}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon.whatsapp size={18} />
              Enquire on WhatsApp
            </a>
            <a className="btn btn--ghost btn--lg" href={COMPANY.phoneHref}>
              <Icon.phone size={17} />
              Call to order
            </a>
          </div>

          <p className="form__note" style={{ marginTop: 18 }}>
            Prices are counter rates and exclude GST. Bulk and season bookings receive a written
            quotation — ask us for a rate card.
          </p>
        </div>
      </div>
    </div>
  )
}
