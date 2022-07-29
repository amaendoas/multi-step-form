import * as C from './styles'
import { Button } from '../../components/Button'
import { ButtonOutline } from '../../components/ButtonOutline'
import { Guide } from '../../components/Guide'
import { Section } from '../../components/Section'
import { SectionTitle } from '../../components/SectionTitle'
import { Area } from '../../components/Area'
import { BiTerminal } from 'react-icons/bi'
import {MdOutlineWeb} from 'react-icons/md'
import {BsMegaphone} from 'react-icons/bs'
import {FiSettings} from 'react-icons/fi'
import { Footer } from '../../components/Footer'
import { useNavigate } from 'react-router'

export function Step2() {
  const navigate = useNavigate()
  function handleNextStep() {
    navigate("/step3")
  }
  function handlePreviousStep() {
    navigate("/")
  }
  return (
    <C.Container>
      <Section>
        <Guide/>
        <SectionTitle title='Our services' description='Please select which service you are interested in.'/>
        <C.Services>
        <Area name="services" icon={BiTerminal} title='Development'/>
        <Area name="services" icon={MdOutlineWeb} title='Web Design'/>
        <Area name="services" icon={BsMegaphone} title='Marketing'/>
        <Area name="services" icon={FiSettings} title='Other'/>
        </C.Services>
      </Section>
      <C.Buttons>
        <ButtonOutline onClick={handlePreviousStep} title='Previous Step'/>
        <Button onClick={handleNextStep} title='Next Step'/>
      </C.Buttons>
      <Footer/>
    </C.Container>
  )
}