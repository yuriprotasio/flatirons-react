import { ReactElement } from 'react'
import { FormContext, FormContextType } from '../contexts/FormContext'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/themes/default'
import { render } from '@testing-library/react';

export function customRender (ui: ReactElement, props: FormContextType) {
  render(
    <FormContext.Provider value={props}>
      <ThemeProvider theme={defaultTheme}>
        {ui}
      </ThemeProvider>
    </FormContext.Provider>
  )
}