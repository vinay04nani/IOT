import { useState } from 'react'
import Icon from './Icon.jsx'
import { categories, products } from '../data/site.js'

const fmt = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

export default function Products({ cart, onAdd }) {
  const [active, setActive] = useState('All')
  const visible = active === 'All' ? products : products.filter((p) => p.category === active)

  return (
    <section className="section" id="products">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Our products</span>
          <h2>Hardware you can deploy today</h2>
          <p>Every device is designed, tested and supported by our own engineering team.</p>
        </div>

        <div className="filters" role="tablist" aria-label="Product categories">
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={active === c}
              className={`chip ${active === c ? 'chip--active' : ''}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid--3">
          {visible.map((p) => {
            const inCart = cart[p.id] || 0
            return (
              <article key={p.id} className="card product">
                {p.badge && <span className="product__badge">{p.badge}</span>}
                <div className="product__media">
                  <Icon name={p.icon} size={56} />
                </div>
                <span className="product__cat">{p.category}</span>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <ul className="product__specs">
                  {p.specs.map((s) => (
                    <li key={s}>
                      <Icon name="check" size={14} /> {s}
                    </li>
                  ))}
                </ul>
                <div className="product__foot">
                  <span className="product__price">{fmt.format(p.price)}</span>
                  <button className="btn btn--primary btn--sm" onClick={() => onAdd(p.id)}>
                    <Icon name="cart" size={16} />
                    {inCart ? `Added (${inCart})` : 'Add to cart'}
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
