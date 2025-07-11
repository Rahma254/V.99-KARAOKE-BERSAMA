import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SearchContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 600px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 1.5rem 1rem 3.5rem;
  font-size: 1.2rem;
  color: #f0f0f0;
  background: rgba(13, 2, 33, 0.7);
  border: 2px solid #26175C;
  border-radius: 50px;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #00C4FF;
    box-shadow: 0 0 20px rgba(0, 196, 255, 0.7);
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  left: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  color: #a9a9a9;
  font-size: 1.5rem;
`;


const SearchBar = () => {
  return (
    <SearchContainer initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
      <SearchIcon />
      <SearchInput placeholder="Search for Songs, Artists, or Streamers..." />
    </SearchContainer>
  );
};

export default SearchBar;
