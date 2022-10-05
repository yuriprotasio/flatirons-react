import { act, renderHook } from '@testing-library/react'
import { FormProvider, useContextForm } from './FormContext'

const wrapper = ({ children }: any) => <FormProvider>{children}</FormProvider>

const renderHookWithWrapper = () => {
  const { result } = renderHook(() => useContextForm(), { wrapper })
  return { result }
}

describe('FormContext', () => {
  it('should set active step', () => {
    const { result } = renderHookWithWrapper()
    act(() => {
      result.current.setActiveStep(2)
    })
    expect(result.current.activeStep).toEqual(2)
  })

  it('should set form', () => {
    const { result } = renderHookWithWrapper()
    act(() => {
      result.current.setForm({
        firstName: 'first name test',
        lastName: 'last name test',
        languages: ['language test'],
        phoneNumber: '12981528909',
      })
    })
    expect(result.current.form).toEqual({
      firstName: 'first name test',
      lastName: 'last name test',
      languages: ['language test'],
      phoneNumber: '12981528909',
    })
  })

  it('should set provider form', () => {
    const { result } = renderHookWithWrapper()
    act(() => {
      result.current.setProviderForm({
        insurances: 'insurances test',
        specialty: 'specialty test',
        aboutYourself: 'about yourself test',
      })
    })
    expect(result.current.providerForm).toEqual({
      insurances: 'insurances test',
      specialty: 'specialty test',
      aboutYourself: 'about yourself test',
    })
  })
})
