import styled from 'styled-components'

type ButtonProps = {
  variant: string
}

export const ButtonContainer = styled.button<ButtonProps>`
  height: 48px;
  background: ${({theme, variant = 'default'}) => {
    const keys = {
      default: theme['red-400'],
      nobackground: 'none'
    }
    return keys[variant]
  }};
  border-radius: 34px;
  border: none;
  color: ${({theme, variant}) => {
    const keys = {
      default: theme['white-900'],
      nobackground: theme['red-400']
    }
    return keys[variant]
  }};
  font-weight: 700;
  font-size: 16px;
  padding: 12px 28px;
  cursor: pointer;
  width: 100%;

  :disabled {
    background: ${props => props.theme['red-200']}
  }

  @media only screen and (min-width: 900px) {
    width: 198px;
  }
`
