// Central icon set — keeps every component importing from one place.
import {
  FiCheck,
  FiChevronDown,
  FiChevronRight,
  FiDroplet,
  FiMail,
  FiMapPin,
  FiPhone,
  FiPlus,
  FiShield,
  FiTool,
  FiTrendingUp,
  FiX,
  FiMenu,
  FiStar,
  FiClock,
  FiAward,
  FiTruck,
  FiUsers,
  FiActivity,
  FiSun,
  FiLayers,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
} from 'react-icons/fi'
import { GiPlantSeed, GiPlantRoots, GiFarmer, GiWheat, GiFruitTree } from 'react-icons/gi'
import { FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa'

export const Icon = {
  check: FiCheck,
  chevronDown: FiChevronDown,
  chevronRight: FiChevronRight,
  drop: FiDroplet,
  mail: FiMail,
  pin: FiMapPin,
  phone: FiPhone,
  plus: FiPlus,
  shield: FiShield,
  gear: FiTool,
  chart: FiTrendingUp,
  close: FiX,
  menu: FiMenu,
  star: FiStar,
  clock: FiClock,
  award: FiAward,
  truck: FiTruck,
  users: FiUsers,
  activity: FiActivity,
  sun: FiSun,
  layers: FiLayers,
  send: FiSend,
  checkCircle: FiCheckCircle,
  alert: FiAlertCircle,
  seed: GiPlantSeed,
  leaf: GiPlantRoots,
  farmer: GiFarmer,
  wheat: GiWheat,
  tree: GiFruitTree,
  whatsapp: FaWhatsapp,
  facebook: FaFacebookF,
  instagram: FaInstagram,
  youtube: FaYoutube,
  linkedin: FaLinkedinIn,
}

/** Resolve a string key from the data layer to a component. */
export function getIcon(key) {
  return Icon[key] || Icon.leaf
}

export function Stars({ value = 5, size = 14 }) {
  const full = Math.round(value)
  return (
    <span className="stars" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Icon.star
          key={i}
          size={size}
          fill={i < full ? 'currentColor' : 'none'}
          strokeWidth={i < full ? 0 : 1.6}
        />
      ))}
    </span>
  )
}
