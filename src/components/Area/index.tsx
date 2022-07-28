import { Container } from "./styles";

type Props = {
  icon: any,
  title: string
}

export function Area({icon: Icon, title}: Props){
  return (
    <Container>
      <span>
      <Icon size={35}/>
      </span>
      {title}
    </Container>
  )
}