import { ReactNode } from "react";
import { Button } from "../Button";
import { ButtonOutline } from "../ButtonOutline";
import { Container, Title, Step, Page } from "./styles";

type Props = {
  children: ReactNode
}

export function Section({children}: Props) {
  return (
    <Container>
      <Page>
        <Title>
          <h1>Get a project quote</h1>
          <p>Please fill the form below to receive a quote for your project. Feel free to add as much detail as needed.</p>
        </Title>
        <Step>
          {children}
        </Step>
      </Page>
    </Container>
  )
}