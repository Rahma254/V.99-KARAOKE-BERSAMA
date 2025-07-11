import React from 'react';
import MuxPlayer from '@mux/mux-player-react';
import styled from 'styled-components';

const PlayerWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #000;
  border-radius: 15px;
  overflow: hidden;

  mux-player {
    --media-object-fit: contain;
    --controls-backdrop-color: rgba(13, 2, 33, 0.5);
    --bottom-controls-background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
    width: 100%;
    height: 100%;
  }
`;


const StreamPlayer = ({ playbackId }) => {
  return (
    <PlayerWrapper>
      {playbackId ? (
         <MuxPlayer
            streamType="live"
            playbackId={playbackId}
            metadata={{
                video_id: 'video-id-12345',
                video_title: 'Nabila Studio Live Stream',
                viewer_user_id: 'user-id-abc-123',
            }}
        />
      ) : (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
            <h2>Stream is Offline</h2>
        </div>
      )}
    </PlayerWrapper>
  );
};

export default StreamPlayer;
