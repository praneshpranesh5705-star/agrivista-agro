import { Icon } from './Icons'

const ITEMS = [
  { icon: 'seed', text: 'Certified seeds' },
  { icon: 'leaf', text: 'Organic nutrients' },
  { icon: 'drop', text: 'Drip irrigation' },
  { icon: 'shield', text: 'Crop protection' },
  { icon: 'gear', text: 'Farm equipment' },
  { icon: 'activity', text: 'Soil testing' },
  { icon: 'chart', text: 'Market linkage' },
  { icon: 'farmer', text: 'Field advisory' },
]

export default function Marquee() {
  // Duplicated once so the CSS translateX(-50%) loop is seamless.
  const loop = [...ITEMS, ...ITEMS]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {loop.map((item, i) => {
          const I = Icon[item.icon]
          return (
            <span className="marquee__item" key={`${item.text}-${i}`}>
              <I size={18} />
              {item.text}
            </span>
          )
        })}
      </div>
    </div>
  )
}
