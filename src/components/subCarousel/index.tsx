import React from 'react';

import { Link } from 'react-router-dom';
import Carousel from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import cronicas from '../../assets/cronicas.png';
import calendario from '../../assets/calendario.png';

import { Container, Card, Information } from './styles';

const SubCarousel: React.FC = () => {
  return (
    <Carousel
      slidesToShow={1}
      infinite
      speed={1000}
      arrows={false}
      slidesToScroll={1}
      autoplay
      autoplaySpeed={7000}
    >
      <Container>
        <Card>
          <img src={calendario} alt={calendario} />
          <Information>
            <h4>Calendário 2021</h4>
            <Link to="/">
              Sempre confira nosso calendário para ficar por dentro
            </Link>
          </Information>
        </Card>
      </Container>

      <Container>
        <Card>
          <img src={cronicas} alt={cronicas} />
          <Information>
            <h4>Cronicas Incidentais</h4>
            <Link to="/">
              Cronicas fantasticas sobre histórias de nosso passado
            </Link>
          </Information>
        </Card>
      </Container>

      <Container>
        <Card>
          <img src={calendario} alt={calendario} />
          <Information>
            <h4>Calendário 2021</h4>
            <Link to="/">
              Sempre confira nosso calendário para ficar por dentro
            </Link>
          </Information>
        </Card>
      </Container>

      <Container>
        <Card>
          <img src={cronicas} alt={cronicas} />
          <Information>
            <h4>Cronicas Incidentais</h4>
            <Link to="/">
              Cronicas fantasticas sobre histórias de nosso passado
            </Link>
          </Information>
        </Card>
      </Container>

      <Container>
        <Card>
          <img src={cronicas} alt={cronicas} />
          <Information>
            <h4>Cronicas Incidentais</h4>
            <Link to="/">
              Cronicas fantasticas sobre histórias de nosso passado
            </Link>
          </Information>
        </Card>
      </Container>

      <Container>
        <Card>
          <img src={calendario} alt={calendario} />
          <Information>
            <h4>Calendário 2021</h4>
            <Link to="/">
              Sempre confira nosso calendário para ficar por dentro
            </Link>
          </Information>
        </Card>
      </Container>
    </Carousel>
  );
};

export default SubCarousel;
