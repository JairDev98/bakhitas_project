import styled, { keyframes } from 'styled-components';

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
`;

export const ContainerCarroseul = styled.div`
  width: 70%;
  margin: auto;
  margin-bottom: 2%;
  border-radius: 4px;
  animation: ${appearFromUP} 1s;

  @media (max-width: 500px) {
    width: 90%;
  }
`;

export const BodyContainer = styled.div`
  margin: 0 2%;
`;

export const ContainerBanner = styled.div`
  margin: 0 5%;
  display: flex;
  justify-content: space-between;
  img {
    width: 45%;
    border-radius: 5px;
    transition: all 0.2s ease;
  }
  img:hover {
    transform: scale(1.05);
  }
`;

export const ContainerSubBanner = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 5%;
  img {
    width: 15%;
    border-radius: 5px;
    transition: all 0.2s ease;
  }
  img:hover {
    transform: scale(1.05);
  }
`;

export const BannerDoacao = styled.div`
  margin: 0 5%;
  margin-bottom: 2%;
  img {
    display: flex;
    margin: auto;
    width: 45%;
    border-radius: 5px;
    transition: all 0.2s ease;
  }
  img:hover {
    transform: scale(1.05);
  }
`;
