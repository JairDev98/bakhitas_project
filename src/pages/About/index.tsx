import React from 'react';

import Header from '../../components/header';
import Menu from '../../components/menu';
import Footer from '../../components/footer';

import Separator from '../../components/separator';

import PlacaImg from '../../assets/placa.png';

import { Container, Button, ContainerImage } from './styles';

const About: React.FC = () => {
  return (
    <Container>
      <Header />
      <Menu />
      <Separator />
      <h2>QUEM SOMOS</h2>
      <p>
        O Instituto de Pesquisa e Memória Pretos Novos (IPN) foi criado em 13 de
        maio de 2005, com a missão de pesquisar, estudar, investigar e preservar
        o patrimônio material e imaterial africano e afro-brasileiro, cuja
        conservação e proteção seja de interesse público, com ênfase ao sítio
        histórico e arqueológico do Cemitério dos Pretos Novos, sobretudo com a
        finalidade de valorizar a memória e identidade cultural brasileira em
        Diáspora.
      </p>
      <p>
        As ações continuadas de investigações arqueológicas e pesquisas,
        manutenção do acervo e atividades educativas realizadas pelo IPN, geram
        conhecimento que promovem a reflexão sobre a escravidão e suas seqüelas
        para os princípios de igualdade racial no Brasil.
      </p>
      <Button>
        <a href="http://pretosnovos.com.br/ipn/ficha-tecnica/">
          Conheça a nossa equipe
        </a>
      </Button>

      <h2>O QUE FAZEMOS</h2>
      <p>
        O IPN trabalha com uma estrutura enxuta, dividida em núcleos
        interdisciplinares que se comunicam entre si, promovendo um fluxo de
        atividades de forma colaborativa e dinâmica. Seus principais objetivos
        são:
      </p>
      <p>
        <ul>
          <li>
            Propor reflexões a partir da história do Cemitério dos Pretos Novos.
          </li>
          <li>Executar projetos educacionais e culturais.</li>
          <li>
            Realizar, fomentar e apoiar pesquisas acadêmicas que contribuam com
            a historiografia, arqueologia e com qualquer outra questão ligada à
            escravidão negra, assim como os seus desdobramentos.
          </li>
        </ul>
      </p>

      <h2>Núcleo Educativo</h2>
      <p>
        <ul>
          <li>
            Oficinas – Realização de cursos, oficinas e palestras para
            qualificação do visitante do IPN, nos temas relacionados à cultura
            africana e afro-brasileira. A grade de programação das oficinas é
            constituída a partir de um Projeto Pedagógico, que contempla temas
            como a História da África, História da Região Portuária, Cosmogonia
            Africana, História do Sagrado, Arqueologia da Diáspora Africana,
            Conto de tradição oral africana e afrobrasileira, Nações africanas
            na era do tráfico negreiro, Patrimonialização da cultura
            afrobrasileira na Região Portuária, Memória e Patrimônio, Oficinas a
            céu aberto, dentre outras.
          </li>
          <li>
            Valorização de bens imateriais (Capoeira, Jongo, música e oficinas
            de arte) – Realização de aulas práticas e teóricas de capoeira,
            Jongo e música, para contribuir para a formação cultural do
            visitante do espaço. Realizar oficinas de arte com especial atenção
            para as atividades que fortaleçam a herança africana e seus bens
            imateriais.
          </li>
          <li>
            Pós-graduação – O IPN realiza, desde 2015, em parceria com a
            Fundação Educacional Duque de Caxias – FEUDUC, cursos de
            Pós-graduação Lato Sensu. Atualmente, segue com turmas de História
            da Cultura Africana e Afro-brasileira e Turismo Cultural, na sede da
            Companhia de Desenvolvimento Urbano da Região Portuária – CDURP, que
            cede o espaço para a realização das aulas.
          </li>
        </ul>
      </p>

      <h2>Núcleo de Pesquisa</h2>
      <p>
        <ul>
          <li>
            História – Formação de um corpo docente que fomenta o debate e o
            pensamento crítico a respeito da importância da Diáspora Africana
            sobre a sociedade brasileira.
          </li>
          <li>
            Arqueologia – Documentação, conservação e catalogação de acervos,
            bem como a realização de minuciosa restauração por arqueólogos
            qualificados. Parte dos artefatos arqueológicos encontrados no sítio
            arqueológico do Cemitério dos Pretos Novos compõe a exposição
            permanente, de modo que contribua para o entendimento da influência
            da Diáspora Africana sobre a sociedade brasileira.
          </li>
        </ul>
      </p>

      <h2>Núcleo de Arte Contemporânea</h2>
      <p>
        <ul>
          <li>
            Exposições de artes visuais – A Galeria Pretos Novos de Arte
            Contemporânea tem uma programação trimestral, com a apresentação de
            artistas e obras que promovam reflexões sobre as questões de
            Direitos Humanos, Igualdade Racial e de Gênero. Visitas mediadas e
            encontros com artistas fazem parte da programação complementar do
            espaço.
          </li>
          <li>
            Residência artística – a Galeria Pretos Novos de Arte Contemporânea
            se propõe também a ser um centro de produção artística para
            atividades de intercâmbio de artistas vinculados a outros centros
            nacionais e estrangeiros, bem como a realização de projetos
            artísticos em espaços urbanos.
          </li>
        </ul>
      </p>

      <h2>Núcleo de Sustentabilidade</h2>
      <p>
        <ul>
          <li>
            Amigos do IPN – Programa que busca sensibilizar e mobilizar as
            pessoas e empresas que tiveram algum contato com a instituição, para
            que contribuam com recursos financeiros, por meio de campanhas ou
            iniciativas pontuais, como depósito bancário e/ou cartão de débito.
          </li>
          <li>
            Loja do IPN – Loja formada por uma livraria com ênfase na temática
            africana e afrobrasileira, para a lançamentos de livros e demais
            publicações. E uma loja de lembranças com uma linha de produtos
            exclusivos, criados a partir de obras de arte dos artistas que
            participaram de exposições na Galeria Pretos Novos de Arte
            Contemporânea.
          </li>
        </ul>
      </p>

      <ContainerImage>
        <img src={PlacaImg} alt={PlacaImg} />
      </ContainerImage>

      <h2>PRÊMIOS E MOÇÕES</h2>
      <p>
        Em 2010, o IPN foi vencedor do prêmio Rodrigo Mello Franco de Andrade,
        oferecido pelo IPHAN, na categoria “Proteção do patrimônio natural e
        arqueológico”. A partir daquele ano, o IPN começou a atuar como Ponto de
        Cultura da Secretaria através de convênio da Secretaria Estadual de
        Cultura do Rio de Janeiro com o Ministério da Cultura. Nesse contexto,
        ofereceu gratuitamente, entre 2010 e 2012, semanalmente e durante todo o
        ano letivo, as Oficinas de História, que versam sobre a história, a
        arqueologia e as memórias da escravidão no Rio de Janeiro e na Região
        Portuária. Tais oficinas são ministradas por doutores ou mestres em
        história, ciências sociais e áreas afins, e destinadas aos professores e
        alunos do ensino superior e médio, profissionais de turismo, visitantes
        e a todo e qualquer interessado.
      </p>
      <p>
        Desde o início de 2014, o IPN dá continuidade a essas mesmas oficinas
        através do prêmio que recebeu da CDURP, em convênio com a Secretaria
        Municipal do Rio de Janeiro. No mesmo ano, recebeu o Prêmio da Fundação
        Gucci, para o empoderamento de mulheres em situação de vulnerabilidade
        social. Em 2016, foi agraciado com o Prêmio Cultura Carioca e o Prêmio
        Ações Locais, pelo trabalho realizado na Galeria Pretos Novos de Arte
        Contemporânea. Em 2017, o IPN foi contemplado com o Prêmio Afro
        Nacional, categoria especial, com o projeto de renovação de sua
        exposição permanente.
      </p>
      <Separator />
      <Footer />
    </Container>
  );
};

export default About;
