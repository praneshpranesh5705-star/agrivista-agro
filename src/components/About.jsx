import { COMPANY, IMG } from '../data/content'
import { Icon } from './Icons'
import { Reveal } from '../hooks/useReveal'

const POINTS = [
  {
    icon: 'activity',
    title: 'We test before we recommend',
    text: 'No fertiliser bag leaves the counter without a soil test behind it. Over-application is the most common way farms lose money.',
  },
  {
    icon: 'users',
    title: 'Agronomists, not just counter staff',
    text: 'Three field agronomists cover Namakkal, Erode and Salem. They walk the field, not just the shop floor.',
  },
  {
    icon: 'shield',
    title: 'Residue-conscious by default',
    text: 'We lead with bio-pesticides and IPM so your produce keeps its market price and your certification stays intact.',
  },
  {
    icon: 'truck',
    title: 'Supply that reaches the village',
    text: 'Free delivery within 25 km and a dealer network beyond it, so inputs arrive when the season needs them.',
  },
]

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap about">
        <Reveal className="about__media">
          <img src={IMG.farmer} alt="A farmer inspecting a ripening crop" loading="lazy" />
          <div className="about__badge">
            <span className="about__badge-icon" aria-hidden="true">
              <Icon.award size={22} />
            </span>
            <div>
              <b>Since {COMPANY.established}</b>
              <span>Family-run, farmer-first</span>
            </div>
          </div>
        </Reveal>

        <Reveal className="about__body" delay={120}>
          <span className="eyebrow">Who we are</span>
          <h2>Built by people who still farm</h2>
          <p>
            AgriVista started in {COMPANY.established} as a single seed counter in Komarapalayam.
            We were farmers first, and we kept running into the same problem: inputs sold without
            any real diagnosis of what the field actually needed.
          </p>
          <p>
            So we built the business the other way round. Soil testing first, then a written plan,
            then the inputs — and an agronomist who comes back to see whether it worked.
          </p>

          <ul className="about__list">
            {POINTS.map((p) => {
              const I = Icon[p.icon]
              return (
                <li key={p.title}>
                  <span className="about__list-icon" aria-hidden="true">
                    <I size={15} />
                  </span>
                  <div>
                    <b>{p.title}</b>
                    <span>{p.text}</span>
                  </div>
                </li>
              )
            })}
          </ul>

          <a
            className="btn btn--primary"
            href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
              'Hello AgriVista, I would like to book a soil test.',
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon.whatsapp size={18} />
            Book a soil test
          </a>
        </Reveal>
      </div>
    </section>
  )
}
