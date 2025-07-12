import React from 'react';
import { Navigate } from 'react-router-dom';

// Komponen ini "membungkus" halaman yang ingin dilindungi
const AdminGuard = ({ children }) => {
  // Periksa apakah "tiket masuk" ada di sessionStorage
  const isAdminAuthenticated = sessionStorage.getItem('admin-authenticated') === 'true';

  if (!isAdminAuthenticated) {
    // Jika tidak ada tiket, tendang kembali ke halaman login
    return <Navigate to="/admin-login" replace />;
  }

  // Jika ada tiket, tampilkan halaman yang dilindungi (children)
  return children;
};

export default AdminGuard;
