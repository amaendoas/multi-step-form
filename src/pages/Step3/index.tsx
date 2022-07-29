import * as C from './styles'
import { Section } from '../../components/Section'
import { Guide } from '../../components/Guide'
import { SectionTitle } from '../../components/SectionTitle'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonOutline } from '../../components/ButtonOutline'
import { Footer } from '../../components/Footer'
import { useNavigate } from 'react-router'

export function Step3() {
  const navigate = useNavigate()
  function handleNextStep() {
    navigate("/step4")
  }
  function handlePreviousStep() {
    navigate("/step2")
  }
  return (
    <C.Container>
      <Section>
        <Guide/>
        <SectionTitle title='What do you have in mind?' description='Tell us what we need to know about your project.'/>
        <Input icon={false} type="text" placeholder="Project Name"/>
        <textarea placeholder='Describe your project...'></textarea>
      </Section>
      <C.Buttons>
        <ButtonOutline onClick={handlePreviousStep} title='Previous Step'/>
        <Button onClick={handleNextStep} title='Next Step'/>
      </C.Buttons>
      <Footer/>
    </C.Container>
  )
}