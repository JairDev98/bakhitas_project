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

export const GeralContainer = styled.div`
  background-color: #714b1e;
  height: 10vh;
  margin-top: 3vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    height: 50%;
  }
`;

export const Container = styled.nav`
  font-family: 'Roboto';
  position: relative;
  display: flex;
  z-index: 3;
  min-width: 5%;

  @media (max-width: 500px) {
    flex-direction: column;
    margin-left: 5px;
  }

  ul {
    h4 {
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      font-size: 19px;
      width: 20vh;
      text-align: center;
      background-color: #8a5d26;
      padding: 5px;
      margin-left: 1px;
      color: #fff;
      transition: background-color 0.2s;
      transition: width 0.2s;

      @media (max-width: 800px) {
        width: 17vh;
        font-size: 15px;
      }

      @media (max-width: 700px) {
        width: 14vh;
        font-size: 14px;
      }

      @media (max-width: 600px) {
        width: 11vh;
        font-size: 11px;
      }

      @media (max-width: 500px) {
        width: 20vh;
        font-size: 11px;
        margin-bottom: 1px;
        border-radius: 0;
      }
    }
    list-style: none;
    min-width: 5%;
    ul {
      position: absolute;
      visibility: hidden;
      transition: background-color 0.2s;

      @media (max-width: 500px) {
        margin-left: 100%;
        border-radius: 0;
        font-size: 11px;
      }
      li {
        width: 20vh;
        margin-left: 1px;
        a {
          padding: 10px;
          display: block;
          text-decoration: none;
          background-color: #8a5d26;
          color: #fff;
          transition: background-color 0.2s;
        }
      }
    }
  }

  h4:hover {
    background-color: ${shade(0.3, '#8a5d26')};
  }

  ul li a:hover {
    background-color: ${shade(0.2, '#8a5d26')};
  }

  ul:hover ul {
    visibility: visible;
    animation: ${appearFromUP} 0.4s;
  }
`;
