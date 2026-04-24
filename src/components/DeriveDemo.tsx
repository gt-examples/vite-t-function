import { useState } from 'react';
import { t } from 'gt-react/browser';
import { derive } from 'gt-react';

function getSubject(gender: string) {
  return gender === 'male' ? 'boy' : 'girl';
}

export function DeriveDemo() {
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
