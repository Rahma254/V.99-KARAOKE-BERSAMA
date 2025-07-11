import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
  background: #0D0221;
`;

const Star = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: white;
  box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #00C4FF;
`;

const createStars = (num) => {
  return [...Array(num)].map((_, i) => {
    const size = Math.random() * 2 + 1;
    const duration = Math.random() * 50 + 50;
    return {
      id: i,
      x: `${Math.random() * 100}vw`,
      y: `${Math.random() * 100}vh`,
      size: `${size}px`,
      duration: duration,
      delay: Math.random() * 10,
    };
  });
};

const stars = createStars(100);

const AnimatedBackground = () => {
  return (
    <BackgroundContainer>
      {stars.map((star) => (
        <Star
          key={star.id}
          initial={{ x: star.x, y: '-10vh', width: star.size, height: star.size }}
          animate={{ y: '110vh' }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            delay: star.delay,
          }}
        />
      ))}
    </BackgroundContainer>
  );
};

export default AnimatedBackground;
