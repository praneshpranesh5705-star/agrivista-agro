import { CROP_CALENDAR } from '../data/content'
import { Reveal } from '../hooks/useReveal'

export default function CropCalendar() {
  return (
    <section className="section section--cream" id="calendar">
      <div className="wrap">
        <Reveal className="section-head section-head--center">
          <span className="eyebrow">Season planner</span>
          <h2>What to focus on, season by season</h2>
          <p>
            A quick reference for the three cropping seasons in our region. Ask us for a
            crop-specific calendar when you book a soil test.
          </p>
        </Reveal>

        <div className="calendar">
          {CROP_CALENDAR.map((c, i) => (
            <Reveal key={c.season} delay={i * 80} className="cal-card">
              <h3>{c.season}</h3>
              <div className="cal-card__months">{c.months}</div>
              <div className="cal-card__row">
                <b>Main crops</b>
                {c.crops}
              </div>
              <div className="cal-card__row">
                <b>Focus this season</b>
                {c.focus}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
