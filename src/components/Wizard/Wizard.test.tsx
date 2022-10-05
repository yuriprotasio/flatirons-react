import { screen } from '@testing-library/react'
import { Wizard } from './Wizard'
import { customRender } from '../../utils/test-utils'
import { FormContextType } from '../../contexts/FormContext'

describe('Wizard', () => {
  const context = {} as FormContextType
  context.activeStep = 0
  context.form = { languages: [] }

  it('should set step 0 active and 1 and 2 not', () => {
    customRender(<Wizard></Wizard>, context)
    expect(screen.queryByTestId('active-0-id')).toBeInTheDocument()
    expect(screen.queryByTestId('active-1-id')).toEqual(null)
    expect(screen.queryByTestId('active-2-id')).toEqual(null)
  })

  it('should set step 0 and 1 active and 2 not', () => {
    const newContext = { ...context, activeStep: 1 }
    customRender(<Wizard></Wizard>, newContext)
    expect(screen.queryByTestId('active-0-id')).toBeInTheDocument()
    expect(screen.queryByTestId('active-1-id')).toBeInTheDocument()
    expect(screen.queryByTestId('active-2-id')).toEqual(null)
  })

  it('should set step 0, 1 and 2 active', () => {
    const newContext = { ...context, activeStep: 2 }
    customRender(<Wizard></Wizard>, newContext)
    expect(screen.queryByTestId('active-0-id')).toBeInTheDocument()
    expect(screen.queryByTestId('active-1-id')).toBeInTheDocument()
    expect(screen.queryByTestId('active-2-id')).toBeInTheDocument()
  })
})
