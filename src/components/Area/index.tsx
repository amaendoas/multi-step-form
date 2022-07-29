import { Container } from "./styles";

type Props = {
  icon: any,
  title: any,
  name: string
}

export function Area({icon: Icon, title, name}: Props){
  return (
    <Container>
      <label htmlFor={title}>
        <span>
        <Icon/>
        </span>
        <input type="radio" id={title} name={name} value={title}/>
        <p>
        {title}
        </p>
      </label>
    </Container>
  )
}