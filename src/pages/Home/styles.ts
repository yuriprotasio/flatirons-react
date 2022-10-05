import styled, { css } from 'styled-components'

export const GradientBackground = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors['red-600']};
    background: linear-gradient(180deg, ${theme.colors['red-600']} 0%, ${theme.colors['red-500']} 100%);
    height: 100vh;
  `}
`
