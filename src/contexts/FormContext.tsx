import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react'
import { SignupFormProps, ProviderFormProps } from '../components/Form/types'

type FormContextType = {
  form: SignupFormProps
  providerForm: ProviderFormProps
  setForm: Dispatch<SetStateAction<SignupFormProps>>
  activeStep: number
  setActiveStep: Dispatch<SetStateAction<number>>
  setProviderForm: Dispatch<SetStateAction<ProviderFormProps>>
}

const FormContext = createContext<FormContextType>({} as FormContextType)

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
