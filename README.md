# Oravie Holidays — React Enterprise App

> **Stack**: React 18 + Vite 5 + CSS Modules

---

## 🚀 Getting Started

```bash
npm install
npm run dev        # start dev server on http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview production build
```

---

## 📁 Folder Structure

```
oravie-holidays/
├── index.html                         # Vite entry HTML (Google Fonts loaded here)
├── vite.config.js                     # Vite + React plugin config
├── package.json
│
└── src/
    ├── main.jsx                       # ReactDOM.createRoot – app bootstrap
    ├── App.jsx                        # Root component – composes layout + sections
    │
    ├── styles/
    │   ├── variables.css              # Design tokens (colors, fonts, spacing)
    │   └── globals.css                # CSS reset + shared utility classes
    │
    ├── data/                          # Pure JS data files (no React)
    │   ├── heroSlides.js              # Hero background images & copy
    │   ├── featuredMoments.js         # Carousel destination circles
    │   ├── destinations.js            # Destination grid cards
    │   ├── visaCards.js               # Visa country cards
    │   ├── whyUsItems.js              # "Why Choose Us" feature list
    │   └── testimonials.js            # Customer review objects
    │
    ├── hooks/                         # Reusable custom React hooks
    │   ├── useSlider.js               # Cyclic index + auto-play timer
    │   └── useScrollNav.js            # Scroll threshold detector (for navbar)
    │
    ├── components/
    │   ├── common/                    # Shared, generic UI atoms
    │   │   ├── Button.jsx             # Polymorphic button/anchor with variants
    │   │   └── SectionBadge.jsx       # Eyebrow label above headings
    │   │
    │   ├── layout/                    # Page-level structural components
    │   │   ├── Navbar.jsx             # Fixed top nav (logo + links + CTA)
    │   │   ├── Navbar.module.css
    │   │   ├── Footer.jsx             # 4-column footer
    │   │   └── Footer.module.css
    │   │
    │   └── sections/                  # One folder per page section
    │       ├── Hero/
    │       │   ├── Hero.jsx           # Auto-rotating slide hero
    │       │   └── Hero.module.css
    │       │
    │       ├── FeaturedMoments/
    │       │   ├── FeaturedMoments.jsx  # Carousel + BookingWidget
    │       │   └── FeaturedMoments.module.css
    │       │
    │       ├── Destinations/
    │       │   ├── Destinations.jsx   # Masonry destination grid
    │       │   └── Destinations.module.css
    │       │
    │       ├── VisaSection/
    │       │   ├── VisaSection.jsx    # Visa country cards grid
    │       │   └── VisaSection.module.css
    │       │
    │       ├── WhyUs/
    │       │   ├── WhyUs.jsx          # 3×2 feature grid
    │       │   └── WhyUs.module.css
    │       │
    │       ├── Testimonials/
    │       │   ├── Testimonials.jsx   # Responsive testimonial slider
    │       │   └── Testimonials.module.css
    │       │
    │       └── CTASection/
    │           ├── CTASection.jsx     # Gold CTA banner
    │           └── CTASection.module.css
```

---

## 🏗 Architecture Decisions

| Decision | Rationale |
|---|---|
| **CSS Modules** | Scoped styles per component; no class name collisions; zero runtime cost |
| **`data/` files** | Data separated from UI; easy to swap for an API call later |
| **`hooks/`** | Slider and scroll logic reused across components without prop-drilling |
| **`common/` atoms** | `Button` and `SectionBadge` ensure consistent design tokens everywhere |
| **CSS Variables** | All brand colours/fonts in `variables.css`; change once, reflected everywhere |
| **Vite** | Sub-second HMR, ESM-native bundling, zero config for React |

---

## 🎨 Design Tokens

All colours are defined in `src/styles/variables.css`:

| Token | Value | Usage |
|---|---|---|
| `--gold` | `#B8860B` | Primary accent |
| `--gold-light` | `#D4A843` | Hover states, headings |
| `--cream` | `#F9F5EE` | Page background |
| `--dark-warm` | `#2A2118` | Dark sections, footer |
| `--font-serif` | Cormorant Garamond | Display headings |
| `--font-sans` | Josefin Sans | Body, nav, labels |

---

## ✏️ Adding a New Section

1. Create `src/components/sections/MySection/MySection.jsx` + `MySection.module.css`
2. Add any static data to `src/data/mySectionData.js`
3. Import and render `<MySection />` in `src/App.jsx`
