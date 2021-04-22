import React from 'react';

import TribalImg from '../../assets/tribal.png';

import { Container } from './styles';

const Separator: React.FC = () => {
  return (
    <Container>
      <img src={TribalImg} alt={TribalImg} />
    </Container>
  );
};

export default Separator;
