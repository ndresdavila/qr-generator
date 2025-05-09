import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

function App() {
  const [url, setUrl] = useState('');

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1>QR Code Generator</h1>
      <input
        type="text"
        placeholder="Ingresa un enlace"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{
          padding: '0.5rem',
          width: '300px',
          fontSize: '1rem',
          marginBottom: '1rem',
        }}
      />
      <div style={{ marginTop: '1rem' }}>
        {url && <QRCodeCanvas value={url} size={256} />}
      </div>
    </div>
  );
}

export default App;
