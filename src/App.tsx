import { t } from 'gt-react/browser';
import { setLocale, getLocale } from 'gt-react/browser';
import { NAV_ITEMS } from './constants';
import './App.css';

// Tagged template literal example — module-level
const heroTitle = t`Welcome to the t() demo`;
const heroSubtitle = t`This app uses bootstrap() and the t() function for synchronous, module-level translations — no React context required.`;

function LocaleSwitcher() {
  const locales = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'fr', label: 'Français' },
    { code: 'ja', label: '日本語' },
  ];

  return (
    <select
      value={getLocale()}
      onChange={(e) => setLocale(e.target.value)}
      className="locale-switcher"
    >
      {locales.map((l) => (
        <option key={l.code} value={l.code}>
          {l.label}
        </option>
      ))}
    </select>
  );
}

function App() {
  const name = 'World';

  return (
    <div className="app">
      <nav className="nav">
        <div className="nav-links">
          {NAV_ITEMS.map((item) => (
            <a key={item.path} href={item.path}>
              {item.label}
            </a>
          ))}
        </div>
        <LocaleSwitcher />
      </nav>

      <main className="main">
        <h1>{heroTitle}</h1>
        <p className="subtitle">{heroSubtitle}</p>

        <section className="features">
          <div className="feature">
            <h2>🚀 {t('Module-level strings')}</h2>
            <p>{t('Translations are resolved at import time. No hooks, no context, no wrappers.')}</p>
          </div>

          <div className="feature">
            <h2>🏷️ {t('Tagged templates')}</h2>
            <p>{t`Hello, ${name}! Tagged template literals make interpolation natural.`}</p>
          </div>

          <div className="feature">
            <h2>⚡ {t('Zero overhead')}</h2>
            <p>{t('bootstrap() loads all translations upfront. t() reads them synchronously — no async, no loading states.')}</p>
          </div>
        </section>

        <p className="hint">
          {t('Switch the language above — the page reloads with new translations.')}
        </p>
      </main>
    </div>
  );
}

export default App;
