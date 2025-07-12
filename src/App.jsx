// Ganti seluruh isi file App.jsx Anda dengan kode di bawah ini

import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Layout Utama Anda
import MainLayout from './components/layout/MainLayout';

// Halaman-Halaman Lama Anda
import HomePage from './pages/HomePage';
import KaraokeRoom from './pages/KaraokeRoom';
import LiveStream from './pages/LiveStream';
import StartStream from './pages/StartStream';
import Profile from './pages/Profile';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';

// ==========================================================
// === HALAMAN BARU YANG KITA TAMBAHKAN (Import di sini) ===
// ==========================================================
import TokoPage from './pages/TokoPage'; // Halaman toko item/hadiah
import RequestFormsPage from './pages/RequestFormsPage'; // Halaman form pembelian/withdraw
import AdminLoginPage from './pages/AdminLoginPage'; // Halaman login khusus admin
import AdminPanel from './pages/AdminPanel'; // Panel admin yang akan dilindungi

// Import "Penjaga" untuk Admin Panel
import AdminGuard from './components/AdminGuard';
// ==========================================================


function App() {
  return (
    <Routes>
      {/* RUTE YANG MEMAKAI LAYOUT UTAMA (Navbar, Footer, dll) */}
      <Route element={<MainLayout />}>
        {/* Halaman Lama Anda */}
        <Route index element={<HomePage />} />
        <Route path="karaoke/:roomId" element={<KaraokeRoom />} />
        <Route path="stream/:userId" element={<LiveStream />} />
        <Route path="stream/start" element={<StartStream />} />
        <Route path="profile/:userId" element={<Profile />} />

        {/* Halaman Baru untuk Pengguna */}
        <Route path="toko" element={<TokoPage />} />
        <Route path="request" element={<RequestFormsPage />} />
      </Route>

      {/* RUTE FULL-PAGE (Tidak memakai MainLayout) */}

      {/* Rute Autentikasi Pengguna */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* === Rute Khusus Admin (Ditempatkan di sini) === */}
      {/* 1. Halaman login untuk admin */}
      <Route path="/admin-login" element={<AdminLoginPage />} />
      
      {/* 2. Halaman panel yang dilindungi oleh AdminGuard */}
      <Route
        path="/admin-panel"
        element={
          <AdminGuard>
            <AdminPanel />
          </AdminGuard>
        }
      />
      {/* ============================================== */}

      {/* Halaman Not Found (Harus selalu paling bawah) */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
