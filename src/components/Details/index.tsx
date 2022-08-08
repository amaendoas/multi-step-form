import * as C from "./styles"
import { Link } from "react-router-dom"


type Props = {
  title: string,
  button: string,
  description: string | null,
  path: string,
  children: any
}

export function Details({title, button, description, path, children}: Props) {
  return (
    <C.Container>
      <C.Content>
        <h2>{title}</h2>
        <p>{description}</p>
        <footer>{children}</footer>
      </C.Content>
      <Link to={path}>
      {button}
      </Link>
    </C.Container>
  )
}