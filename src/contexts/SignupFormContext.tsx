import { createContext, ReactNode, useContext, useState } from 'react'


type SignupFormContextType = {
  form: SignupFormType
  setForm: any
}

type SignupFormType = {
  firstName: string
  lastName: string
  languages: string[]
  phoneNumber: string
}

const SignupFormContext = createContext<SignupFormContextType>({} as SignupFormContextType)

interface SignupFormProviderProps {
  children: ReactNode
}

export function SignupFormProvider({children}: SignupFormProviderProps) {
  const [form, setForm] = useState({} as SignupFormType)


  return (
    <SignupFormContext.Provider value={{form, setForm}}>
        {children}
    </SignupFormContext.Provider>
  )
}

export function useSignupForm (): SignupFormContextType {
  const context = useContext(SignupFormContext)
  return context
}