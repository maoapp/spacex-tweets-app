// src/components/StarrySpinner.tsx
import React from 'react';
import Lottie from 'react-lottie-player';
import * as animationData from '../../assets/spaceship.json';

const Spinner: React.FC = () => {
  return (
    <Lottie
      loop
      animationData={animationData}
      play
    />
  );
};

export default Spinner;
