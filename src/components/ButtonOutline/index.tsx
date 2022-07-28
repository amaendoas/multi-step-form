import { Container } from "./styles";

type Props = {
  title: string
}

export function ButtonOutline({ title }: Props) {
  return(
    <Container>
      {title}
    </Container>
  )
}