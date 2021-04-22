import React from 'react';

import { Link } from 'react-router-dom';

import { Container, Card, Information } from './styles';
import logoImg from '../../assets/logo.png';
import cronicas from '../../assets/cronicas.png';
import calendario from '../../assets/calendario.png';

const NavigationBar: React.FC = () => {
  return (
    <Container>
      <Card>
        <img src={logoImg} alt={logoImg} />
        <Information>
          <h4>Instituto Pretos Novos</h4>
          <Link to="/">
            A história de um dos períodos mais obscuros do nosso Brasil
          </Link>
        </Information>
      </Card>

      <Card>
        <img src={cronicas} alt={cronicas} />
        <Information>
          <h4>Cronicas Incidentais</h4>
          <Link to="/">
            Cronicas fantasticas sobre histórias de nosso passado
          </Link>
        </Information>
      </Card>

      <Card>
        <img src={calendario} alt={calendario} />
        <Information>
          <h4>Calendário 2021</h4>
          <Link to="/">
            Sempre confira nosso calendário para ficar por dentro do que
            acontece no IPN
          </Link>
        </Information>
      </Card>

      <Card>
        <img src={logoImg} alt={logoImg} />
        <Information>
          <h4>Instituto Pretos Novos</h4>
          <Link to="/">
            A história de um dos períodos mais obscuros do nosso Brasil
          </Link>
        </Information>
      </Card>

      <Card>
        <img src={cronicas} alt={cronicas} />
        <Information>
          <h4>Cronicas Incidentais</h4>
          <Link to="/">
            Cronicas fantasticas sobre histórias de nosso passado
          </Link>
        </Information>
      </Card>

      <Card>
        <img src={calendario} alt={calendario} />
        <Information>
          <h4>Calendário 2021</h4>
          <Link to="/">
            Sempre confira nosso calendário para ficar por dentro do que
            acontece no IPN
          </Link>
        </Information>
      </Card>
    </Container>
  );
};

export default NavigationBar;
