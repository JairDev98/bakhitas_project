import React from 'react';

import bannerAgende from '../../assets/bannerAgende.png';
import bannerMatricula from '../../assets/bannerMatriculas.png';
import calendario from '../../assets/calendario.png';
import doacao from '../../assets/doacao.jpg';
import cronicas from '../../assets/cronicas.png';

import Header from '../../components/header';
import Menu from '../../components/menu';
import Separator from '../../components/separator';
import Carousel from '../../components/carousel';
import SubCarousel from '../../components/subCarousel';
import Footer from '../../components/footer';

import HorizontalBar from '../../components/horizontalBar';

import {
  Container,
  ContainerCarroseul,
  BodyContainer,
  ContainerBanner,
  ContainerSubBanner,
  BannerDoacao,
} from './styles';

const DashBoard: React.FC = () => {
  return (
    <Container>
      <Header />
      <Menu />
      <Separator />
      <ContainerCarroseul>
        <Carousel />
        <SubCarousel />
      </ContainerCarroseul>

      <BodyContainer>
        <HorizontalBar />
        <ContainerBanner>
          <img src={bannerMatricula} alt={bannerMatricula} />

          <img src={bannerAgende} alt={bannerAgende} />
        </ContainerBanner>
        <HorizontalBar />

        <ContainerSubBanner>
          <img src={calendario} alt={calendario} />

          <img src={cronicas} alt={cronicas} />

          <img src={calendario} alt={calendario} />

          <img src={cronicas} alt={cronicas} />
        </ContainerSubBanner>
        <HorizontalBar />

        <BannerDoacao>
          <img src={doacao} alt={doacao} />
        </BannerDoacao>
      </BodyContainer>
      <Separator />
      <Footer />
    </Container>
  );
};

export default DashBoard;
