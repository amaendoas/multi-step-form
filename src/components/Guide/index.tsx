import * as C from "./styles";

import { Link } from "react-router-dom";
import { useForm } from "../../contexts/FormContext";


export function Guide() {

  return (
    <C.Container>
      <C.Steps>
          <C.Step className="step1">1</C.Step>
        <C.Bar className="step2"/>
          <C.Step className="step2">2</C.Step>
        <C.Bar className="step3"/>
          <C.Step className="step3">3</C.Step>
        <C.Bar className="step4"/>
          <C.Step className="step4">4</C.Step>
        </C.Steps>
        <C.Divider/>
    </C.Container>
  )
}