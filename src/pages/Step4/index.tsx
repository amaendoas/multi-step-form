import * as C from './styles'
import { Section } from '../../components/Section'
import { SectionTitle } from '../../components/SectionTitle'
import { Guide } from '../../components/Guide'
import { Area } from '../../components/Area'
import { Button } from '../../components/Button'
import { ButtonOutline } from '../../components/ButtonOutline'
import { MdOutlineRadioButtonUnchecked} from "react-icons/md"
import { Footer } from '../../components/Footer'
import { useNavigate } from 'react-router'

export function Step4() {
  const navigate = useNavigate()
  function handleNextStep() {
    navigate("/submitted")
  }
  function handlePreviousStep() {
    navigate("/step3")
  }
  return (
    <C.Container>
      <Section>
        <Guide/>
        <SectionTitle title='What’s your project budget?' description='Please select the project budget range you have in mind.'/>
        <C.Budgets>
          <Area name="budget" icon={MdOutlineRadioButtonUnchecked} title="less than $5.000"/>
          <Area name="budget" icon={MdOutlineRadioButtonUnchecked} title="$5.000-$10.000"/>
          <Area name="budget" icon={MdOutlineRadioButtonUnchecked} title="$10.000-$30.000"/>
          <Area name="budget" icon={MdOutlineRadioButtonUnchecked} title="$30.000 +"/>
        </C.Budgets>
      </Section>
      <C.Buttons>
        <ButtonOutline onClick={handlePreviousStep} title='Previous Step'/>
        <Button onClick={handleNextStep} title='Next Step'/>
      </C.Buttons>
      <Footer/>
    </C.Container>
  )
}