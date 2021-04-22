import styled from 'styled-components';
import { shade } from 'polished';

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

  p {
    ul {
      li {
        margin: 17px;
        list-style: circle;
      }
    }
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;

  a {
    min-width: 200px;
    display: flex;
    justify-content: center;
    background-color: #8a5d26;
    margin: 0 40%;
    padding: 5px;
    text-decoration: none;
    color: #fff;
    border-radius: 8px;
    transition: background-color 0.2s;
  }

  a:hover {
    background-color: ${shade(0.2, '#8a5d26')};
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2px;
  margin-bottom: 5%;
  img {
    border-radius: 4px;
    border: 0.5px solid black;
    width: 30%;

    @media (max-width: 800px) {
      width: 60%;
    }
  }
`;
