import { HeaderContainer } from './styles'

export function Header ({ title, description }) {
  return (
    <HeaderContainer>
      <h2>{title}</h2>
      <p>{description}</p>
    </HeaderContainer>
  )
}