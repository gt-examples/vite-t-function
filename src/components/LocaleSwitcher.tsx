import { setLocale, getLocale } from 'gt-react/browser';
import { getLocaleProperties } from 'generaltranslation';

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const codes = ["en", "es", "fr", "ja"];

export function LocaleSwitcher() {
  const locales = codes.map((code) => ({ code, label: 
    capitalize(getLocaleProperties(code).nativeNameWithRegionCode)
  }));

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
