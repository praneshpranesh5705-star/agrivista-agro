import { useState } from 'react'
import { FAQS } from '../data/content'
import { Icon } from './Icons'
import { Reveal } from '../hooks/useReveal'

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section className="section section--cream" id="faq">
      <div className="wrap">
        <Reveal className="section-head section-head--center">
          <span className="eyebrow">Questions</span>
          <h2>Things farmers ask us</h2>
        </Reveal>

        <div className="faq">
          {FAQS.map((f, i) => {
            const isOpen = open === i
            return (
              <Reveal key={f.q} delay={i * 50} className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}>
                <button
                  className="faq__q"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  {f.q}
                  <span className="faq__icon" aria-hidden="true">
                    <Icon.chevronDown size={16} />
                  </span>
                </button>
                <div className="faq__a">
                  <div className="faq__a-inner">
                    <p>{f.a}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
