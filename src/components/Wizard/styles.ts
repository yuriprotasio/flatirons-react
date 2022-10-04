import styled from 'styled-components'

export const WizardIcon = styled.div`
  width: 24px;
  height: 24px;

  background: ${props => props.isActive ? props.theme['red-300'] : props.theme['white-900']};
  border: 2px solid ${props => props.isActive ? props.theme['red-100'] : props.theme['gray-100']};
  border-radius: 50%;
  text-align: center;
  line-height: 0;
  display: flex;

  span {
    width: 100%;
    text-align: center;
    margin-top: auto;
    margin-bottom: auto;
    color: ${props => props.isActive ? props.theme['white-900'] : props.theme['gray-400']};
    font-size: 12px;
  }
`
