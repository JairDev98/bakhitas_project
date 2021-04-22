import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.png';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <img src={logoImg} alt={logoImg} />
      </Link>
      <h5>©Copyright 2021</h5>
    </Container>
  );
};
export default Footer;
