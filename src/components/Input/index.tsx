import { ChangeEvent } from "react";
import { Container } from "./styles";

type Props = {
  icon: any,
  type: any,
  placeholder: string,
  value: string | number,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export function Input({icon: Icon, type, placeholder, value, onChange}: Props) {
  return (
    <Container>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange}/>
      {Icon && <Icon size={20}/>}
    </Container>
  )
}