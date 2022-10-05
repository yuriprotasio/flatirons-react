import styled, { css } from 'styled-components'

type WizardIconProps = {
  isActive: boolean
}

export const WizardIcon = styled.div<WizardIconProps>`
  ${({ theme, isActive }) => css`
    width: 24px;
    height: 24px;

    background: ${isActive
      ? theme.colors['red-300']
      : theme.colors['white-900']};
    border: 2px solid
      ${isActive ? theme.colors['red-100'] : theme.colors['gray-100']};
    border-radius: 50%;
    text-align: center;
    line-height: 0;
    display: flex;

    span {
      width: 100%;
      text-align: center;
      margin-top: auto;
      margin-bottom: auto;
      color: ${isActive ? theme.colors['white-900'] : theme.colors['gray-400']};
      font-size: 12px;
    }
  `}
`
