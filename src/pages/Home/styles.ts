import styled from 'styled-components'

export const GradientDiv = styled.div`
  background: ${props => props.theme['red-600']};
  background: linear-gradient(180deg, ${props => props.theme['red-600']} 0%, ${props => props.theme['red-500']} 100%);
  height: 100vh;
`
