import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import StreamPlayer from '../components/streaming/StreamPlayer';
import ChatBox from '../components/streaming/ChatBox';

const LiveStreamLayout = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 2rem;
  padding: 2rem;
  height: calc(100vh - 80px);
`;

const StreamerInfo = styled.div`
    grid-column: 1 / 2;
    padding-bottom: 1rem;
    h2 { margin: 0; }
`;

const PlayerContainer = styled.div`
    grid-column: 1 / 2;
    grid-row: 2 / 3;
`;

const ChatContainer = styled.div`
    grid-column: 2 / 3;
    grid-row: 1 / 3;
`;


const LiveStream = () => {
  const { userId } = useParams();
  // Nanti, fetch data stream (termasuk MUX playbackId) dari Supabase berdasarkan userId
  const playbackId = "MUX_PLAYBACK_ID_DARI_SUPABASE"; // Ganti dengan ID asli

  return (
    <LiveStreamLayout>
        <StreamerInfo>
            <h2>Streaming Live: {userId}</h2>
            <p>Playing Valorant - Road to Radiant!</p>
        </StreamerInfo>
      <PlayerContainer>
        <StreamPlayer playbackId={playbackId} />
      </PlayerContainer>
      <ChatContainer>
        <ChatBox />
      </ChatContainer>
    </LiveStreamLayout>
  );
};

export default LiveStream;
