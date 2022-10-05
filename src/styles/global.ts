import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :focus {
      outline: 0;
    }

    body {
      background-color: ${theme.colors['white-900']};
      color: ${theme.colors['black-900']};
    }

    body,
    input,
    textarea,
    button {
      font-family: ${theme.font.name.primary};
      font-weight: 400;
    }

    h2 {
      font-family: ${theme.font.name.secondary};
      font-weight: 600;
    }
  `}
`
