import styled, { css } from 'styled-components'

type ButtonProps = {
  variant: string
}

export const ButtonContainer = styled.button<ButtonProps>`
  ${({ theme, variant = 'default' }) => css`
    height: 48px;
    background: ${variant === 'default' ? theme.colors['red-400'] : 'none'};
    border-radius: 34px;
    border: none;
    color: ${variant === 'default' ? theme.colors['white-900'] : theme.colors['red-400']};
    font-weight: 700;
    font-size: 16px;
    padding: 12px 28px;
    cursor: pointer;
    width: 100%;

    :disabled {
      background: ${theme.colors['red-200']}
    }

    @media only screen and (min-width: 900px) {
      width: 198px;
    }
  `}
`
