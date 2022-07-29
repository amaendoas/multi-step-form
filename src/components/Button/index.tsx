import { Container } from "./styles";

type Props = {
  title: string,
  onClick:()=>void
}

export function Button({ title, onClick}: Props) {
  return(
    <Container onClick={onClick}>
      {title}
    </Container>
  )
}