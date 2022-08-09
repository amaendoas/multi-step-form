import * as C from './styles'
import { Section } from '../../components/Section'
import { SectionTitle } from '../../components/SectionTitle'
import { Area } from '../../components/Area'
import { Button } from '../../components/Button'
import { ButtonOutline } from '../../components/ButtonOutline'
import { MdOutlineRadioButtonUnchecked} from "react-icons/md"
import { Theme } from '../../components/Theme'
import { useNavigate } from 'react-router'
import { FormActions, useForm } from '../../contexts/FormContext'
import { ChangeEvent, useEffect, useState } from 'react'
import { PopUp } from '../../components/PopUp'
import warningImg from "../../assets/warning.svg"
import successImg from '../../assets/success.svg'
import { api } from '../../services/api'

export function Step4() {
  const navigate = useNavigate()
  const { state, dispatch } = useForm()
  const [popupSubmit, setPopupSubmit] = useState(false)
  const [popupSubmitted, setPopupSubmitted ] = useState(false)

  function handleBudgetChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setBudget,
      payload: e.target.value
    })
  }

  function handlePreviousStep() {
    navigate("/step3")
  }

 async function handleNextStep() {
    if(state.budget === '') {
      alert('Selecione um range de orçamento!')
    } else if(state.name === '' || state.email === '' || state.phone === 0 || state.service === '' || state.projectName === '' || state.projectDescription === '') {
      alert('Ops! confira se você preencheu todos os dados para enviar sua proposta!')
    } else {
      setPopupSubmit(true)
      let timestamp = new Date().toLocaleDateString();
      dispatch({
        type: FormActions.setCreatedAt,
        payload: timestamp
      })
    }
  }

  function handleSubmit() {
    setPopupSubmit(false)
    try {
      api.post("/quotes", state)
      setPopupSubmitted(true)
    } catch(error: any) {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível cadastrar")
      }
    }
  }

  function handleNewQuote() {
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
  
      navigate("/step1")
  }
  
  return (
    <Theme>
    <C.Container>
      <Section
      buttons={
        <C.Buttons>
        <ButtonOutline onClick={handlePreviousStep} title='Previous Step'/>
        <Button
        onClick={handleNextStep}
        title='Submit'/>
      </C.Buttons>
      }
      >
        <SectionTitle
        title='What’s your project budget?' description='Please select the project budget range you have in mind.'/>
        <C.Budgets>
          <Area
          name="budget"
          icon={MdOutlineRadioButtonUnchecked} value="less than $5.000"
          onChange={handleBudgetChange}
          checked={state.budget === 'less than $5.000'}
          />

          <Area
          name="budget"
          icon={MdOutlineRadioButtonUnchecked} value="$5.000-$10.000"
          onChange={handleBudgetChange}
          checked={state.budget === '$5.000-$10.000'}
          />

          <Area
          name="budget"
          icon={MdOutlineRadioButtonUnchecked} value="$10.000-$30.000"
          onChange={handleBudgetChange}
          checked={state.budget === '$10.000-$30.000'}
          />

          <Area
          name="budget"
          icon={MdOutlineRadioButtonUnchecked} value="$30.000 +"
          onChange={handleBudgetChange}
          checked={state.budget === '$30.000 +'}
          />

        </C.Budgets>
      </Section>
    </C.Container>
    <PopUp
      title="Would you like to submit?"
      description="Make sure you answered all the steps correctly"
      trigger={popupSubmit}
      setTrigger={setPopupSubmit}
      onClick={handleSubmit}
      img={warningImg}
      buttonTitle="Submit"
      >
    </PopUp>
    <PopUp
      title="Your quote request is submitted!"
      description="Thank you, our team is already working on your request. You will receive your project quote in 48 - 72 hours by e-mail."
      trigger={popupSubmitted}
      setTrigger={setPopupSubmitted}
      onClick={handleNewQuote}
      img={successImg}
      buttonTitle="Get another quote"
      >
      <ButtonOutline
      title='See my quotes'
      onClick={() => navigate("/quotes")}
      />
    </PopUp>
    </Theme>
  )
}