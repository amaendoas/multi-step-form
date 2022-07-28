import { Container } from "./style";

type Props = {
  title: string,
  description: string
}

export function SectionTitle({title, description}: Props){
  return (
    <Container>
      <h2>{title}</h2>
      <p>{description}</p>
    </Container>
  )
}