import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 5%;
`;

export const Card = styled.div`
  display: flex;
  margin: auto;
  background-color: #f9e0ae;
  border-radius: 3px;
  width: 500px;

  padding: 10px;
  align-items: center;

  @media (max-width: 500px) {
    padding: 5px;
  }

  img {
    width: 25%;
    height: 10%;

    @media (max-width: 500px) {
      width: 8%;
      height: 3%;
    }
  }
`;

export const Information = styled.div`
  margin-left: 10px;

  @media (max-width: 500px) {
    margin-left: 2px;
  }
  h4 {
    font-size: 25px;
    margin-top: 2px;
    margin-bottom: 3px;

    @media (max-width: 500px) {
      font-size: 12px;
    }
  }
  a {
    font-size: 15px;
    text-decoration: none;
    color: black;

    @media (max-width: 500px) {
      font-size: 10px;
    }
  }
`;
