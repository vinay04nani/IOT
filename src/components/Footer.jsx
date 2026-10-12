import Logo from './Logo.jsx'
import { brand, footerLinks } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Logo />
          <p>{brand.tagline}.</p>
        </div>
        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group} className="footer__col">
            <h4>{group}</h4>
            <ul>
              {links.map((l) => (
                <li key={l}><a href="#top">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} {brand.name}. All rights reserved.</span>
        <span>Privacy · Terms</span>
      </div>
    </footer>
  )
}
