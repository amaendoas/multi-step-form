import { Container, Buttons } from './styles'
import { Button } from '../../components/Button'
import { ButtonOutline } from '../../components/ButtonOutline'
import { Guide } from '../../components/Guide'
import { Section } from '../../components/Section'
import { SectionTitle } from '../../components/SectionTitle'
import { Area } from '../../components/Area'
import { BiTerminal } from 'react-icons/bi'

export function Step2() {
  return (
    <Container>
      <Section>
        <Guide/>
        <SectionTitle title='Our services' description='Please select which service you are interested in.'/>
      <Area icon={BiTerminal} title='Development'/>
      </Section>
      <Buttons>
        <ButtonOutline title='Previous Step'/>
        <Button title='Next Step'/>
      </Buttons>
    </Container>
  )
}