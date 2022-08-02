import * as C from './styles'
import { Button } from '../../components/Button'
import { ButtonOutline } from '../../components/ButtonOutline'
import { Section } from '../../components/Section'
import { SectionTitle } from '../../components/SectionTitle'
import { Area } from '../../components/Area'
import { BiTerminal } from 'react-icons/bi'
import {MdOutlineWeb} from 'react-icons/md'
import {BsMegaphone} from 'react-icons/bs'
import {FiSettings} from 'react-icons/fi'
import { Footer } from '../../components/Footer'
import { useNavigate } from 'react-router'
import { useEffect, ChangeEvent } from 'react'
import { FormActions, useForm } from '../../contexts/FormContext'

export function Step2() {
  const navigate = useNavigate()
  const { state, dispatch } = useForm()

  function handlePreviousStep() {
    navigate("/")
  }

  function handleNextStep() {
    if(state.service !== '') {
      navigate("/step3")
    } else {
      alert("Selecione um serviço!")
    }
  }

  function handleServiceChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setService,
      payload: e.target.value
    })
  } 

  useEffect(() => {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2
      })
  }, [])

  return (
    <C.Container>
      <Section>
        <SectionTitle title='Our services' description='Please select which service you are interested in.'/>
        <C.Services>
        <Area
        name="services"
        icon={BiTerminal}
        value='Development'
        onChange={handleServiceChange}
        checked={state.service === 'Development'}
        />

        <Area
        name="services"
        icon={MdOutlineWeb}
        value='Web Design'
        onChange={handleServiceChange}
        checked={state.service === 'Web Design'}
        />

        <Area name="services"
        icon={BsMegaphone}
        value='Marketing'
        onChange={handleServiceChange}
        checked={state.service === 'Marketing'}
        />

        <Area
        name="services"
        icon={FiSettings}
        value='Other'
        onChange={handleServiceChange}
        checked={state.service === 'Other'}
        />
        </C.Services>
      </Section>
      <C.Buttons>
        <ButtonOutline
        onClick={handlePreviousStep} title='Previous Step'/>
        <Button onClick={handleNextStep} title='Next Step'/>
      </C.Buttons>
      <Footer/>
    </C.Container>
  )
}