# Jay Joshi "JJ" — Executive Portfolio

A premium, modern, dark-themed executive technology portfolio for **Jay Joshi "JJ"** —
Engineering Leader in AI Platforms, AI Automation & Digital Transformation.

Built as a fast, static, single-page site suitable for senior executives,
clients, recruiters, board members, and technology leaders.

---

## 1. Project Overview

- **One-page portfolio** with smooth-scroll navigation.
- **Premium dark theme** with cybersecurity + AI platform aesthetic.
- **Executive-grade content**: Hero, Executive Summary, Impact Metrics,
  Core Expertise, Featured Leadership Areas, Experience Timeline (with
  expand/collapse cards), Technology Stack, Education, Resume Download,
  Contact, Footer.
- **SEO + Open Graph** metadata, JSON-LD `Person` schema, and sitemap.
- **Fully responsive**, accessible focus styles, reduced-motion support.
- **Zero backend** — pure static output. Deployable anywhere.

---

## 2. Tech Stack

| Layer       | Choice                                |
| ----------- | ------------------------------------- |
| Framework   | [Astro 4](https://astro.build) (static) |
| Styling     | [Tailwind CSS 3](https://tailwindcss.com) |
| Language    | TypeScript                             |
| Output      | Static (`dist/`)                       |
| Hosting     | Netlify · Vercel · GitHub Pages (any static host) |

Astro was selected over Next.js for **simplicity, speed, easier static hosting,
and a smaller dependency footprint** — exactly what an executive portfolio
needs.

---

## 3. Project Structure

```
jay-joshi-portfolio/
├── public/
│   ├── Jay-Joshi-Resume.pdf      ← Replace this with the real resume
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── ImpactMetrics.astro
│   │   ├── ExpertiseCards.astro
│   │   ├── ExperienceTimeline.astro
│   │   ├── TechStack.astro
│   │   ├── Education.astro
│   │   ├── ResumeDownload.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── data/
│   │   └── site.ts               ← All editable content lives here
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
├── netlify.toml
├── vercel.json
└── .github/workflows/deploy.yml  ← GitHub Pages CI
```

---

## 4. Install & Run Locally

Requirements: **Node 20+** and **npm** (or pnpm/yarn — adjust commands).

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:4321)
npm run dev

# Type-check + production build (outputs to dist/)
npm run build

# Preview the production build locally
npm run preview
```

---

## 5. Editing Content

**All editable text lives in [`src/data/site.ts`](src/data/site.ts).**
You generally do **not** need to touch the components to change copy.

Things you'll want to edit before going live:

| What                        | Where                                  |
| --------------------------- | -------------------------------------- |
| Email                       | `site.email` in `src/data/site.ts`     |
| LinkedIn URL                | `site.linkedin` in `src/data/site.ts`  |
| Location                    | `site.location` in `src/data/site.ts`  |
| SEO title / description     | `site.seo.*` in `src/data/site.ts`     |
| Experience roles            | `experience[]` in `src/data/site.ts`   |
| Tech stack                  | `techStack[]` in `src/data/site.ts`    |
| Education                   | `education[]` in `src/data/site.ts`    |
| Site canonical URL          | `site` field in `astro.config.mjs`     |

> Placeholders are marked with `[REPLACE]` comments in `src/data/site.ts`.

---

## 6. Updating the Resume PDF

Drop the real resume into the `public/` folder using **exactly** this name:

```
public/Jay-Joshi-Resume.pdf
```

The site links to `/Jay-Joshi-Resume.pdf`, so as long as the file is named
correctly inside `public/`, all "Download Resume" buttons will work.

A small placeholder PDF is included so the download works out-of-the-box —
overwrite it when ready.

---

## 7. Deployment

### 7.1 Netlify

The repo ships with `netlify.toml`.

1. Push the repository to GitHub/GitLab/Bitbucket.
2. In Netlify → **Add new site → Import from Git** → select the repo.
3. Build settings (already configured via `netlify.toml`):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** `20`
4. Click **Deploy**. Done.

For a custom domain: Netlify → **Domain settings → Add custom domain** →
update DNS as instructed. Netlify provisions HTTPS automatically.

### 7.2 Vercel

The repo ships with `vercel.json`.

1. Push the repository to GitHub.
2. In Vercel → **Add New Project** → import the repo.
3. Framework Preset should auto-detect as **Astro** (configured in `vercel.json`).
4. Build settings (auto-applied):
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
5. Click **Deploy**.

For a custom domain: Vercel → **Project → Settings → Domains** → add and
update DNS to Vercel's nameservers or use the recommended A/CNAME records.

### 7.3 GitHub Pages

The repo includes `.github/workflows/deploy.yml` for automated deploys.

1. Push to GitHub on the `main` branch.
2. Repo → **Settings → Pages** → **Source: GitHub Actions**.
3. Push again — the workflow builds and publishes the site automatically.

> **If you are using a project site URL** like
> `https://<user>.github.io/<repo>/`, set `base: "/<repo>"` and update `site`
> in `astro.config.mjs` *before* the first deploy. For a custom domain or a
> `<user>.github.io` (root) site, the defaults work as-is.

### 7.4 Any other static host (Cloudflare Pages, S3+CloudFront, etc.)

```bash
npm run build
# Upload the contents of `dist/` to your static host.
```

---

## 8. Custom Domain

1. Buy/own the domain at your registrar (e.g. Cloudflare, Namecheap).
2. Update `site` in `astro.config.mjs` to your final URL — this drives the
   canonical link, Open Graph URL, and sitemap.
3. Add the domain inside Netlify, Vercel, or your host of choice.
4. Update DNS records per the host's instructions.
5. HTTPS is provisioned automatically by Netlify/Vercel/Cloudflare.

---

## 9. Placeholders to Replace Before Going Live

| Item                          | File                                | Field                  |
| ----------------------------- | ----------------------------------- | ---------------------- |
| Email                         | `src/data/site.ts`                  | `site.email`           |
| LinkedIn URL                  | `src/data/site.ts`                  | `site.linkedin`        |
| Canonical site URL            | `astro.config.mjs`                  | `site`                 |
| Resume PDF                    | `public/Jay-Joshi-Resume.pdf`       | (replace the file)     |
| OG / social image (optional)  | `public/og-image.png`               | (add 1200×630 image)   |

---

## 10. Accessibility & Performance Notes

- Skip-link, focus rings, semantic landmarks (`header`, `main`, `footer`,
  `nav`, `section`, `ol`).
- Reduced-motion support honors `prefers-reduced-motion`.
- All animations are CSS-only and inexpensive — no client framework runtime
  loaded on the page.
- The only JavaScript shipped is a tiny inline IIFE for navbar interactions.

---

## 11. License

This portfolio is personal/professional content for Jay Joshi "JJ". Reuse the
**code/structure** as a starting point if you'd like — please replace all
personal content with your own before publishing.
