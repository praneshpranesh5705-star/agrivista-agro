import { useState } from 'react'
import { COMPANY } from '../data/content'
import { Icon } from './Icons'
import { Reveal } from '../hooks/useReveal'

const INTERESTS = [
  'Seeds & saplings',
  'Nutrients & fertilizers',
  'Crop protection',
  'Irrigation systems',
  'Farm equipment',
  'Soil testing & advisory',
  'Bulk / dealer enquiry',
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    village: '',
    interest: INTERESTS[0],
    message: '',
  })

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    // No backend on a static site: hand the enquiry to WhatsApp so it actually
    // reaches the business instead of silently going nowhere.
    const text = [
      `New enquiry from the website`,
      ``,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.village ? `Village / Town: ${form.village}` : null,
      `Interested in: ${form.interest}`,
      form.message ? `` : null,
      form.message ? `Message: ${form.message}` : null,
    ]
      .filter(Boolean)
      .join('\n')

    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
    setSent(true)
  }

  return (
    <section className="section" id="contact">
      <div className="wrap">
        <Reveal className="section-head section-head--center">
          <span className="eyebrow">Get in touch</span>
          <h2>Tell us about your farm</h2>
          <p>
            Send a photo of your crop on WhatsApp and we will usually reply the same day. For
            quotations and bulk orders, use the form.
          </p>
        </Reveal>

        <div className="contact">
          <Reveal className="contact__info">
            <a className="contact__row" href={COMPANY.phoneHref}>
              <span className="contact__row-icon" aria-hidden="true">
                <Icon.phone size={20} />
              </span>
              <div>
                <b>Call us</b>
                <p>{COMPANY.phone}</p>
              </div>
            </a>

            <a
              className="contact__row"
              href={`https://wa.me/${COMPANY.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact__row-icon" aria-hidden="true">
                <Icon.whatsapp size={20} />
              </span>
              <div>
                <b>WhatsApp</b>
                <p>Send a crop photo for a quick diagnosis</p>
              </div>
            </a>

            <a className="contact__row" href={`mailto:${COMPANY.email}`}>
              <span className="contact__row-icon" aria-hidden="true">
                <Icon.mail size={20} />
              </span>
              <div>
                <b>Email</b>
                <p>{COMPANY.email}</p>
              </div>
            </a>

            <div className="contact__row">
              <span className="contact__row-icon" aria-hidden="true">
                <Icon.pin size={20} />
              </span>
              <div>
                <b>Visit the shop</b>
                <p>{COMPANY.address}</p>
              </div>
            </div>

            <div className="contact__row">
              <span className="contact__row-icon" aria-hidden="true">
                <Icon.clock size={20} />
              </span>
              <div>
                <b>Opening hours</b>
                <p>{COMPANY.hours}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form className="form" onSubmit={submit}>
              <h3>Request a quotation</h3>
              <p className="form__sub">
                We reply within one working day. No spam, no sales calls you did not ask for.
              </p>

              {sent && (
                <div className="form__ok" role="status">
                  <Icon.checkCircle size={19} />
                  <span>
                    Your enquiry has been opened in WhatsApp — press send there and it reaches us
                    directly. If WhatsApp did not open, call {COMPANY.phone}.
                  </span>
                </div>
              )}

              <div className="form__grid">
                <div className="field">
                  <label htmlFor="f-name">Your name *</label>
                  <input
                    id="f-name"
                    required
                    value={form.name}
                    onChange={set('name')}
                    placeholder="e.g. Muthusamy R"
                  />
                </div>

                <div className="field">
                  <label htmlFor="f-phone">Phone number *</label>
                  <input
                    id="f-phone"
                    required
                    type="tel"
                    value={form.phone}
                    onChange={set('phone')}
                    placeholder="10-digit mobile"
                  />
                </div>

                <div className="field">
                  <label htmlFor="f-village">Village / Town</label>
                  <input
                    id="f-village"
                    value={form.village}
                    onChange={set('village')}
                    placeholder="e.g. Komarapalayam"
                  />
                </div>

                <div className="field">
                  <label htmlFor="f-interest">Interested in</label>
                  <select id="f-interest" value={form.interest} onChange={set('interest')}>
                    {INTERESTS.map((i) => (
                      <option key={i}>{i}</option>
                    ))}
                  </select>
                </div>

                <div className="field field--full">
                  <label htmlFor="f-msg">Your requirement</label>
                  <textarea
                    id="f-msg"
                    value={form.message}
                    onChange={set('message')}
                    placeholder="Crop, acreage, and what you need — e.g. 3 acres paddy, need seed and a soil test."
                  />
                </div>
              </div>

              <button className="btn btn--primary btn--block btn--lg" type="submit" style={{ marginTop: 20 }}>
                <Icon.send size={18} />
                Send enquiry
              </button>

              <p className="form__note">
                This form opens WhatsApp with your details pre-filled, so your enquiry reaches us
                immediately. We never share your number with third parties.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
