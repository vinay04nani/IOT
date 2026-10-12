import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'
import Logo from './Logo.jsx'
import { navLinks } from '../data/site.js'

export default function Navbar({ cartCount }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav className={`nav__links ${open ? 'nav__links--open' : ''}`} aria-label="Main">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn--primary nav__cta-mobile" onClick={() => setOpen(false)}>
            Get a quote
          </a>
        </nav>

        <div className="nav__actions">
          <a href="#products" className="nav__cart" aria-label={`Cart, ${cartCount} items`}>
            <Icon name="cart" size={22} />
            {cartCount > 0 && <span className="nav__cart-count">{cartCount}</span>}
          </a>
          <a href="#contact" className="btn btn--primary nav__cta">
            Get a quote
          </a>
          <button
            className="nav__toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  )
}
