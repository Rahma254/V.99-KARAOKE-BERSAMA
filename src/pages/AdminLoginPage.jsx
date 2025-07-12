import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // --- Kredensial Admin Disimpan di Sini (Hardcoded) ---
  const ADMIN_EMAIL = 'jesikamahjong@gmail.com';
  const ADMIN_PASSWORD = 'axis2019';

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      // Jika login berhasil:
      // 1. Simpan "tiket masuk" di browser (sessionStorage)
      sessionStorage.setItem('admin-authenticated', 'true');
      
      // 2. Arahkan ke halaman Admin Panel yang sebenarnya
      navigate('/admin-panel'); // Ganti dengan URL panel Anda
    } else {
      // Jika gagal
      setError('Email atau Password salah!');
    }
  };

  return (
    <div className="login-page-wrapper">
      <div className="login-form-container">
        <h2>Admin Panel Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="btn-submit">Login</button>
        </form>
      </div>
    </div>
  );
}
