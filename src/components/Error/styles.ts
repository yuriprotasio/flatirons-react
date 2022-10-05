import styled, { css } from 'styled-components'

export const ErrorContainer = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors['red-700']};
  `}
`
