import Icon from './Icon.jsx'
import { solutions } from '../data/site.js'

export default function Solutions() {
  return (
    <section className="section section--alt" id="solutions">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Solutions</span>
          <h2>Built for real-world industries</h2>
          <p>Off-the-shelf products or fully custom hardware — we take you from prototype to production.</p>
        </div>
        <div className="grid grid--3">
          {solutions.map((s) => (
            <div key={s.title} className="card feature">
              <div className="feature__icon">
                <Icon name={s.icon} size={26} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
