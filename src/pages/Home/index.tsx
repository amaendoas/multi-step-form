import * as C from "./styles"
import logoImg from "../../assets/logo.svg"
import { Details } from "../../components/Details"
import { useEffect } from "react"
import { FormActions, useForm } from "../../contexts/FormContext"
import { Theme } from "../../components/Theme"
import { PopUp } from "../../components/PopUp"

export function Home() {
  const { state, dispatch } = useForm();
  useEffect(() => {
    dispatch({
      type: FormActions.setService,
      payload: ''
    })

    dispatch({
      type: FormActions.setProjectName,
      payload: ''
    })

    dispatch({
      type: FormActions.setProjectDescription,
      payload: ''
    })

    dispatch({
      type: FormActions.setBudget,
      payload: '',
    })
  }, [])
  return (
    <Theme>
      <C.Container>
        <img src={logoImg} alt="logo" />
        <p>Development and consulting company specialized in software development and maintenance, creative and personalized websites for small, medium and large companies.</p>
        <Details
        title="Get a project quote"
        button="Start the form"
        description={null}
        path={"/step1"}
        >
        </Details>
      </C.Container>
    </Theme>
  )
}