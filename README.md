# AgriVista Agro Solutions — Agriculture Business Website

A production-ready marketing site for an agriculture input and advisory business:
certified seeds, organic nutrients, crop protection, drip irrigation, farm
equipment and soil testing.

Built with **React 19 + Vite 7**. No backend, no database, no API keys — it
builds to static files and deploys anywhere.

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # → dist/
npm run preview    # serve the production build locally
```

Requires Node 18 or newer.

---

## What's on the page

| Section | Purpose |
|---|---|
| Hero | Value proposition, trust signals, live stats card |
| Marquee | Scrolling strip of the six supply categories |
| Categories | Six category cards with imagery |
| Products | Filterable catalogue with detail modal |
| Services | Six service offerings |
| Process | Four-step engagement model |
| About | Company story and differentiators |
| Crop calendar | Kharif / Rabi / Summer reference |
| Testimonials | Three farmer quotes |
| FAQ | Five accordion questions |
| CTA band | Soil-test booking prompt |
| Contact | Contact details + quotation form |
| Footer | Navigation, categories, address, social |

Plus a floating WhatsApp button on every screen.

---

## Customising the content

**Everything editable lives in one file: `src/data/content.js`.**

| Export | What it controls |
|---|---|
| `COMPANY` | Name, phone, WhatsApp number, email, address, hours, GSTIN |
| `IMG` | All photography URLs |
| `NAV_LINKS` | Header navigation |
| `STATS` | The four hero numbers |
| `CATEGORIES` | Six category cards |
| `PRODUCTS` | Product catalogue (name, price, specs, badge) |
| `SERVICES` | Six service cards |
| `PROCESS` | Four-step process |
| `TESTIMONIALS` | Farmer quotes |
| `FAQS` | Accordion questions |
| `CROP_CALENDAR` | Season reference table |

### Changing the phone and WhatsApp number

Edit `COMPANY.phone`, `COMPANY.phoneHref` and `COMPANY.whatsapp` in
`src/data/content.js`. The WhatsApp number must be **digits only, with country
code, no `+`** — e.g. `919876543210`.

### Replacing the photography

The six images are currently third-party stock photos referenced by URL in the
`IMG` map. **Replace them with the business's own photographs** — this is the
single biggest visual improvement available.

1. Put your files in `public/img/` (e.g. `public/img/hero.jpg`)
2. Change the `IMG` entry to the local path:

```js
export const IMG = {
  hero: './img/hero.jpg',
  farmer: './img/farmer.jpg',
  // ...
}
```

Recommended: 1600px wide, JPEG quality 80, under 250 KB each.

### Adding a product

Append an object to `PRODUCTS` in `src/data/content.js`:

```js
{
  id: 'p7',
  name: 'Your product name',
  category: 'seeds',            // must match a CATEGORIES id
  categoryLabel: 'Seeds & Saplings',
  price: 1200,
  unit: 'per 10 kg bag',
  rating: 4.5,
  reviews: 0,
  badge: 'New',                 // optional
  image: IMG.seeds,
  short: 'One-line description.',
  specs: [
    { k: 'Spec name', v: 'Spec value' },
  ],
}
```

The filter chips and modal pick it up automatically.

---

## The contact form

There is no backend, so the form **opens WhatsApp with the enquiry pre-filled**.
That is deliberate: a form that silently posts nowhere would lose real
customers. The user presses send in WhatsApp and the message reaches the
business directly.

If you later want email delivery instead, point the `submit` handler in
`src/components/Contact.jsx` at a service such as Formspree, Resend or a
serverless function.

---

## Deployment

### GitHub Pages (included)

`.github/workflows/deploy.yml` builds and deploys on every push to `main`.

1. Push to `main`
2. Repo **Settings → Pages → Source: GitHub Actions**
3. The site appears at `https://<user>.github.io/<repo>/`

`vite.config.js` sets `base: './'`, so the build works on a project subpath
without further configuration.

### Vercel / Netlify

- Build command: `npm run build`
- Output directory: `dist`

No environment variables are required.

### Any static host

Run `npm run build` and upload the contents of `dist/`.

---

## Project structure

```
├── .github/workflows/deploy.yml   GitHub Pages deploy
├── public/favicon.svg
├── src/
│   ├── App.jsx                    Page composition
│   ├── main.jsx                   Entry point
│   ├── index.css                  Design system (all styles)
│   ├── data/content.js            ← ALL editable content
│   ├── hooks/useReveal.jsx        Scroll reveal, active section, scroll lock
│   └── components/
│       ├── Icons.jsx              Central icon set
│       ├── Header.jsx             Nav + mobile drawer
│       ├── Hero.jsx
│       ├── Marquee.jsx
│       ├── Categories.jsx
│       ├── Products.jsx           Filterable grid
│       ├── ProductModal.jsx
│       ├── Services.jsx
│       ├── Process.jsx
│       ├── About.jsx
│       ├── CropCalendar.jsx
│       ├── Testimonials.jsx
│       ├── Faq.jsx
│       ├── CtaBand.jsx
│       ├── Contact.jsx
│       └── Footer.jsx
├── index.html                     Meta tags, fonts, OG cards
├── vite.config.js
└── package.json
```

---

## Design system

Defined as CSS custom properties at the top of `src/index.css`.

| Token | Value | Use |
|---|---|---|
| `--green-900` | `#0b2e1a` | Dark sections, headings |
| `--green-700` | `#166534` | Primary buttons |
| `--gold-400` | `#f59e0b` | Accents, CTAs |
| `--cream` | `#fdfbf6` | Page background |
| `--ink` | `#14261c` | Body text |

Typography: **Fraunces** (display, serif) and **Inter** (body), loaded from
Google Fonts in `index.html`.

---

## Accessibility

- Semantic landmarks (`header`, `main`, `footer`, `nav`)
- Skip-to-content link
- Visible focus rings on all interactive elements
- `aria-expanded` on the mobile menu and FAQ accordions
- `aria-modal` and Escape-to-close on the product modal
- Body scroll locked while the drawer or modal is open
- `prefers-reduced-motion` disables all animation
- Body text meets WCAG AA contrast

---

## Browser support

Chrome, Edge, Firefox and Safari — current and previous major versions. Uses
`IntersectionObserver` (with a graceful fallback) and CSS `grid-template-rows`
animation for the FAQ.

---

## Licence

Site code: MIT. Photography: third-party stock, replace before commercial use.
