import React from 'react';
import { Link } from 'react-router-dom';

import bannerImg from '../../assets/representation.png';
import logoImg from '../../assets/logo.png';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <img src={logoImg} alt={logoImg} />
      </Link>
      <img src={bannerImg} alt={bannerImg} />
    </Container>
  );
};

export default Header;
