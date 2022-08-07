import * as C from "./styles";

import { Link } from "react-router-dom";
import { useForm } from "../../contexts/FormContext";


export function Guide() {

  return (
    <C.Container>
      <C.Steps>
        <Link to="/step1">
          <C.Step className="step1">1</C.Step>
        </Link>
        <C.Bar className="step2"/>
        <Link to="/step2">
          <C.Step className="step2">2</C.Step>
        </Link>
        <C.Bar className="step3"/>
        <Link to="/step3">
          <C.Step className="step3">3</C.Step>
        </Link>
        <C.Bar className="step4"/>
        <Link to="/step4">
          <C.Step className="step4">4</C.Step>
        </Link>
        </C.Steps>
        <C.Divider/>
    </C.Container>
  )
}