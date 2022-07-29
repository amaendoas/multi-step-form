import { createContext, ReactNode, useContext, useReducer } from "react";

type State = {
  currentStep: number,
  name: string,
  email: string,
  phone: string,
  service: string,
  projectName: string,
  projectDescription: string,
  budget: string
}

type Action = {
  type: FormActions,
  payload: any
}

type ContextType = {
  state: State,
  dispatch: (action: Action) => void
}

type FormProviderProps = {
  children: ReactNode
}


const initialData: State = {
  currentStep: 0,
  name: '',
  email: '',
  phone: '',
  service: '',
  projectName: '',
  projectDescription: '',
  budget: ''
}

const FormContext = createContext<ContextType | undefined>(undefined);

enum FormActions {
  setCurrentStep,
  setName,
  setEmail,
  setPhone,
  setService,
  setProjectName,
  setProjectDescription,
  setBudget
}

function formReducer(state: State, action: Action) {
  switch(action.type) {
    case FormActions.setCurrentStep:
      return {...state, currentStep: action.payload};
    case FormActions.setName:
      return {...state, name: action.payload};
    case FormActions.setEmail:
      return {...state, email: action.payload};
      case FormActions.setPhone:
        return {...state, phone: action.payload};
    case FormActions.setService:
      return {...state, service: action.payload};
    case FormActions.setProjectName:
      return {...state, projectName: action.payload};
    case FormActions.setProjectDescription:
      return {...state, projectDescription: action.payload};
    case FormActions.setBudget:
      return {...state, budget: action.payload};
    default:
      return state
  }
}

function FormProvider({children}: FormProviderProps) {
  const [state, dispatch] = useReducer(formReducer, initialData)
  const value = { state, dispatch }

  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  )
}

function useForm() {
  const context = useContext(FormContext)
  if(context === undefined) {
    throw new Error('useForm precisa ser usado dentro do FormProvider')
  }
  return context
}

export { FormActions, FormProvider, useForm }

