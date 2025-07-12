import React, { useState } from 'react';
import { pembelianData as initialPembelian } from '../data/pembelianData';
import { withdrawData as initialWithdraw } from '../data/withdrawData';

// Komponen Tabel yang bisa dipakai ulang
function RequestTable({ title, requests, onApprove, onReject }) {
  const formatRupiah = (number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);

  return (
    <div className="request-section">
      <h2>{title}</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Pengguna</th>
              <th>Jumlah</th>
              <th>Detail / Bukti</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req.id}>
                <td>{req.id}</td>
                <td>{req.userName}</td>
                <td className="amount">{formatRupiah(req.amount)}</td>
                <td>
                  {req.proofImageUrl ? (
                    <a href={req.proofImageUrl} target="_blank" rel="noopener noreferrer">
                      Lihat Bukti
                    </a>
                  ) : (
                    <span>{req.paymentInfo}</span>
                  )}
                </td>
                <td>
                  <span className={`status-badge status-${req.status}`}>{req.status}</span>
                </td>
                <td>
                  {req.status === 'pending' && (
                    <div className="action-buttons">
                      <button onClick={() => onApprove(req.id)} className="btn-approve">
                        Setuju
                      </button>
                      <button onClick={() => onReject(req.id)} className="btn-reject">
                        Tolak
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Halaman utama Admin Panel
export default function AdminPanel() {
  const [pembelian, setPembelian] = useState(initialPembelian);
  const [withdrawals, setWithdrawals] = useState(initialWithdraw);

  // Fungsi untuk mengubah status (bisa untuk pembelian atau withdraw)
  const updateRequestStatus = (setState, id, newStatus) => {
    setState((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
  };

  return (
    <div className="admin-panel">
      <header className="admin-header">
        <h1>Panel Kendali Admin</h1>
        <p>Kelola semua permintaan transaksi di sini.</p>
      </header>
      <main className="admin-main">
        <RequestTable
          title="Request Pembelian Saldo"
          requests={pembelian}
          onApprove={(id) => updateRequestStatus(setPembelian, id, 'approved')}
          onReject={(id) => updateRequestStatus(setPembelian, id, 'rejected')}
        />
        <RequestTable
          title="Request Penarikan (Withdraw)"
          requests={withdrawals}
          onApprove={(id) => updateRequestStatus(setWithdrawals, id, 'completed')}
          onReject={(id) => updateRequestStatus(setWithdrawals, id, 'rejected')}
        />
      </main>
    </div>
  );
}
