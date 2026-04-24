# Vite + React: `t()` Function Demo

This example app demonstrates the **`t()` synchronous string translation function** from `gt-react/browser` — a module-level translation approach that doesn't require React context.

## What This Showcases

- **`bootstrap()`** — Loads all translations before the app renders
- **`t()` function** — Synchronous, module-level string translation
- **Tagged template literals** — `t`Hello, ${name}!`` syntax for natural interpolation
- **`setLocale()` / `getLocale()`** — Locale management without React context
- **Module-level constants** — Translations resolved at import time (nav items, error messages, route labels)

## How It Works

Instead of wrapping your app in `<GTProvider>` and using hooks like `useGT`, this pattern:

1. Creates a `bootstrap.tsx` entry point that loads translations before any app code runs
2. Points `index.html` to `bootstrap.tsx` instead of `main.tsx`
3. Uses `t()` anywhere — including at module scope, outside React components

Switching locales triggers a full page reload (modules re-execute with new translations).

## Getting Started

```bash
npm install
npm run dev
```

## Translate for Production

```bash
npx gt translate
npm run build
```

You'll need a GT API key and project ID. Get them free at [dash.generaltranslation.com](https://dash.generaltranslation.com).

## Key Files

| File | Purpose |
|------|---------|
| `src/bootstrap.tsx` | Entry point — calls `bootstrap()` then imports `main.tsx` |
| `src/constants.ts` | Module-level translations using `t()` |
| `src/App.tsx` | UI with tagged templates, `setLocale()`, and `getLocale()` |
| `gt.config.json` | Translation config (locales, output path) |

## Learn More

- [`t()` API Reference](https://www.generaltranslation.com/docs/react/api/strings/t-function)
- [React Quickstart](https://www.generaltranslation.com/docs/react)
- [General Translation Docs](https://www.generaltranslation.com/docs)
