import { Component, ReactNode } from "react";
import { Container } from "./styles";

type Props = {
  icon: any,
  type: any,
  placeholder: string
}

export function Input({icon: Icon, type, placeholder}: Props) {
  return (
    <Container>
      <input type={type} placeholder={placeholder}/>
      {Icon && <Icon size={20}/>}
    </Container>
  )
}