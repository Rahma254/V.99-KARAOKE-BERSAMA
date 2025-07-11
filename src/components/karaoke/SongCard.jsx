import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';

const CardContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(15, 8, 75, 0.5);
  border-radius: 10px;
  border: 1px solid #26175C;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #00C4FF;
    background: rgba(38, 23, 92, 0.7);
  }
`;

const AlbumArt = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  object-fit: cover;
`;

const SongInfo = styled.div`
  flex-grow: 1;
`;

const SongTitle = styled.h4`
  color: #F0F0F0;
  margin: 0;
  font-size: 1rem;
`;

const ArtistName = styled.p`
  color: #a9a9a9;
  font-size: 0.8rem;
  margin: 0;
`;

const PlayButton = styled.button`
  background: none;
  border: none;
  color: #00C4FF;
  font-size: 1.5rem;
  cursor: pointer;
`;

// Placeholder image dari Pixabay/Unsplash jika tidak ada album art
const placeholderArt = "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&q=80";

const SongCard = ({ song, onPlay }) => {
  return (
    <CardContainer whileHover={{ scale: 1.03 }}>
      <AlbumArt src={song.albumArtUrl || placeholderArt} alt={song.title} />
      <SongInfo>
        <SongTitle>{song.title}</SongTitle>
        <ArtistName>{song.artist}</ArtistName>
      </SongInfo>
      <PlayButton onClick={() => onPlay(song.id)}>
        <FaPlay />
      </PlayButton>
    </CardContainer>
  );
};

export default SongCard;
