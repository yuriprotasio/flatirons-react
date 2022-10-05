import styled, { css } from 'styled-components'

export const CloseContainer = styled.span`
  ${({ theme }) => css`
    background: ${theme.colors['red-100']};
    border: none;
    font-size: 24px;
    font-weight: 500;
    line-height: 0;
    margin: 0 0 4px 4px;
    color: ${theme.colors['red-800']};
  `}
`
