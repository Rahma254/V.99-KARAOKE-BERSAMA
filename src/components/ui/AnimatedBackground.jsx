// File: src/components/ui/AnimatedBackground.jsx

import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
  background: #0D0221;
`;

// Kita gunakan div biasa daripada motion.div untuk star agar lebih ringan
// Animasinya kita kontrol lewat styled-components
const Star = styled.div`
  position: absolute;
  border-radius: 50%;
  background: white;
  box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #00C4FF;
  
  // Animasi menggunakan keyframes CSS biasa
  animation: fall linear infinite;
`;


// Keyframes untuk animasi bintang jatuh
// Kita inject keyframes ini di dalam komponen agar tidak mengotori global scope
const فالlAnimation = `
  @keyframes fall {
    from {
      transform: translateY(-10vh);
    }
    to {
      transform: translateY(110vh);
    }
  }
`;

const createStars = (num) => {
  return [...Array(num)].map((_, i) => {
    const size = Math.random() * 2 + 1;
    return {
      id: i,
      style: {
        left: `${Math.random() * 100}vw`,
        width: `${size}px`,
        height: `${size}px`,
        animationDuration: `${Math.random() * 40 + 20}s`, // Durasi antara 20-60 detik
        animationDelay: `${Math.random() * 10}s`,
      },
    };
  });
};

const stars = createStars(100);

const AnimatedBackground = () => {
  return (
    <BackgroundContainer>
      {/* Inject keyframes ke dalam DOM */}
      <style>{`
        ${فالlAnimation}
      `}</style>
      {stars.map((star) => (
        <Star key={star.id} style={star.style} />
      ))}
    </BackgroundContainer>
  );
};

export default AnimatedBackground;
