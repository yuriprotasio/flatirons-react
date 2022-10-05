import { HeaderContainer } from './styles'

type HeaderProps = {
  title?: string
  description?: string
}

export function Header({ title, description }: HeaderProps) {
  return (
    <HeaderContainer data-testid="headerid">
      <h2>{title}</h2>
      <p>{description}</p>
    </HeaderContainer>
  )
}
