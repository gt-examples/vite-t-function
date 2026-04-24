import { useState } from 'react';
import { t } from 'gt-react/browser';
import { setLocale, getLocale } from 'gt-react/browser';
import { derive } from 'gt-react';
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

function getSubject(gender: string) {
  return gender === 'male' ? 'boy' : 'girl';
}

function DeriveDemo() {
  const [gender, setGender] = useState('male');

  return (
    <div className="derive-demo">
      <h2><span className="feature-emoji">🔤</span> {t('derive() — grammatical agreement')}</h2>
      <p className="derive-description">
        {t('derive() tells the compiler to create separate translations for each possible value, preserving grammatical agreement across languages.')}
      </p>
      <div className="derive-toggle">
        <button
          className={`toggle-btn ${gender === 'male' ? 'active' : ''}`}
          onClick={() => setGender('male')}
        >
          👦 {t('Boy')}
        </button>
        <button
          className={`toggle-btn ${gender === 'female' ? 'active' : ''}`}
          onClick={() => setGender('female')}
        >
          👧 {t('Girl')}
        </button>
      </div>
      <div className="derive-result">
        <p className="derive-sentence">
          {t`The ${derive(getSubject(gender))} is playing in the park.`}
        </p>
      </div>
      <div className="code-block">
        <code>
          <span className="comment">{'// Two translations are generated:'}</span><br />
          <span className="comment">{'// "The boy is playing in the park."'}</span><br />
          <span className="comment">{'// "The girl is playing in the park."'}</span><br />
          <br />
          <span className="keyword">function</span>{' getSubject(gender) {'}<br />
          {'  '}<span className="keyword">return</span>{' gender === '}<span className="string">"male"</span>{' ? '}<span className="string">"boy"</span>{' : '}<span className="string">"girl"</span>;<br />
          {'}'}<br />
          <br />
          t<span className="string">{"`The ${derive(getSubject(gender))} is playing in the park.`"}</span>
        </code>
      </div>
    </div>
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
            {'  { label: t('}<span className="string">'Contact'</span>{'), path: '}<span className="string">'/contact'</span>{' },'}<br />
            {'];'}<br />
            <br />
            <span className="keyword">export const</span>{' ERROR_MESSAGES = {'}<br />
            {'  notFound: t('}<span className="string">'Page not found'</span>{'),'}<br />
            {'  unauthorized: t('}<span className="string">'You do not have permission to view this page'</span>{'),'}<br />
            {'  serverError: t('}<span className="string">'Something went wrong. Please try again later.'</span>{'),'}<br />
            {'};'}
          </code>
        </div>

        <DeriveDemo />

        <p className="hint">
          {t('Switch the language above — the page reloads with new translations.')}
        </p>
      </main>
    </div>
  );
}

export default App;
