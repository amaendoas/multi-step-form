import { Container, Buttons } from './styles'
import { Button } from '../../components/Button'
import { ButtonOutline } from '../../components/ButtonOutline'
import { Section } from '../../components/Section'

export function Step1() {
  return (
    <Container>
      <Section>
        
      </Section>
      <Buttons>
        <ButtonOutline title='Previous Step'/>
        <Button title='Next Step'/>
      </Buttons>
    </Container>
  )
}