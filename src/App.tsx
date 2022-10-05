import { ThemeProvider } from 'styled-components'
import { FormProvider } from './contexts/FormContext'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <FormProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </FormProvider>
  )
}
