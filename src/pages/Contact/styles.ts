import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

const appearFromUP = keyframes`
from{
  opacity:0;
  transform: translateY(-30px);
}to{
  opacity:1;
  transform: translateY(0);
}`;

export const Container = styled.div`
  background: #f9ca8a;
  margin: 30px 50px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  @media (max-width: 500px) {
    margin: auto;
    border-radius: 0;
  }

  h2 {
    margin: 20px 0 20px 52px;
  }

  h3 {
    text-align: center;
    margin-bottom: 2%;
  }

  h4 {
    text-align: center;
    margin-top: 1%;
    margin-bottom: 3%;
  }
`;

export const Map = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 5%;

  animation: ${appearFromUP} 2s;

  iframe {
    border: none;
    border-radius: 4px;
    width: 500px;
    height: 300px;
    transition: width, height, 0.2s;

    @media (max-width: 990px) {
      width: 300px;
      height: 200px;
    }

    @media (max-width: 800px) {
      width: 200px;
      height: 100px;
    }
  }
`;

export const ButtonEmail = styled.a`
  min-width: 200px;
  margin: auto;
  margin-bottom: 20px;
  background-color: #006ec3;
  padding: 15px;
  width: 15%;
  border-radius: 3px;

  display: flex;
  justify-content: center;

  text-decoration: none;
  color: #fff;

  p {
    margin-right: 75px;
  }

  :hover {
    background-color: ${shade(0.3, '#006ec3')};
  }
`;

export const ButtonWhatsApp = styled.a`
  min-width: 200px;
  margin: auto;
  margin-bottom: 20px;
  background-color: #28a71a;
  padding: 15px;
  width: 15%;
  border-radius: 3px;
  transition: width, 0.2s;

  display: flex;
  justify-content: center;

  text-decoration: none;
  color: #fff;

  p {
    margin-right: 20px;
  }

  :hover {
    background-color: ${shade(0.3, '#28a71a')};
  }
`;
