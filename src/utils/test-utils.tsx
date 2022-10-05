import { ReactElement } from 'react'
import { FormProvider } from '../contexts/FormContext'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/themes/default'
import { render } from '@testing-library/react';

export function customRender (ui: ReactElement) {
  render(
    <FormProvider>
      <ThemeProvider theme={defaultTheme}>
        {ui}
      </ThemeProvider>
    </FormProvider>
  )
}