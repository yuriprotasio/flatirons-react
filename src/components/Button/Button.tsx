import { ButtonContainer } from './styles'

type ButtonProps = {
  text: string
  hasErrors: boolean
  hasEmptyFields: boolean
  setSubmitted: any
}

export function Button ({ text = '', hasEmptyFields, variant, method }: ButtonProps) {
  return (
    <ButtonContainer disabled={hasEmptyFields} variant={variant} onClick={method}>{text}</ButtonContainer>
  )
}