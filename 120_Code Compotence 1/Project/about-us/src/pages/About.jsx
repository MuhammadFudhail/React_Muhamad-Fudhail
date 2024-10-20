import React from 'react';
import assets from '../assets/background3.jpg'; // Ganti dengan path gambar yang sesuai

const TentangKami = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Tentang Kami</h1>
      <img src={assets} alt="Tentang Kami" style={{ width: '300px', height: 'auto' }} />
      <p>
        Kami adalah perusahaan yang berkomitmen untuk memberikan layanan terbaik kepada pelanggan kami. 
        Dengan pengalaman bertahun-tahun, kami percaya bahwa kepuasan pelanggan adalah prioritas utama kami.
      </p>
    </div>
  );
};

export default TentangKami;
