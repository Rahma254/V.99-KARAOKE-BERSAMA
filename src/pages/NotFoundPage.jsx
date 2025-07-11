import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);
  text-align: center;
`;

const ErrorCode = styled.h1`
  font-size: 10rem;
  font-family: 'Orbitron', sans-serif;
  background: linear-gradient(90deg, #FF00E4, #00C4FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
`;

const ErrorMessage = styled.p`
  font-size: 1.5rem;
  margin: 1rem 0 2rem 0;
  color: #a9a9a9;
`;

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <ErrorCode>404</ErrorCode>
      <h2>PAGE NOT FOUND</h2>
      <ErrorMessage>
        The page you are looking for might have been removed or is temporarily unavailable.
      </ErrorMessage>
      <Button primary to="/">Go to Homepage</Button>
    </NotFoundContainer>
  );
};

export default NotFoundPage;
