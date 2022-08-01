import { Container, Steps, Step, Bar, Divider } from "./styles";

import { useNavigate } from "react-router";

export function Guide() {
  const navigate = useNavigate()

  
  return (
    <Container>
      <Steps>
      <Step className="step1">1</Step>
      <Bar className="step2"/>
      <Step className="step2">2</Step>
      <Bar className="step3"/>
      <Step className="step3">3</Step>
      <Bar className="step4"/>
      <Step className="step4">4</Step>
      </Steps>
      <Divider/>
    </Container>
  )
}