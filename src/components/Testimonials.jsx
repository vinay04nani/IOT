import Icon from './Icon.jsx'
import { testimonials } from '../data/site.js'

export default function Testimonials() {
  return (
    <section className="section section--alt" id="testimonials">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Testimonials</span>
          <h2>Teams that run on our hardware</h2>
        </div>
        <div className="grid grid--3">
          {testimonials.map((t) => (
            <figure key={t.name} className="card quote">
              <div className="quote__stars" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="star" size={16} />
                ))}
              </div>
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>
                <span className="avatar">{t.name.split(' ').map((w) => w[0]).join('')}</span>
                <span>
                  <strong>{t.name}</strong>
                  <small>{t.role}</small>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
