// File: src/components/layout/Footer.jsx

import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 2rem 3rem;
  background: #0D0221; // Warna dasar yang solid
  border-top: 1px solid #26175C;
  text-align: center;
  color: #a9a9a9;
  position: relative;
  z-index: 10;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

const LogoText = styled.span`
    font-family: 'Orbitron', sans-serif;
    color: #FFD700;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterText>
        © {currentYear} <LogoText>Nabila Studio Development</LogoText>. All Rights Reserved.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
