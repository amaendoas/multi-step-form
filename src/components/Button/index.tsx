import { Container } from "./styles";

type Props = {
  title: string
}

export function Button({ title }: Props) {
  return(
    <Container>
      {title}
    </Container>
  )
}