import * as C from "./styles"
import { Link } from "react-router-dom"
import { AiOutlineArrowLeft } from "react-icons/ai"

type Props = {
  title: string,
  path: string
}

export function Back({title, path}: Props) {
  return (
    <C.Container>
      <Link to={path}>
      <AiOutlineArrowLeft/>
      {title}
      </Link>
    </C.Container>
  )
}