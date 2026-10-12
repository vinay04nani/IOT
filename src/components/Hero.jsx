import Icon from './Icon.jsx'
import { stats } from '../data/site.js'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="eyebrow">
            <span className="pulse-dot" /> Now shipping: Rover X1
          </span>
          <h1>
            Build the future with <span className="gradient-text">smart IoT</span> &amp;{' '}
            <span className="gradient-text">robotics</span>
          </h1>
          <p className="hero__lead">
            We design, build and sell connected devices and intelligent robots — from plug-and-play
            sensors to autonomous machines — all managed from one cloud platform.
          </p>
          <div className="hero__ctas">
            <a href="#products" className="btn btn--primary btn--lg">
              Shop products <Icon name="arrow" size={18} />
            </a>
            <a href="#contact" className="btn btn--ghost btn--lg">
              Talk to an engineer
            </a>
          </div>
          <ul className="hero__trust">
            <li><Icon name="check" size={16} /> Designed &amp; assembled in-house</li>
            <li><Icon name="check" size={16} /> 2-year warranty</li>
            <li><Icon name="check" size={16} /> Free shipping over $199</li>
          </ul>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <HeroIllustration />
        </div>
      </div>

      <div className="container">
        <dl className="stats">
          {stats.map((s) => (
            <div key={s.label} className="stats__item">
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function HeroIllustration() {
  // A robot at the centre connected to orbiting IoT nodes.
  const nodes = [
    { x: 60, y: 80 },
    { x: 360, y: 70 },
    { x: 380, y: 300 },
    { x: 40, y: 320 },
    { x: 210, y: 20 },
  ]
  return (
    <svg viewBox="0 0 420 400" className="hero-svg">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#a78bfa" />
        </linearGradient>
        <radialGradient id="g2" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#22d3ee" stopOpacity="0.35" />
          <stop offset="1" stopColor="#22d3ee" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="210" cy="200" r="170" fill="url(#g2)" />
      <circle cx="210" cy="200" r="140" className="orbit" />
      <circle cx="210" cy="200" r="190" className="orbit orbit--slow" />

      {nodes.map((n, i) => (
        <g key={i}>
          <line x1="210" y1="200" x2={n.x} y2={n.y} className="link" style={{ animationDelay: `${i * 0.4}s` }} />
          <circle cx={n.x} cy={n.y} r="16" className="node" />
          <circle cx={n.x} cy={n.y} r="5" fill="url(#g1)" className="node-core" style={{ animationDelay: `${i * 0.3}s` }} />
        </g>
      ))}

      <g className="robot">
        <line x1="210" y1="118" x2="210" y2="100" stroke="url(#g1)" strokeWidth="4" strokeLinecap="round" />
        <circle cx="210" cy="94" r="8" fill="url(#g1)" className="antenna" />
        <rect x="150" y="118" width="120" height="92" rx="26" className="robot-head" />
        <rect x="166" y="138" width="88" height="48" rx="16" className="robot-face" />
        <circle cx="191" cy="162" r="9" fill="url(#g1)" className="eye" />
        <circle cx="229" cy="162" r="9" fill="url(#g1)" className="eye" />
        <rect x="165" y="220" width="90" height="70" rx="18" className="robot-head" />
        <rect x="190" y="238" width="40" height="8" rx="4" fill="url(#g1)" opacity="0.8" />
        <rect x="190" y="254" width="26" height="8" rx="4" fill="url(#g1)" opacity="0.5" />
        <rect x="128" y="228" width="26" height="54" rx="13" className="robot-head" />
        <rect x="266" y="228" width="26" height="54" rx="13" className="robot-head" />
      </g>
    </svg>
  )
}
