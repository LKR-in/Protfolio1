# Lav Blog

Portfolio site for Lavjeet Kumar Rai, built with React, TypeScript, Tailwind CSS, and Vite.

## Local Development

```bash
npm ci
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Deployment

Use Node.js `^20.19.0` or `>=22.12.0`.

### Vercel

The included `vercel.json` is ready for deployment:

- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: `dist`

### Netlify

The included `netlify.toml` is ready for deployment:

- Build command: `npm run build`
- Publish directory: `dist`
