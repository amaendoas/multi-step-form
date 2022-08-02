import * as C from './styles'
import { Section } from '../../components/Section'
import { SectionTitle } from '../../components/SectionTitle'
import { Guide } from '../../components/Guide'
import { Button } from '../../components/Button'
import SuccessImg from '../../assets/success.svg'
import { Footer } from '../../components/Footer'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'
import { useForm, FormActions } from '../../contexts/FormContext'

export function Submitted() {
  const navigate = useNavigate()
  const { state, dispatch } = useForm()

  function handleNewQuote() {
    dispatch({
      type: FormActions.setName,
      payload: ''
    })

    dispatch({
      type: FormActions.setEmail,
      payload: ''
    })

    dispatch({
      type: FormActions.setPhone,
      payload: ''
    })

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

    navigate("/")
  }

  useEffect(() => {
    if(state.name === '') {
      navigate('/')
    } else {
      console.log(state)
    }
  }, [])
  return (
    <C.Container>
      <Section>
        <C.Success>
        <img src={SuccessImg} alt="success" />
        <SectionTitle title='Your quote request is submitted!' description='Thank you, our team is already working on your request. You will receive your project quote in 48 - 72 hours by e-mail.'/>

        <Button onClick={handleNewQuote} title='Get another quote'/>
        </C.Success>
      </Section>
      <Footer/>
    </C.Container>
  )
}