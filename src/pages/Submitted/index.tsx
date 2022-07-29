import * as C from './styles'
import { Section } from '../../components/Section'
import { SectionTitle } from '../../components/SectionTitle'
import { Guide } from '../../components/Guide'
import { Button } from '../../components/Button'
import SuccessImg from '../../assets/success.svg'
import { Footer } from '../../components/Footer'
import { useNavigate } from 'react-router'

export function Submitted() {
  const navigate = useNavigate()
  function handleNewQuote() {
    navigate("/")
  }
  return (
    <C.Container>
      <Section>
        <Guide/>
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