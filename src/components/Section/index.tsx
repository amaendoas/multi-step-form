import { ReactNode } from "react";
import * as C from "./styles";
import { Guide } from "../Guide"
import { Back } from "../Back";

type Props = {
  children: ReactNode,
  buttons: ReactNode
}

export function Section({children, buttons}: Props) {
  return (
    <C.Container>
      <Back
      title="back"
      path="/"
      />
      <C.Page>
        <C.Title>
          <h1>Get a project quote</h1>
          <p>Please fill the form below to receive a quote for your project. Feel free to add as much detail as needed.</p>
        </C.Title>
        <C.Step>
          <Guide/>
          <C.Content>
            {children}
          </C.Content>
        </C.Step>
        <C.Footer>
          {buttons}
        </C.Footer>
      </C.Page>
    </C.Container>
  )
}