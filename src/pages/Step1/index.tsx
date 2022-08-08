import * as C from './styles'
import { Button } from '../../components/Button'
import { FiUser, FiMail, FiPhone } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { SectionTitle } from '../../components/SectionTitle'
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useEffect } from 'react'
import { FormActions, useForm } from '../../contexts/FormContext'
import { Theme } from '../../components/Theme'

export function Step1() {
  const navigate = useNavigate();
  const { state, dispatch } = useForm()

  function handleNextStep() {
    if(state.name !== '' && state.email !== '' && state.phone !== undefined) {
      navigate("/step2")
    } else {
      alert("Preencha todos os campos!")
    }
  }

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value
    })
  }
  
  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value
    })
  }

  function handlePhoneChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setPhone,
      payload: e.target.value
    })
  }


  return (
    <Theme>
      <C.Container>
          <Section>
            <SectionTitle title='Contact details' description='Tell us who are you and how to find you.'/>
            <Input
            icon={FiUser}
            type="text"
            value={state.name}
            onChange={handleNameChange}
            placeholder="Name"
            />

            <Input
            icon={FiMail}
            type="email"
            value={state.email}
            onChange={handleEmailChange}
            placeholder="Email address"
            />

            <Input
            icon={FiPhone}
            type="number"
            value={state.phone}
            onChange={handlePhoneChange}
            placeholder="Phone number"
            />
          </Section>
          <C.Buttons>
            <Button onClick={handleNextStep} title='Next Step' />
          </C.Buttons>          
      </C.Container>
    </Theme>
  )
}