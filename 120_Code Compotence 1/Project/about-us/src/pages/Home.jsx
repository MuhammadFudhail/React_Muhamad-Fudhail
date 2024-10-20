import React from 'react';

const Home = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f8ff',
    textAlign: 'center',
    padding: '20px',
    color: '#333',
  };

  const titleStyle = {
    fontSize: '3rem',
    color: '#2c3e50',
  };

  const paragraphStyle = {
    fontSize: '1.5rem',
    color: '#34495e',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Selamat Datang di Halaman Utama</h1>
      <p style={paragraphStyle}>Ini adalah halaman utama dari situs web kami.</p>
    </div>
  );
};

export default Home;
