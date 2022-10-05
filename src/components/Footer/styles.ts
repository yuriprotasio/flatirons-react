import styled, { css } from 'styled-components'

export const FooterContainer = styled.div`
  ${({ theme }) => css`
    border-top: 2px solid ${theme.colors['gray-100']};
    position: fixed;
    bottom: 0;
    width: 100%;
    background: ${theme.colors['white-900']};
    padding: 24px 0;
  `}
`
