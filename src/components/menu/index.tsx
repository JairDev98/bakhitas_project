import React from 'react';

import { Link } from 'react-router-dom';

import { GeralContainer, Container } from './styles';

const Menu: React.FC = () => {
  return (
    <GeralContainer>
      <Container>
        <ul>
          <h4>Institucional</h4>
          <ul>
            <li>
              <Link to="/about">Quem Somos</Link>
            </li>
            <li>
              <Link to="/construction">Cemitérios dos pretos novos</Link>
            </li>
            <li>
              <Link to="/memorial">Museu memorial</Link>
            </li>
            <li>
              <Link to="/construction">Biblioteca</Link>
            </li>
            <li>
              <Link to="/construction">Imprensa</Link>
            </li>
            <li>
              <Link to="/contact">Contato</Link>
            </li>
          </ul>
        </ul>

        <ul>
          <h4>Educativo</h4>
          <ul>
            <li>
              <Link to="/construction">Oficinas</Link>
            </li>
            <li>
              <Link to="/construction">Circuito de herança africana</Link>
            </li>
            <li>
              <Link to="/construction">Pós-graduação lato sensu</Link>
            </li>
          </ul>
        </ul>

        <ul>
          <h4>Galeria</h4>
          <ul>
            <li>
              <Link to="/construction">Veja nosso acervo</Link>
            </li>
          </ul>
        </ul>

        <ul>
          <h4>Doações</h4>
          <ul>
            <li>
              <a href="https://pretosnovos.com.br/doacoes/">
                Faça sua contribuição
              </a>
            </li>
          </ul>
        </ul>

        <ul>
          <h4>Visitação</h4>
          <ul>
            <li>
              <Link to="/construction">Bem vindos ao IPN</Link>
            </li>
            <li>
              <Link to="/construction">Tipos de visitação e horários</Link>
            </li>
            <li>
              <Link to="/construction">Ingressos</Link>
            </li>
          </ul>
        </ul>
      </Container>
    </GeralContainer>
  );
};

export default Menu;
