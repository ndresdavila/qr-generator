import React, { useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [url, setUrl] = useState('');
  const [showQR, setShowQR] = useState(false);
  const canvasRef = useRef(null);

  const handleGenerate = () => {
    if (url.trim() === '') {
      toast.error('Por favor ingresa un enlace válido.', {
        position: 'top-right',
        autoClose: 3000,
      });
      return;
    }
    setShowQR(true);
    toast.success('¡Código QR generado con éxito!', {
      position: 'top-right',
      autoClose: 2000,
    });
  };

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
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ marginBottom: '1rem' }}>Generador de Código QR</h1>
      
      <input
        type="text"
        placeholder="Ingresa un enlace"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{
          padding: '0.5rem',
          width: '100%',
          fontSize: '1rem',
          marginBottom: '1rem',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      />

      <button
        onClick={handleGenerate}
        style={{
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Generar Código QR
      </button>

      {showQR && (
        <div style={{ marginTop: '2rem' }} ref={canvasRef}>
          <QRCodeCanvas value={url} size={256} />
          <div style={{ marginTop: '1rem' }}>
            <button
              onClick={downloadQR}
              style={{
                padding: '0.5rem 1rem',
                fontSize: '1rem',
                backgroundColor: '#2196F3',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Descargar PNG
            </button>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
}

export default App;
