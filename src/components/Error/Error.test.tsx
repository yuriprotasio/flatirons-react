import { screen } from '@testing-library/react'
import { Error } from './Error'
import { customRender } from '../../utils/test-utils'
import { FormContextType } from '../../contexts/FormContext'

describe('Error', () => {
  it('should render error with default text', () => {
    customRender(<Error></Error>, {} as FormContextType)
    expect(screen.getByText('This field is required.')).toBeInTheDocument()
  })

  it('should render error with text set', () => {
    customRender(
      <Error text="Should be a valid number."></Error>,
      {} as FormContextType,
    )
    expect(screen.getByText('Should be a valid number.')).toBeInTheDocument()
  })
})
