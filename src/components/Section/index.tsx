import { ReactNode } from "react";
import * as C from "./styles";
import { Guide } from "../Guide"
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from "react-icons/ai"

type Props = {
  children: ReactNode
}

export function Section({children}: Props) {
  return (
    <C.Container>
        <span>
        <Link to="/">
        <AiOutlineArrowLeft/>
          back to home</Link>
        </span>
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
      </C.Page>
    </C.Container>
  )
}