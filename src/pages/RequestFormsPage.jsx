import React from 'react';
import PurchaseRequestForm from '../components/PurchaseRequestForm'; // Akan kita buat
import WithdrawRequestForm from '../components/WithdrawRequestForm'; // Akan kita buat

export default function RequestFormsPage() {
  return (
    <div className="form-page-container">
      <header className="form-page-header">
        <h1>Pusat Transaksi</h1>
        <p>Lakukan permintaan pembelian saldo atau penarikan penghasilan di sini.</p>
      </header>
      <main className="forms-grid">
        <PurchaseRequestForm />
        <WithdrawRequestForm />
      </main>
    </div>
  );
}
