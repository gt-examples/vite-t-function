import { t } from 'gt-react/browser';
import { setLocale, getLocale } from 'gt-react/browser';
import { NAV_ITEMS } from './constants';
import './App.css';

// Tagged template literal — module-level
const heroTitle = t`Welcome to the t() demo`;
const heroSubtitle = t`Synchronous, module-level translations with no React context required.`;

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
        <div className="hero">
          <h1>{heroTitle}</h1>
          <p className="subtitle">{heroSubtitle}</p>
        </div>

        <section className="features">
          <div className="feature">
            <h2><span className="feature-emoji">🚀</span> {t('Module-level strings')}</h2>
            <p>{t('Translations are resolved at import time. No hooks, no context, no wrappers.')}</p>
          </div>

          <div className="feature">
            <h2><span className="feature-emoji">🏷️</span> {t('Tagged templates')}</h2>
            <p>{t`Hello, ${name}! Tagged template literals make interpolation natural.`}</p>
          </div>

          <div className="feature">
            <h2><span className="feature-emoji">⚡</span> {t('Zero overhead')}</h2>
            <p>{t('bootstrap() loads all translations upfront. t() reads them synchronously — no async, no loading states.')}</p>
          </div>
        </section>

        <div className="code-block">
          <code>
            <span className="comment">{'// constants.ts — translations at module scope'}</span><br />
            <span className="keyword">import</span>{' { t } '}<span className="keyword">from</span>{' '}<span className="string">'gt-react/browser'</span>;<br />
            <br />
            <span className="keyword">export const</span>{' NAV_ITEMS = ['}<br />
            {'  { label: t('}<span className="string">'Home'</span>{'), path: '}<span className="string">'/'</span>{' },'}<br />
            {'  { label: t('}<span className="string">'About'</span>{'), path: '}<span className="string">'/about'</span>{' },'}<br />
            {'];'}
          </code>
        </div>

        <p className="hint">
          {t('Switch the language above — the page reloads with new translations.')}
        </p>
      </main>
    </div>
  );
}

export default App;
