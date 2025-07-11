import React from 'react';
import styled from 'styled-components';
import { FaRobot, FaMagic, FaMicrophoneAlt } from 'react-icons/fa';
import Button from '../common/Button';

const PanelContainer = styled.div`
  padding: 1.5rem;
  border-top: 1px solid #26175C;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  color: #FFD700;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const EffectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;
`;

const EffectButton = styled.button`
  background: rgba(15, 8, 75, 0.8);
  border: 1px solid #26175C;
  color: #f0f0f0;
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #00C4FF;
    color: #00C4FF;
  }

  svg {
    font-size: 2rem;
  }
`;

const EffectsPanel = () => {
  return (
    <PanelContainer>
      <div>
        <SectionTitle>Voice Effects</SectionTitle>
        <EffectsGrid>
          <EffectButton><FaMicrophoneAlt /> Normal</EffectButton>
          <EffectButton><FaRobot /> Robot</EffectButton>
        </EffectsGrid>
      </div>
      <div>
        <SectionTitle>AI Visual Effects (Stability AI)</SectionTitle>
        <EffectsGrid>
          <EffectButton><FaMagic /> Golden Glow</EffectButton>
          <EffectButton><FaMagic /> Anime Style</EffectButton>
        </EffectsGrid>
      </div>
       <Button secondary>Generate AI Background</Button>
    </PanelContainer>
  );
};

export default EffectsPanel;
