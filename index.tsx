// app/page.tsx or pages/index.tsx (depending on your setup)
'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const baseEmail = 'elefantulcici537';
  const domain = '@gmail.com';
  const [randomTag, setRandomTag] = useState('');

  // Generates a new random tag
  const generateTag = () => {
    return Math.random().toString(36).substring(2, 8);
  };

  // On page load
  useEffect(() => {
    setRandomTag(generateTag());
  }, []);

  const fullEmail = `${baseEmail}+${randomTag}${domain}`;

  // Copy email to clipboard
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(fullEmail);
    setRandomTag(generateTag()); // Regenerate after copy
  };

  return (
    <main style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '50px' }}>
      <h1>Dynamic Email Generator</h1>
      <p style={{ fontSize: '1.2em', marginBottom: '20px' }}>
        <strong>Email:</strong> {fullEmail}
      </p>
      <button
        onClick={copyToClipboard}
        style={{
          padding: '10px 20px',
          fontSize: '1em',
          backgroundColor: '#333',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
      >
        Copy to Clipboard
      </button>
    </main>
  );
}
