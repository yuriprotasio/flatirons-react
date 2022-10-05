import { screen } from '@testing-library/react'
import { Button } from './Button'
import { customRender } from '../../utils/test-utils'
import { FormContextType } from '../../contexts/FormContext'

describe('Button', () => {
  it('should render button', () => {
    const onClickMock = jest.fn()
    customRender(
      <Button text="Submit" variant="default" onClick={onClickMock}></Button>,
      {} as FormContextType,
    )
    expect(screen.getByTestId('button-id')).toBeInTheDocument()
  })

  it('should call on click one time', () => {
    const onClickMock = jest.fn()
    customRender(
      <Button text="Submit" variant="default" onClick={onClickMock}></Button>,
      {} as FormContextType,
    )
    const button = screen.getByTestId('button-id')
    button.click()
    expect(onClickMock).toBeCalledTimes(1)
  })

  it('should not call on click when has empty fields and is disabled', () => {
    const onClickMock = jest.fn()
    customRender(
      <Button
        text="Submit"
        hasEmptyFields={true}
        variant="default"
        onClick={onClickMock}
      ></Button>,
      {} as FormContextType,
    )
    const button = screen.getByTestId('button-id')
    button.click()
    expect(onClickMock).toBeCalledTimes(0)
  })
})
