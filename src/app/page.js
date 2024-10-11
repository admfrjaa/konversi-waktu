"use client"; // Menandakan bahwa ini adalah komponen klien

import { useState } from 'react'; // Mengimpor useState dari React

export default function Home() {
  // State untuk jam, menit, detik, dan hasil
  const [jam, setJam] = useState(0);
  const [menit, setMenit] = useState(0);
  const [detik, setDetik] = useState(0);
  const [hasil, setHasil] = useState('');

  // Fungsi untuk mengonversi waktu
  const konversiWaktu = () => {
    // Menghitung total detik dari jam, menit, dan detik
    const totalDetik = (parseInt(jam) || 0) * 3600 + (parseInt(menit) || 0) * 60 + (parseInt(detik) || 0);
    const hasilJam = Math.floor(totalDetik / 3600);
    const hasilMenit = Math.floor((totalDetik % 3600) / 60);
    const hasilDetik = totalDetik % 60;

    // Menyimpan hasil konversi
    setHasil(`${hasilJam} jam, ${hasilMenit} menit, dan ${hasilDetik} detik.`);
  };

  return (
    <div className="container">
      <h1>Konversi Waktu</h1>
      <p>Konversikan jam, menit, dan detik menjadi total detik.</p>

      <div className="input-group">
        <label htmlFor="jam">Jam:</label>
        <input type="number" id="jam" value={jam} onChange={(e) => setJam(e.target.value)} />
      </div>
      <div className="input-group">
        <label htmlFor="menit">Menit:</label>
        <input type="number" id="menit" value={menit} onChange={(e) => setMenit(e.target.value)} />
      </div>
      <div className="input-group">
        <label htmlFor="detik">Detik:</label>
        <input type="number" id="detik" value={detik} onChange={(e) => setDetik(e.target.value)} />
      </div>
      <button onClick={konversiWaktu}>Konversikan</button>

      {hasil && (
        <div className="output">
          <h2>Hasil:</h2>
          <p>{hasil}</p>
        </div>
      )}

      {/* Styling CSS dalam JSX */}
      <style jsx>{`
        .container {
          max-width: 500px;
          margin: 0 auto;
          padding: 30px;
          background-color: #ffffff;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        h1 {
          text-align: center;
          color: #333;
          font-size: 2.5rem;
        }
        p {
          text-align: center;
          color: #555;
        }
        .input-group {
          margin-bottom: 20px;
        }
        label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
          color: #333;
        }
        input {
          width: 100%;
          padding: 10px;
          border: 2px solid #74ebd5;
          border-radius: 8px;
          transition: border-color 0.3s ease;
        }
        input:focus {
          border-color: #acb6e5;
          outline: none;
        }
        button {
          width: 100%;
          padding: 10px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 1.2rem;
        }
        button:hover {
          background-color: #005bb5;
        }
        .output {
          margin-top: 20px;
          padding: 15px;
          border: 1px solid #0070f3;
          border-radius: 8px;
          background-color: #e7f1ff;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
