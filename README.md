# Mane Capital — Website

Modern, minimalistic website for **Mane Capital**, an independent investment banking boutique based in Sofia, Bulgaria.

Built with [Next.js 15](https://nextjs.org) (App Router), [Tailwind CSS v4](https://tailwindcss.com) and TypeScript. Fully static, fast, responsive and SEO-optimised.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploying to Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import this repository (`Hodan1980/mane`).
2. Vercel auto-detects Next.js — no configuration needed. Click **Deploy**.
3. (Optional) Add your custom domain (e.g. `manecapital.com`) under **Project → Settings → Domains**.

## Project structure

```
app/            Pages (App Router): /, /about, /services, /team, /network, /projects, /news, /contact
components/     Header, Footer, Tombstone, section primitives
content/        All editable site content (services, team bios, deals, news, offices)
```

## Editing content

All copy lives in plain TypeScript files under [`content/`](content/) — no CMS needed:

| File                  | What it contains                          |
| --------------------- | ----------------------------------------- |
| `content/site.ts`     | Company name, taglines, contact details   |
| `content/services.ts` | Service groups and descriptions           |
| `content/team.ts`     | Partner bios                              |
| `content/network.ts`  | Partner network                           |
| `content/projects.ts` | Current engagements & completed deals     |
| `content/news.ts`     | News archive                              |
| `content/offices.ts`  | Office addresses, phones, emails          |
