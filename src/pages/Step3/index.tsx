import * as C from './styles'
import { Section } from '../../components/Section'
import { SectionTitle } from '../../components/SectionTitle'
import { Theme } from '../../components/Theme'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonOutline } from '../../components/ButtonOutline'
import { Footer } from '../../components/Footer'
import { useNavigate } from 'react-router'
import { ChangeEvent, useEffect } from 'react'
import { FormActions, useForm } from '../../contexts/FormContext'
import { TextArea } from '../../components/TextArea'


export function Step3() {
  const navigate = useNavigate()
  const { state, dispatch } = useForm()

  function handlePreviousStep() {
    navigate("/step2")
  }
  
  function handleNextStep() {
    if(state.projectName === '' && state.projectDescription === '') {
      alert('Preencha todos os campos!')
    } else {
      navigate("/step4")
    }
  }

  function handleProjectName(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setProjectName,
      payload: e.target.value
    })
  }

  function handleProjectDescription(e: ChangeEvent<HTMLTextAreaElement>) {
    dispatch({
      type: FormActions.setProjectDescription,
      payload: e.target.value
    })
  }

  useEffect(() => {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3
      })
  }, [])

  return (
    <Theme>
    <C.Container>
      <Section>
        <SectionTitle title='What do you have in mind?' description='Tell us what we need to know about your project.'/>
        <Input
        icon={false}
        type="text"
        placeholder="Project Name"
        value={state.projectName}
        onChange={handleProjectName}
        />
        <TextArea
        value={state.projectDescription}
        placeholder='Describe your project...'
        onChange={handleProjectDescription}
        />
      </Section>
      <C.Buttons>
        <ButtonOutline onClick={handlePreviousStep} title='Previous Step'/>
        <Button onClick={handleNextStep} title='Next Step'/>
      </C.Buttons>
    </C.Container>
    </Theme>
  )
}