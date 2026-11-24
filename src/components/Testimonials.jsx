import { TESTIMONIALS } from '../data/content'
import { Stars } from './Icons'
import { Reveal } from '../hooks/useReveal'

const initials = (name) =>
  name
    .replace(/^[A-Z]\.\s*/, '')
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="wrap">
        <Reveal className="section-head section-head--center">
          <span className="eyebrow">From the field</span>
          <h2>What farmers tell us</h2>
          <p>Unedited feedback from farms we work with across the district.</p>
        </Reveal>

        <div className="tst-grid">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 80} className="tst-card">
              <Stars value={t.rating} size={16} />
              <p className="tst-card__quote">“{t.text}”</p>
              <div className="tst-card__who">
                <span className="tst-card__avatar" aria-hidden="true">
                  {initials(t.name)}
                </span>
                <div>
                  <b>{t.name}</b>
                  <span>{t.place}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
