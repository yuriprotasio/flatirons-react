import { ButtonContainer } from './styles'

type ButtonProps = {
  text: string
  hasEmptyFields?: boolean
  variant: 'default' | 'nobackground'
  method: (() => void) | undefined
}

export function Button({
  text = '',
  hasEmptyFields,
  variant,
  method,
}: ButtonProps) {
  return (
    <ButtonContainer
      disabled={hasEmptyFields}
      variant={variant}
      onClick={method}
    >
      {text}
    </ButtonContainer>
  )
}
