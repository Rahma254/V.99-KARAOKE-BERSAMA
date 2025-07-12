// File: src/pages/KaraokeRoom.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

// Kita buat beberapa styled-component placeholder agar halaman tidak kosong
const KaraokeLayout = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 2rem;
  padding: 2rem;
  height: calc(100vh - 80px); // Sesuaikan dengan tinggi header Anda
`;

const MainPanel = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  border: 1px solid #26175C;
`;

const SidePanel = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  padding: 1.5rem;
  border: 1px solid #26175C;
`;

const PlayerScreen = styled.div`
  flex-grow: 1;
  background-color: #000;
  border-radius: 15px 15px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-family: 'Orbitron', sans-serif;
  color: #00C4FF;
`;

const Controls = styled.div`
  padding: 1.5rem;
  border-top: 1px solid #26175C;
  text-align: center;
`;

const KaraokeRoom = () => {
  // Mengambil ID ruangan dari URL, contoh: /karaoke/123
  const { roomId } = useParams();

  return (
    <KaraokeLayout>
      <MainPanel>
        <PlayerScreen>
          {/* Komponen KaraokePlayer.jsx akan masuk sini nanti */}
          KARAOKE ROOM {roomId}
        </PlayerScreen>
        <Controls>
          {/* Komponen EffectsPanel.jsx akan masuk sini nanti */}
          Audio & Visual Effects Panel
        </Controls>
      </MainPanel>
      <SidePanel>
        <h2>Playlist</h2>
        {/* Komponen SongList.jsx akan masuk sini nanti */}
      </SidePanel>
    </KaraokeLayout>
  );
};

export default KaraokeRoom;
