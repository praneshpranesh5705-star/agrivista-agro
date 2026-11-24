// ---------------------------------------------------------------------------
// AgriVista Agro Solutions — site content
// All copy and catalogue data lives here so the components stay presentational.
// ---------------------------------------------------------------------------

export const COMPANY = {
  name: 'AgriVista Agro Solutions',
  shortName: 'AgriVista',
  tagline: 'From Seed to Harvest',
  established: 2009,
  phone: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',
  whatsapp: '919876543210',
  email: 'hello@agrivistaagro.in',
  address: '142, Market Road, Komarapalayam, Namakkal District, Tamil Nadu 638183',
  hours: 'Mon – Sat, 8:00 AM – 7:00 PM',
  gst: '33ABCDE1234F1Z5',
}

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'products', label: 'Products' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export const STATS = [
  { value: '12,000+', label: 'Farmers served' },
  { value: '18,500', label: 'Acres under advisory' },
  { value: '240+', label: 'Product lines' },
  { value: '16 yrs', label: 'In the field' },
]

export const CATEGORIES = [
  {
    id: 'seeds',
    name: 'Seeds & Saplings',
    blurb: 'Certified, high-germination seed for cereals, pulses, vegetables and horticulture.',
    image: './img/seeds.jpg',
    icon: 'seed',
  },
  {
    id: 'nutrients',
    name: 'Nutrients & Fertilizers',
    blurb: 'Organic compost, bio-fertilizers and balanced NPK blends matched to your soil test.',
    image: './img/seedlings.jpg',
    icon: 'leaf',
  },
  {
    id: 'protection',
    name: 'Crop Protection',
    blurb: 'Bio-pesticides and integrated pest management inputs with safe-usage guidance.',
    image: './img/farmer.jpg',
    icon: 'shield',
  },
  {
    id: 'irrigation',
    name: 'Irrigation Systems',
    blurb: 'Drip and sprinkler design, supply and installation with subsidy paperwork support.',
    image: './img/drip.jpg',
    icon: 'drop',
  },
  {
    id: 'equipment',
    name: 'Farm Equipment',
    blurb: 'Hand tools, power sprayers, tillers and implements — sales, spares and service.',
    image: './img/tractor.jpg',
    icon: 'gear',
  },
  {
    id: 'advisory',
    name: 'Soil Testing & Advisory',
    blurb: 'Laboratory soil and water testing with a crop-wise nutrient plan you can act on.',
    image: './img/hero.jpg',
    icon: 'flask',
  },
]

