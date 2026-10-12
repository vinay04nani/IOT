import { brand } from '../data/site.js'

export default function Logo() {
  return (
    <span className="logo">
      <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="url(#logoGrad)" />
        <rect x="8" y="11" width="16" height="12" rx="4" fill="none" stroke="#0b1020" strokeWidth="2" />
        <circle cx="13" cy="17" r="1.8" fill="#0b1020" />
        <circle cx="19" cy="17" r="1.8" fill="#0b1020" />
        <path d="M16 11V7" stroke="#0b1020" strokeWidth="2" strokeLinecap="round" />
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="32" y2="32">
            <stop stopColor="#22d3ee" />
            <stop offset="1" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
      </svg>
      <span className="logo__text">{brand.name}</span>
    </span>
  )
}
