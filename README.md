# Anand Raj — Portfolio (React)

Modern dark portfolio built with React 18. All content is centralised in one data file.

## 📁 File Structure

```
portfolio/
├── public/
│   └── index.html              ← HTML shell (font imports live here)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css   ← Fixed nav with scroll effect
│   │   ├── Hero.jsx / .css     ← Animated hero + code visual
│   │   ├── About.jsx / .css    ← Bio, stats, tech stack bars
│   │   ├── Skills.jsx / .css   ← Skill cards with hover glow
│   │   ├── Projects.jsx / .css ← Project cards grid
│   │   ├── Education.jsx / .css← Timeline section
│   │   ├── Contact.jsx / .css  ← Email + social links
│   │   └── Footer.jsx / .css   ← Footer
│   ├── data/
│   │   └── portfolio.js        ← ✅ ALL content here — edit this file only
│   ├── styles/
│   │   └── global.css          ← CSS variables, resets, animations
│   ├── App.jsx                 ← Root component — assembles everything
│   └── index.js                ← React entry point
├── package.json
└── README.md
```

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm start

# 3. Build for production
npm run build
```

## ✏️ Updating Content

**All your personal data lives in one place:**

```
src/data/portfolio.js
```

Edit that file to update:
- Your name, email, tagline, about paragraphs
- Stats, tech stack bars
- Skills cards
- Projects (title, description, links, tech tags)
- Education entries
- Social media links

No need to touch any component files — just update the data file.

## 🌐 Deploying to GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d build"
# Also add: "homepage": "https://Anand-Git07.github.io/portfolio"

npm run deploy
```
