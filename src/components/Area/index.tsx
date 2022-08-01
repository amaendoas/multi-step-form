import { Container } from "./styles";

type Props = {
  icon: any,
  title: any,
  name: string
}

export function Area({icon: Icon, title, name}: Props){
  return (
    <Container>
      <input type="radio" id={title} name={name} value={title}/>
      <span>
      <Icon/>
      </span>
      <label htmlFor={title}>
        <p>
        {title}
        </p>
      </label>
    </Container>
  )
}