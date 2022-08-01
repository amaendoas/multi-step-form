import { ChangeEvent } from "react";
import { Container } from "./styles";

type Props = {
  placeholder: string,
  value: string,
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export function TextArea({ placeholder, value, onChange}: Props) {
  return (
    <Container>
      <textarea placeholder={placeholder} value={value} onChange={onChange}/>
    </Container>
  )
}