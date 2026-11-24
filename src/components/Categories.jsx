import { CATEGORIES } from '../data/content'
import { Icon, getIcon } from './Icons'
import { Reveal } from '../hooks/useReveal'

export default function Categories({ onNavigate }) {
  return (
    <section className="section" id="categories">
      <div className="wrap">
        <Reveal className="section-head section-head--center">
          <span className="eyebrow">What we supply</span>
          <h2>Six categories, one supply chain</h2>
          <p>
            From the seed in your hand to the water at your root zone — every input is sourced,
            tested and supported by people who will visit your field.
          </p>
        </Reveal>

        <div className="cat-grid">
          {CATEGORIES.map((cat, i) => {
            const I = getIcon(cat.icon)
            return (
              <Reveal key={cat.id} delay={i * 70} className="cat-card">
                <div className="cat-card__media">
                  <img src={cat.image} alt={cat.name} loading="lazy" />
                  <span className="cat-card__icon" aria-hidden="true">
                    <I size={24} />
                  </span>
                </div>
                <div className="cat-card__body">
                  <h3>{cat.name}</h3>
                  <p>{cat.blurb}</p>
                  <button className="cat-card__link" onClick={() => onNavigate('products')}>
                    View products
                    <Icon.chevronRight size={16} />
                  </button>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
