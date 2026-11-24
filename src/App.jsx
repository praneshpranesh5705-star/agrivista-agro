import { useCallback, useState } from 'react'
import { COMPANY } from './data/content'
import { Icon } from './components/Icons'

import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Categories from './components/Categories'
import Products from './components/Products'
import Services from './components/Services'
import Process from './components/Process'
import About from './components/About'
import CropCalendar from './components/CropCalendar'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import CtaBand from './components/CtaBand'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProductModal from './components/ProductModal'

export default function App() {
  const [activeProduct, setActiveProduct] = useState(null)

  const navigate = useCallback((id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [])

  return (
    <>
      <a
        href="#products"
        className="btn btn--primary"
        style={{
          position: 'absolute',
          left: -9999,
          top: 0,
          zIndex: 999,
        }}
        onFocus={(e) => {
          e.currentTarget.style.left = '16px'
          e.currentTarget.style.top = '16px'
        }}
        onBlur={(e) => {
          e.currentTarget.style.left = '-9999px'
        }}
      >
        Skip to products
      </a>

      <Header onNavigate={navigate} />

      <main>
        <Hero onNavigate={navigate} />
        <Marquee />
        <Categories onNavigate={navigate} />
        <Products onOpen={setActiveProduct} />
        <Services />
        <Process />
        <About />
        <CropCalendar />
        <Testimonials />
        <Faq />
        <CtaBand onNavigate={navigate} />
        <Contact />
      </main>

      <Footer onNavigate={navigate} />

      <a
        className="wa-float"
        href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
          'Hello AgriVista, I need some advice about my farm.',
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <Icon.whatsapp size={24} />
        <span>Chat with us</span>
      </a>

      <ProductModal product={activeProduct} onClose={() => setActiveProduct(null)} />
    </>
  )
}
