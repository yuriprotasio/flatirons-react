import { ButtonContainer } from './styles'

type ButtonProps = {
  dataTestId?: string
  text: string
  hasEmptyFields?: boolean
  variant: 'default' | 'nobackground'
  onClick: (() => void) | undefined
}

export function Button({
  dataTestId = 'button-id',
  text = '',
  hasEmptyFields,
  variant,
  onClick,
}: ButtonProps) {
  return (
    <ButtonContainer
      data-testid={dataTestId}
      disabled={hasEmptyFields}
      variant={variant}
      onClick={onClick}
    >
      {text}
    </ButtonContainer>
  )
}
