import React from 'react';

import { SiWhatsapp } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';

import Header from '../../components/header';
import Menu from '../../components/menu';
import Footer from '../../components/footer';

import Separator from '../../components/separator';

import { Container, Map, ButtonEmail, ButtonWhatsApp } from './styles';

const Contact: React.FC = () => {
  return (
    <Container>
      <Header />
      <Menu />
      <Separator />
      <h2>Contato</h2>

      <Map>
        <h3>Nossa localização</h3>
        <iframe
          title="Teste"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14701.884444084075!2d-43.192961!3d-22.895988!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f4749b5050f%3A0x69ed89460a3cae92!2sR.%20Pedro%20Ernesto%2C%2032%20-%20Gamboa%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020220-350%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1614273842840!5m2!1spt-BR!2sus"
          loading="lazy"
          width="500"
          height="300"
        />
      </Map>

      <h3>Nossos contatos</h3>

      <ButtonEmail href="mailto:contato@pretosnovos.com.br">
        <p>Email</p>
        <FiMail size={20} color="#FFF" />
      </ButtonEmail>

      <ButtonWhatsApp href="https://web.whatsapp.com/send?phone=5521970153267">
        <p>WhatsApp 1</p>
        <SiWhatsapp size={20} color="#FFF" />
      </ButtonWhatsApp>

      <ButtonWhatsApp href="https://web.whatsapp.com/send?phone=5521964659983">
        <p>WhatsApp 2</p>
        <SiWhatsapp size={20} color="#FFF" />
      </ButtonWhatsApp>

      <h4>Telefone: (21) 2516-7089</h4>

      <Separator />
      <Footer />
    </Container>
  );
};

export default Contact;
