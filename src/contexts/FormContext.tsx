import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react'
import { SignupFormProps, ProviderFormProps } from '../components/Form/types'

export type FormContextType = {
  form: SignupFormProps
  setForm: Dispatch<SetStateAction<SignupFormProps>>
  providerForm: ProviderFormProps
  setProviderForm: Dispatch<SetStateAction<ProviderFormProps>>
  activeStep: number
  setActiveStep: Dispatch<SetStateAction<number>>
}

export const FormContext = createContext<FormContextType>({} as FormContextType)

interface FormProviderProps {
  children: ReactNode
}

export function FormProvider({ children }: FormProviderProps) {
  const [form, setForm] = useState({} as SignupFormProps)
  const [providerForm, setProviderForm] = useState({} as ProviderFormProps)
  const [activeStep, setActiveStep] = useState<number>(0)

  return (
    <FormContext.Provider
      value={{
        form,
        setForm,
        providerForm,
        setProviderForm,
        activeStep,
        setActiveStep,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export function useContextForm(): FormContextType {
  const context = useContext(FormContext)
  return context
}
