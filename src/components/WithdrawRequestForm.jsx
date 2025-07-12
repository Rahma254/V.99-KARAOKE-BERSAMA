import React, { useState } from 'react';

export default function WithdrawRequestForm() {
  const [amount, setAmount] = useState('');
  const [accountDetails, setAccountDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validasi sederhana
    if (!amount || !accountDetails) {
      alert('Harap isi jumlah penarikan dan detail rekening Anda.');
      return;
    }
    
    // Anggap saldo pengguna cukup untuk sekarang
    console.log('--- Request Penarikan Dikirim ---');
    console.log('Jumlah Penarikan:', amount);
    console.log('Detail Rekening/E-wallet:', accountDetails);
    console.log('Data ini akan dikirim ke server untuk divalidasi oleh admin.');
    
    alert(`Permintaan penarikan dana sebesar Rp ${amount} telah terkirim! Admin akan segera memprosesnya.`);
    
    // Reset form setelah berhasil
    setAmount('');
    setAccountDetails('');
  };

  return (
    <div className="form-wrapper">
      <h2>Formulir Penarikan Dana</h2>
      <p>Isi jumlah yang ingin Anda tarik dan detail rekening tujuan di bawah ini.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="withdraw-amount">Jumlah Penarikan (Rupiah)</label>
          <input
            type="number"
            id="withdraw-amount"
            placeholder="Contoh: 100000"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="account-details">Nomor Rekening / E-Wallet</label>
          <textarea
            id="account-details"
            rows="3"
            placeholder="Contoh: BCA 12345678 a/n Nama Anda atau Gopay 08123456789"
            value={accountDetails}
            onChange={(e) => setAccountDetails(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn-submit">
          Kirim Permintaan Penarikan
        </button>
      </form>
    </div>
  );
}
