import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0px;
    box-sizing:border-box;
    font-family: 'Roboto', sans-serif;
}

body{
  background-color: #900000;
}

button, img, h4{
  cursor: pointer;
}

h1, h2, h3, h4, h5 ,h6, strong{
  font-weight: 500;
}
`;
