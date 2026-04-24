import { t } from 'gt-react/browser';
import { setLocale, getLocale } from 'gt-react/browser';
import { useGTClass } from 'gt-react';

const codes = ["en", "es", "fr", "ja"];

export function LocaleSwitcher() {
  const gtClass = useGTClass();
  const locales = codes.map((code) => ({ code, label: gtClass.getLocaleProperties(code).nativeNameWithRegionCode }));

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
