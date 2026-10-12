import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Products from './components/Products.jsx'
import Solutions from './components/Solutions.jsx'
import Process from './components/Process.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [cart, setCart] = useState({})
  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0)
  const addToCart = (id) => setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }))

  return (
    <>
      <Navbar cartCount={cartCount} />
      <main>
        <Hero />
        <Products cart={cart} onAdd={addToCart} />
        <Solutions />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
