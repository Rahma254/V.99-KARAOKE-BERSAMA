// File: src/components/layout/MainLayout.jsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
// Kita asumsikan Footer dan AnimatedBackground akan dibuat nanti atau sudah ada.
// Jika belum ada, Anda bisa sementara memberi comment pada baris di bawah ini.
import Footer from './Footer'; 
import AnimatedBackground from '../ui/AnimatedBackground'; 

const MainLayout = () => {
  return (
    <>
      <AnimatedBackground />
      <Header />
      {/* Outlet adalah tempat di mana halaman-halaman (HomePage, Profile, dll.) akan ditampilkan */}
      <main style={{ paddingTop: '80px', position: 'relative', zIndex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
