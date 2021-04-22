import React from 'react';

import Header from '../../components/header';
import Menu from '../../components/menu';
import Footer from '../../components/footer';

import Separator from '../../components/separator';

import ConstructImg from '../../assets/construct.jpg';

import { Container, ContainerText } from './styles';

const Construction: React.FC = () => {
  return (
    <Container>
      <Header />
      <Menu />
      <Separator />
      <ContainerText>
        <h1>Página em construção</h1>
        <img src={ConstructImg} alt={ConstructImg} />
      </ContainerText>
      <Separator />
      <Footer />
    </Container>
  );
};

export default Construction;
