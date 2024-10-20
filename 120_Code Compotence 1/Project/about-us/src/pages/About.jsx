import React from 'react';
import assets from '../assets/background3.jpg'; // Ganti dengan path gambar yang sesuai

const TentangKami = () => {
  return (
    <div 
      style={{
        padding: '50px',
        backgroundImage: `url(${assets})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        textAlign: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px'
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Tentang Kami</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          padding: '20px',
          borderRadius: '10px',
          maxWidth: '600px',
        }}
      >
        <img 
          src={assets} 
          alt="Tentang Kami" 
          style={{ 
            width: '100%', 
            height: 'auto', 
            borderRadius: '10px', 
            transition: 'transform 0.3s ease-in-out' 
          }} 
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        />
        <p style={{ marginTop: '20px', fontSize: '1.2rem', lineHeight: '1.8' }}>
        Ajwa Komputer telah melayani pelanggan sejak 2005 sebagai pusat penjualan komputer, laptop, dan aksesoris berkualitas. Selain itu, kami juga menyediakan layanan servis komputer profesional yang cepat dan andal. Dengan komitmen pada kepuasan pelanggan, kami menjadi solusi terpercaya untuk kebutuhan teknologi Anda.
        </p>
      </div>
    </div>
  );
};

export default TentangKami;
