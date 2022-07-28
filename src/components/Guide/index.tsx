import { Container, Steps, Step, Bar, Divider } from "./styles";

export function Guide() {
  return (
    <Container>
      <Steps>
      <Step>1</Step>
      <Bar/>
      <Step>2</Step>
      <Bar/>
      <Step>3</Step>
      <Bar/>
      <Step>4</Step>
      </Steps>
      <Divider/>
    </Container>
  )
}