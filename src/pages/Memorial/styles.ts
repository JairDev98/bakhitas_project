import styled from 'styled-components';

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
  p {
    text-align: justify;
    margin: 15px 65px;
    line-height: 2;
    transition: font-size, 0.2s;

    @media (max-width: 800px) {
      font-size: 1rem;
      margin: 7px 32px;
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3%;
  margin-bottom: 3%;
  img {
    border-radius: 4px;
    width: 50%;

    @media (max-width: 800px) {
      width: 100%;
    }
  }
`;

export const ImageContainerBook = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1%;
  margin-bottom: 3%;
  img {
    border-radius: 4px;
    width: 20%;

    @media (max-width: 800px) {
      width: 40%;
    }
  }
`;
