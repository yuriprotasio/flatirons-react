import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    background-color: ${props => props.theme['white-900']};
    color: ${props => props.theme['black-900']};
  }

  body, input, textarea, button {
    font-family: 'Nunito Sans';
    font-weight: 400;
  }

  h2 {
    font-family: 'Crimson Text';
    font-weight: 600;
  }
`