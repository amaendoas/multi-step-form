import * as C from "./styles"
import { Link } from "react-router-dom"

type Props = {
  title: string,
  button: string,
  description: string | null,
  footer: any,
  path: any
}

export function Details({title, button, description, footer, path}: Props) {
  return (
    <C.Container>
      <C.Content>
        <h3>{title}</h3>
        <p>{description}</p>
        <footer>{footer}</footer>
      </C.Content>
      <Link to={path}>
      {button}
      </Link>
    </C.Container>
  )
}