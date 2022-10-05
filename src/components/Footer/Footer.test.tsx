import { screen } from '@testing-library/react';
import { Footer } from './Footer';
import { customRender } from '../../utils/test-utils'
import { FormContextType } from '../../contexts/FormContext';

describe('Footer', () => {
  it('should render footer with show back and save button', () => {
    const onClickMock = jest.fn()
    customRender(<Footer showBack={true} hasEmptyFields={false} onClick={onClickMock} hideSave={false}></Footer>, {} as FormContextType)
    expect(screen.getByTestId('goback-id')).toBeInTheDocument()
    expect(screen.getByTestId('save-id')).toBeInTheDocument()
  })

  it('should render footer with save button and without go back', () => {
    const onClickMock = jest.fn()
    customRender(<Footer showBack={false} hasEmptyFields={false} onClick={onClickMock} hideSave={false}></Footer>, {} as FormContextType)
    expect(screen.queryByTestId('goback-id')).toEqual(null)
    expect(screen.getByTestId('save-id')).toBeInTheDocument()
  })

  it('should not call click event when has empty fields', () => {
    const onClickMock = jest.fn()
    customRender(<Footer showBack={false} hasEmptyFields={true} onClick={onClickMock} hideSave={false}></Footer>,  {} as FormContextType)

    const button = screen.getByTestId('save-id')
    button.click()
    expect(onClickMock).toBeCalledTimes(0)
  })

  it('should call click event when has no empty fields', () => {
    const onClickMock = jest.fn()
    customRender(<Footer showBack={false} hasEmptyFields={false} onClick={onClickMock} hideSave={false}></Footer>,  {} as FormContextType)

    const button = screen.getByTestId('save-id')
    button.click()
    expect(onClickMock).toBeCalledTimes(1)
  })

  it('should not render save button when has hide save', () => {
    const onClickMock = jest.fn()
    customRender(<Footer showBack={false} hasEmptyFields={false} onClick={onClickMock} hideSave={true}></Footer>,  {} as FormContextType)

    expect(screen.queryByTestId('save-id')).toEqual(null)
  })
});
