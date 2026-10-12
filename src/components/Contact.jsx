import { useState } from 'react'
import Icon from './Icon.jsx'
import { brand } from '../data/site.js'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: wire this up to your backend, form service or CRM.
    setSent(true)
    e.currentTarget.reset()
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="cta">
          <div className="cta__copy">
            <span className="eyebrow">Let’s build together</span>
            <h2>Have a project in mind?</h2>
            <p>
              Need bulk pricing, a custom robot or an IoT pilot for your site? Tell us what you’re
              building and an engineer will get back to you within one business day.
            </p>
            <ul className="cta__info">
              <li><Icon name="mail" size={18} /> <a href={`mailto:${brand.email}`}>{brand.email}</a></li>
              <li><Icon name="pin" size={18} /> {brand.location}</li>
            </ul>
          </div>

          <form className="form" onSubmit={handleSubmit}>
            {sent ? (
              <div className="form__success" role="status">
                <Icon name="check" size={28} />
                <h3>Thanks! We’ll be in touch soon.</h3>
                <button type="button" className="btn btn--ghost" onClick={() => setSent(false)}>
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div className="form__row">
                  <label>
                    Name
                    <input name="name" required placeholder="Jane Doe" autoComplete="name" />
                  </label>
                  <label>
                    Email
                    <input name="email" type="email" required placeholder="jane@company.com" autoComplete="email" />
                  </label>
                </div>
                <label>
                  I’m interested in
                  <select name="interest" defaultValue="IoT devices">
                    <option>IoT devices</option>
                    <option>Robots</option>
                    <option>Maker / education kits</option>
                    <option>Custom hardware project</option>
                  </select>
                </label>
                <label>
                  Message
                  <textarea name="message" rows="4" placeholder="Tell us about your project…" />
                </label>
                <button type="submit" className="btn btn--primary btn--lg btn--block">
                  Send message <Icon name="arrow" size={18} />
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
