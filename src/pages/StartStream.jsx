// File: src/pages/StartStream.jsx

import React from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';
import InputField from '../components/common/InputField';

const StartStreamWrapper = styled.div`
  max-width: 800px;
  margin: 3rem auto;
  padding: 3rem;
  background: rgba(15, 8, 75, 0.5);
  border: 1px solid #26175C;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const PreviewWindow = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: #000;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #a9a9a9;
  font-family: 'Orbitron', sans-serif;
  border: 2px dashed #26175C;
`;

const StartStream = () => {
  return (
    <StartStreamWrapper>
      <Title>Go Live</Title>
      
      <PreviewWindow>
        Camera Preview
      </PreviewWindow>

      <InputField
        id="stream-title"
        label="Stream Title"
        placeholder="Example: Let's play some games!"
      />
      <InputField
        id="stream-category"
        label="Category"
        placeholder="Example: Games, Music, Just Chatting"
      />
      
      {/* Di sini nanti kita akan menambahkan logika untuk Mux */}
      <Button primary="true" style={{ width: '100%', marginTop: '1rem' }}>
        Start Streaming
      </Button>

    </StartStreamWrapper>
  );
};

export default StartStream;
