import { COMPANY } from '../data/content'
import { Icon } from './Icons'
import { Reveal } from '../hooks/useReveal'

export default function CtaBand({ onNavigate }) {
  return (
    <section className="section section--tight">
      <div className="wrap">
        <Reveal className="cta-band">
          <div className="cta-band__text">
            <h2>Not sure what your soil needs?</h2>
            <p>
              Book a soil and water test. You get twelve parameters analysed and a written,
              crop-wise nutrient plan — usually within a week.
            </p>
          </div>
          <div className="cta-band__actions">
            <button className="btn btn--gold btn--lg" onClick={() => onNavigate('contact')}>
              Book a soil test
              <Icon.chevronRight size={18} />
            </button>
            <a
              className="btn btn--light btn--lg"
              href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
                'Hello AgriVista, I would like to book a soil and water test.',
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon.whatsapp size={18} />
              WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
