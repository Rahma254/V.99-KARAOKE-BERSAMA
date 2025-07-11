import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const styles = css`
  display: inline-block;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-family: 'Orbitron', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.3s ease;

  ${(props) =>
    props.primary &&
    css`
      background: linear-gradient(90deg, #FF00E4, #00C4FF);
      color: white;
      &:hover {
        box-shadow: 0 0 15px #00C4FF, 0 0 5px #FF00E4;
      }
    `}

  ${(props) =>
    props.secondary &&
    css`
      background-color: transparent;
      border-color: #FFD700;
      color: #FFD700;
      &:hover {
        background-color: #FFD700;
        color: #0D0221;
        box-shadow: 0 0 15px #FFD700;
      }
    `}
`;

const StyledButton = styled(motion.button)`${styles}`;
const StyledLink = styled(Link)`${styles}`;

const Button = ({ children, to, ...props }) => {
  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  if (to) {
    return (
      <StyledLink to={to} {...props}>
        {children}
      </StyledLink>
    );
  }

  return (
    <StyledButton {...motionProps} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
