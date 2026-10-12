# IOT — Landing page

React + Vite landing page for an IoT & robotics startup that designs, builds and sells its own hardware.

## Sections
- **Hero** with animated robot / IoT-network illustration and key stats
- **Products** catalogue with category filter, prices and add-to-cart (cart count in the navbar)
- **Solutions** by industry
- **How it works** (4 steps)
- **Testimonials**
- **Contact / quote form**
- **Footer**

Fully responsive (mobile menu), dark theme, respects `prefers-reduced-motion`.

## Getting started
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the build
```

## Customising
All copy and data — brand name, email, products, prices, testimonials, stats — live in
[`src/data/site.js`](src/data/site.js). Styles are in [`src/index.css`](src/index.css)
(colours are CSS variables at the top). The contact form currently only shows a success
message; hook `handleSubmit` in `src/components/Contact.jsx` up to your backend or a form service.
