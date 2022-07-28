import { Container, Buttons } from './styles'
import { Button } from '../../components/Button'
import { ButtonOutline } from '../../components/ButtonOutline'
import { FiUser, FiMail, FiPhone } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Guide } from '../../components/Guide'
import { SectionTitle } from '../../components/SectionTitle'

export function Step1() {
  return (
    <Container>
      <Section>
        <Guide/>
        <SectionTitle title='Contact details' description='Tell us who are you and how to find you.'/>
        <Input icon={FiUser} type="text" placeholder="Name"/>
        <Input icon={FiMail} type="email" placeholder="Email address"/>
        <Input icon={FiPhone} type="email" placeholder="Phone number"/>
      </Section>
      <Buttons>
        <ButtonOutline title='Previous Step'/>
        <Button title='Next Step'/>
      </Buttons>
    </Container>
  )
}