export const PRODUCTS = [
  {
    id: 'p1',
    name: 'AgriVista Gold Paddy Seed',
    category: 'seeds',
    categoryLabel: 'Seeds & Saplings',
    price: 1450,
    unit: 'per 25 kg bag',
    rating: 4.8,
    reviews: 214,
    badge: 'Best seller',
    image: './img/seeds.jpg',
    short: 'High-yielding, blast-tolerant paddy variety suited to delta and canal command areas.',
    specs: [
      { k: 'Germination', v: '≥ 92%' },
      { k: 'Duration', v: '135 – 140 days' },
      { k: 'Yield potential', v: '28 – 32 bags/acre' },
      { k: 'Recommended season', v: 'Samba / Thaladi' },
    ],
  },
  {
    id: 'p2',
    name: 'Bio-Boost Organic Compost',
    category: 'nutrients',
    categoryLabel: 'Nutrients & Fertilizers',
    price: 620,
    unit: 'per 50 kg bag',
    rating: 4.6,
    reviews: 168,
    badge: 'Organic',
    image: './img/seedlings.jpg',
    short: 'Fully decomposed, enriched compost that rebuilds soil organic carbon and microbial life.',
    specs: [
      { k: 'Organic carbon', v: '≥ 18%' },
      { k: 'N – P – K', v: '1.2 – 0.8 – 1.0%' },
      { k: 'Moisture', v: '≤ 20%' },
      { k: 'Application', v: '200 kg/acre basal' },
    ],
  },
  {
    id: 'p3',
    name: 'Neem Shield Bio-Pesticide',
    category: 'protection',
    categoryLabel: 'Crop Protection',
    price: 480,
    unit: 'per 1 L bottle',
    rating: 4.5,
    reviews: 132,
    badge: 'Residue-free',
    image: './img/farmer.jpg',
    short: 'Cold-pressed neem formulation for sucking pests — safe for pollinators when sprayed at dusk.',
    specs: [
      { k: 'Azadirachtin', v: '1500 ppm' },
      { k: 'Target pests', v: 'Aphids, thrips, whitefly' },
      { k: 'Dosage', v: '3 ml / litre' },
      { k: 'Pre-harvest interval', v: 'Nil' },
    ],
  },
  {
    id: 'p4',
    name: 'Precision Drip Irrigation Kit',
    category: 'irrigation',
    categoryLabel: 'Irrigation Systems',
    price: 24500,
    unit: 'per acre installed',
    rating: 4.9,
    reviews: 96,
    badge: 'Subsidy eligible',
    image: './img/drip.jpg',
    short: 'Complete inline drip package with filter, valves and layout design — saves up to 60% water.',
    specs: [
      { k: 'Coverage', v: '1 acre (design included)' },
      { k: 'Emitter spacing', v: '40 / 60 cm' },
      { k: 'Water saving', v: 'Up to 60%' },
      { k: 'Warranty', v: '5 years on laterals' },
    ],
  },
  {
    id: 'p5',
    name: 'Battery Knapsack Sprayer 16 L',
    category: 'equipment',
    categoryLabel: 'Farm Equipment',
    price: 3850,
    unit: 'per unit',
    rating: 4.4,
    reviews: 187,
    badge: 'Serviceable',
    image: './img/tractor.jpg',
    short: 'Twin-mode battery and manual sprayer with four nozzles and a 12-month on-site warranty.',
    specs: [
      { k: 'Tank capacity', v: '16 litres' },
      { k: 'Battery', v: '12V 12Ah, 6–8 hr run' },
      { k: 'Nozzles', v: '4 (cone, fan, jet, twin)' },
      { k: 'Warranty', v: '12 months' },
    ],
  },
  {
    id: 'p6',
    name: 'Soil & Water Test Package',
    category: 'advisory',
    categoryLabel: 'Soil Testing & Advisory',
    price: 899,
    unit: 'per sample set',
    rating: 4.7,
    reviews: 74,
    badge: 'Lab certified',
    image: './img/hero.jpg',
    short: 'NABL-partner laboratory analysis of 12 soil parameters plus a crop-wise fertiliser schedule.',
    specs: [
      { k: 'Parameters', v: '12 (pH, EC, OC, N, P, K, S, Zn, Fe, Mn, Cu, B)' },
      { k: 'Turnaround', v: '5 – 7 working days' },
      { k: 'Includes', v: 'Written nutrient plan' },
      { k: 'Sampling', v: 'Field visit available' },
    ],
  },
]

export const SERVICES = [
  {
    id: 's1',
    title: 'Soil & Water Testing',
    icon: 'flask',
    text: 'Twelve-parameter laboratory analysis with a written, crop-wise nutrient schedule — not just a report card.',
    points: ['Field sampling on request', '5–7 day turnaround', 'Crop-wise fertiliser plan'],
  },
  {
    id: 's2',
    title: 'Irrigation Design & Installation',
    icon: 'drop',
    text: 'Survey, hydraulic design and installation of drip or sprinkler systems, including subsidy documentation.',
    points: ['Free field survey', 'Subsidy paperwork support', '5-year lateral warranty'],
  },
  {
    id: 's3',
    title: 'Crop Advisory & Field Visits',
    icon: 'leaf',
    text: 'Agronomists visit your field through the season to catch pest and nutrition problems early.',
    points: ['Scheduled season visits', 'Pest & disease diagnosis', 'WhatsApp photo triage'],
  },
  {
    id: 's4',
    title: 'Integrated Pest Management',
    icon: 'shield',
    text: 'Scouting-based, residue-conscious spray schedules that protect both yield and the market price of your produce.',
    points: ['Pheromone trap setup', 'Bio-pesticide first', 'Pre-harvest interval tracking'],
  },
  {
    id: 's5',
    title: 'Farm Mechanisation Support',
    icon: 'gear',
    text: 'Equipment selection, operator training, spares and on-site service so machines keep working.',
    points: ['Equipment demos', 'Operator training', 'On-site service'],
  },
  {
    id: 's6',
    title: 'Buyer & Market Linkage',
    icon: 'chart',
    text: 'We connect member farmers to mills, exporters and processors, and share daily mandi price trends.',
    points: ['Mandi price updates', 'Buyer introductions', 'Grading guidance'],
  },
]

