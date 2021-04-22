import React from 'react';

import Header from '../../components/header';
import Menu from '../../components/menu';
import Footer from '../../components/footer';

import Map from '../../assets/mapAntigo.jpg';
import Book from '../../assets/sagaBook.png';

import Separator from '../../components/separator';

import { Container, ImageContainer, ImageContainerBook } from './styles';

const Memorial: React.FC = () => {
  return (
    <Container>
      <Header />
      <Menu />
      <Separator />

      <h2>PRETOS NOVOS</h2>
      <p>
        “Pretos novos” ou “boçais” era a denominação dada aos cativos
        recém-chegados da África, no Brasil,assim que desembarcavam no porto.
        Logo que eram vendidos ou aprendiam a o português passavam a ser
        chamados de “ladinos”.
      </p>

      <h2>PARA ENTENDER A SUA IMPORTÂNCIA</h2>
      <p>
        O sítio arqueológico Cemitério dos Pretos Novos, que funcionou durante
        os anos de 1769 a 1830, é a principal prova material e incontestável,
        encontrada até hoje, sobre a barbárie ocorrida no período mais intenso
        do tráfico de cativos africanos para o Brasil. Depois da descoberta
        fortuita feita pela família Guimarães dos Anjos, em 8 de janeiro de
        1996, não há mais como admitir uma visão equivocada e romanceada sobre a
        escravidão de africanos e seus descendentes diretos no Brasil. Foram
        depositados neste cemitério os restos mortais de dezenas de milhares de
        africanos, brutalmente retirados de sua terra natal e trazidos à força
        para o trabalho escravo. E igualmente bruta também era a forma como seus
        corpos foram despedaçados, queimados e espalhados pelo terreno, cobertos
        apenas com algumas pás de terra. Há indícios de que, dada a situação de
        descarte humano que apresentava o local, moradores daquela época que
        passavam pela Rua do Cemitério lançavam seu lixo doméstico: restos de
        comida e fragmentos de louças, cerâmicas e vidros.
      </p>
      <p>
        Apesar de ser considerado o maior cemitério de escravos deste gênero nas
        Américas, o terreno destinado aos sepultamentos era muito pequeno para
        tantos corpos. Os vestígios arqueológicos e históricos deste campo santo
        são testemunhos da ação violenta e cruel sofrida pelos africanos que não
        resistiram aos maus tratos da captura e viagem transatlântica. Este
        relato revelado pela historiografia e trazido à luz pela Arqueologia,
        repleto de desrespeito e dor, ainda é desconhecido por muitos, pois não
        é contado em todas as escolas e nem sequer é mencionado nos livros de
        história que têm a escravidão como tema. Por isto, reafirma-se a
        importância deste Museu Memorial, no qual o Cemitério dos Pretos Novos
        se impõe como peça central para este debate.
      </p>
      <b style={{ textAlign: 'right', marginRight: '6%' }}>
        Marco Antonio Teobaldo curador
      </b>

      <ImageContainer>
        <img src={Map} alt={Map} />
      </ImageContainer>

      <h2>ORIGEM</h2>
      <p>
        G. W. Freireyss, o viajante alemão que descreveu o cemitério notou
        horrorizado que, neste local, a única marca da égide da Igreja era
        <b>“uma pequena cruz de paus toscos mui velhos”</b>
        fincada no centro do terreiro e cercada por ossadas inse­pultas.
      </p>
      <p>
        <b>
          … Pelo lado do fundo está tudo aberto, dividido do quintal de uma
          propriedade vizinha por uma cerca de esteiras, e pelos outros dois
          lados com mui baixo muro de tijolos, e no meio uma pequena cruz de
          paus toscos mui velhos, e a terra do campo revolvida, e juncada de
          ossos mal queimados.
        </b>
      </p>
      <p>
        Os relatos de viajantes que estiveram pelo Rio de Janeiro, no século
        XIX, contam que o Cemitério dos Pretos Novos não passava de uma montanha
        de terra e de corpos despidos, em decomposição, que de tempos em tempos
        eram queimados e seus ossos quebrados e revirados à terra. Em 1853, o
        Caminho do Cemitério passa a se chamar Rua da Harmonia. Embora a
        existência do Cemitério dos Pretos Novos fosse conhecida de
        historiadores e da literatura sobre a cidade do Rio de Janeiro e sobre a
        escravidão no Brasil, sua localização tornou-se totalmente desconhecida
        por décadas até o ano de 1996, quando, por ocasião de uma obra realizada
        na fundação da casa, foram encontradas ossadas humanas a poucos
        centímetros de escavação.
      </p>
      <p>
        A pesquisa inicial e a análise dos vestígios arqueológicos, feitas pelo
        Instituto de Arqueologia Brasileira (IAB), confirmaram que se tratava
        das ossadas depositadas no antigo Cemitério dos Pretos Novos. Após
        quatro anos de descaso do poder público, a Família Guimarães dos Anjos
        decide realizar por conta própria exposições itinerantes com o rico
        material encontrado nas escavações. Mas reconhecendo a importância do
        local para a história da cidade do Rio de Janeiro e para a divulgação da
        história dos Pretos Novos, percebem que ali deveria se tornar um espaço
        de visitação pública.
      </p>
      <p>
        No dia 20 de novembro de 2001 foi realizado o primeiro evento aberto ao
        público na residência. As atividades eram realizadas de maneira
        irregular e sem qualquer tipo de patrocínio ou subvenção, como por
        exemplo: os encontros com lideranças do movimento negro, rodas de samba
        e os bate-papos, que foram o embrião das oficinas realizadas atualmente.
      </p>
      <p>
        No início, muito pouco se sabia sobre a história desses africanos
        sequestrados e trazidos para o Brasil. Os poucos registros encontrados
        sobre o tema falavam de números, mas muito pouco sobre a chegada e a
        vida do negro africano na colônia. Este fato é o que tem inspirado a
        trajetória do IPN a desenvolver atividades diversificadas voltadas à
        divulgação e à valorização da cultura negra.
      </p>

      <h2>EXPOSIÇÃO PERMANENTE</h2>
      <p>
        Em 2010, após ter sido selecionado em edital público para Ponto de
        Cultura, o IPN iniciou as atividades de oficinas de História. Com uma
        sobra mínima de recurso financeiro e o apoio de alguns artistas
        voluntários, foi idealizada a primeira versão da exposição permanente do
        Memorial Pretos Novos. Pela primeira vez, os visitantes puderam ver o
        trabalho realizado pelos arqueólogos nos poços de sondagem, que
        contextualiza a brutalidade das atividades funerárias impingidas aos
        corpos dos africanos recém-chegados ao Rio de Janeiro.
      </p>
      <p>
        Em 2017, o projeto de renovação do Memorial Pretos Novos recebeu o
        Prêmio Afro Nacional – categoria especial, com o qual remonta a
        exposição permanente com informações atualizadas, sobre as pesquisas
        realizadas a partir da quarta investigação arqueológica.
      </p>

      <h2>MERCADO DA ESCRAVIDÃO NO RIO DE JANEIRO</h2>
      <p>
        A história do Brasil precisa ser recontada por uma ótica não
        colonialista, a fim de contribuir para revelar o conhecimento e promover
        novas formas de reflexão sobre as origens do povo brasileiro. Estima-se,
        de forma conservadora, que a partir de 1580, começaram a chegar
        regularmente os primeiros grupos de africanos escravizados no Brasil.
        Mas somente mais tarde, em 1640, o negócio negreiro se expande com mais
        força, aumentando o número de cativos com o incremento do cultivo da
        cana-de-açúcar e a criação de novos engenhos nas capitanias do nordeste
        brasileiro e na capitania de São Vicente, incluindo o Rio de Janeiro,
        sobretudo nas áreas que iriam se tornar na Zona Norte e Zona Oeste da
        cidade. No início, o mercado de africanos escravizados se estabeleceu na
        Rua Direita (onde atualmente é a Rua Primeiro de Março), permanecendo
        ali até 1774, quando o vice-rei Marquês do Lavradio deu ordem para
        transferir definitivamente as operações de desembarque, manejo, venda e
        enterro de cativos para a região do Valongo. É dele a autoria da frase:
        Os escravos que não forem vendidos não sairão do Valongo nem mortos. O
        processo a que estes homens e mulheres (em sua maioria, muito jovens)
        foram submetidos é de uma violência descomunal. Pelas ruas do bairro do
        Valongo, estima-se que tenham passado mais de um milhão de africanos
        capturados para servirem à escravidão.
      </p>

      <h2>MERCADO DA ESCRAVIDÃO NO RIO DE JANEIRO</h2>
      <p>
        A história do Brasil precisa ser recontada por uma ótica não
        colonialista, a fim de contribuir para revelar o conhecimento e promover
        novas formas de reflexão sobre as origens do povo brasileiro. Estima-se,
        de forma conservadora, que a partir de 1580, começaram a chegar
        regularmente os primeiros grupos de africanos escravizados no Brasil.
        Mas somente mais tarde, em 1640, o negócio negreiro se expande com mais
        força, aumentando o número de cativos com o incremento do cultivo da
        cana-de-açúcar e a criação de novos engenhos nas capitanias do nordeste
        brasileiro e na capitania de São Vicente, incluindo o Rio de Janeiro,
        sobretudo nas áreas que iriam se tornar na Zona Norte e Zona Oeste da
        cidade. No início, o mercado de africanos escravizados se estabeleceu na
        Rua Direita (onde atualmente é a Rua Primeiro de Março), permanecendo
        ali até 1774, quando o vice-rei Marquês do Lavradio deu ordem para
        transferir definitivamente as operações de desembarque, manejo, venda e
        enterro de cativos para a região do Valongo. É dele a autoria da frase:
        Os escravos que não forem vendidos não sairão do Valongo nem mortos. O
        processo a que estes homens e mulheres (em sua maioria, muito jovens)
        foram submetidos é de uma violência descomunal. Pelas ruas do bairro do
        Valongo, estima-se que tenham passado mais de um milhão de africanos
        capturados para servirem à escravidão.
      </p>

      <ImageContainerBook>
        <img src={Book} alt={Book} />
      </ImageContainerBook>

      <Separator />
      <Footer />
    </Container>
  );
};

export default Memorial;
