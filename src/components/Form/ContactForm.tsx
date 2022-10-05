import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { FormContainer } from './styles'

export function ContactForm() {
  return (
    <>
      <FormContainer>
        <Header
          title="Contact Information"
          description="Tell us about your contact."
        ></Header>
        <Footer showBack={true} hideSave={true}></Footer>
      </FormContainer>
    </>
  )
}