export const PROCESS = [
  { step: '01', title: 'Talk to us', text: 'Call or send a WhatsApp photo of your crop and soil. We start from your actual field, not a catalogue.' },
  { step: '02', title: 'Test & plan', text: 'Soil and water testing, then a written plan: variety, nutrition, irrigation and a season calendar.' },
  { step: '03', title: 'Supply & install', text: 'Certified inputs delivered to your village, with irrigation installed and equipment commissioned.' },
  { step: '04', title: 'Follow through', text: 'Agronomist visits and WhatsApp support until harvest — and market linkage when you sell.' },
]

export const TESTIMONIALS = [
  {
    name: 'R. Muthusamy',
    place: 'Paddy farmer, Komarapalayam',
    text: 'The soil test changed how I fertilise. I cut urea by a third and still got two extra bags per acre. The agronomist actually walked my field.',
    rating: 5,
  },
  {
    name: 'K. Lakshmi',
    place: 'Vegetable grower, Pallipalayam',
    text: 'Their drip design fitted my odd-shaped plot properly. Water bill down, and the subsidy paperwork was handled without me running behind offices.',
    rating: 5,
  },
  {
    name: 'S. Arunachalam',
    place: 'Sugarcane farmer, Rasipuram',
    text: 'When borers appeared, they diagnosed it from a photo the same evening and sent the right bio-pesticide next morning. Saved the crop.',
    rating: 5,
  },
]

export const FAQS = [
  {
    q: 'Do you deliver to my village?',
    a: 'Yes. We deliver free within 25 km of Komarapalayam, and through a village-level dealer network beyond that. Bulk orders over ₹15,000 ship free across Namakkal, Erode and Salem districts.',
  },
  {
    q: 'Is the soil test worth it for a small holding?',
    a: 'Especially for a small holding. Over-fertilising is the most common way small farms lose money. A ₹899 test typically saves several thousand rupees of unnecessary fertiliser in the first season alone.',
  },
  {
    q: 'Can you help with drip irrigation subsidy?',
    a: 'We prepare the layout drawings, quotations and the full application set for the state micro-irrigation subsidy, and follow it up with the horticulture department on your behalf.',
  },
  {
    q: 'Are your products safe for organic certification?',
    a: 'Our Bio-Boost compost and Neem Shield range are permitted under NPOP organic standards. We clearly label which inputs are organic-approved and which are not, so you never risk your certification.',
  },
  {
    q: 'What if a product does not perform as promised?',
    a: 'Certified seed carries a germination guarantee — if a lot tests below the labelled germination, we replace it. Equipment carries manufacturer warranty with on-site service from our own technicians.',
  },
]

export const CROP_CALENDAR = [
  { season: 'Kharif', months: 'Jun – Sep', crops: 'Paddy, Maize, Cotton, Groundnut', focus: 'Basal nutrition, drainage, early pest scouting' },
  { season: 'Rabi', months: 'Oct – Jan', crops: 'Pulses, Millets, Vegetables', focus: 'Soil moisture management, micronutrients' },
  { season: 'Summer', months: 'Feb – May', crops: 'Vegetables, Fodder, Millets', focus: 'Irrigation scheduling, mulching, heat stress' },
]
