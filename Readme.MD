# Truestead ($STEAD)

Pixel/terminal-style landing page for **Truestead**, a Real World Asset (RWA)
protocol bringing real estate, precious metals, treasury bills and
infrastructure on-chain. Built to accompany a $STEAD token launch on
[Virtuals.io](https://virtuals.io).

## Structure

```
truestead/
├── index.html      # page markup
├── style.css        # pixel/CRT theme, layout, responsive rules
├── script.js        # boot sequence, terminal type-out, mobile nav
└── assets/
    ├── logo.png       # Truestead pixel logo
    └── hero-rwa.png   # RWA overview banner image
```

## Deploy

This is a static site — no build step required.

- **GitHub Pages**: push this folder to a repo, then enable Pages on the
  `main` branch (root folder).
- **Vercel / Netlify**: import the repo, no framework preset needed
  (static site).

## Customize

- Ticker, network and asset copy live directly in `index.html`.
- Colors, type and the pixel-corner card shape are defined as CSS variables
  at the top of `style.css` (`:root`).
- Social links, contract address and docs link are placeholders in the
  footer and CTA (`#`) — update once the $STEAD contract is deployed.
