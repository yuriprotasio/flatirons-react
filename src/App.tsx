import { ThemeProvider } from 'styled-components'
import { SignupFormProvider } from './contexts/SignupFormContext'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <SignupFormProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </SignupFormProvider>
  )
}
