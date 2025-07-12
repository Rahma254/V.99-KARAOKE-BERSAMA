import React, { useState } from 'react';

export default function PurchaseRequestForm() {
  const [amount, setAmount] = useState('');
  const [proofFile, setProofFile] = useState(null);
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProofFile(file);
      setFileName(file.name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validasi sederhana
    if (!amount || !proofFile) {
      alert('Harap isi jumlah transfer dan unggah bukti pembayaran.');
      return;
    }

    // --- SIMULASI PENGIRIMAN DATA KE BACKEND ---
    console.log('--- Request Pembelian Dikirim ---');
    console.log('Jumlah Transfer:', amount);
    console.log('File Bukti:', proofFile);
    console.log('Data ini akan dikirim ke server untuk divalidasi oleh admin.');
    // Di aplikasi nyata, Anda akan menggunakan FormData dan fetch/axios di sini.

    alert(`Permintaan pembelian saldo sebesar Rp ${amount} telah terkirim! Admin akan segera memprosesnya.`);
    
    // Reset form setelah berhasil
    setAmount('');
    setProofFile(null);
    setFileName('');
  };

  return (
    <div className="form-wrapper">
      <h2>Konfirmasi Pembelian Saldo</h2>
      <p>Sudah melakukan transfer? Isi form di bawah dan unggah bukti pembayaran.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="purchase-amount">Jumlah Transfer (Rupiah)</label>
          <input
            type="number"
            id="purchase-amount"
            placeholder="Contoh: 50000"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="proof-upload">Unggah Bukti Pembayaran</label>
          {/* Tombol upload file kustom */}
          <label htmlFor="proof-upload" className="file-upload-label">
            Pilih File
          </label>
          <input
            type="file"
            id="proof-upload"
            onChange={handleFileChange}
            accept="image/png, image/jpeg, image/jpg"
            required
            style={{ display: 'none' }} // Sembunyikan input file asli
          />
          {fileName && <span className="file-name-display">{fileName}</span>}
        </div>
        <button type="submit" className="btn-submit">
          Kirim Konfirmasi
        </button>
      </form>
    </div>
  );
}
