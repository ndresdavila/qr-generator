import React, { useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

function App() {
  const [url, setUrl] = useState('');
  const canvasRef = useRef(null);

  const downloadQR = () => {
    const canvas = canvasRef.current.querySelector('canvas');
    if (canvas) {
      const pngUrl = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = 'codigo_qr.png';
      downloadLink.click();
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1>Generador de Código QR</h1>
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
      <div style={{ marginTop: '1rem' }} ref={canvasRef}>
        {url && <QRCodeCanvas value={url} size={256} />}
      </div>
      {url && (
        <button
          onClick={downloadQR}
          style={{
            marginTop: '1rem',
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          Descargar PNG
        </button>
      )}
    </div>
  );
}

export default App;
