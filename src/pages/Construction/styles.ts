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

export const ContainerText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 1%;
  h1 {
    text-align: center;
  }
  img {
    animation: ${appearFromUP} 1s;
    border-radius: 4px;
    margin: 3% 0;
    width: 50%;
  }
`;
