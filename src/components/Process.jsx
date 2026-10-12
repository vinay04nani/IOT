import { steps } from '../data/site.js'

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">How it works</span>
          <h2>From box to automation in minutes</h2>
        </div>
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s.title} className="step">
              <span className="step__num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
