import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'; // Akan dibuat
import AnimatedBackground from '../ui/AnimatedBackground'; // Akan dibuat

const MainLayout = () => {
  return (
    <>
      <AnimatedBackground />
      <Header />
      <main style={{ paddingTop: '80px', position: 'relative', zIndex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
