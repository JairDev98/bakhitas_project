import styled, { keyframes } from 'styled-components';

const appearFromUP = keyframes`
from{
  opacity:0;
  transform: translateY(-30px);
}to{
  opacity:1;
  transform: translateY(0);
}`;

export const Container = styled.header`
  margin: 30px 50px 3px;
  transition: width 0.2s;

  display: flex;
  justify-content: space-between;
  a {
    img {
      display: flex;
      width: 100%;
      transition: width 0.2s;

      @media (max-width: 800px) {
        width: 30%;
        margin: auto;
        margin-bottom: 3%;
      }

      @media (max-width: 400px) {
        margin-top: -15px;
      }
    }
  }

  img {
    width: 60%;
    border-radius: 4px;

    animation: ${appearFromUP} 1s;
    transition: width 0.2s;

    @media (max-width: 990px) {
      width: 80%;
    }

    @media (max-width: 800px) {
      width: 100%;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
