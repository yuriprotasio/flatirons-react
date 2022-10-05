import { screen } from '@testing-library/react'
import { Form } from './Form'
import { customRender } from '../../utils/test-utils'
import { FormContextType } from '../../contexts/FormContext'

describe('Form', () => {
  const context = {} as FormContextType
  context.activeStep = 0
  context.form = { languages: [] }

  it('should render signup form when active step is 0', () => {
    customRender(<Form></Form>, context)
    expect(screen.queryByTestId('signup-formid')).toBeInTheDocument()
    expect(screen.queryByTestId('provider-formid')).toEqual(null)
    expect(screen.queryByTestId('contact-formid')).toEqual(null)
  })

  it('should render provider form when active step is 1', () => {
    const newContext = { ...context, activeStep: 1 }
    customRender(<Form></Form>, newContext)
    expect(screen.queryByTestId('signup-formid')).toEqual(null)
    expect(screen.queryByTestId('provider-formid')).toBeInTheDocument()
    expect(screen.queryByTestId('contact-formid')).toEqual(null)
  })

  it('should render render contact form when active step is 2', () => {
    const newContext = { ...context, activeStep: 2 }
    customRender(<Form></Form>, newContext)
    expect(screen.queryByTestId('signup-formid')).toEqual(null)
    expect(screen.queryByTestId('provider-formid')).toEqual(null)
    expect(screen.queryByTestId('contact-formid')).toBeInTheDocument()
  })
})
