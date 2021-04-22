import styled from 'styled-components';

export const Item = styled.div`
  img {
    border-radius: 10px;

    @media (max-width: 500px) {
      border-radius: 0;
    }
  }
`;
