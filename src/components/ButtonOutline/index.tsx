import { Container } from "./styles";

type Props = {
  title: string,
  onClick:()=>void
}

export function ButtonOutline({ title, onClick }: Props) {
  return(
    <Container onClick={onClick}>
      {title}
    </Container>
  )
}