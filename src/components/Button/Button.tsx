import { ButtonContainer } from './styles'

type ButtonProps = {
  text: string
  hasEmptyFields?: boolean
  variant: 'default' | 'nobackground'
  onClick: (() => void) | undefined
}

export function Button({
  text = '',
  hasEmptyFields,
  variant,
  onClick,
}: ButtonProps) {
  return (
    <ButtonContainer
      data-testid="button-id"
      disabled={hasEmptyFields}
      variant={variant}
      onClick={onClick}
    >
      {text}
    </ButtonContainer>
  )
}
