import { useContextForm } from '../../contexts/FormContext'
import { ContactForm } from './ContactForm'
import { ProviderForm } from './ProviderForm'
import { SignupForm } from './SignupForm'
import { Container } from './styles'

export function Form() {
  const { activeStep } = useContextForm()

  return (
    <Container>
      {activeStep === 0 && <SignupForm />}
      {activeStep === 1 && <ProviderForm />}
      {activeStep === 2 && <ContactForm />}
    </Container>
  )
}
