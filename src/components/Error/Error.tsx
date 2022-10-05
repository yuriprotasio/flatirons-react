import { ErrorContainer } from './styles'

type ErrorProps = {
  text?: string
}

export function Error({ text = 'This field is required.' }: ErrorProps) {
  return <ErrorContainer>{text}</ErrorContainer>
}
