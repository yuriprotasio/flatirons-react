import styled from 'styled-components'

export const FooterContainer = styled.div`
  border-top: 2px solid ${props => props.theme['gray-100']};
  position: fixed;
  bottom: 0;
  width: 100%;
  background: ${props => props.theme['white-900']};
  padding: 24px 0;
`
