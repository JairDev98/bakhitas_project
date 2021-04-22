import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background-color: #b28547;
  width: 300px;
  height: 350px;
  border-radius: 8px;
  padding: 5px;
  overflow-y: auto;
  overflow-x: hidden;
  direction: rtl;
  transition: width, height 0.2s;

  @media (max-width: 1000px) {
    width: 200px;
    height: 250px;
  }

  // largura da barra
  ::-webkit-scrollbar {
    width: 10px;
  }

  // ONDE A BARRA DO SCROOL FICA
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px black;
    background-color: #d5d5d5;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  // BARRA DENTRO DO SCROOL
  ::-webkit-scrollbar-thumb {
    background: #8b5b2a;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  // cor da barra
  ::-webkit-scrollbar-thumb:hover {
    background: ${shade(0.2, '#8b5b2a')};
  }
`;

export const Card = styled.div`
  display: flex;
  background-color: #e8e5ca;
  border-radius: 3px;
  width: 260px;
  margin: 10px;
  padding: 5px;
  align-items: center;
  direction: ltr;

  @media (max-width: 1000px) {
    width: 160px;
  }

  img {
    width: 20%;
    height: 20%;
  }
`;

export const Information = styled.div`
  margin-left: 10px;
  h4 {
    font-size: 15px;
    margin-top: 2px;
    margin-bottom: 3px;
  }
  a {
    font-size: 12px;
    text-decoration: none;
  }
`;
