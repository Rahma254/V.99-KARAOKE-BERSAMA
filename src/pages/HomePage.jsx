import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SearchBar from '../components/ui/SearchBar'; // Akan dibuat

const HeroSection = styled.section`
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(3rem, 10vw, 6rem);
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  background: linear-gradient(90deg, #FF00E4, #00C4FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  letter-spacing: 2px;
  text-shadow: none;
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: #a9a9a9;
  max-width: 600px;
  margin-bottom: 2.5rem;
`;

const ContentSection = styled.section`
    padding: 4rem 3rem;
    h2 {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 3rem;
    }
`;

const HomePage = () => {
  return (
    <>
      <HeroSection>
        <HeroTitle
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Sing Your Universe
        </HeroTitle>
        <HeroSubtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Stream Your World. The Ultimate Karaoke & Live Streaming Platform.
        </HeroSubtitle>
        
        {/* SearchBar akan ditambahkan di sini */}
        
      </HeroSection>
      <ContentSection>
        <h2>Featured Live Streams</h2>
        {/* Carousel Streamer akan masuk sini */}
      </ContentSection>
      <ContentSection>
        <h2>Karaoke Top Hits</h2>
        {/* Cover Flow Lagu akan masuk sini */}
      </ContentSection>
    </>
  );
};

export default HomePage;```

Ini adalah awal yang sangat solid. Anda sekarang memiliki:
1.  Struktur proyek yang benar.
2.  Konfigurasi Vite, Vercel, dan ESLint.
3.  File `.env.local` yang siap diisi.
4.  `package.json` dengan semua dependensi yang diperlukan.
5.  Fondasi styling "Galactic Glam" dengan SCSS.
6.  Layout utama dengan Header dan latar belakang animasi.
7.  Halaman utama yang menakjubkan.

Langkah selanjutnya adalah membuat komponen-komponen yang lebih kecil (`Button`, `SearchBar`, `SongCard`, dll.) dan halaman-halaman lainnya, lalu mengisi logika untuk interaksi API.
