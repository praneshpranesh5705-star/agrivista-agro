import { SERVICES } from '../data/content'
import { Icon, getIcon } from './Icons'
import { Reveal } from '../hooks/useReveal'

export default function Services() {
  return (
    <section className="section section--green" id="services">
      <div className="wrap">
        <Reveal className="section-head section-head--center">
          <span className="eyebrow">What we do</span>
          <h2>Advice that pays for itself</h2>
          <p>
            Selling inputs is the easy part. The value is in knowing which input, how much, and
            when — which is why every product we sell comes with agronomy behind it.
          </p>
        </Reveal>

        <div className="svc-grid">
          {SERVICES.map((s, i) => {
            const I = getIcon(s.icon)
            return (
              <Reveal key={s.id} delay={i * 70} className="svc-card">
                <span className="svc-card__icon" aria-hidden="true">
                  <I size={25} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <ul>
                  {s.points.map((pt) => (
                    <li key={pt}>
                      <Icon.check size={15} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
