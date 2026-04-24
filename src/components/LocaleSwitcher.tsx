import { setLocale, getLocale } from 'gt-react/browser';
import { getLocaleProperties } from 'generaltranslation';
import gtConfig from '../../gt.config.json';

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const codes = [gtConfig.defaultLocale, ...gtConfig.locales];

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
