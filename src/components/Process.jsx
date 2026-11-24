import { PROCESS } from '../data/content'
import { Reveal } from '../hooks/useReveal'

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="wrap">
        <Reveal className="section-head section-head--center">
          <span className="eyebrow">How we work</span>
          <h2>Four steps, one full season</h2>
          <p>
            We do not disappear after the sale. Here is exactly what working with us looks like
            from first call to harvest.
          </p>
        </Reveal>

        <div className="process">
          {PROCESS.map((p, i) => (
            <Reveal key={p.step} delay={i * 80} className="step">
              <div className="step__num">{p.step}</div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
